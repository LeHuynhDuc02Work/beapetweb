import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

function brand() {
    return (
        <Link href="/brand-product">
            <div className='img'>
                <img src="https://sgweb.vn/wp-content/uploads/2022/12/6379211571097799404175786.jpg" alt="anh slider" />
            </div>
        </Link>

    );
}

export default function Brands() {
    return (
        <div className='brand w-4/5 mx-auto my-10'>
            <h1 className="text-5xl font-bold text-center my-10">CÁC NHÃN HIỆU</h1>
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
                <SwiperSlide>{brand()}</SwiperSlide>
                <SwiperSlide>{brand()}</SwiperSlide>
                <SwiperSlide>{brand()}</SwiperSlide>
                <SwiperSlide>{brand()}</SwiperSlide>
                <SwiperSlide>{brand()}</SwiperSlide>
                <SwiperSlide>{brand()}</SwiperSlide>
                <SwiperSlide>{brand()}</SwiperSlide>
            </Swiper>
        </div>
    );
}