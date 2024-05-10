'use client'
import Link from "next/link"

function Scrumb() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> /
                <Link className="hover:text-blue-300" href={"/user-info/?id=" + user?.id}> User - Infor</Link> /
                <span className="font-bold"> Address</span>
            </p>
        </div>
    )
}

export function UserMenu() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);
    if (user != null)
        return (
            <div className="user-infor__menu border rounded-md min-w-52">
                <div>
                    <Link
                        className="about font-bold hover:text-blue-300 hover:bg-gray-100 block px-5 py-2 border-b"
                        href={"/user-info"}
                    >
                        About
                    </Link>

                    <Link
                        className="address font-bold hover:text-blue-300 hover:bg-gray-100 block px-5 py-2 border-b"
                        href={"/user-info/order-address"}
                    >
                        Địa chỉ đặt hàng
                    </Link>

                    <Link
                        className="order font-bold hover:text-blue-300 hover:bg-gray-100 block px-5 py-2 border-b"
                        href={"/user-info/order"}
                    >
                        Đơn hàng
                    </Link>
                </div>
            </div >
        )
    else
        return null;
}

export default function UserAdress() {
    if (!localStorage.getItem('user')) {
        window.location.href = "/";
    }
    return (
        <>
            {Scrumb()}
            <div className="user-info__container flex w-4/5 m-auto  px-5 py-2 border-b min-h-96">
                {UserMenu()}
                <div className="user-info__content">

                </div>
            </div>
        </>

    )
}