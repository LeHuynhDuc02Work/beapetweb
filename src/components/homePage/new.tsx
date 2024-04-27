import Link from "next/link";

function newItem() {
    return (
        <div className="new__item w-1/5 m-2 border">
            <div className="new-item__image">
                <img className="w-full" src="https://img6.thuthuatphanmem.vn/uploads/2022/01/27/anh-thu-cung-cute_014114596.jpg" alt="anh san pham" />
            </div>
            <div className="new-item__info mx-auto p-3">
                <h1 className="new-item__info__name text-xl font-medium my-2">Bài viết 1</h1>
                <div className="new-item__shortContent flex justify-between">
                    <p className="">Chua có gì ở đây cả ahahh aha hah ah ahah ahh ahaha hahah</p>
                </div>
                <div className="new-item-button my-2">
                    <Link href="/new-detail" className="hover:text-blue-300">Xem chi tiết</Link>
                </div>
            </div>
        </div>
    );
}

export default function New() {
    return (
        <div className="new w-4/5 m-auto my-10">
            <div className="new__title text-3xl font-bold my-10"><h1>TIN TỨC</h1></div>
            <div className="new__container flex flex-wrap justify-center">
                {newItem()}
                {newItem()}
                {newItem()}
                {newItem()}
                {newItem()}
                {newItem()}
            </div>
        </div>
    );
}