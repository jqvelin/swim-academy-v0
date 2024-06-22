'use client'

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

export default function Coach(){
    const {ref, inView} = useInView({
        threshold: 0.1
    })
    return <section className="relative w-full h-[700px] md:h-[1000px] bg-transparent border-[#00aeef] text-white border-2 rounded-xl pt-[5rem] overflow-hidden" ref={ref}>
    <div className="z-10 absolute right-2 text-end w-[70%] md:w-[60%]">
      <h1 className={`animate-slide font-bold text-xl md:text-3xl lg:text-5xl mb-8 opacity-0 ${inView && 'animate-slide'}`}>Персональное <span className="[text-shadow:_0_0_6px_#FFFFFF]">обучение</span> с легендарным тренером<br/>Юрием Зарожным</h1>
      <p className={`font-bold leading-6 md:leading-9 mb-4 opacity-0 delay-500 ${inView && 'animate-slide'}`}>Личные рекомендации помогут
      быстрее проработать ошибки и улучшить навыки</p>
      <Link href='/coaches' className="bg-blue-500 px-4 py-2 rounded-full">К списку тренеров</Link>
    </div>
    <Image src='/trainer.png' height={0} width={0} sizes="100vw" className="z-0 absolute w-[100%] md:w-[90%] -bottom-[5%]" alt="Swimmer" />
  </section>
}