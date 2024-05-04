"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Api from "@/app/api";

function HeaderBottomItem() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${Api()}/categories`)
            .then(response => response.json())
            .then(_categories => setCategories(_categories));
    }, []);
    return (
        <>
            {
                categories.map((category) => {
                    if (category.quantity > 0)
                        return (
                            <a
                                href={`/category-product?id=${category.id}`}
                            >
                                <li className="menu-item py-3 px-3 hover:text-black">
                                    {category.name}
                                </li>
                            </a >
                        )
                    else
                        return null;
                })
            }
        </>
    );
}

function HeaderBottomHome() {
    return (

        <Link href="/" className="">
            <li className="menu-item py-3 px-3 hover:text-black">
                Trang chủ
            </li>
        </Link >
    );
}

export default function HeaderBottom() {
    return (
        <div className="header-bottom bg-blue-300  text-white">
            <div className="container w-4/5 m-auto">
                <div className="header-bottom__menu">
                    <ul className="menu flex font-bold">
                        {HeaderBottomHome()}
                        {HeaderBottomItem()}
                    </ul>
                </div>
            </div>
        </div>
    );
}