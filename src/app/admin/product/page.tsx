import Link from "next/link";
function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/admin">Dashboard</Link> / <span className="font-bold">Product</span>
            </p>
        </div>
    )
}
function ProductItemHeader() {
    return (
        <div className="admin-product__item__header flex justify-between">
            <p>#</p>
            <p>Hình ảnh</p>
            <p>Tên sản phẩm</p>
            <p>Giá bán</p>
            <p>Danh mục</p>
            <p>Thao tác</p>
        </div>
    )
}
function ProductItem() {
    return (
        <tr className="admin-product__item border-b">
            <td></td>
            <td className="admin-product__item__image py-2">
                <img
                    className="m-auto"
                    src="https://img6.thuthuatphanmem.vn/uploads/2022/01/27/anh-thu-cung-cute_014114596.jpg"
                    height={100}
                    width={100}
                    alt="anh san pham"
                />
            </td>
            <td className="admin-product__item__info">
                <h1 className="admin-product__item__info__name">Chó cưng 1</h1>
            </td>
            <td className="admin-product__item__price">120.000đ</td>
            <td className="admin-product__item__category">Chó cưng</td>
            <td className="admin-product__item__action flex justify-center">
                <Link className="mt-4 hover:bg-green-500 rounded-md" href="/admin/product/edit">
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </Link>
                <Link className="mt-4 hover:bg-red-500 rounded-md" href="/admin/product/delete">
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </Link>
            </td>
        </tr >
    );
}

export default function Product() {
    return (
        <div className="admin-product">
            {Scrumb()}
            <div className="new-product__container my-2">
                <Link className="text-center font-bold hover:text-blue-300" href="/admin/product/create">New Product(+)</Link>
            </div>
            <div className="admin-product__container border">
                <table className="text-center">
                    <thead>
                        <tr className="border-b">
                            <th className="px-16 py-5">#</th>
                            <th className="px-16 py-5">Hình ảnh</th>
                            <th className="px-16 py-5">Tên SP</th>
                            <th className="px-16 py-5">Giá bán</th>
                            <th className="px-16 py-5">Danh mục</th>
                            <th className="px-16 py-5">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ProductItem()}
                        {ProductItem()}
                        {ProductItem()}
                    </tbody>
                </table>

            </div>
        </div>
    );
}