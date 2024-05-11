'use client'
import Link from "next/link"
import Image from "next/image"
import React, { use, useEffect, useState } from 'react';
import Api from "@/app/api";

function Scrumb() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> /
                <Link className="hover:text-blue-300" href={"/user-info/"}> User - Infor</Link> /
                <span className="font-bold"> Address</span>
            </p>
        </div>
    )
}

export function UserMenu() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    if (user != null)
        return (
            <div className="user-infor__menu border rounded-md min-w-52">
                <div>
                    <Link
                        className="about font-bold hover:text-blue-300 hover:bg-gray-100 block px-5 py-2 border-b"
                        href={"/user-info"}
                    >
                        About
                    </Link>

                    <Link
                        className="address font-bold hover:text-blue-300 hover:bg-gray-100 block px-5 py-2 border-b"
                        href={"/user-info/order-address"}
                    >
                        Địa chỉ đặt hàng
                    </Link>

                    <Link
                        className="order font-bold hover:text-blue-300 hover:bg-gray-100 block px-5 py-2 border-b"
                        href={"/user-info/order"}
                    >
                        Đơn hàng
                    </Link>
                </div>
            </div >
        )
    else
        return null;
}

function deleteAddress({ id }) {
    fetch(`${Api()}/address/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

function AddressList({ address }) {
    return (
        <>
            {address?.map((address) => {
                return (
                    <div className="address__list border rounded-md min-w-52 flex w-full">
                        <div className="address__list__infor p-2">
                            <div className="address__list__infor-customer">
                                Tên khách hàng: <span className="font-bold">{address?.nameCustomer}</span>
                            </div>
                            <div className="address__list__infor-phone">
                                Số điện thoại: <span className="font-bold">{address?.phone}</span>
                            </div>
                            <div className="address__list__infor-address">
                                Địa chỉ nhận hàng: <span className="font-bold">{address?.address}</span>
                            </div>
                        </div>
                        <div className="address__list__action flex h-16 ml-4">
                            <Link className="mt-5 hover:bg-green-500 rounded-md" href={"/user-info/order-address/edit/?id=" + address?.id}>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </Link>
                            <a className="mt-5 hover:bg-red-500 rounded-md" href={"/user-info/order-address"}
                                onClick={() => deleteAddress({ id: address?.id })}
                            >
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </a>
                        </div>
                    </div >
                )
            })}
        </>
    )
}

export default function UserAdress() {
    if (!localStorage.getItem('user')) {
        window.location.href = "/";
    }
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    const [address, setAddress] = useState([]);
    useEffect(() => {
        fetch(`${Api()}/addresses/user/${user?.id}`)
            .then(response => response.json())
            .then(data => {
                setAddress(data);
            });
    }, [])


    return (
        <>
            {Scrumb()}
            <div className="user-info__container flex w-4/5 m-auto  px-5 py-2 border-b min-h-96">
                {UserMenu()}
                <div className="user-info__content w-4/5 mx-auto">
                    <h1 className="user-info__title font-bold text-3xl text-center block w-full my-5">
                        DANH SÁCH ĐỊA CHỈ HÀNG ĐÃ ĐẶT (<Link className="hover:text-blue-300 text-blue-500" href={"/user-info/order-address/create"}>Thêm mới</Link>)
                    </h1>
                    {AddressList({ address })}
                </div>
            </div>
        </>

    )
}