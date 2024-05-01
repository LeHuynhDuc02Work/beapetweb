"use client";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Api from "@/app/api";
import Image from "next/image";

function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> / New-Detail
            </p>
        </div>
    )
}

function newItem({ id }) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(`${Api()}/news/?page=1&pageSize=8`)
            .then(response => response.json())
            .then(news => setNews(news));
    }, [id]);

    return (
        <>
            {
                news.map((newItem) => {
                    if (newItem.id != id) {
                        return (
                            <div className="new__item w-1/5 m-2 border">
                                <div className="new-item__image">
                                    <Image
                                        className="w-full"
                                        src={'/images/' + newItem.image}
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
                                        <a
                                            // href={{
                                            //     pathname: '/new-detail',
                                            //     query: { id: `${newItem.id}` },
                                            // }}
                                            href={`/new-detail?id=${newItem.id}`}
                                            className="hover:text-blue-300 font-bold"
                                        >Xem chi tiết</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </>
    );
}

export default function NewDetail() {
    const [id, setId] = useState(null);
    const [newData, setNewData] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const id = window.location.search.replace('?', '').split('&')[0].split('=')[1];
            setId(id);
        }
    }, [id]);
    useEffect(() => {
        if (id != null) {
            fetch(`${Api()}/new/${id}`)
                .then(response => response.json())
                .then(data => setNewData(data));
        }
    }, [id])
    return (
        <div className="new-detail">
            <Scrumb />

            <div className="new-detail__container w-4/5 m-auto">
                <h1 className="new-detail__title text-center text-2xl font-bold m-3">{newData?.title}</h1>
                <div className="new-detail__content">
                    <div className="new-detail__image w-2/3 mx-auto my-5">
                        <Image
                            className="w-full  rounded-md"
                            src={'/images/' + newData?.image}
                            width={200}
                            height={200}
                            alt="anh tin tuc"
                        />
                    </div>
                    <div className="new-detail__description my-5 m-auto text-justify">
                        <p>
                            {newData?.detail}
                        </p>
                    </div>
                </div>
            </div>
            <div className="new w-4/5 m-auto my-10">
                <div className="new__title text-3xl font-bold my-10"><h1>XEM THÊM TIN TỨC</h1></div>
                <div className="new__container flex flex-wrap justify-center">
                    {newItem({ id })}
                </div>
            </div>
        </div>
    )
}

