import { faInstagram, faTiktok, faTwitter, faVk } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return <footer className="text-white flex items-center justify-between w-full h-[4.5rem]">
    <p>&copy; Swim Academy, {new Date().getFullYear()}. Все права сохранены.</p>
    <div className="grid grid-cols-2 gap-2">
        <FontAwesomeIcon icon={faTwitter} className="w-6 md:w-8 lg:w-10"/>
        <FontAwesomeIcon icon={faTiktok} className="w-6 md:w-8 lg:w-10"/>
        <FontAwesomeIcon icon={faInstagram} className="w-6 md:w-8 lg:w-10"/>
        <FontAwesomeIcon icon={faVk} className="w-6 md:w-8 lg:w-10"/>
    </div>
  </footer>
}