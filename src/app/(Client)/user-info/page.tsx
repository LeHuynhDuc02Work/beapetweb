'use client'
import Link from "next/link"

function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> /
                <span className="font-bold"> User - Info</span>
            </p>
        </div>
    )
}

export function UserInfoMenu() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);

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
}

function UserInfoItem() {
    const userJSON = localStorage.getItem('user');
    const user = JSON.parse(userJSON);

    return (
        <>
            <div className="user-info__item">
                <p>Username: <span className="font-bold">{user?.userName}</span></p>
            </div>
            <div className="user-info__item">
                <p>Email: <span className="font-bold">{user?.email}</span></p>
            </div>
        </>
    );
}

export default function UserInfo() {
    if (!localStorage.getItem('user')) {
        window.location.href = "/";
    }
    else
        return (
            <>
                {Scrumb()}
                <div className="user-info__container flex w-4/5 m-auto  px-5 py-2 border-b min-h-96">
                    {UserInfoMenu()}
                    <div className="user-info__content p-10 border ">
                        {UserInfoItem()}
                    </div>
                </div>
            </>

        )
}