'use client'

import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> / <span className="font-bold"> Name Product Detail</span>
            </p>
        </div>
    )
}

function ShopCartItem() {
    return (
        <>
            <div className="product-detail__left w-1/2 p-2">
                <div className="product-detail__image">
                    <img className="rounded-md" src="https://img6.thuthuatphanmem.vn/uploads/2022/01/27/anh-thu-cung-cute_014114596.jpg" alt="product" />
                </div>
            </div>
            <div className="product-detail__right w-1/2 p-2">
                <div className="product-detail__name">
                    <h1 className="font-bold text-xl py-2">Vòng cổ chống liếm SONICE Absolute Mix Color Size 3 | 25x25cm - Vải bông êm ái Petmall</h1>
                </div>
                <div className="product-detail__description">
                    <h1 className="font-bold pt-2">MÔ TẢ | DESCRIPTION</h1>
                    <p className="wrap text-justify">
                        Vòng cổ chống liếm dành cho thú cưng.
                        Được làm từ chất liệu bông êm ái, mềm tay.
                        Mang lại cảm giác thoải mái cho thú cưng khi mang vào.
                        Hoạ tiết và màu sắc đa dạng, bắt mắt.
                        Thiết kế có nút thắt rút, hỗ trợ điều chỉnh kích thước phù hợp với vòng cổ của thú cưng.
                        Chất liệu có thể làm sạch và vệ sinh với nước.
                    </p>
                </div>
                <div className="product-detail__brand py-4 font-bold">
                    <h2>Thương hiệu: LocalBrand</h2>
                </div>
                <div className="product-detail__price">
                    <span>Giá: </span><h1 className="text-3xl font-bold inline text-red-500">1.500.000đ</h1>
                </div>
                <div className="add-to-cart">
                    <div className="item_quantity product-quantity qty-click d-inline-block py-4">
                        <button type="button" className="btn-qtyminus border w-6">-</button>
                        <input type="text" name="updates[]" min="1" id="updates_1122110893" data-price="24900000" value="5" className="item-quantity text-center border w-10" />
                        <button type="button" className="btn-qtyplus border w-6">+</button>
                    </div>
                    <div className="action-add-to-cart  bg-red-500  text-center py-4">
                        <Link href="#" className="checkout-btn text-white font-bold">Thêm vào giỏ hàng</Link>
                    </div>
                </div>
            </div>
        </>

    )
}

function RelatedProduct() {
    return (
        <div className="category-product__item m-2 border">
            <Link href="/product-detail">
                <div className="product-item__image">
                    <img className="w-full" src="https://img6.thuthuatphanmem.vn/uploads/2022/01/27/anh-thu-cung-cute_014114596.jpg" alt="anh san pham" />
                </div>
                <div className="product-item__info w-4/5 mx-auto">
                    <h1 className="product-item__info__name text-xl font-medium my-5">Thú cưng 2</h1>
                    <div className="product-item__price flex justify-between">
                        <h1 className="product-item__info__newPrice font-bold leading-4 my-2 text-blue-300">100000</h1>
                        <h1 className="product-item__info__price line-through font-bold leading-4 my-2 text-red-500">120000</h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default function ProductDetail() {
    return (
        <div className="product-detail">
            {Scrumb()}
            <div className="product-detail__container w-4/5 m-auto flex pb-3 border-b">
                {ShopCartItem()}
            </div>
            <div className="related-products my-4">
                <h1 className="text-3xl font-bold my-5 text-center">SẢN PHẨM LIÊN QUAN</h1>
                <div className="related-products__container w-4/5 m-auto">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination, A11y]}
                        slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>{RelatedProduct()}</SwiperSlide>
                        <SwiperSlide>{RelatedProduct()}</SwiperSlide>
                        <SwiperSlide>{RelatedProduct()}</SwiperSlide>
                        <SwiperSlide>{RelatedProduct()}</SwiperSlide>
                        <SwiperSlide>{RelatedProduct()}</SwiperSlide>
                        <SwiperSlide>{RelatedProduct()}</SwiperSlide>
                        <SwiperSlide>{RelatedProduct()}</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}