import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Api from "@/app/api";
import Image from 'next/image'
function Product({ cateId }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${Api()}/category/${cateId}/products/?page=1&pageSize=5`)
            .then(response => response.json())
            .then(product => setProducts(product));
    }, []);

    return (
        <>
            {products.map((product) => (
                <div className="product-item border w-1/5 m-2" >
                    <Link href={{
                        pathname: '/product-detail',
                        query: { id: `${product.id}` },
                    }}>
                        <div className="product-item__image">
                            <Image
                                src={'/images/' + product.image}
                                className="w-full"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className="product-item__info w-4/5 mx-auto">
                            <h1 className="product-item__info__name text-xl font-medium my-5">{product.name}</h1>
                            <div className="product-item__price flex justify-between">
                                <h1 className="product-item__info__newPrice font-bold leading-4 my-2 text-blue-300">
                                    {(product.salePrice).toLocaleString('en-US')}đ

                                </h1>
                                <h1 className="product-item__info__price line-through font-bold leading-4 my-2 text-red-500">
                                    {(product.price).toLocaleString('en-US')}đ
                                </h1>
                            </div>
                        </div>
                    </Link>
                </div >
            ))
            }
        </>
    )
}

export default function CategoryProduct() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`${Api()}/categories/?page=1&pageSize=8`)
            .then(response => response.json())
            .then(categories => setCategories(categories));
    }, []);
    return (
        <>
            {categories.map((category) => {
                if (category.quantity > 0)
                    return (
                        <div className="category-product w-4/5 m-auto my-10">
                            <div className="category-product__title text-3xl font-bold my-10"><h1>{category.name}</h1></div>
                            <div className="category-product__list flex justify-center flex-wrap">
                                <Product cateId={category.id} />
                            </div>
                        </div>
                    )
                else
                    return null;
            }
            )}
        </>

    )
}