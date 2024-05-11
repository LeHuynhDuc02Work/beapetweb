import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slide() {
    return (
        <div className='img'>
            <img style={{ width: "100%" }} src="/images/slider1.jpg" alt="anh slider" />
        </div>
    );
}
function Slide1() {
    return (
        <div className='img'>
            <img style={{ width: "100%" }} src="/images/slider2.jpg" alt="anh slider" />
        </div>
    );
}

function Slide2() {
    return (
        <div className='img'>
            <img style={{ width: "100%" }} src="/images/slider3.jpg" alt="anh slider" />
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