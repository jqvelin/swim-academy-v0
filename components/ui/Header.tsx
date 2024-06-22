'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header(){
    const [isHeaderStuckToTop, setIsHeaderStuckToTop] = useState(window.scrollY > 30)
    useEffect(() => {
        document.addEventListener('scroll', trackScrolling)
        return () => {
            document.removeEventListener('scroll', trackScrolling)
        }
    })

    function trackScrolling(){
        if (window.scrollY > 30) setIsHeaderStuckToTop(true)
        else if (window.scrollY <= 30) {
            setIsHeaderStuckToTop(false)
        } 
    }
    return <>
    <div className={`duration-500 z-40 fixed left-0 ${isHeaderStuckToTop ? 'top-0' : '-top-full'} w-full h-[4.5rem] [backdrop-filter:blur(5px)] [-webkit-backdrop-filter:blur(5px)]`}></div>
    <header className={`text-white duration-500 fixed z-50 ${isHeaderStuckToTop ? 'top-[0.5rem]' : 'top-[5rem]'} left-0 w-full pl-[6%] pr-[6%] flex items-center justify-between`}>
        <Link href='/' className="flex items-center">
            <Image src='/logo.png' width={0} height={0} sizes="100vw" className="w-14 md:w-16 aspect-square -ml-3" alt="Logo"/>
            <h1 className="font-bold text-sm md:text-lg uppercase">swim<br/>academy</h1>
        </Link>
        <Link href='/sign-up' className="bg-blue-500 px-4 py-2 rounded-full transition-colors hover:bg-blue-600">{window.innerWidth < 720 ? 'Тренироваться' : 'Записаться на тренировку'}</Link>
    </header>
    </>
}