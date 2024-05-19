"use client"
import Link from "next/link";
import Api from "@/app/api";
import React, { useEffect, useState } from 'react';
import apiImage from "@/app/apiImage";
function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/admin">Dashboard</Link> / <span className="font-bold">News</span>
            </p>
        </div>
    )
}

function NewsItem({ news }) {
    if (news.length > 0)
        return (
            <>
                {news.map((item, index) => {
                    return (
                        <tr className="admin-new__item border-b">
                            <td className="font-bold">{index + 1}</td>
                            <td className="admin-new__item__image py-2">
                                <img
                                    className="m-auto h-24 rounded-sm"
                                    src={apiImage() + item.image}
                                    height={100}
                                    width={100}
                                    alt="anh san pham"
                                />
                            </td>
                            <td className="admin-new__item__info">
                                <h1 className="admin-new__item__info__name">{item.title}</h1>
                            </td>
                            <td className="admin-new__item__description">
                                <h1 className="admin-new__item__info__name">{item.description}</h1>
                            </td>
                            <td className="admin-new__item__action flex justify-center">
                                <Link className="mt-4 hover:bg-green-500 rounded-md" href={"/admin/news/edit/?id=" + item.id}>
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </Link>
                                <button
                                    className="mt-4 hover:bg-red-500 rounded-md"
                                    onClick={() => {
                                        fetch(`${Api()}/new/delete/${item.id}`, {
                                            method: 'DELETE',
                                        })
                                        window.location.reload()
                                    }}
                                >
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </button>
                            </td>
                        </tr >
                    )
                })}
            </>
        );
    else
        return (<></>);
}

export default function News() {
    if (localStorage.getItem('user') == null) {
        window.location.href = '/login-admin';
    }

    const [news, setNews] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (search != '') {
            fetch(`${Api()}/news/?pageSize=50&search=${search}`)
                .then((res) => res.json())
                .then((data) => setNews(data));
        }
        else {
            fetch(`${Api()}/news/?pageSize=50`)
                .then((res) => res.json())
                .then((data) => setNews(data));
        }

    }, [search]);

    return (
        <div className="admin-new">
            {Scrumb()}
            <div className="new-new__container my-2 flex justify-between">
                <Link className="text-center font-bold hover:text-blue-300" href="/admin/news/create">Thêm tin tức mới(+)</Link>
                <div className="search">
                    <input className="search__input border p-2 rounded-md" value={search} type="text" placeholder="Tìm kiếm ..."
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                </div>
            </div>
            <div className="admin-new__container border">
                <table className="text-center">
                    <thead>
                        <tr className="border-b">
                            <th className="px-16 py-5">#</th>
                            <th className="px-16 py-5">Hình ảnh</th>
                            <th className="px-16 py-5">Tiêu đề</th>
                            <th className="px-16 py-5">Mô tả</th>
                            <th className="px-16 py-5">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {NewsItem({ news })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}