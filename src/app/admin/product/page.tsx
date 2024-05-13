"use client"
import Link from "next/link";
import Api from "@/app/api";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/admin">Dashboard</Link> / <span className="font-bold">Product</span>
            </p>
        </div>
    )
}
function ProductItemHeader() {
    return (
        <div className="admin-product__item__header flex justify-between">
            <p>#</p>
            <p>Hình ảnh</p>
            <p>Tên sản phẩm</p>
            <p>Giá bán</p>
            <p>Số lượng</p>
            <p>Danh mục</p>
            <p>Thao tác</p>
        </div>
    )
}

function ProductItem({ products }) {
    if (products.length > 0)
        return (
            <>
                {products.map((product, index) => {
                    return (
                        <tr className="admin-product__item border-b">
                            <td className="font-bold">{index + 1}</td>
                            <td className="admin-product__item__image py-2">
                                <Image
                                    className="m-auto"
                                    src={'/images/' + product.image}
                                    height={100}
                                    width={100}
                                    alt="anh san pham"
                                />
                            </td>
                            <td className="admin-product__item__info">
                                <h1 className="admin-product__item__info__name">{product.name}</h1>
                            </td>
                            <td className="admin-product__item__price">
                                {(product.salePrice).toLocaleString('en-US')}đ
                            </td>
                            <td className="admin-product__item__quantity">{product.quantity}</td>
                            <td className="admin-product__item__category">
                                {product.categoryName}
                            </td>
                            <td className="admin-product__item__action flex justify-center">
                                <Link className="mt-4 hover:bg-green-500 rounded-md" href={"/admin/product/edit/?id=" + product.id}>
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </Link>
                                <Link className="mt-4 hover:bg-red-500 rounded-md" href="/admin/product/delete">
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </Link>
                            </td>
                        </tr >
                    )
                })}
            </>
        );
    else
        return (<></>);
}

export default function Product() {
    if (localStorage.getItem('user') == null) {
        window.location.href = '/login-admin';
    }
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [search, setSearch] = useState('');
    useEffect(() => {
        if (search == '') {
            fetch(`${Api()}/products/?page=${page}&pageSize=${pageSize}`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                })
        }
        else {
            fetch(`${Api()}/products/?page=${page}&pageSize=${pageSize}&search=${search}`)
                .then(response => response.json())
                .then(data => {
                    setProducts(data);
                })
        }

    }, [page, search])
    return (
        <div className="admin-product">
            {Scrumb()}
            <div className="new-product__container my-2 flex justify-between">
                <Link className="text-center font-bold hover:text-blue-300" href="/admin/product/create">Thêm sản phẩm mới(+)</Link>
                <div className="pagination">
                    <div className="text-center font-bold">Trang</div>
                    <div className="flex justify-center">
                        <span>
                            <svg className="cursor-pointer hover:text-blue-300"
                                onClick={() => {
                                    if (page == 1)
                                        setPage(1)
                                    else
                                        setPage(page - 1);
                                }}
                                width="20px" height="20px" viewBox="0 -2 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>previous [#999]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-104.000000, -3805.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M59.9990013,3645.86816 L59.9990013,3652.13116 C59.9990013,3652.84516 58.8540013,3653.25316 58.2180013,3652.82516 L53.9990013,3650.14016 L53.9990013,3652.13116 C53.9990013,3652.84516 53.4260013,3653.25316 52.7900013,3652.82516 L48.4790013,3649.69316 C47.9650013,3649.34616 47.7980013,3648.65316 48.3120013,3648.30616 L52.7900013,3645.17516 C53.4260013,3644.74616 53.9990013,3645.15416 53.9990013,3645.86816 L53.9990013,3647.85916 L58.2180013,3645.17516 C58.8540013,3644.74616 59.9990013,3645.15416 59.9990013,3645.86816" id="previous-[#999]"> </path> </g> </g> </g> </g></svg>
                        </span>
                        <div className="px-5 font-bold text-blue-300">{page}</div>
                        <span>
                            <svg className="cursor-pointer hover:text-blue-300"
                                onClick={() => {
                                    if (products.length === 0)
                                        setPage(page)
                                    else
                                        setPage(page + 1);
                                }} width="20px" height="20px" viewBox="0 -2 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>next [#998]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-144.000000, -3805.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M99.684,3649.69353 L95.207,3652.82453 C94.571,3653.25353 94,3652.84553 94,3652.13153 L94,3650.14053 L89.78,3652.82453 C89.145,3653.25353 88,3652.84553 88,3652.13153 L88,3645.86853 C88,3645.15453 89.145,3644.74653 89.78,3645.17453 L94,3647.85953 L94,3645.86853 C94,3645.15453 94.571,3644.74653 95.207,3645.17453 L99.516,3648.30653 C100.03,3648.65353 100.198,3649.34653 99.684,3649.69353" id="next-[#998]"> </path> </g> </g> </g> </g></svg>
                        </span>
                    </div>
                </div>
                <div className="search">
                    <input className="search__input border p-2 rounded-md" value={search} type="text" placeholder="Tìm kiếm ..." onChange={(e) => {
                        setSearch(e.target.value)
                        setPage(1)
                    }} />
                </div>
            </div>
            <div className="admin-product__container border">
                <table className="text-center">
                    <thead>
                        <tr className="border-b">
                            <th className="px-16 py-5">#</th>
                            <th className="px-16 py-5">Hình ảnh</th>
                            <th className="px-16 py-5">Tên SP</th>
                            <th className="px-16 py-5">Giá bán</th>
                            <th className="px-16 py-5">Số lượng</th>
                            <th className="px-16 py-5">Danh mục</th>
                            <th className="px-16 py-5">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ProductItem({ products })}
                    </tbody>
                </table>

            </div>
        </div>
    );
}