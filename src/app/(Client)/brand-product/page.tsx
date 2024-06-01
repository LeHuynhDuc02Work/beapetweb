'use client'
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import Api from "@/app/api";
import apiImage from "@/app/apiImage";
function Scrumb({ brand }) {

    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> /
                <span className="font-bold"> {brand?.name}</span>
            </p>
        </div>
    )
}

function Product({ products, page }) {

    if (products.length !== 0) {
        return (
            <>
                {products.map((product) => {
                    return (
                        <div className="category-product__item w-1/6 m-2 border">
                            <Link href={{
                                pathname: '/product-detail',
                                query: { id: `${product.id}` },
                            }}
                            >
                                <div className="product-item__image">
                                    <img
                                        className="w-full"
                                        src={apiImage() + product.image}
                                        width={200}
                                        height={200}
                                        alt="Picture of the author"
                                    />
                                </div>
                                <div className="product-item__info w-4/5 mx-auto">
                                    <h1 className="product-item__info__name text-xl font-medium my-5">{product.name}</h1>
                                    <div className="product-item__price flex justify-between">
                                        <h1 className="product-item__info__newPrice font-bold leading-4 my-2 text-blue-300">
                                            {(product.salePrice).toLocaleString('en-US')}đ
                                        </h1>
                                        <h1 className="product-item__info__price line-through font-bold leading-4 my-2 text-red-500">
                                            {(product.price).toLocaleString('en-US')}đ
                                        </h1>
                                    </div>
                                </div>
                            </Link>
                        </div >
                    )
                })}
            </>
        )
    }
    else {
        if (page == 1) {
            return (
                <div className="no-product">
                    <h1 className="text-3xl font-bold text-red-500">Thương hiệu không có sản phẩm nào</h1>
                </div>
            )
        }
    }

}

export default function CategoryProduct() {
    const [id, setId] = useState(null);
    const [selectedKeys, setSelectedKeys] = useState("Mặc định");
    const [sort, setSort] = useState("Default");
    const [brand, setBrand] = useState(null);
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const _id = window.location.search.replace('?', '').split('&')[0].split('=')[1];
            setId(_id);
        }
    }, [id]);

    useEffect(() => {
        if (id != null) {
            fetch(`${Api()}/brand/${id}`)
                .then(response => response.json())
                .then(_brand => setBrand(_brand))
        }
    }, [id]);

    useEffect(() => {
        if (id != null) {
            fetch(`${Api()}/brand/${id}/products?page=${page}&pageSize=15&sort=${sort}`)
                .then(response => response.json())
                .then(_products => setProducts(_products));
        }
    }, [id, sort, page]);

    return (
        <div className="search-product">
            {Scrumb({ brand })}
            <div className="search-product__header flex justify-between m-4">
                <div className="search-product__title">
                    <h1 className="text-3xl font-bold">Thương hiệu {brand?.name}</h1>
                </div>

                <div className="search-product__filter">
                    <span className="font-bold">Filter:</span>
                    <div className="search-product__filter inline-block">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    variant="bordered"
                                    className="capitalize  border  p-2"
                                >
                                    {selectedKeys}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                className="bg-gray-50"
                                aria-label="Single selection example"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selectedKeys}
                            >
                                <DropdownItem
                                    className="hover:text-blue-300 cursor-pointer border"
                                    key="Mặc định"
                                    onClick={
                                        e => { setSelectedKeys("Mặc định"), setSort("Default") }
                                    }>
                                    Mặc định
                                </DropdownItem>
                                <DropdownItem
                                    className="hover:text-blue-300 cursor-pointer border"
                                    key="Tăng dần"
                                    onClick={
                                        e => { setSelectedKeys("Tăng dần"), setSort("ASC") }
                                    }>
                                    Giá tăng dần
                                </DropdownItem>
                                <DropdownItem
                                    className="hover:text-blue-300 cursor-pointer border"
                                    key="Giảm dần"
                                    onClick={
                                        e => { setSelectedKeys("Giảm dần"), setSort("DESC") }
                                    }>
                                    Giá giảm dần
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="search-product__container container w-full flex justify-center flex-wrap min-h-40 mx-auto">
                {Product({ products, page })}
            </div>
            <div className="pagination py-5">
                <div className="flex justify-center">
                    <span>
                        <svg className="cursor-pointer"
                            onClick={() => {
                                if (page == 1)
                                    setPage(1)
                                else
                                    setPage(page - 1);
                            }}
                            width="20px" height="20px" viewBox="0 -2 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#93c5fd"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>previous [#999]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-104.000000, -3805.000000)" fill="#93c5fd"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M59.9990013,3645.86816 L59.9990013,3652.13116 C59.9990013,3652.84516 58.8540013,3653.25316 58.2180013,3652.82516 L53.9990013,3650.14016 L53.9990013,3652.13116 C53.9990013,3652.84516 53.4260013,3653.25316 52.7900013,3652.82516 L48.4790013,3649.69316 C47.9650013,3649.34616 47.7980013,3648.65316 48.3120013,3648.30616 L52.7900013,3645.17516 C53.4260013,3644.74616 53.9990013,3645.15416 53.9990013,3645.86816 L53.9990013,3647.85916 L58.2180013,3645.17516 C58.8540013,3644.74616 59.9990013,3645.15416 59.9990013,3645.86816" id="previous-[#999]"> </path> </g> </g> </g> </g></svg>
                    </span>
                    <div className="px-5 font-bold">{page}</div>
                    <span>
                        <svg className="cursor-pointer hover:text-blue-300"
                            onClick={() => {
                                if (products.length < 15)
                                    setPage(page)
                                else
                                    setPage(page + 1);
                            }} width="20px" height="20px" viewBox="0 -2 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#93c5fd"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>next [#998]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-144.000000, -3805.000000)" fill="#93c5fd"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M99.684,3649.69353 L95.207,3652.82453 C94.571,3653.25353 94,3652.84553 94,3652.13153 L94,3650.14053 L89.78,3652.82453 C89.145,3653.25353 88,3652.84553 88,3652.13153 L88,3645.86853 C88,3645.15453 89.145,3644.74653 89.78,3645.17453 L94,3647.85953 L94,3645.86853 C94,3645.15453 94.571,3644.74653 95.207,3645.17453 L99.516,3648.30653 C100.03,3648.65353 100.198,3649.34653 99.684,3649.69353" id="next-[#998]"> </path> </g> </g> </g> </g></svg>
                    </span>
                </div>
            </div>
        </div>
    )
}