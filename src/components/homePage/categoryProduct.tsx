import Link from "next/link"

function Product() {
    return (
        <div className="category-product__item w-1/5 m-2 border">
            <Link href="/product-detail">
                <div className="product-item__image">
                    <img className="w-full" src="https://img6.thuthuatphanmem.vn/uploads/2022/01/27/anh-thu-cung-cute_014114596.jpg" alt="anh san pham" />
                </div>
                <div className="product-item__info w-4/5 mx-auto">
                    <h1 className="product-item__info__name text-xl font-medium my-5">Thú cưng 1</h1>
                    <div className="product-item__price flex justify-between">
                        <h1 className="product-item__info__newPrice font-bold leading-4 my-2 text-blue-300">100000</h1>
                        <h1 className="product-item__info__price line-through font-bold leading-4 my-2 text-red-500">120000</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default function CategoryProduct() {
    return (
        <div className="category-product w-4/5 m-auto my-10">
            <div className="category-product__title text-3xl font-bold my-10"><h1>Chó husky</h1></div>
            <div className="category-product__list flex justify-center flex-wrap">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}