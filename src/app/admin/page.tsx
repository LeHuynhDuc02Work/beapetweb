"use client"
import Link from "next/link";
import Api from "@/app/api";
import React, { useEffect, useState } from 'react';
import apiImage from "@/app/apiImage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {
    if (!localStorage.getItem('user')) {
        window.location.href = "/login-admin";
    }
    else {
        const userJSON = localStorage.getItem('user');
        const user = JSON.parse(userJSON);
        if (user?.position != 'admin') {
            window.location.href = "/login-admin";
        }
    }
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState('Đã giao thành công');
    const [search, setSearch] = useState('Sản phẩm bán chạy(10)');

    useEffect(() => {
        fetch(`${Api()}/order-statiscal/?status=${status}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [status]);

    useEffect(() => {
        fetch(`${Api()}/products-analys/?search=${search}&pageSize=10`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [search]);

    return (
        <div className="admin mb-4">
            <div className="title">
                <h1 className="text-3xl font-bold text-center py-5 bg-blue-50">THỐNG KÊ</h1>
            </div>
            <div className="content">
                <div className="statiscal-container">
                    <div className="filter">
                        <select className="filter__input border p-2 rounded-md"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                            <option value="Đang chuẩn bị hàng">Đang chuẩn bị hàng</option>
                            <option value="Đang giao hàng">Đang giao hàng</option>
                            <option value="Đã giao thành công">Đã giao thành công</option>
                            <option value="Đã hủy đơn">Đã hủy đơn</option>
                        </select>
                    </div>
                    <table className="text-center border">
                        <thead>
                            <tr>
                                <th className="px-10 py-2 border">#</th>
                                <th className="px-10 py-2 border">Tháng</th>
                                <th className="px-10 py-2 border">Số lượng đơn</th>
                                <th className="px-10 py-2 border">Tổng số tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr>
                                    <td className="px-10 py-2 border">{index + 1}</td>
                                    <td className="px-10 py-2 border">{order.month}</td>
                                    <td className="px-10 py-2 border">{order.totalOrder}</td>
                                    <td className="px-10 py-2 border">{(order.sellPrice).toLocaleString('en-US')}đ</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="statiscal-container mt-5">
                    <div className="filter">
                        <select className="filter__input border p-2 rounded-md"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}>
                            <option value="Sản phẩm bán chạy(10)">Sản phẩm bán chạy(10)</option>
                            <option value="Sản phẩm bán chậm(10)">Sản phẩm bán chậm(10)</option>
                        </select>
                    </div>
                    <table className="text-center border">
                        <thead>
                            <tr>
                                <th className="px-10 py-2 border">#</th>
                                <th className="px-10 py-2 border">Hình ảnh</th>
                                <th className="px-10 py-2 border">Mã sản phẩm</th>
                                <th className="px-10 py-2 border">Tên sản phẩm</th>
                                <th className="px-10 py-2 border">Giá bán</th>
                                <th className="px-10 py-2 border">Số lượng đã bán</th>
                                <th className="px-10 py-2 border">Số lượng còn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr>
                                    <td className="px-10 py-2 border">{index + 1}</td>
                                    <td className="px-10 py-2 border">
                                        <img src={apiImage() + product.image} alt="anh san pham" width={50} height={50} />
                                    </td>
                                    <td className="px-10 py-2 border font-bold">#SP{product.id}</td>
                                    <td className="px-10 py-2 border">{product.name}</td>
                                    <td className="px-10 py-2 border">{(product.salePrice).toLocaleString('en-US')}đ</td>
                                    <td className="px-10 py-2 border">{product.sellQuantity}</td>
                                    <td className="px-10 py-2 border">{product.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}