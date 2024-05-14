import React, { useEffect, useState } from 'react';
import Link from "next/link";
import Api from "@/app/api";
import apiImage from '@/app/apiImage';
function Product() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${Api()}/products/?page=1&pageSize=8`)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    return (
        <>
            {data.map((product) => (
                <div className="product-item border w-1/5 m-2" >
                    <Link href={{
                        pathname: '/product-detail',
                        query: { id: `${product.id}` },
                    }}>
                        <div className="product-item__image">
                            <img
                                src={apiImage() + product.image}
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

export default function LatestProduct() {
    return (
        <div className="latest-product w-4/5 mx-auto my-10">
            <h1 className="text-5xl font-bold text-center my-10">Sản phẩm mới nhất</h1>
            <div className="container w-full flex justify-center flex-wrap">
                {Product()}
            </div>
        </div>
    );
}