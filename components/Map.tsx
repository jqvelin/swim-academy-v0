export default function Map(){
    return <section className={`relative flex flex-col items-center text-center w-full h-[700px] md:h-[1000px] bg-transparent border-[#00aeef] text-white border-2 rounded-xl pt-[5rem] overflow-hidden`}>
    <div className="w-[70%] flex flex-col gap-8 justify-between items-center">
      <h1 className="font-bold text-xl md:text-3xl lg:text-5xl mb-8">Бассейны Swim Academy на карте</h1>
      <ul className="text-start list-disc font-bold text-xl md:text-2xl lg:text-3xl">
        <li>Бакунинская ул., 13, стр. 1, Москва</li>
        <li>Островная ул., 1, стр. 1, Москва</li>
        <li>ул. Плющиха, 57, стр. 1, Москва</li>
      </ul>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A15b15df22de7216dd6af2ea839f89d4e350981a8a987d19b36b1e4930577e518&amp;source=constructor" className="w-[90vw] h-screen"></iframe> 
    </div>
    </section>
}