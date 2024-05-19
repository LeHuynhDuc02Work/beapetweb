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
                <Link className="hover:text-blue-300" href="/admin/news">News</Link> /
                <span className="font-bold">Create</span>
            </p>
        </div>
    )
}
function FormCreate() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [detail, setDetail] = useState('');
    const [image, setImage] = useState('');
    const [filePath, setFilePath] = useState('');

    return (
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-4">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Tiêu đề
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
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
                        <div className="col-span-full">
                            <label htmlFor="detail" className="block text-sm font-medium leading-6 text-gray-900">
                                Chi tiết
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="detail"
                                    name="detail"
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    rows={3}
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                                Hình ảnh
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    <div>{image}</div>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload"
                                                onChange={(e) => {
                                                    const fileInput = document.getElementById('file-upload');
                                                    setImage(fileInput?.files[0].name);
                                                    setFilePath(fileInput?.files[0]);
                                                }}
                                                name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
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

                        if (title == '' || description == '' || detail == '') {
                            const showToastMessage = () => {
                                toast.error("Phải nhập tên đầy đủ các trường!", {
                                    position: toast?.POSITION?.TOP_RIGHT,
                                });
                            };
                            showToastMessage();
                        }
                        else {
                            const response = await fetch(`https://localhost:7012/api/BeaShop/new/create`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    title: title,
                                    description: description,
                                    detail: detail,
                                    image: image,
                                })
                            })

                            if (response.ok) {
                                const showToastMessage = () => {
                                    toast.success("Đã thêm tin tức thành công!", {
                                        position: toast?.POSITION?.TOP_RIGHT,
                                    });
                                };
                                showToastMessage();
                                if (filePath != null) {
                                    const formData = new FormData();
                                    formData.append('fileImage', filePath);
                                    fetch("https://localhost:7012/api/BeaShop/upload", {
                                        method: 'POST',
                                        body: formData,
                                    })
                                }

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
                    Create
                </button>
                <ToastContainer />
            </div>
        </form >
    )
}

export default function CreateNews() {
    return (
        <div className="create-news">
            {Scrumb()}
            <div className="form-create w-4/5 mx-auto">
                {FormCreate()}
            </div>

        </div>
    )
}