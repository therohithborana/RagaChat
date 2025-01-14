

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const topics = [
    {
        text: "Beatboxing",
        img: "https://i.pinimg.com/736x/6d/31/ff/6d31ff2eb34f1d33b93f7ab05b33b9a2.jpg",
        desc: "Explore the art of vocal percussion and share your skills!",
        slug: "Beatbox"
    },
    {
        text: "Instrument Playing",
        img: "https://i.pinimg.com/736x/ce/82/77/ce8277ed5ee1283d95dee4734537656d.jpg",
        desc: "Talk about your favorite instruments and how to play them.",
        slug: "instrument"
    },
    {
        text: "Singing",
        img: "https://i.pinimg.com/736x/de/64/01/de6401a2fcfcc74bd93c3a2c103bd7c7.jpg",
        desc: "Dive into singing techniques, vocal tips, and favorite songs.",
        slug: "singing"
    },
    {
        text: "Music Production",
        img: "https://i.pinimg.com/736x/a2/c7/e1/a2c7e13f3d585d3ebbbee14ad5548db1.jpg",
        desc: "Discuss creating music, mixing, mastering, and more.",
        slug: "prod"
    },
];

const Forums = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 p-8">
            <div className="text-center text-white">
                <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
                    🎤 Discussion Forums 🎶
                </h1>
                <p className="text-lg mb-12">Join the conversation in these awesome music-related topics!</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {topics.map((topic) => (
                    <div
                        key={topic.text}
                        className="bg-white rounded-2xl shadow-xl w-72 p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                    >
                        <div className="text-center mb-6">
                            <img
                                src={topic.img}
                                alt={topic.text}
                                width={100}
                                height={100}
                                className="mx-auto rounded-full border-4 border-indigo-600 mb-4"
                            />
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{topic.text}</h2>
                            <p className="text-gray-600 mb-6">{topic.desc}</p>

                            <Link href={`/forums/forum/${topic.slug}`}>
                                <Button className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300">
                                    Discuss Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Forums;
