import Image from 'next/image';

interface ArtCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export default function ArtCard({
    title,
    description,
    imageUrl
}: ArtCardProps) {
    return (
        <div className="md:w-[680px] md:h-[816px] w-full h-full rounded-xl overflow-hidden relative">
            <Image
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
                width={680}
                height={816}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white space-y-2 z-20">
                <span className="font-extrabold text-2xl">{title}</span>
                <p className="font-extralight">{description}</p>
            </div>
            <div className="bg-gradient-to-t from-black via-black/20 to-transparent absolute inset-0 z-10"></div>
        </div>
    );
}
