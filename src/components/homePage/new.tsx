import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Api from "@/app/api";
import apiImage from "@/app/apiImage";

function newItem() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`${Api()}/news/?page=1&pageSize=8`)
            .then(response => response.json())
            .then(news => setNews(news));
    }, []);
    return (
        <>
            {
                news.map((newItem) => (
                    <div className="new__item w-1/5 m-2 border">
                        <div className="new-item__image">
                            <img
                                className="w-full"
                                src={apiImage() + newItem.image}
                                alt="anh tin tuc"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="new-item__info mx-auto p-3">
                            <h1 className="new-item__info__name text-xl font-medium my-2">{newItem.title}</h1>
                            <div className="new-item__shortContent flex justify-between">
                                <p className="new-item__description">
                                    {newItem.description}
                                </p>
                            </div>
                            <div className="new-item-button my-2">
                                <Link
                                    href={{
                                        pathname: '/new-detail',
                                        query: { id: `${newItem.id}` },
                                    }}
                                    className="hover:text-blue-300 font-bold"
                                >Xem chi tiết</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default function New() {
    return (
        <div className="new w-4/5 m-auto my-10">
            <div className="new__title text-3xl font-bold my-10"><h1>TIN TỨC</h1></div>
            <div className="new__container flex flex-wrap justify-center">
                {newItem()}
            </div>
        </div>
    );
}