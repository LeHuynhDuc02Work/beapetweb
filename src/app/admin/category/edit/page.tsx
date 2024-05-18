"use client"
import Link from "next/link";
import Api from "@/app/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';

import path from "path";
function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/admin">Dashboard</Link> /
                <Link className="hover:text-blue-300" href="/admin/category">Category</Link> /
                <span className="font-bold">Edit</span>
            </p>
        </div>
    )
}
function FormEdit() {
    const [id, setId] = useState(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const _id = window.location.search.replace('?', '').split('&')[0].split('=')[1];
            setId(_id);
        }
    }, [id]);
    useEffect(() => {
        fetch(`${Api()}/category/${id}`)
            .then(response => response.json())
            .then(category => {
                setName(category.name);
                setDescription(category.description);
            })
    }, [id]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    return (
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Tên danh mục
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Mô tả
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6 pb-4">
                <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={async () => {
                        if (name == '' || description == '') {
                            const showToastMessage = () => {
                                toast.error("Phải nhập đầy đủ các trường!", {
                                    position: toast?.POSITION?.TOP_RIGHT,
                                });
                            };
                            showToastMessage();
                        }
                        else {
                            const response = await fetch(`https://localhost:7012/api/BeaShop/category/update/${id}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    name: name,
                                    description: description
                                })
                            })

                            if (response.ok) {
                                response.json()
                                    .then(data => {
                                        console.log(data);
                                        if (data.name == null) {
                                            const showToastMessage = () => {
                                                toast.error(data?.status, {
                                                    position: toast?.POSITION?.TOP_RIGHT,
                                                });
                                            };
                                            showToastMessage();
                                        }
                                        else {
                                            const showToastMessage = () => {
                                                toast.success("Đã sửa danh mục thành công!", {
                                                    position: toast?.POSITION?.TOP_RIGHT,
                                                });
                                            };
                                            showToastMessage();
                                        }
                                    })

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
                    }}
                >
                    Save
                </button>
                <ToastContainer />
            </div>
        </form >
    )
}

export default function editCategory() {
    return (
        <div className="edit-category">
            {Scrumb()}
            <div className="form-edit w-4/5 mx-auto">
                {FormEdit()}
            </div>
        </div>
    )
}