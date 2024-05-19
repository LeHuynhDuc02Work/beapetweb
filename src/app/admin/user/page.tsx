"use client"
import Link from "next/link";
import Api from "@/app/api";
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/admin">Dashboard</Link> / <span className="font-bold">User</span>
            </p>
        </div>
    )
}

function UserItem({ users }) {

    if (users.length > 0)
        return (
            <>
                {users.map((user, index) => {
                    if (user.status == 'Đã khóa') {
                        return (
                            <>
                                <tr className="admin-user__item border-b">
                                    <td className="font-bold">{index + 1}</td>
                                    <td className="admin-user__item__username">
                                        <h1 className="admin-user__item__info__name">{user.userName}</h1>
                                    </td>
                                    <td className="admin-user__item__email">
                                        <h1 className="admin-user__item__email-content">{user.email}</h1>
                                    </td>
                                    <td className="admin-user__item__status">{user.status}</td>

                                    <td className="admin-user__item__action flex justify-center">
                                        <button
                                            className="hover:bg-blue-100 text-whited py-2 px-4 rounded"
                                            onClick={() => {
                                                fetch(`${Api()}/user/change-status/${user.id}`)
                                                window.location.reload();
                                            }}
                                        >
                                            <svg fill="#ff0000" width="40px" height="40px" viewBox="-7.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>lock</title> <path d="M14.625 15.156h2.094c0.281 0 0.5 0.25 0.5 0.531v11c0 0.281-0.219 0.5-0.5 0.5h-16.219c-0.281 0-0.5-0.219-0.5-0.5v-11c0-0.281 0.219-0.531 0.5-0.531h2.031v-5.125c0-2.875 1.844-5.25 4.688-5.25h2.688c2.875 0 4.719 2.375 4.719 5.25v5.125zM5.188 15.156h6.813v-4.875c0-1.594-1.313-2.938-2.938-2.938h-0.969c-1.594 0-2.906 1.344-2.906 2.938v4.875zM7.156 24h2.906l-0.719-3.156c0.5-0.25 0.844-0.781 0.844-1.375 0-0.906-0.719-1.594-1.594-1.594s-1.563 0.688-1.563 1.594c0 0.594 0.344 1.125 0.844 1.375z"></path> </g></svg>
                                        </button>
                                    </td>
                                </tr >
                            </>
                        )
                    }
                    else {
                        return (
                            <>
                                <tr className="admin-user__item border-b">
                                    <td className="font-bold">{index + 1}</td>
                                    <td className="admin-user__item__username">
                                        <h1 className="admin-user__item__info__name">{user.userName}</h1>
                                    </td>
                                    <td className="admin-user__item__email">
                                        <h1 className="admin-user__item__email-content">{user.email}</h1>
                                    </td>
                                    <td className="admin-user__item__status">{user.status}</td>

                                    <td className="admin-user__item__action flex justify-center">
                                        <button
                                            className="hover:bg-red-100 text-whited py-2 px-4 rounded"
                                            onClick={() => {
                                                fetch(`${Api()}/user/change-status/${user.id}`)
                                                window.location.reload();
                                            }}
                                        >
                                            <svg fill="#9694ff" width="40px" height="40px" viewBox="-7.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>unlock</title> <path d="M14.625 15.156h2.094c0.281 0 0.5 0.25 0.5 0.531v11c0 0.281-0.219 0.5-0.5 0.5h-16.219c-0.281 0-0.5-0.219-0.5-0.5v-11c0-0.281 0.219-0.531 0.5-0.531h11.5v-4.875c0-1.594-1.313-2.938-2.938-2.938h-0.969c-1.594 0-2.906 1.344-2.906 2.938v1.844h-2.656v-2.094c0-2.875 1.844-5.25 4.688-5.25h2.688c2.875 0 4.719 2.375 4.719 5.25v5.125zM7.125 24h2.938l-0.719-3.156c0.5-0.25 0.844-0.781 0.844-1.375 0-0.906-0.719-1.594-1.594-1.594s-1.563 0.688-1.563 1.594c0 0.594 0.344 1.125 0.844 1.375z"></path> </g></svg>
                                        </button>
                                    </td>
                                </tr >
                            </>
                        )
                    }
                })}
                <ToastContainer />
            </>
        );
    else
        return (<></>);
}

export default function Product() {
    if (localStorage.getItem('user') == null) {
        window.location.href = '/login-admin';
    }
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (search != '') {
            fetch(`${Api()}/users?search=${search}`)
                .then((res) => res.json())
                .then((data) => setUsers(data));
        }
        else {
            fetch(`${Api()}/users`)
                .then((res) => res.json())
                .then((data) => setUsers(data));
        }

    }, [search]);
    return (
        <div className="admin-product">
            {Scrumb()}
            <div className="new-product__container my-2 flex justify-between">
                <div className="search">
                    <input className="search__input border p-2 rounded-md" value={search} type="text" placeholder="Tìm kiếm ..."
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }} />
                </div>
            </div>
            <div className="admin-product__container border">
                <table className="text-center">
                    <thead>
                        <tr className="border-b">
                            <th className="px-16 py-5">#</th>
                            <th className="px-16 py-5">Tên tài khoản</th>
                            <th className="px-16 py-5">Email</th>
                            <th className="px-16 py-5">Trạng thái</th>
                            <th className="px-16 py-5">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {UserItem({ users })}
                    </tbody>
                </table>

            </div>
        </div>
    );
}