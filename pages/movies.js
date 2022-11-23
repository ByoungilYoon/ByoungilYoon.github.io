import React from "react";
import { connectToDatabase } from "../lib/mongodb";
import Image from "next/image";

export default function Movies({ movies }) {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            {movies.map((movie, key) => (
                                <div key={key} className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <Image src="/720.png" alt="cover-img" width={720} height={400} />
                                    {/* <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"> */}
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{movie.subject}</h1>
                                        <p className="leading-relaxed mb-3">
                                            <span className="bg-gray-200 px-2 py-1 rounded-md">{movie.category}</span>
                                        </p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export const getServerSideProps = async () => {
    const { db } = await connectToDatabase();

    const movies = await db.collection("yoon").find({}).sort({ metacritic: -1 }).limit(20).toArray();

    return {
        props: {
            movies: JSON.parse(JSON.stringify(movies)),
        },
    };
};
