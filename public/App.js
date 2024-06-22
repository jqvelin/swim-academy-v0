import './scss/style.scss'
import {useState, useEffect} from 'react'
import database from './database'
import {vh, vw, vmin, vmax} from './utilities'

export default function Page(){
  const [scrolled, setScrolled] = useState(false)
  const [viewMap, setViewMap] = useState(false)
  const [isSigningUp, setIsSigningUp] = useState(false)

  useEffect(() => {
    let ignore = false
    if (ignore) return
    let index = 1
    for (let btn of document.querySelectorAll('button')){
      btn.tabIndex = index
      index++
    }
    return () => ignore = true
  }, [])

  for (let hyper of document.querySelectorAll('a')){
    hyper.onclick = function(){
      if (hyper.closest('section')){
        window.scrollBy(0, hyper.closest('section').getBoundingClientRect().bottom + vh(10))
      } else {
        window.scrollBy(0, document.querySelector('section').getBoundingClientRect().height - window.scrollY + vh(20))
      }
    }
  }

  for (let img of document.querySelectorAll('img')){
    img.onmousedown = function(e){
      e.preventDefault()
    }
  }
  
  if (document.querySelector('.map-open-btn')){
    document.querySelector('.map-open-btn').onclick = function(){
      setViewMap(true)
    }
  }
  
  function headerScrollController(){
    
    if (window.scrollY >= 30 && !scrolled){
      setScrolled(true)
    } else if (window.scrollY<= 30) {
      setScrolled(false)
    }
  }

  function startParallax(){
    if (window.innerHeight - document.querySelector('.container').getBoundingClientRect().top < 0 || document.querySelector('.container').getBoundingClientRect().bottom < 0) return
    const parallax = document.querySelectorAll(".container")
    const speed = 0.5;
    let elBackgrounPos = "50% " + (window.scrollY * speed) + "px";
    for (let container of parallax){
      container.style.backgroundPosition = elBackgrounPos
    }
  }
  
  window.addEventListener('scroll', headerScrollController)
  //window.addEventListener('scroll', startParallax)
  
    
  return <div className="main-layout">
  <Header setIsSigningUp={setIsSigningUp} scrolled={scrolled}/>
  {database.map(data => {
    return <InfoSection key={data.id} data={data}/>
  })}
  <Message/>
  <Footer/>
  {viewMap ? <Map setViewMap={setViewMap}/> : null}
  {isSigningUp ? <SignUp setIsSigningUp={setIsSigningUp}/> : null}
  </div>
}

function Header({scrolled, setIsSigningUp}){

  return <>
  
  <div className={scrolled ? 'header-container blurry-container' : 'header-container'}></div>
    <header className={scrolled ? 'scrolled' : ''}>
    <button onClick={() => window.scrollTo(0, 0)} id="main-page-btn">
          <div className="logo">
        <img className="icon" src='swim_academy_logo.png' alt='Swim Academy Logo'/>
        <div>
          <div>SWIM</div>
          <div>ACADEMY</div>
        </div>
        </div>
      </button>

      <a onClick={() => setIsSigningUp(true)} className="sign-up"><button tabIndex="2">Записаться на тренировку</button></a>
    </header>
  </>
}

function InfoSection({data}){
  return <section>
    <img src={data.src} alt={data.alt} className="stockpic"/>
    <div className={"section-text " + data.position}>
      <div className="section-text__title">{data.title}</div>
      <div className="section-text__secondary">{data.secondary}</div>
      <div className="section-text__description">{data.description}</div>
    </div>
  </section>
}

function Footer(){
  return <footer>
    <p>&copy; Swim Academy, {new Date().getFullYear()}. Все права сохранены.</p>
    <div className="social-grid">
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-tiktok"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-vk"></i>
    </div>
  </footer>
}

function Message(){
  return <div className="container">
      <h1>Школа Swim Academy - это выбор будущих чемпионов!</h1>
      <a><button>Присоединяйтесь к нам!</button></a>
      <h2>Первое занятие - бесплатно<span className="asterisk second">*</span></h2>
  </div>
}

function Map({setViewMap}){
  return <div className="cover" onClick={() => setViewMap(false)}>
    <div className="loader"></div>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A15b15df22de7216dd6af2ea839f89d4e350981a8a987d19b36b1e4930577e518&amp;source=constructor" width={vw(90)} height={vh(60)} frameborder="0"></iframe>
    <div className="close-btn">&#10006;</div>
  </div>
}

function SignUp({setIsSigningUp}){
  return <div onClick={(e) => {
    if (!e.target.classList.contains('cover')) return
    setIsSigningUp(false)
  }
  } className="cover">
    <div className="loader"></div>
    <div className="sign-up-container">
      <div className="sign-up-container__title">Оставьте заявку</div>
      <form>
        <input type="text" placeholder="Введите имя"/>
        <input type="text" placeholder="Введите фамилию"/>
        <input type="number" placeholder="Введите номер телефона (начиная с 8)"/>
      </form>
    </div>
    <div onClick={() => setIsSigningUp(false)} className="close-btn">&#10006;</div>
  </div>
}
