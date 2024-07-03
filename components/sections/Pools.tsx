'use client'
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Pools(){
    const {ref, inView} = useInView({
        threshold: 0.1
    })
    return <section className={`flex flex-col items-center justify-between text-center w-full h-[700px] md:h-[1000px] bg-transparent border-[#00aeef] text-white border-2 rounded-xl pt-[5rem] overflow-hidden`} ref={ref}>
    <div className="w-[70%] gap-4">
      <h1 className={`font-bold text-xl md:text-3xl lg:text-5xl opacity-0 ${inView && 'animate-slide'} mb-8`}>Более <span className="[text-shadow:_0_0_6px_#FFFFFF]">30</span> бассейнов<br/>по городу и области</h1>
      <p className={`opacity-0 delay-500 ${inView && 'animate-slide'} font-bold leading-6 md:leading-9 mb-4`}>Выберите наиболее доступный для Вас комплекс из существующих, либо посмотрите, какие будут открыты в будущем</p>
      <Link href='/map' scroll={false} className="bg-blue-500 px-4 py-2 rounded-full">Увидеть на картах</Link>
    </div>
    <Image src='/swimming_pool.jpg' height={0} width={0} sizes="100vw" className="z-0 w-full h-[40%] md:h-[50%] lg:h-[60%] object-cover" alt="Swimmer" />
  </section>
}