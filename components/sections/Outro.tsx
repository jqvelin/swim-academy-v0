import Link from "next/link";

export default function Outro(){
    return <section className="pt-2 pb-2 text-white text-center bg-[url('/swimming-sign.png')] bg-repeat bg-[size:10%] [background-attachment:fixed] w-full">
        <h3 className="font-bold text-xl mb-16">Школа Swim Academy - это выбор будущих чемпионов!</h3>
        <Link href='/sign-up' className="bg-blue-500 px-4 py-2 rounded-full">Присоединяйтесь к нам!</Link>
        <h3 className="font-bold text-xl mt-16">Первое занятие - бесплатно</h3>
    </section>
}