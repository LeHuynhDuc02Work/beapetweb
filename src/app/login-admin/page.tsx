'use client'
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Api from "@/app/api";
import Logo from "@/logo/Beapet.png"
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function handleLogin({ email, password }) {
    localStorage.removeItem('user');
    if (email === "" || password === "") {
        const showToastMessage = () => {
            toast.error("Email hoặc Password không được bỏ trống!", {
                position: toast?.POSITION?.TOP_RIGHT,
            });
        };
        showToastMessage();
    }
    else {
        try {
            const response = await fetch(`${Api()}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                if (data?.token == "") {
                    const showToastMessage = () => {
                        toast.error("Thông tin email hoặc tài khoản không chính xác!", {
                            position: toast?.POSITION?.TOP_RIGHT,
                        });
                    };
                    showToastMessage();
                }
                else {
                    localStorage.setItem('user', JSON.stringify(data));
                    const userJSON = localStorage.getItem('user');
                    const user = JSON.parse(userJSON);
                    if (user?.position === 'admin') {
                        const showToastMessage = () => {
                            toast.success("Đăng nhập thành công!", {
                                position: toast?.POSITION?.TOP_RIGHT,
                            });
                        };
                        showToastMessage();
                        window.location.href = "/admin";
                    }
                    else {
                        const showToastMessage = () => {
                            toast.error("Tài khoản không có quyền đăng nhập admin!", {
                                position: toast?.POSITION?.TOP_RIGHT,
                            });
                        };
                        showToastMessage();
                        localStorage.removeItem('user');
                    }

                }
            }
        }
        catch (error) {
            const showToastMessage = () => {
                toast.success("Có lỗi xảy ra!", {
                    position: toast?.POSITION?.TOP_RIGHT,
                });
            };
            showToastMessage();
        }
    }
}
export default function LoginAdmin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        className="mx-auto w-auto"
                        src={Logo}
                        width={60}
                        height={60}
                        alt="logo"
                    />
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your Admin account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        onSubmit={
                            (e) => { e.preventDefault(); }}
                    >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm hidden">
                                    <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={() => handleLogin({ email, password })}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}