'use client'
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import Api from "@/app/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiImage from "@/app/apiImage";
function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> / <span className="font-bold">Cart</span>
            </p>
        </div>
    )
}

function removeProduct({ id }) {
    fetch(`${Api()}/shop-cart/delete/product/${id}`, {
        method: 'DELETE',
    })
}

function updateQuantityProduct({ id, quantity }) {
    fetch(`${Api()}/shop-cart/update/product/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
    })
}

function total({ products, quantityOrder }) {
    let total = 0;
    let i = 0;
    products.forEach((element) => {
        total += quantityOrder[i] * element?.salePrice;
        i++
    });
    return total;
}



function ShopCartItem({ products }) {
    const [quantityOrder, setQuantityOrder] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    let arr = [];

    useEffect(() => {
        setTotalPrice(total({ products, quantityOrder }));
    }, [quantityOrder]);

    products.forEach(element => {
        if (element.quantity < element.quantityShopCart) {
            arr.push(element?.quantity);
        }
        else {
            arr.push(element?.quantityShopCart);
        }
    });
    if (quantityOrder.length == 0 && arr.length != 0) {
        setQuantityOrder(arr);
    }
    if (products.length == 0) {
        return (
            <div className="shop-cart__title text-3xl text-red-500 font-bold text-center p-5 margin-auto">
                Không có sản phẩm nào trong giỏ hàng!!!
            </div>
        )
    }
    else
        return (
            <>
                <ToastContainer />
                <div className="shop-cart__content w-2/3">
                    {products.map((product, index) => {
                        return (
                            <div className="shop-cart__item border-b w-11/12 flex py-5">
                                <div className="shop-cart__item-image mr-4">
                                    <Link href={"/product-detail/?id=" + product?.id} aria-label="san pham 1" className="">
                                        <img
                                            className="rounded-md h-32"
                                            src={apiImage() + product?.image}
                                            alt="anh san pham"
                                            width={200}
                                            height={200}
                                        />
                                    </Link>
                                </div>
                                <div className="shop-cart__item-info w-full">
                                    <div className="name-price">
                                        <Link href="/product-detail" className="item-name">
                                            <h3 className="">{product?.name}</h3>
                                        </Link>
                                        <div className="line-item_price mb-2">
                                            <span className="price">Giá: <strong>{(product?.salePrice).toLocaleString('en-US')}đ</strong></span>
                                        </div>
                                    </div>
                                    <div className="shop-cart__item-quantity">
                                        <span className="font-weight-bold">Số lượng còn:</span> <span className="item-quantity">{product?.quantity}</span>
                                    </div>
                                    <div className="quantity-price-total flex justify-between mt-5 w-full">
                                        <div className="item_quantity product-quantity qty-click d-inline-block">
                                            <button
                                                type="button"
                                                className="btn-qtyminus border w-6"
                                                onClick={() => {
                                                    if (quantityOrder[index] <= 1) {
                                                        arr = [...quantityOrder];
                                                        arr[index] = 1;
                                                        setQuantityOrder(arr)
                                                        updateQuantityProduct({ id: product?.id, quantity: 1 })
                                                    }
                                                    else {
                                                        arr = [...quantityOrder];
                                                        arr[index] = quantityOrder[index] - 1;
                                                        setQuantityOrder(arr);
                                                        updateQuantityProduct({ id: product?.id, quantity: arr[index] })
                                                    }
                                                }}
                                            >-</button>
                                            <input
                                                type="text"
                                                onChange={(e) => {
                                                    if (Number(e.target.value) <= 0 || isNaN(Number(e.target.value))) {
                                                        arr = [...quantityOrder];
                                                        arr[index] = 1;
                                                        setQuantityOrder(arr)
                                                        updateQuantityProduct({ id: product?.id, quantity: 1 })
                                                    }
                                                    else {
                                                        if (Number(e.target.value) > product?.quantity) {
                                                            arr = [...quantityOrder];
                                                            arr[index] = product?.quantity;
                                                            setQuantityOrder(arr)
                                                            updateQuantityProduct({ id: product?.id, quantity: arr[index] })
                                                            const showToastMessage = () => {
                                                                toast.error("Số lượng hàng còn lại không đủ!", {
                                                                    position: toast?.POSITION?.TOP_RIGHT,
                                                                });
                                                            };
                                                            showToastMessage();
                                                        }
                                                        else {
                                                            arr = [...quantityOrder];
                                                            arr[index] = Number(e.target.value)
                                                            setQuantityOrder(arr)
                                                            updateQuantityProduct({ id: product?.id, quantity: arr[index] })
                                                        }
                                                    }
                                                }}
                                                name="updates[]"
                                                min="1"
                                                value={
                                                    quantityOrder[index]
                                                }
                                                className="item-quantity text-center border w-10" />
                                            <button
                                                type="button"
                                                className="btn-qtyplus border w-6"
                                                onClick={() => {
                                                    if (quantityOrder[index] >= product?.quantity) {
                                                        arr = [...quantityOrder];
                                                        arr[index] = product?.quantity;
                                                        setQuantityOrder(arr)
                                                        updateQuantityProduct({ id: product?.id, quantity: arr[index] })
                                                        const showToastMessage = () => {
                                                            toast.error("Số lượng hàng còn lại không đủ!", {
                                                                position: toast?.POSITION?.TOP_RIGHT,
                                                            });
                                                        };
                                                        showToastMessage();
                                                    }
                                                    else {
                                                        arr = [...quantityOrder];
                                                        arr[index] = quantityOrder[index] + 1;
                                                        setQuantityOrder(arr);
                                                        updateQuantityProduct({ id: product?.id, quantity: arr[index] })
                                                    }
                                                }}
                                            >+</button>
                                        </div>
                                        <div className="item_price-total float-md-right mt-2 mt-md-0">
                                            <p className="m-0">
                                                <span className="text font-weight-normal">Thành tiền | Subtotal :</span>
                                                <span className="line-item-total font-weight-bold">{(product?.salePrice * quantityOrder[index]).toLocaleString('en-US')}đ</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <a
                                    className="px-1"
                                    href="/shop-cart"
                                    onClick={() => removeProduct({ id: product?.id })}
                                    title="Xóa sản phẩm này"
                                    aria-label="Xóa sản phẩm này">
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </a>
                            </div >
                        )
                    })}
                </div>
                <div className="shop-cart__checkout w-1/3">
                    {OrderSumary({ products, quantityOrder, totalPrice })}
                </div>
            </>
        )
}

function OrderSumary({ totalPrice }) {

    return (
        <div className="wrap-order-summary">
            <div className="order-cart-block p-3 border">
                <h2 className="order-title font-bold text-xl">Thông tin đơn hàng<br></br></h2>
                <div className="order-total my-5 border-y p-5">
                    <p className="flex justify-between font-bold text-md">
                        Tổng tiền | Subtotal :
                        <span className="text-red-500">
                            {(totalPrice).toLocaleString('en-US')}đ
                        </span>
                    </p>
                </div>
                <div className="order-short-description">
                    <p className="mb-2">Nhấn thanh toán để thanh toán ngay</p>
                </div>
                <div className="order-action-checkout  bg-red-500 hover:bg-red-400  text-center">
                    <Link href="/checkout" className="checkout-btn text-white font-bold block w-full h-full py-4">Thanh toán | Checkout</Link>
                </div>
                <div className="back-home py-5">
                    <Link className="countine_order_cart text-center hover:text-blue-300 font-bold" href="/" title="Tiếp tục mua hàng"><i className="fa fa-reply mr-2"></i>Tiếp tục mua hàng</Link>
                </div>
            </div>
        </div>
    );
}

export default function ShopCart() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    const [shopCarts, setShopCarts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${Api()}/shop-cart/user/${user?.id}`)
            .then(response => response.json())
            .then(_shopCarts => setShopCarts(_shopCarts));
    }, []);
    useEffect(() => {
        fetch(`${Api()}/products/user/${user?.id}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            });
    }, []);

    return (
        <div className="shop-cart min-h-dvh">
            {Scrumb()}
            <div className="shop-cart__title text-3xl font-bold text-center p-5 border-b">Giỏ hàng của bạn / Your shopping cart</div>
            <div className="shop-cart__container w-4/5 m-auto p-4 flex">
                {ShopCartItem({ products })}
            </div>
        </div >
    )
}