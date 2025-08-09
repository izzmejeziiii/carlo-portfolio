'use client';
import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    Transition
} from '@headlessui/react';
import ArtBody from './art/art-body';
import clsx from 'clsx';
import { Fragment } from 'react';
import ProjectsContentBody from './projects/content-body';
import BrandDesignContentBody from './brand-design/content-body';

export default function Tabs() {
    return (
        <TabGroup
            as="div"
            className="w-full max-w-7xl flex flex-col gap-16 px-4 xl:px-0"
        >
            <TabList className="flex gap-8 lg:gap-12 w-full">
                <Tab
                    className={({ selected }) =>
                        clsx(
                            'cursor-pointer border-b-4 text-white uppercase font-bold text-sm focus:outline-none pb-2',
                            selected
                                ? 'border-[#F41A68]'
                                : 'hover:border-[#f41a68]/20 border-transparent'
                        )
                    }
                >
                    Art
                </Tab>
                <Tab
                    className={({ selected }) =>
                        clsx(
                            'cursor-pointer border-b-4 text-white uppercase font-bold text-sm focus:outline-none pb-2',
                            selected
                                ? 'border-[#F41A68]'
                                : 'hover:border-[#f41a68]/20 border-transparent'
                        )
                    }
                >
                    Projects
                </Tab>
                <Tab
                    className={({ selected }) =>
                        clsx(
                            'cursor-pointer border-b-4 text-white uppercase font-bold text-sm focus:outline-none pb-2',
                            selected
                                ? 'border-[#F41A68]'
                                : 'hover:border-[#f41a68]/20 border-transparent'
                        )
                    }
                >
                    Brand Design
                </Tab>
            </TabList>
            <TabPanels className="relative overflow-hidden">
                <TabPanel>
                    <Transition
                        as={Fragment}
                        appear
                        show={true}
                        enter="transform transition ease-in duration-500"
                        enterFrom="opacity-0 -translate-x-24"
                        enterTo="opacity-100 translate-x-0"
                        leave="transform transition ease-out duration-300"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-24"
                    >
                        <div className="w-full">
                            <ArtBody />
                        </div>
                    </Transition>
                </TabPanel>

                <TabPanel>
                    <Transition
                        as={Fragment}
                        appear
                        show={true}
                        enter="transform transition ease-in duration-500"
                        enterFrom="opacity-0 -translate-x-24"
                        enterTo="opacity-100 translate-x-0"
                        leave="transform transition ease-out duration-300"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-24"
                    >
                        <div className="w-full">
                            <ProjectsContentBody />
                        </div>
                    </Transition>
                </TabPanel>

                <TabPanel>
                    <Transition
                        as={Fragment}
                        appear
                        show={true}
                        enter="transform transition ease-in duration-500"
                        enterFrom="opacity-0 -translate-x-24"
                        enterTo="opacity-100 translate-x-0"
                        leave="transform transition ease-out duration-300"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-24"
                    >
                        <div className="w-full">
                            <BrandDesignContentBody />
                        </div>
                    </Transition>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    );
}
