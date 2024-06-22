'use client'
import Modal from "@/components/ui/Modal";
import { vw } from "@/lib/calculateViewport";

export default function MapIntersectionPage(){
    return <Modal>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A15b15df22de7216dd6af2ea839f89d4e350981a8a987d19b36b1e4930577e518&amp;source=constructor" width={vw(90)} height="600"></iframe> 
    </Modal>
}