'use client'
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import Api from "@/app/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Scrumb() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> /
                <Link className="hover:text-blue-300" href={"/user-info/"}> User - Infor</Link> /
                <Link className="hover:text-blue-300" href={"/user-info/order-address"}> Order - Address</Link> /
                <span className="font-bold"> Create</span>
            </p>
        </div>
    )
}

async function CreateHanle({ nameCustomer, phone, address }) {
    if (nameCustomer == '' || phone == '' || address == '') {
        const showToastMessage = () => {
            toast.error("Phải nhập tất cả các trường", {
                position: toast?.POSITION?.TOP_RIGHT,
            });
        };
        showToastMessage();
    }
    else {
        const userJSON = localStorage.getItem('user');
        const user = JSON.parse(userJSON);
        const response = await fetch(`${Api()}/address/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nameCustomer, phone, address, userId: user.id }),
        });
        if (response.ok) {
            const showToastMessage = () => {
                toast.success("Đã thêm thành công!", {
                    position: toast?.POSITION?.TOP_RIGHT,
                });
            };
            showToastMessage();
            window.location.href = "/user-info/order-address";
        }
        else {
            const showToastMessage = () => {
                toast.error("Có lỗi xảy ra!", {
                    position: toast?.POSITION?.TOP_RIGHT,
                });
            };
            showToastMessage();
        }
    }
}

export default function EditAddress() {
    const [nameCustomer, setNameCustomer] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    return (
        <div className="address-edit__form">
            {Scrumb()}
            <h1 className="user-info__title font-bold text-3xl text-center block w-full my-5">
                THÊM MỚI ĐỊA CHỈ ĐẶT HÀNG
            </h1>
            <div className="address-edit__container w-1/2 m-auto border p-5">
                <div className="address-edit__customer my-2 ">
                    <span>Tên khách hàng: </span>
                    <input className="border rounded-md p-2 w-2/3"
                        type="text"
                        value={nameCustomer}
                        onChange={(e) => setNameCustomer(e.target.value)}
                    />
                </div>
                <div className="address-edit__phone my-2">
                    <span>Số điện thoại: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <input className="border rounded-md p-2  w-2/3"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="address-edit__address my-2">
                    <span>Địa chỉ đặt hàng: </span>
                    <input className="border rounded-md p-2 w-2/3"
                        type=""
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    className="button-save my-4 font-bold p-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md w-1/5 mx-auto"
                    onClick={() => CreateHanle({ nameCustomer, phone, address })}
                >
                    Save
                </button>
            </div>
            <ToastContainer />
        </div>
    )

}