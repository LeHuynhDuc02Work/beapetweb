import Link from "next/link"

function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> / New-Detail
            </p>
        </div>
    )
}

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
                    <Link href="/new-detail/" className="hover:text-blue-300">Xem chi tiết</Link>
                </div>
            </div>
        </div>
    );
}

export default function NewDetail() {
    return (
        <div className="new-detail">
            <Scrumb />
            <div className="new-detail__container w-4/5 m-auto">
                <h1 className="new-detail__title text-center text-2xl font-bold m-3">NEW DETAIL</h1>
                <div className="new-detail__content">
                    <div className="new-detail__image w-2/3 mx-auto my-5">
                        <img className="w-full  rounded-md" src="https://img6.thuthuatphanmem.vn/uploads/2022/01/27/anh-thu-cung-cute_014114596.jpg" alt="anh san pham" />
                    </div>
                    <div className="new-detail__description my-5 m-auto text-justify">
                        <p>
                            Khi nuôi chó tại chung cư hay bất kể một loài thú cưng nào khác sẽ đều dễ dàng cho các bé về không gian. Bởi chung cư chỉ có duy nhất một mặt sàn nên các bé sẽ được tự do vận động trong nhà một cách thoải mái hơn, hạn chế được bụi bẩn bay vào nhà như ở nhà mặt đất. Bên cạnh đó đây cũng là cơ hội để các bé cún được tiếp xúc với các thành viên trong gia đình giúp tăng tính xã hội hóa.
                        </p>
                    </div>
                </div>
            </div>
            <div className="new w-4/5 m-auto my-10">
                <div className="new__title text-3xl font-bold my-10"><h1>XEM THÊM TIN TỨC</h1></div>
                <div className="new__container flex flex-wrap justify-center">
                    {newItem()}
                    {newItem()}
                    {newItem()}
                    {newItem()}
                    {newItem()}
                    {newItem()}
                </div>
            </div>
        </div>
    )
}