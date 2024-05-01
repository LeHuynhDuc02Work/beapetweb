'use client'
import Link from "next/link"
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> / category - Chó cưng
            </p>
        </div>
    )
}

function Product() {
    return (
        <div className="category-product__item w-1/6 m-2 border">
            <Link href="/product-detail">
                <div className="product-item__image">
                    <img className="w-full" src="https://img6.thuthuatphanmem.vn/uploads/2022/01/27/anh-thu-cung-cute_014114596.jpg" alt="anh san pham" />
                </div>
                <div className="product-item__info w-4/5 mx-auto">
                    <h1 className="product-item__info__name text-xl font-medium my-5">Chó cưng 1</h1>
                    <div className="product-item__price flex justify-between">
                        <h1 className="product-item__info__newPrice font-bold leading-4 my-2 text-blue-300">100.000đ</h1>
                        <h1 className="product-item__info__price line-through font-bold leading-4 my-2 text-red-500">120.000đ</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
}
function DropdownFilter() {
    const [selectedKeys, setSelectedKeys] = React.useState("Mặc định");

    const selectedValue = selectedKeys;

    return (
        <div className="search-product__filter inline-block">
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                        className="capitalize  border  p-2"
                    >
                        {selectedValue}
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
                    <DropdownItem className="hover:text-blue-300 cursor-pointer border" key="Mặc định" onClick={e => setSelectedKeys("Mặc định")}>Mặc định</DropdownItem>
                    <DropdownItem className="hover:text-blue-300 cursor-pointer border" key="Tăng dần" onClick={e => setSelectedKeys("Tăng dần")}>Giá tăng dần</DropdownItem>
                    <DropdownItem className="hover:text-blue-300 cursor-pointer border" key="Giảm dần" onClick={e => setSelectedKeys("Giảm dần")}>Giá giảm dần</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
export default function CategoryProduct() {
    return (
        <div className="category-product">
            {Scrumb()}
            <div className="category-product__header flex justify-between m-4">
                <div className="category-product__title">
                    <h1 className="text-3xl font-bold">Category - Chó cưng</h1>
                </div>
                <div className="category-product__filter">
                    <span className="font-bold">Filter:</span> {DropdownFilter()}
                </div>
            </div>
            <div className="category-product__container container w-full flex justify-center flex-wrap">
                {Product()}
                {Product()}
                {Product()}
                {Product()}
                {Product()}
                {Product()}
                {Product()}
            </div>
        </div>
    )
}