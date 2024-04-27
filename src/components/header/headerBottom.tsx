import Link from "next/link";

function HeaderBottomItem() {
    return (

        <Link href="/category-product" className="">
            <li className="menu-item py-3 px-3 hover:text-black">
                Trang chủ
            </li>
        </Link >
    );
}

function HeaderBottomHome() {
    return (

        <Link href="/" className="">
            <li className="menu-item py-3 px-3 hover:text-black">
                Trang chủ
            </li>
        </Link >
    );
}

export default function HeaderBottom() {
    return (
        <div className="header-bottom bg-blue-300  text-white">
            <div className="container w-4/5 m-auto">
                <div className="header-bottom__menu">
                    <ul className="menu flex font-bold">
                        {HeaderBottomHome()}
                        {HeaderBottomItem()}
                        {HeaderBottomItem()}
                        {HeaderBottomItem()}
                    </ul>
                </div>
            </div>
        </div>
    );
}