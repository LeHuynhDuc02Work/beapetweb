'use client'
import Link from "next/link"
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import Api from "@/app/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiImage from "@/app/apiImage";

function Scrumb() {

    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> /
                <span className="font-bold"> Checkout</span>
            </p>
        </div>
    )
}

function total({ products }) {
    let total = 0;
    products.forEach(product => {
        total += product?.salePrice * product?.quantityShopCart;
    });
    return total;
}

async function CheckoutConfirm({ user, products, addressSelection, paymentSelection }) {
    if (addressSelection == null) {
        const showToastMessage = () => {
            toast.error("Bạn chưa chọn địa chỉ nhận hàng!", {
                position: toast?.POSITION?.TOP_RIGHT,
            });
        };
        showToastMessage();
    }
    else if (paymentSelection == null) {
        const showToastMessage = () => {
            toast.error("Bạn chưa chọn phương thức thanh toán!", {
                position: toast?.POSITION?.TOP_RIGHT,
            });
        };
        showToastMessage();
    }
    else {
        let id = '';
        const response = await fetch(`${Api()}/order/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user?.id,
                addressId: addressSelection.id,
                paymentMethodId: paymentSelection.id,
                totalAmount: total({ products }),
                products: products,
            }),
        })
            .then(response => response.json())
            .then(data => {
                id = data.id;
            });
        if (id != '') {
            window.location.href = `/order-completed/?id=${id}`;
        }
    }
}

function CheckoutProduct({ products }) {
    return (
        <>
            <div className="checkout-product_container border p-4">
                <div className="checkout-product_list">
                    {products.map((product, index) => {
                        return (
                            <div className="checkout-product_item  border-b flex p-2">
                                <div className="checkout-product_item__image  mr-2">
                                    <img
                                        className="rounded-md h-20"
                                        src={apiImage() + product?.image}
                                        alt="product"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="checkout-product_item__info w-full">
                                    <h1 className="checkout-product_item__name font-bold">{product?.name}</h1>
                                    <div className="checkout-product_item__price flex justify-between mt-1 w-full">
                                        <h2 className="block">Số lượng: <span className="font-bold">{product?.quantityShopCart}</span></h2>
                                        <h2 className="block">Tổng tiền: <span className="font-bold">
                                            {(product?.salePrice * product?.quantityShopCart).toLocaleString('en-US')}đ
                                        </span></h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="checkout-product_total my-2">
                    <div>
                        <span className="checkout-product_total__title font-bold">Tổng tiền: </span>
                        <span className="checkout-product_total__price font-bold text-red-500 text-2xl">
                            {(total({ products })).toLocaleString('en-US')}đ
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}

function AddressHandle({ addressSelection }) {
    if (addressSelection == null) {
        return (<>
            <div>
                Chọn địa chỉ nhận hàng!
            </div>
        </>)
    }
    else {
        return (
            <div className="address-customer text-left">
                <h1 className="address-customer__name">Tên người nhận: <span className="font-bold">
                    {addressSelection?.nameCustomer}
                </span></h1>
                <h1 className="address-customer__phone">Số điện thoại: <span className="font-bold">
                    {addressSelection?.phone}
                </span></h1>
                <h1 className="address-customer__address">Địa chỉ:
                    <span className="font-bold">
                        {addressSelection?.address}
                    </span></h1>
            </div>
        )
    }
}

export default function Checkout() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    const [products, setProducts] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [addressSelection, setAddressSelection] = useState(null);
    const [payments, setPayments] = useState([]);
    const [paymentSelection, setPaymentSelection] = useState(null);

    useEffect(() => {
        fetch(`${Api()}/products/user/${user?.id}`)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                if (data.length == 0) {
                    window.location.href = "/";
                }
            });
    }, []);

    useEffect(() => {
        fetch(`${Api()}/addresses/user/${user?.id}`)
            .then(response => response.json())
            .then(data => {
                setAddresses(data);
            });
    }, []);

    useEffect(() => {
        fetch(`${Api()}/payments`)
            .then(response => response.json())
            .then(data => {
                setPayments(data);
            });
    }, []);

    return (
        <div className="checkout">
            {Scrumb()}
            <div className="checkout-container w-4/5 mx-auto mb-20 flex">
                <div className="checkout-info w-1/2">
                    <div className="checkout-info-content border p-4">
                        <h1 className="checkout-address__title font-bold text-3xl">
                            THÔNG TIN GIAO HÀNG
                        </h1>
                        <div className="checkout-address__content my-4">
                            <div className="checkout-address__content-container">
                                <div className="checkout-address__content-title">Địa chỉ nhận hàng</div>
                                {(addresses.length == 0) ? (
                                    <Link className="hover:text-blue-300 text-blue-500 font-bold" href={"/user-info/order-address/create"}>
                                        Thêm địa chỉ nhận hàng!
                                    </Link>
                                ) : (
                                    <Dropdown>
                                        <DropdownTrigger>
                                            <Button
                                                variant="bordered"
                                                className="capitalize  border  p-2 mx-2"
                                            >
                                                {AddressHandle({ addressSelection })}
                                            </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu
                                            className="bg-gray-50"
                                            aria-label="Single selection example"
                                            variant="flat"
                                            disallowEmptySelection
                                            selectionMode="single"
                                        >
                                            {addresses.map((address, index) => {
                                                return (
                                                    <DropdownItem
                                                        className="hover:text-blue-300 cursor-pointer border p-2"
                                                        onClick={
                                                            e => {
                                                                setAddressSelection(address);
                                                            }
                                                        }
                                                        key="Mặc định">
                                                        <div className="address-customer">
                                                            <h1 className="address-customer__name">Tên người nhận: <span className="font-bold">{address?.nameCustomer}</span></h1>
                                                            <h1 className="address-customer__phone">Số điện thoại: <span className="font-bold">{address?.phone}</span></h1>
                                                            <h1 className="address-customer__address">Địa chỉ:
                                                                <span className="font-bold">
                                                                    {address?.address}
                                                                </span></h1>
                                                        </div>
                                                    </DropdownItem>
                                                )
                                            })}
                                        </DropdownMenu>
                                    </Dropdown>
                                )}
                            </div>
                        </div>

                        <div className="checkout-payment my-7">
                            <h1 className="checkout-payment__title">Phương thức thanh toán</h1>
                            {payments.map((payment, index) => {
                                return (
                                    <div className="checkout-payment__content p-2">
                                        <div>
                                            <input
                                                type="radio"
                                                name="rdo_payment"
                                                value="option1"
                                                onChange={
                                                    e => {
                                                        setPaymentSelection(payment);
                                                    }
                                                }
                                            />
                                            <span className="font-bold"> {payment?.name}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="checkout-confirm bg-blue-500 text-white hover:bg-blue-400 font-bold text-xl text-center mt-10">
                            <Button
                                className="checkout-confirm__btn py-3 w-full"
                                onClick={
                                    e => CheckoutConfirm({ user, products, addressSelection, paymentSelection })
                                }
                            >
                                Hoàn tất đơn hàng
                            </Button>
                            <ToastContainer />
                        </div>
                    </div >
                </div>
                <div className="checkout-list-product w-1/2">
                    {CheckoutProduct({ products })}
                </div>
            </div>
        </div>
    );
};
