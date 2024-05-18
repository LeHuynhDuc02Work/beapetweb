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
                <Link className="hover:text-blue-300" href="/admin/product">Product</Link> /
                <span className="font-bold">Create</span>
            </p>
        </div>
    )
}
function FormCreate() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [detail, setDetail] = useState('');
    const [salePrice, setSalePrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [productCategoryId, setProductCategoryId] = useState(0);
    const [brandId, setBrandId] = useState(0);
    const [image, setImage] = useState('');
    const [filePath, setFilePath] = useState('');

    const [brands, setBrands] = useState([]);
    const [productCategories, setProductCategories] = useState([]);

    useEffect(() => {
        fetch(`${Api()}/brands/?pageSize=50`)
            .then(response => response.json())
            .then(brands => setBrands(brands));
        fetch(`${Api()}/categories/?pageSize=50`)
            .then(response => response.json())
            .then(categories => setProductCategories(categories));
    }, [])

    return (
        <form>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-4">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Product name
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
                                Description
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

                        <div className="sm:col-span-4">
                            <label htmlFor="detail" className="block text-sm font-medium leading-6 text-gray-900">
                                Detail
                            </label>
                            <div className="mt-2">
                                <input
                                    id="detail"
                                    name="detail"
                                    value={detail}
                                    onChange={(e) => setDetail(e.target.value)}
                                    type="text"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
                                Quantity
                            </label>
                            <div className="mt-2">
                                <input
                                    id="quantity"
                                    name="quantity"
                                    value={quantity}
                                    onChange={(e) => {
                                        if (isNaN(parseInt(e.target.value)) || parseInt(e.target.value) < 0)
                                            setQuantity(0)
                                        else
                                            setQuantity(Number(e.target.value))
                                    }}
                                    type="number"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                Price
                            </label>
                            <div className="mt-2">
                                <input
                                    id="price"
                                    name="price"
                                    value={price}
                                    onChange={(e) => {
                                        if (isNaN(parseInt(e.target.value)) || parseInt(e.target.value) < 0)
                                            setPrice(1)
                                        else
                                            setPrice(Number(e.target.value))
                                    }}
                                    type="number"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="salePrice" className="block text-sm font-medium leading-6 text-gray-900">
                                Sale price
                            </label>
                            <div className="mt-2">
                                <input
                                    id="salePrice"
                                    name="salePrice"
                                    value={salePrice}
                                    onChange={(e) => {
                                        if (isNaN(parseInt(e.target.value)) || parseInt(e.target.value) < 0)
                                            setSalePrice(1)
                                        else
                                            setSalePrice(Number(e.target.value))
                                    }}
                                    type="number"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
                                Brand
                            </label>
                            <div className="mt-2">
                                <select
                                    id="brand"
                                    name="brand"
                                    onChange={(e) => setBrandId(e.target.value)}
                                    autoComplete="brand-name"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {brands.map((brand) => {
                                        return (
                                            <option value={brand.id}>{brand?.name}</option>
                                        )
                                    })}

                                </select>
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                Category
                            </label>
                            <div className="mt-2">
                                <select
                                    id="category"
                                    name="category"
                                    onChange={(e) => setProductCategoryId(e.target.value)}
                                    autoComplete="category-name"
                                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    {productCategories.map((category) => {
                                        return (
                                            <option value={category.id}>{category?.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                                Image
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
                        if (name == "") {
                            const showToastMessage = () => {
                                toast.error("Tên sản phẩm không được để trống!!", {
                                    position: toast?.POSITION?.TOP_RIGHT,
                                });
                            };
                            showToastMessage();
                        }
                        else {
                            const response = await fetch(`https://localhost:7012/api/BeaShop/product/create`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    name: name,
                                    description: description,
                                    price: price,
                                    salePrice: salePrice,
                                    brandId: brandId,
                                    detail: detail,
                                    productCategoryId: productCategoryId,
                                    quantity: quantity,
                                    image: image,
                                })
                            })

                            if (response.ok) {
                                const showToastMessage = () => {
                                    toast.success("Đã thêm sản phẩm thành công!", {
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

export default function CreateProduct() {
    return (
        <div className="create-product">
            {Scrumb()}
            <div className="form-create w-4/5 mx-auto">
                {FormCreate()}
            </div>

        </div>
    )
}