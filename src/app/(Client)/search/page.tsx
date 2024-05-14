'use client'
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import Api from "@/app/api";
import apiImage from "@/app/apiImage";
function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> /
                <span className="font-bold">Search</span>
            </p>
        </div>
    )
}

function Product({ keyWord, sort }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${Api()}/products/?page=1&pageSize=8&search=${keyWord}&sort=${sort}`)
            .then(response => response.json())
            .then(_products => setProducts(_products));
    }, [keyWord, sort]);

    if (keyWord === "")
        return (
            <div className="no-product">
                <h1 className="text-3xl font-bold text-red-500">Bạn chưa nhập từ khóa tìm kiếm!!!</h1>
            </div>);

    if (products.length !== 0)
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
        );
    else {
        return (
            <div className="no-product">
                <h1 className="text-3xl font-bold text-red-500">Không tìm được sản phẩm cho từ khóa {keyWord}</h1>
            </div>
        )
    }

}

export default function Search() {
    const [keyWord, setkeyWord] = useState("");
    const [selectedKeys, setSelectedKeys] = useState("Mặc định");
    const [sort, setSort] = useState("Default");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const _keyWord = window.location.search.replace('?', '').split('&')[0].split('=')[1];
            setkeyWord(_keyWord);
        }
    }, [keyWord]);

    return (
        <div className="search-product">
            {Scrumb()}
            <div className="search-product__header flex justify-between m-4">
                <div className="search-product__title">
                    <h1 className="text-3xl font-bold">Kết quả tìm kiếm cho từ khóa {keyWord}</h1>
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
            <div className="search-product__container container w-full flex justify-center flex-wrap min-h-40">
                {Product({ keyWord, sort })}
            </div>
        </div>
    )
}