'use client'
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import Api from "@/app/api";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import apiImage from "@/app/apiImage";

function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> / <span className="font-bold"> Product - Detail</span>
            </p>
        </div>
    )
}

async function AddShopcartHanlde({ product, quantity }) {
    if (!localStorage.getItem('user')) {
        window.location.href = "/login";
    }
    else {
        const storedUser = localStorage.getItem('user');
        const user = JSON.parse(storedUser);
        let userId = user?.id;
        console.log(userId)
        let productId = product?.id;
        const response = await fetch(`${Api()}/shop-cart/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId, quantity }),
        });

        if (response.ok) {
            const showToastMessage = () => {
                toast.success("Đã thêm thành công!", {
                    position: toast?.POSITION?.TOP_RIGHT,
                });
            };
            showToastMessage();
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

}

function ProductDetailItem({ product, brand }) {
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [loadReview, setLoadReview] = useState(false);

    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    useEffect(() => {
        if (product != null) {
            fetch(`${Api()}/reviews/product/${product?.id}`)
                .then(response => response.json())
                .then(data => setReviews(data));
        }
    }, [loadReview])
    useEffect(() => {
        if (product != null) {
            fetch(`${Api()}/reviews/product/${product?.id}`)
                .then(response => response.json())
                .then(data => setReviews(data));
        }
    }, [product, loadReview])
    useEffect(() => {
        if (quantity <= 0 || isNaN(quantity)) {
            setQuantity(1);
        }
    }, [quantity]);

    if (product == null) {
        return null
    }
    else
        return (
            <>
                <div className="product-detail__left w-1/2 p-2">
                    <div className="product-detail__image">
                        <img
                            className="w-full rounded-lg"
                            src={apiImage() + product?.image}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className="product-detail__right w-1/2 p-2">
                    <div className="product-detail__name">
                        <h1 className="font-bold text-xl py-2">{product?.name}</h1>
                    </div>
                    <div className="product-detail__description">
                        <h1 className="font-bold pt-2">MÔ TẢ | DESCRIPTION</h1>
                        <p className="wrap text-justify">
                            {product.description}
                        </p>
                    </div>
                    <div className="product-detail__brand py-4 font-bold">
                        <h2>Thương hiệu: {brand?.name}</h2>
                    </div>
                    <div className="product-detail__price">
                        <span>Giá: </span>
                        <h1 className="text-3xl font-bold inline text-red-500">
                            {(product?.salePrice).toLocaleString('en-US')}đ
                        </h1>
                    </div>
                    <div className="add-to-cart">
                        <div className="item_quantity product-quantity qty-click d-inline-block py-4">
                            <button onClick={() => {
                                if (quantity <= 1) {
                                    setQuantity(1)
                                }
                                else {
                                    setQuantity(quantity - 1)
                                }
                            }}
                                type="button" className="btn-qtyminus border w-6">-</button>
                            <input
                                onChange={(e) => {
                                    if (isNaN(quantity)) {
                                        setQuantity(1);
                                    }
                                    else
                                        setQuantity(Number(e.target.value))
                                    if (Number(e.target.value) > product.quantity) {
                                        setQuantity(product.quantity);
                                        const showToastMessage = () => {
                                            toast.error("Số lượng hàng còn lại không đủ!", {
                                                position: toast?.POSITION?.TOP_RIGHT,
                                            });
                                        };
                                        showToastMessage();
                                    }
                                }}
                                type="text" name="updates[]"
                                value={quantity}
                                className="item-quantity text-center border w-10" />
                            <button onClick={() => {
                                if (quantity >= product.quantity) {
                                    setQuantity(product.quantity);
                                    const showToastMessage = () => {
                                        toast.error("Số lượng hàng còn lại không đủ!", {
                                            position: toast?.POSITION?.TOP_RIGHT,
                                        });
                                    };
                                    showToastMessage();
                                }
                                else {
                                    setQuantity(quantity + 1);
                                }
                            }}
                                type="button" className="btn-qtyplus border w-6">+</button>
                        </div>
                        <ToastContainer />
                        <div className="action-add-to-cart  bg-red-500 hover:bg-red-400 text-white font-bold  text-center">
                            <button
                                onClick={() => AddShopcartHanlde({ product, quantity })}
                                className="checkout-btn w-full h-full  py-4">
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                    <div className="product-detail__reviews border p-4 rounded-md my-4">
                        <h1 className="font-bold">Bình luận</h1>
                        <div className="py-2 border-b">
                            <form
                                onSubmit={
                                    (e) => { e.preventDefault(); }}
                            >
                                <input className="border p-2 w-full rounded-md" placeholder="Nhập bình luận..." type="text" value={review} onChange={(e) => setReview(e.target.value)} />
                                <button
                                    type="submit"
                                    className="btn btn-primary text-white font-bold  bg-blue-500 hover:text-black hover:bg-blue-400 p-2 rounded-md m-right my-1"
                                    onClick={() => {
                                        if (user == null) {
                                            window.location.href = "/login";
                                        }
                                        else {
                                            if (review == '') {
                                                const showToastMessage = () => {
                                                    toast.warning("Bạn chưa nhập bình luận!", {
                                                        position: toast?.POSITION?.TOP_RIGHT,
                                                    });
                                                };
                                                showToastMessage();
                                            }
                                            else {
                                                fetch(`${Api()}/review/create`, {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                    body: JSON.stringify({ productId: product?.id, content: review, UserId: user.id }),
                                                });

                                                setReview('');
                                                setLoadReview(!loadReview);
                                            }
                                        }
                                    }}
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                        <div>
                            {
                                reviews.map((review) => {
                                    return (
                                        <div className="py-2 px-2">
                                            <p><span className="font-bold">{review?.userName}:</span> {review?.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>

        )
}

function RelatedProduct({ id, brand, product }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (product?.id != null) {
            fetch(`${Api()}/category/${product.productCategoryId}/products?page=1&pageSize=10`)
                .then(response => response.json())
                .then(_products => setProducts(_products));
        }
    }, [product]);
    if (products.length === 0) {
        return null
    }
    else
        return (
            <Swiper
                modules={[Autoplay, Navigation, Pagination, A11y]}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    products.map((productItem) => {
                        if (productItem?.id != id)
                            return (
                                <SwiperSlide>
                                    <div className="category-product__item m-2 border">
                                        <a
                                            href={`/product-detail?id=${productItem?.id}`}
                                        >
                                            <div className="product-item__image">
                                                <img
                                                    className="w-full"
                                                    src={apiImage() + productItem?.image}
                                                    alt="anh san pham"
                                                    width={200}
                                                    height={200}
                                                />
                                            </div>
                                            <div className="product-item__info w-4/5 mx-auto">
                                                <h1 className="product-item__info__name text-xl font-medium my-5">{productItem?.name}</h1>
                                                <div className="product-item__price flex justify-between">
                                                    <h1 className="product-item__info__newPrice font-bold leading-4 my-2 text-blue-300">
                                                        {(productItem?.salePrice).toLocaleString('en-US')}đ
                                                    </h1>
                                                    <h1 className="product-item__info__price line-through font-bold leading-4 my-2 text-red-500">
                                                        {(productItem?.price).toLocaleString('en-US')}đ
                                                    </h1>
                                                </div>
                                            </div>
                                        </a>
                                    </div >
                                </SwiperSlide>
                            )
                    })
                }
            </Swiper>
        )
}

export default function ProductDetail() {
    const [id, setId] = useState(null);
    const [product, setProduct] = useState(null);
    const [brand, setBrand] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const _id = window.location.search.replace('?', '').split('&')[0].split('=')[1];
            setId(_id);
        }
    }, [id]);
    useEffect(() => {
        if (id != null) {
            fetch(`${Api()}/product/${id}`)
                .then(response => response.json())
                .then(data => setProduct(data));
        }
    }, [id])

    useEffect(() => {
        if (product?.id != null) {
            fetch(`${Api()}/brand/${product?.brandId}`)
                .then(response => response.json())
                .then(data => setBrand(data));
        }
    }, [product]);
    return (
        <div className="product-detail">
            {Scrumb()}
            <div className="product-detail__container w-4/5 m-auto flex pb-3 border-b">
                {ProductDetailItem({ product, brand })}
            </div>
            <div className="related-products my-4">
                <h1 className="text-3xl font-bold my-5 text-center">SẢN PHẨM LIÊN QUAN</h1>
                <div className="related-products__container w-4/5 m-auto">
                    {RelatedProduct({ id, brand, product })}
                </div>
            </div>

        </div >
    )
}