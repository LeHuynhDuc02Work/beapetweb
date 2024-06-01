"use client"
import Link from "next/link";
import Api from "@/app/api";
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import apiImage from "@/app/apiImage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/admin">Dashboard</Link> /
                <Link className="hover:text-blue-300" href="/admin/order">Order</Link> /
                <span className="font-bold"> Order-detail</span>
            </p>
        </div>
    )
}

function downloadPdf() {
    try {
        // Lấy phần tử HTML mà bạn muốn chuyển đổi sang PDF
        const element = document.getElementById('content-order');

        if (element) {
            element.classList.remove('hidden')
            // Sử dụng html2canvas để chụp ảnh màn hình của phần tử HTML
            html2canvas(element).then((canvas) => {
                // Tạo một PDF mới bằng jsPDF
                const doc = new jsPDF('p', 'mm', 'a4');

                // Thêm canvas vào PDF
                const imgData = canvas.toDataURL('image/png');
                doc.addImage(imgData, 'PNG', 0, 0);

                // Mở PDF trong cửa sổ mới
                const pdfUrl = doc.output('bloburl');
                window.open(pdfUrl);
            });
            element.classList.add('hidden')
        }
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
};

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


export default function OrderEdit() {
    if (localStorage.getItem('user') == null) {
        window.location.href = '/login-admin';
    }
    const [id, setId] = useState(null);
    const [status, setStatus] = useState('');
    const [order, setOrder] = useState(null);
    const [products, setProducts] = useState([]);
    const [address, setAddress] = useState(null);
    const [payment, setPayment] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const _id = window.location.search.replace('?', '').split('&')[0].split('=')[1];
            setId(_id);
        }
    }, [id]);

    useEffect(() => {
        if (id != null) {
            fetch(`${Api()}/order/${id}`)
                .then(response => response.json())
                .then(data => {
                    setOrder(data);
                    setStatus(data.status);
                });
        }
    }, [id]);

    useEffect(() => {
        if (id != null) {
            fetch(`${Api()}/order-detai/products/order/${id}`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                });
        }
    }, [id]);

    useEffect(() => {
        if (order != null) {
            fetch(`${Api()}/addressv/${order.addressId}`)
                .then(response => response.json())
                .then(data => {
                    setAddress(data);
                });
        }
    }, [order]);


    useEffect(() => {
        if (order != null) {
            fetch(`${Api()}/payment/${order.paymentMethodId}`)
                .then(response => response.json())
                .then(data => {
                    setPayment(data);
                });
        }
    }, [order]);

    if (products != null)
        return (
            <div className="admin-order">
                {Scrumb()}
                <div className="admin-order__container border flex">
                    <div className="admin-order__info border w-2/5">
                        <div className="py-5 text-center font-bold text-xl border-b">
                            Thông tin giao hàng
                        </div>
                        <div className="content p-3">
                            <div className="py-1">
                                <span className="font-bold">
                                    Tên khách hàng:&nbsp;&nbsp;
                                </span>
                                <span>
                                    {address?.nameCustomer}
                                </span>
                            </div>
                            <div className="py-1">
                                <span className="font-bold">
                                    Số điện thoại:&nbsp;&nbsp;
                                </span>
                                <span>
                                    {address?.phone}
                                </span>
                            </div>
                            <div className="py-1">
                                <span className="font-bold">
                                    Địa chỉ nhận hàng:&nbsp;&nbsp;
                                </span>
                                <span>
                                    {address?.address}
                                </span>
                            </div>
                            <div className="py-1">
                                <span className="font-bold">
                                    Phương thức thanh toán:&nbsp;&nbsp;
                                </span>
                                <span>
                                    {payment?.name}
                                </span>
                            </div>
                            <div className="py-1">
                                <span className="font-bold">
                                    Ngày đặt hàng:&nbsp;&nbsp;
                                </span>
                                <span>
                                    {FormatDate(order?.createdOn)}
                                </span>
                            </div>
                            <div className="py-2">
                                <span className="font-bold">
                                    Trạng thái:&nbsp;&nbsp;
                                </span>
                                <span>
                                    <select className="border rounded-md p-1"
                                        value={status}
                                        onChange={(e) => {
                                            setStatus(e.target.value)
                                            const response = fetch(`${Api()}/order/update/${id}`, {
                                                method: 'PUT',
                                                headers: {
                                                    'Content-Type': 'application/json',
                                                    'Accept': 'application/json'
                                                },
                                                body: JSON.stringify({
                                                    status: e.target.value
                                                })
                                            })
                                            if (response != null) {
                                                const showToastMessage = () => {
                                                    toast.success("Đã thay đổi trạng thái đơn hàng", {
                                                        position: toast?.POSITION?.TOP_RIGHT,
                                                        autoClose: 2000
                                                    });
                                                };
                                                showToastMessage();
                                            }
                                            else {
                                                const showToastMessage = () => {
                                                    toast.error("Có lỗi xảy ra", {
                                                        position: toast?.POSITION?.TOP_RIGHT,
                                                    });
                                                };
                                                showToastMessage();
                                            }


                                        }}>
                                        <option value="Đang chuẩn bị hàng">Đang chuẩn bị hàng</option>
                                        <option value="Đang giao hàng">Đang giao hàng</option>
                                        <option value="Đã giao thành công">Đã giao thành công</option>
                                        <option value="Đã hủy đơn">Đã hủy đơn</option>
                                    </select>
                                </span>
                            </div>
                            <div>
                                <button className="border font-bold p-2 rounded-md bg-blue-500 text-white hover:bg-blue-400" onClick={downloadPdf}>
                                    Xuất hóa đơn
                                </button>
                            </div>
                            <ToastContainer />
                        </div>
                    </div>
                    <div className="admin-order__product w-2/3">
                        <div className="py-5 text-center font-bold text-xl">
                            SẢN PHẨM(<span className="text-red-500">{order?.totalAmount.toLocaleString('en-US')}đ</span>)
                        </div>

                        <div className="admin-order__product__item flex">
                            <table className="w-full">
                                <thead>
                                    <tr className="border">
                                        <th className="px-10 py-5">#</th>
                                        <th className="px-10 py-5">Hình ảnh</th>
                                        <th className="px-10 py-5">Tên sản phẩm</th>
                                        <th className="px-10 py-5">Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => {
                                        return (
                                            <tr className="text-center border">
                                                <td className="px-10 py-5">{index + 1}</td>
                                                <td className="px-10 py-5">
                                                    <img className="w-16 h-16" src={apiImage() + product?.image} alt="san pham" />
                                                </td>
                                                <td className="px-10 py-5">
                                                    <div>
                                                        {product?.name}[
                                                        <span className="text-blue-500 font-bold">{product?.orderQuantity}SP</span>]
                                                    </div>
                                                </td>
                                                <td className="px-10 py-5">
                                                    <div>{(product?.salePrice * product?.orderQuantity).toLocaleString('en-US')}đ</div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div id="content-order" className="w-1/2 p-2 hidden">
                    <p>Cửa hàng thú cưng BEAPET</p>
                    <h1 className="text-5xl font-bold text-center pl-5">HÓA ĐƠN</h1>
                    <br></br>
                    <br></br>
                    <div className="admin-order__info border ml-5">
                        <div className="text-center font-bold pb-4 border-b">
                            Thông tin giao hàng
                        </div>
                        <div className="content p-3">
                            <div className="py-1">
                                <span className="font-bold">
                                    Tên khách hàng:&nbsp;&nbsp;
                                </span>
                                <span>
                                    {address?.nameCustomer}
                                </span>
                            </div>
                            <div className="py-1">
                                <span className="font-bold">
                                    Số điện thoại:&nbsp;&nbsp;
                                </span>
                                <span>
                                    {address?.phone}
                                </span>
                            </div>
                            <div className="py-1">
                                <span className="font-bold">
                                    Địa chỉ nhận hàng:&nbsp;&nbsp;
                                </span>
                                <span>
                                    {address?.address}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="admin-order__product w-9/10">
                        <div className="py-5 text-center font-bold text-xl">
                            Sản phẩm đã đặt
                        </div>
                        <div className="admin-order__product__item ml-5">
                            <table className="w-full">
                                <thead>
                                    <tr className="border">
                                        <th className="pb-4 px-2">#</th>
                                        <th className="pb-4">Tên sản phẩm</th>
                                        <th className="pb-4">Số lượng</th>
                                        <th className="pb-4">Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => {
                                        return (
                                            <tr className="text-center border">
                                                <td className="pb-4 px-2">{index + 1}</td>
                                                <td className="pb-4">
                                                    <div>
                                                        {product?.name}
                                                    </div>
                                                </td>
                                                <td className="pb-4">
                                                    <div>
                                                        {product?.orderQuantity}
                                                    </div>
                                                </td>
                                                <td className="pb-4">
                                                    <div>{(product?.salePrice * product?.orderQuantity).toLocaleString('en-US')}đ</div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-right text-2xl">
                        <span className="font-bold">Tổng tiền: &nbsp;
                        </span><span className="text-red-500 font-bold">{order?.totalAmount.toLocaleString('en-US')}đ</span>
                    </div>
                    <div className="px-5">
                        <div className="font-bold">
                            Chữ ký của người nhận
                        </div>
                        <div>
                            &nbsp;&nbsp;&nbsp;(Ký và ghi rõ họ tên)
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div>
                {Scrumb()}
                Loading!!!!
            </div>
        )

}