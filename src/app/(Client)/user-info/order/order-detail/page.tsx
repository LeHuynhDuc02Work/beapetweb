'use client'
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import Api from "@/app/api";
import apiImage from "@/app/apiImage";
function Scrumb() {

    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> /
                <Link className="hover:text-blue-300" href="/user-info"> User-info</Link> /
                <Link className="hover:text-blue-300" href="/user-info/order"> Order</Link> /
                <span className="font-bold"> Order-detail</span>
            </p>
        </div>
    )
}

function OrderProductDetail({ products }) {
    if (products.length != 0) {
        let total = 0;
        products.forEach(product => {
            total += product?.salePrice * product?.orderQuantity;
        })
        return (
            <>
                <div className="checkout-product_container p-4">
                    <div className="checkout-product_list">
                        {products.map((product) => {
                            return (
                                <div className="checkout-product_item  border-b flex p-2">
                                    <div className="checkout-product_item__image  mr-2">
                                        <img
                                            className="rounded-md h-20"
                                            src={apiImage() + product?.image}
                                            alt="product"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <div className="checkout-product_item__info w-full">
                                        <h1 className="checkout-product_item__name font-bold">{product?.name}</h1>
                                        <div className="checkout-product_item__price flex justify-between mt-1 w-full">
                                            <h2 className="block">Số lượng: <span className="font-bold">{product?.orderQuantity}</span></h2>
                                            <h2 className="block">Tổng tiền: <span className="font-bold">
                                                {(product?.salePrice * product?.orderQuantity).toLocaleString('en-US')}đ
                                            </span></h2>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="checkout-product_total my-2">
                        <div>
                            <span className="checkout-product_total__title font-bold">Tổng tiền: </span>
                            <span className="checkout-product_total__price font-bold text-red-500 text-2xl">
                                {(total).toLocaleString('en-US')}đ
                            </span>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    else
        return null
}


export default function OrderDetail() {
    const [orderId, setOrderId] = useState(null);
    const [products, setProducts] = useState([]);
    const [address, setAddress] = useState(null);
    const [order, setOrder] = useState(null);
    const [payment, setPayment] = useState(null);
    useEffect(() => {
        if (typeof window !== 'undefined' && orderId == null) {
            const _id = window.location.search.replace('?', '').split('&')[0].split('=')[1];
            setOrderId(_id);
        }
    }, []);

    useEffect(() => {
        fetch(`${Api()}/order/${orderId}`)
            .then(response => response.json())
            .then(data => {
                setOrder(data);
            })
    }, [orderId]);

    useEffect(() => {
        if (order?.addressId != null) {
            fetch(`${Api()}/addressv/${order?.addressId}`)
                .then(response => response.json())
                .then(data => {
                    setAddress(data);
                })
        }
    }, [order]);

    useEffect(() => {
        if (orderId != null) {
            fetch(`${Api()}/order-detai/products/order/${orderId}`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                })
        }
    }, [orderId]);

    useEffect(() => {
        if (order?.paymentMethodId != null) {
            fetch(`${Api()}/payment/${order?.paymentMethodId}`)
                .then(response => response.json())
                .then(data => {
                    setPayment(data);
                })
        }
    }, [order]);
    console.log(products)
    return (
        <div className="order-detail">
            {Scrumb()}
            <div className="order-detail-container w-4/5 mx-auto mb-20 flex">
                <div className="order-detail-info w-1/2">
                    <div className="order-detail-info-content border p-4">
                        <h1 className="order-detail-address__title font-bold text-3xl">
                            THÔNG TIN ĐƠN HÀNG
                        </h1>

                        <div className="order-detail-address__content mt-4">
                            <div className="order-detail-address__content-info">
                                <p className="my-1">
                                    Tên khách hàng: <span className="font-bold">{address?.nameCustomer}</span>
                                </p>
                                <p className="my-1">
                                    Địa chỉ nhận hàng: <span className="font-bold"> {address?.address}</span>
                                </p>
                                <p className="my-1">
                                    Số điện thoại: <span className="font-bold">{address?.phone}</span>
                                </p>
                            </div>
                        </div>

                        <div className="order-detail-payment my-1">
                            <h1 className="order-detail-payment__title">Trạng thái đơn hàng: <span className="font-bold">{order?.status}</span></h1>

                        </div>


                        <div className="order-detail-payment my-1">
                            <h1 className="order-detail-payment__title">Phương thức thanh toán: <span className="font-bold">{payment?.name}</span></h1>

                        </div>

                    </div >
                </div>
                <div className="order-detail-list-product w-1/2">
                    {OrderProductDetail({ products })}
                </div>
            </div>
        </div>
    )
}