'use client'
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";

export default function Modal({children}: {children: ReactNode}){
    const router = useRouter()
    const dialogRef = useRef<null | HTMLDivElement>(null)
    function handleClickModal(e: MouseEvent){
        const target = e.target as HTMLElement
        if (target !== dialogRef.current) router.back()
    }
    useEffect(() => {
        document.addEventListener('click', handleClickModal)
        return () => document.removeEventListener('click', handleClickModal)
    })
    return <dialog className="fixed z-50 top-0 left-0 bg-transparent w-full h-full [backdrop-filter:blur(5px)] [-webkit-backdrop-filter:blur(5px)] flex items-center justify-center overflow-hidden">
        <div ref={dialogRef}>
            {children}
        </div>
    </dialog>
}