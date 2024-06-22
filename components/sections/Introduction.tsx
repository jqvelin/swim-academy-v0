import Image from "next/image";
import Link from "next/link";

export default function Introduction(){
    return <section className="relative w-full h-[700px] md:h-[1000px] bg-transparent border-[#00aeef] text-white border-2 rounded-xl pt-[5rem] overflow-hidden">
    <div className="z-10 absolute right-2 text-end w-[70%] md:w-[60%]">
      <h1 className="animate-slide font-bold text-xl md:text-3xl lg:text-5xl mb-8">Самая <span className="[text-shadow:_0_0_6px_#FFFFFF]">прогрессивная</span> школа плавания<br/>№1 в Москве</h1>
      <p className="opacity-0 animate-slide delay-500 font-bold leading-6 md:leading-9 mb-4">Наши ученики показывают самые высокие результаты в личном зачёте и международных соревнованиях.<br/>~30% наших выпускников ежегодно призываются в сборную</p>
      <Link href='/report' className="bg-blue-500 px-4 py-2 rounded-full">Смотреть отчёт за 2023г.</Link>
    </div>
    <Image src='/swimmer.png' height={0} width={0} sizes="100vw" className="z-0 absolute w-full -bottom-[5%]" alt="Swimmer" />
  </section>
}