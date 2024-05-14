'use client'
import Link from "next/link"
import React, { useEffect, useState } from 'react';
export default function OrderCompleted() {
    const [id, setId] = useState(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const _id = window.location.search.replace('?', '').split('&')[0].split('=')[1];
            setId(_id);
        }
    }, [id]);
    return (
        <div className="order-completed min-h-screen">
            <h1 className="text-3xl font-bold text-green-500 text-center mx-auto mt-10">Đơn hàng đã đặt được đặt thành công!!!</h1>
            <div className="text-center mx-auto my-4 ">
                <Link
                    className="text-center mx-auto text-xl text-blue-500 font-bold hover:text-blue-300 underline"
                    href={`user-info/order/order-detail?id=${id}`}>
                    Xem chi tiết đơn hàng đơn hàng
                </Link>
            </div>
            <img
                className="mx-auto"
                src="/images/thanks.jpg"
                alt="order-completed"
                width={600}
                height={600}
            >

            </img>
        </div >
    )
}