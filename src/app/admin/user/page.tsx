"use client"
import Link from "next/link";
import Api from "@/app/api";
import React, { useEffect, useState } from 'react';
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
                                <td className="admin-user__item__status">{"Đang hoạt động"}</td>

                                <td className="admin-user__item__action flex justify-center">
                                    <Link className="mt-4 hover:bg-green-500 rounded-md" href={"/admin/user"}>
                                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    </Link>
                                </td>
                            </tr >
                        </>

                    )
                })}
                {/* {users.map((user, index) => {
                    return (
                        <tr className="admin-user__item border-b">
                            <td className="font-bold">{index + 1}</td>
                            <td className="admin-user__item__username">
                                <h1 className="admin-user__item__info__name">{user.userName}</h1>
                            </td>
                            <td className="admin-user__item__email">
                                <h1 className="admin-user__item__email-content">{user.email}</h1>
                            </td>
                            <td className="admin-user__item__status">{"Đang hoạt động"}</td>

                            <td className="admin-user__item__action flex justify-center">
                                <Link className="mt-4 hover:bg-green-500 rounded-md" href={"/admin/user"}>
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </Link>
                            </td>
                        </tr >
                    )
                })} */}
            </>
        );
    else
        return (<></>);
}

export default function Product() {
    if (localStorage.getItem('user') == null) {
        window.location.href = '/login-admin';
    }
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

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
    console.log(users)
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