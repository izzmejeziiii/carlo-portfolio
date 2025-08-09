import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className="w-full min-h-[85vh] max-w-7xl flex items-center justify-between p-4 xl:p-0">
            <div className="w-full lg:max-w-[500px]">
                <div className="w-full">
                    <span className="text-2xl font-bold text-[#F41A68]">
                        Hello, I&apos;m
                    </span>
                    <h1 className="text-5xl text-white font-bold uppercase">
                        Carlo Encomio
                    </h1>
                </div>
                <p className="text-white text-xl mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    in mauris vitae arcu tempor maximus vitae sed lacus. Quisque
                    eget velit consequat, sollicitudin risus .
                </p>
                <hr className="m-0 mt-8 h-1 rounded-full w-6 bg-[#F41A68] border-none" />
            </div>
            <Image
                src="/images/hero-image.jpg"
                alt="hero-image"
                className="max-w-[663px] max-h-[663px] h-full w-full rounded-[2rem] hidden lg:block"
                width={663}
                height={663}
            />
        </div>
    );
}
