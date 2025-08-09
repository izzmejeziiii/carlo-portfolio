'use client';
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild
} from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import ArtCard from './art-card';

const artCards = [
    {
        title: 'Art Design 1',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: '/images/art-design-one.jpg'
    },
    {
        title: 'Art Design 2',
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        imageUrl: '/images/art-design-two.jpg'
    },
    {
        title: 'Art Design 3',
        description:
            'It has survived not only five centuries, but also the leap into electronic typesetting.',
        imageUrl: '/images/art-design-three.jpg'
    },
    {
        title: 'Art Design 4',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        imageUrl: '/images/art-design-four.jpg'
    },
    {
        title: 'Art Design 5',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        imageUrl: '/images/art-design-five.jpg'
    },
    {
        title: 'Art Design 6',
        description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        imageUrl: '/images/art-design-six.jpg'
    },
    {
        title: 'Art Design 7',
        description:
            'It has survived not only five centuries, but also the leap into electronic typesetting.',
        imageUrl: '/images/art-design-seven.jpg'
    },
    {
        title: 'Art Design 8',
        description:
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
        imageUrl: '/images/art-design-eight.jpg'
    }
];

type ArtCardType = {
    title: string;
    description: string;
    imageUrl: string;
};

export default function ArtBody() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<ArtCardType | null>(null);

    const handleCardClick = (card: ArtCardType) => {
        setSelectedCard(card);
        setIsOpen(true);
    };

    return (
        <div className="w-full max-w-7xl grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8 relative">
            {artCards.map((card, index) => (
                <div key={index}>
                    <button
                        className="w-full h-[400px] rounded-xl overflow-hidden relative cursor-pointer"
                        onClick={() => handleCardClick(card)}
                    >
                        <Image
                            src={card.imageUrl}
                            alt={card.title}
                            className="w-full h-full object-cover"
                            width={296}
                            height={400}
                        />
                    </button>
                </div>
            ))}
            {selectedCard && (
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-50"
                        onClose={setIsOpen}
                    >
                        <div
                            className="fixed inset-0 bg-black/70"
                            aria-hidden="true"
                        />

                        <div className="min-h-screen w-full flex items-center justify-center p-4">
                            <TransitionChild
                                as={Fragment}
                                enter="transform transition ease-out duration-500"
                                enterFrom="opacity-0 translate-y-24"
                                enterTo="opacity-100 translate-y-0"
                                leave="transform transition ease-in duration-300"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-24"
                            >
                                <DialogPanel className="w-fit transition-all transform">
                                    <ArtCard
                                        title={selectedCard.title}
                                        description={selectedCard.description}
                                        imageUrl={selectedCard.imageUrl}
                                    />
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </Dialog>
                </Transition>
            )}
        </div>
    );
}
