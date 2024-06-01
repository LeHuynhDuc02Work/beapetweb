"use client"
import Link from "next/link";
import Api from "@/app/api";
import React, { useEffect, useState } from 'react';
import apiImage from "@/app/apiImage";
function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/admin">Dashboard</Link> / <span className="font-bold">Order</span>
            </p>
        </div>
    )
}

function FormatDate(date) {
    const dateTimeString = date;
    const dateTime = new Date(dateTimeString);

    const formattedDate = dateTime.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const formattedTime = dateTime.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    const formattedDateTime = `${formattedDate}`;
    return formattedDateTime;
}

function OrderItem({ orders }) {
    console.log(orders)
    if (orders.length > 0)
        return (
            <>
                {orders.map((order, index) => {
                    return (
                        <tr className="admin-order__item border-b">
                            <td className="font-bold">{index + 1}</td>
                            <td className="admin-order__item__code">
                                <Link className="hover:text-blue-300 font-bold" href={"/admin/order/detail/?id=" + order.id}>
                                    <h1 className="admin-order__item__code">#BEAPET{order.id}</h1>
                                </Link>
                            </td>
                            <td className="admin-order__item__date-order">
                                <h1 className="admin-order__item__info__date-order">{FormatDate(order.createdOn)}</h1>
                            </td>
                            <td className="admin-order__item__address">
                                <h1 className="admin-order__item__info__customer">
                                    {order?.address?.nameCustomer}
                                </h1>
                                <h1 className="admin-order__item__info__phone font-bold">
                                    {order?.address?.phone}
                                </h1>
                            </td>
                            <td className="admin-order__item__total">
                                <h1 className="admin-order__item__info__total">{(order.totalAmount).toLocaleString('en-US')}đ</h1>
                            </td>
                            <td className="admin-order__item__status">
                                <h1 className="admin-order__item__info__status">{(order.status)}</h1>
                            </td>
                            <td className="admin-order__item__action">
                                <Link className="mt-4 text-blue-500 hover:text-blue-300 rounded-md" href={"/admin/order/detail/?id=" + order.id}>
                                    Xem chi tiết
                                </Link>
                            </td>
                        </tr >
                    )
                })}
            </>
        );
    else
        return (<></>);
}

export default function Order() {
    if (localStorage.getItem('user') == null) {
        window.location.href = '/login-admin';
    }

    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("Tất cả");

    useEffect(() => {
        fetch(`${Api()}/orders/?search=${status}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [status]);

    return (
        <div className="admin-order">
            {Scrumb()}
            <div className="new-order__container my-2">
                <div className="search">
                    <select className="search__input border p-2 rounded-md"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}>
                        <option value={"Tất cả"}>Tất cả</option>
                        <option value={"Đang chuẩn bị hàng"}>Đang chuẩn bị hàng</option>
                        <option value={"Đang giao hàng"}>Đang giao hàng</option>
                        <option value={"Đã giao thành công"}>Đã giao thành công</option>
                        <option value={"Đã hủy đơn"}>Đã hủy đơn</option>
                    </select>
                </div>
            </div>
            <div className="admin-order__container border">
                <table className="text-center">
                    <thead>
                        <tr className="border-b">
                            <th className="px-10 py-5">#</th>
                            <th className="px-16 py-5">Mã đơn hàng</th>
                            <th className="px-16 py-5">Ngày đặt</th>
                            <th className="px-16 py-5">Khách hàng</th>
                            <th className="px-16 py-5">Tổng tiền</th>
                            <th className="px-16 py-5">Tình trạng</th>
                            <th className="px-16 py-5">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {OrderItem({ orders })}
                    </tbody>
                </table>

            </div>
        </div>
    );
}