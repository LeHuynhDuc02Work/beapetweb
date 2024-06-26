import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Api from "@/app/api";
import apiImage from '@/app/apiImage';

function brand() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch(`${Api()}/brands/?page=1&pageSize=8`)
            .then(response => response.json())
            .then(brands => setBrands(brands));
    }, []);

    return (
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
            {brands.map((brand) => (
                <SwiperSlide>
                    <Link
                        href={{
                            pathname: '/brand-product',
                            query: { id: `${brand.id}` },
                        }}
                    >
                        <div className='img'>
                            <img
                                className='h-40'
                                src={apiImage() + brand.image}
                                alt="anh brand"
                                width={200}
                                height={200}
                            />
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
            <SwiperSlide></SwiperSlide>
        </Swiper>
    );
}

export default function Brands() {
    return (
        <div className='brand w-4/5 mx-auto my-10'>
            <h1 className="text-5xl font-bold text-center my-10">CÁC THƯƠNG HIỆU</h1>
            {brand()}
        </div >
    );
}