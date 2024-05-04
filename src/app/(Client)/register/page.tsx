'use client'
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Api from "@/app/api";
import Logo from "@/logo/Beapet.png"
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


async function handleRegister({ userName, email, password, confirmPassword }) {
    const registerData = {
        userName,
        email,
        password,
        confirmPassword,
    };
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (userName === "" || email === "" || password === "" || confirmPassword === "") {
        const showToastMessage = () => {
            toast.error("Phải nhập tất cả các trường!", {
                position: toast?.POSITION?.TOP_RIGHT,
            });
        };
        showToastMessage();
    }
    else if (!passwordRegex.test(password)) {
        const showToastMessage = () => {
            toast.error("Mật khẩu phải có từ 6 ký tự bao gồm chữ cái in hoa, in thường, số và ký tự đặc biệt!", {
                position: toast?.POSITION?.TOP_RIGHT,
            });
        };
        showToastMessage();
    }
    else if (password !== confirmPassword) {
        const showToastMessage = () => {
            toast.error("Mật khẩu nhập lại không khớp nhau!", {
                position: toast?.POSITION?.TOP_RIGHT,
            });
        };
        showToastMessage();
    }
    else {
        try {
            const response = await fetch(`${Api()}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
            });

            if (response.ok) {
                const data = await response.json();
                if (data?.email == null) {
                    const showToastMessage = () => {
                        toast.error(`${data?.status}`, {
                            position: toast?.POSITION?.TOP_RIGHT,
                        });
                    };
                    showToastMessage();
                }
                else {
                    const showToastMessage = () => {
                        toast.success(`${data?.status}`, {
                            position: toast?.POSITION?.TOP_RIGHT,
                        });
                    };
                    showToastMessage();
                }
            } else {
                const showToastMessage = () => {
                    toast.error("Đăng ký thất bại!", {
                        position: toast?.POSITION?.TOP_RIGHT,
                    });
                };
                showToastMessage();
            }

        } catch (error) {
            const showToastMessage = () => {
                toast.error("Có lỗi xảy ra!", {
                    position: toast?.POSITION?.TOP_RIGHT,
                });
            };
            showToastMessage();
        }

    }
}

export default function Register() {
    if (localStorage.getItem('user')) {
        window.location.href = "/";
    }
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                    <h2 className="text-center mt-5 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6"
                        onSubmit={
                            (e) => { e.preventDefault(); }}>
                        <div>
                            <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="userName"
                                    name="userName"
                                    type="userName"
                                    autoComplete="userName"
                                    onChange={(e) => setUserName(e.target.value)}
                                    value={userName}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                />
                            </div>
                        </div>

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
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    value={confirmPassword}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={() => handleRegister({ userName, email, password, confirmPassword })}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </button>
                            <ToastContainer />
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account &nbsp;
                        <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Login now
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
