import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slide() {
    return (
        <div className='img'>
            <img src="https://img6.thuthuatphanmem.vn/uploads/2022/01/27/anh-thu-cung-cute_014114596.jpg" alt="anh slider" />
        </div>
    );
}
function Slide1() {
    return (
        <div className='img'>
            <img src="http://anhdepbonphuong.com/wp-content/uploads/2016/02/tai-10hinh-thu-cung-de-thuong-nhat-lam-hinh-nen-may-tinh-2.jpg" alt="anh slider" />
        </div>
    );
}

function Slide2() {
    return (
        <div className='img'>
            <img src="http://anhdepbonphuong.com/wp-content/uploads/2016/02/tai-10hinh-thu-cung-de-thuong-nhat-lam-hinh-nen-may-tinh-2.jpg" alt="anh slider" />
        </div>
    );
}

export default function Slider() {
    return (
        <div className='Slider'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, A11y]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>{Slide()}</SwiperSlide>
                <SwiperSlide>{Slide1()}</SwiperSlide>
                <SwiperSlide>{Slide2()}</SwiperSlide>
            </Swiper>
        </div>
    );
}