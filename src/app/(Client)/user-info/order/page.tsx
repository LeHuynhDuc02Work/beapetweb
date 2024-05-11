'use client'
import Link from "next/link"
import Api from "@/app/api";
import React, { useEffect, useState } from "react";

function Scrumb() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> /
                <Link className="hover:text-blue-300" href={"/user-info/?id=" + user?.id}> User - Info</Link> /
                <span className="font-bold"> Order</span>
            </p>
        </div>
    )
}

export function UserMenu() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);

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
}

function OrderList({ orders }) {
    return (
        <>
            {
                orders.map((order, index) => {
                    return (
                        <div className="user-info__order border rounded-md min-w-52 p-2">
                            <span>
                                <span className="font-bold">#{index + 1}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                Mã đơn hàng: <Link className="hover:text-blue-300 font-bold text-blue-500" href={"/user-info/order/order-detail/?id=" + order?.id}>#BEAPET{order?.id}</Link>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                Tổng tiền: <span className="font-bold">{order?.totalAmount.toLocaleString('en-US')}đ</span>
                            </span>
                        </div >
                    )
                })
            }
        </>
    )
}


export default function UserOrder() {
    if (!localStorage.getItem('user')) {
        window.location.href = "/";
    }
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`${Api()}/orders/user/${user?.id}`)
            .then(response => response.json())
            .then(data => {
                setOrders(data);
            });
    }, [])
    return (
        <>
            {Scrumb()}
            <div className="user-info__container flex justify-between w-4/5 m-auto  px-5 py-2 border-b min-h-96">
                {UserMenu()}
                <div className="user-info__content w-4/5">
                    <h1 className="user-info__title font-bold text-3xl text-center block w-full my-5">
                        DANH SÁCH ĐƠN HÀNG ĐÃ ĐẶT
                    </h1>
                    {OrderList({ orders })}
                </div>
            </div>
        </>

    )
}