import { FaBehanceSquare, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

export default function FooterLinks() {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-4 text-white mt-[230px]">
            <span className="text-[#F41A68] font-extrabold text-xl">
                Reach out!
            </span>
            <p className="text-2xl">carloencomio@gmail.com</p>
            <div className="flex gap-6">
                <FaBehanceSquare className="w-7 h-7" />
                <FaLinkedin className="w-7 h-7" />
                <RiInstagramFill className="w-7 h-7" />
            </div>
        </div>
    );
}
