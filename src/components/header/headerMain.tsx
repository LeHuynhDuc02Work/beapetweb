'use client'
import Link from "next/link";
import logo from "@/logo/Beapet.png";
import Api from "@/app/api";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function handlUser() {
    if (localStorage.getItem('user')) {
        const userJSON = localStorage.getItem('user');
        const user = JSON.parse(userJSON);
        return (
            <div className="header-main__action__item__text text-sm">
                <Link className="hover:text-blue-300" href={"/user-info"}>{user?.userName}</Link><br></br>
                <a onClick={() => localStorage.removeItem('user')} className="hover:text-blue-300" href="/">Logout</a>
            </div>
        )
    } else
        return (
            <div className="header-main__action__item__text text-sm">
                <Link className="hover:text-blue-300" href="/login">Đăng nhập</Link><br></br>
                <Link className="hover:text-blue-300" href="/register">Đăng ký</Link>
            </div>
        )
}

function handlCart() {
    const [products, setProducts] = useState([]);
    if (localStorage.getItem('user')) {
        const userJSON = localStorage.getItem('user');
        const user = JSON.parse(userJSON);
        useEffect(() => {
            fetch(`${Api()}/shop-cart/user/${user?.id}`)
                .then(response => response.json())
                .then(_products => setProducts(_products));
        }, []);

        return (
            <span
                className="shop-cart_quantity  absolute font-bold text-white bg-red-400 text-center h-5 w-5 rounded-xl top-0 right-0 text-sm">
                {products.length}
            </span>
        )
    }
    else {
        return (null)
    }

}

export default function HeaderMain() {
    return (
        <div className="header-main flex justify-between py-2 w-4/5 m-auto">
            <div className="header-main__logo flex justify-items-center items-center">
                <Link href="/">
                    <Image className="logo-image"
                        src={logo}
                        width={100}
                        height={100}
                        alt="Picture of the author" />
                </Link>
            </div>
            <div className="search-form flex justify-items-center items-center w-1/3">
                <form className="relative w-full" role="search" method="get" action="/search">
                    <input type="text" name="keyWord" className="search-form__input border p-2 w-full" placeholder="Nhập từ khoá tìm kiếm..." />
                    <button type="submit" value="Tìm kiếm" aria-label="Tìm kiếm">
                        <svg className="header-top__icon absolute top-0  bg-blue-300 p-2 w-20 border rounded-e-xl" width="41px" height="42px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg>
                    </button>
                </form>
            </div>
            <div className="header-main__action flex">
                <div className="header-main__action__item flex justify-items-center items-center mx-3">
                    <div className="header-main__action__item__icon">
                        <svg className="text-blue-300" width="40px" height="40px" viewBox="0 0 24 24" fill="#93c5fd" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#93c5fd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    {handlUser()}
                </div>
                <div className="header-main__action__item  flex justify-items-center items-center mx-3">
                    <div className="header-main__action__item__icon relative">
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#93c5fd" stroke-width="1.5"></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#93c5fd" stroke-width="1.5"></path> <path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#93c5fd" stroke-width="1.5" stroke-linecap="round"></path> </g>
                        </svg>
                        {handlCart()}
                    </div>
                    <div className="header-main__action__item__text">
                        <button className="hover:text-blue-300"
                            onClick={() => {
                                if (!localStorage.getItem('user')) {
                                    window.location.href = "/login";
                                }
                                else
                                    window.location.href = "/shop-cart";
                            }}
                        >Giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}