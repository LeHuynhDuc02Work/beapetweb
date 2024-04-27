import Link from "next/link"
function Scrumb() {
    return (
        <div className="scrumb py-2 bg-slate-100">
            <p className="px-5 font-medium">
                <Link className="hover:text-blue-300" href="/">Home</Link> / <span className="font-bold">Cart</span>
            </p>
        </div>
    )
}

function ShopCartItem() {
    return (
        <div className="shop-cart__item border-b w-11/12 flex py-5">
            <div className="shop-cart__item-image mr-4">
                <Link href="/product-detail" aria-label="san pham 1" className="">
                    <img src="//product.hstatic.net/1000356051/product/1_999693bc366c457086570e3731c54ca0_compact.jpg " alt="Pate mèo KitCat Petite Pouch Classic Chicken 70g - Hộp 12 gói - Vị Gà hầm Petmall" />
                </Link>
            </div>
            <div className="shop-cart__item-info">
                <div className="name-price">
                    <Link href="/product-detail" className="item-name">
                        <h3 className="">Pate mèo KitCat Petite Pouch Classic Chicken 70g - Hộp 12 gói - Vị Gà hầm Petmall</h3>
                    </Link>
                    <div className="line-item_price mb-2">
                        <span className="price"><strong>249,000₫</strong></span>
                    </div>
                </div>

                <div className="quantity-price-total flex justify-between mt-5">
                    <div className="item_quantity product-quantity qty-click d-inline-block">
                        <button type="button" className="btn-qtyminus border w-6">-</button>
                        <input type="text" name="updates[]" min="1" id="updates_1122110893" data-price="24900000" value="5" className="item-quantity text-center border w-10" />
                        <button type="button" className="btn-qtyplus border w-6">+</button>
                    </div>
                    <div className="item_price-total float-md-right mt-2 mt-md-0">
                        <p className="m-0">
                            <span className="text font-weight-normal">Thành tiền | Subtotal :</span>
                            <span className="line-item-total font-weight-bold">1,245,000₫</span>
                        </p>
                    </div>
                </div>
            </div>

            <Link className="hidden" href="/cart/change?line=1&amp;quantity=0" title="Xóa sản phẩm này" aria-label="Xóa sản phẩm này">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
            </Link>
        </div>
    )
}

function OrderSumary() {
    return (
        <div className="wrap-order-summary">
            <div className="order-cart-block p-3 border">
                <h2 className="order-title font-bold text-xl">Thông tin đơn hàng<br></br></h2>
                <div className="order-total my-5 border-y p-5">
                    <p className="flex justify-between font-bold text-md">
                        Tổng tiền | Subtotal :<span className="text-red-500">1,637,000₫</span>
                    </p>
                </div>
                <div className="order-short-description">
                    <p className="mb-2">Nhấn thanh toán để thanh toán ngay</p>
                </div>
                <div className="order-action-checkout  bg-red-500  text-center py-4">
                    <Link href="#" className="checkout-btn text-white font-bold">Thanh toán | Checkout</Link>
                </div>
                <div className="back-home py-5">
                    <Link className="countine_order_cart text-center hover:text-blue-300 font-bold" href="/" title="Tiếp tục mua hàng"><i className="fa fa-reply mr-2"></i>Tiếp tục mua hàng</Link>
                </div>
            </div>
        </div>
    );
}

export default function ShopCart() {
    return (
        <div className="shop-cart min-h-dvh">
            {Scrumb()}
            <div className="shop-cart__title text-3xl font-bold text-center p-5 border-b">Giỏ hàng của bạn / Your shopping cart</div>
            <div className="shop-cart__container w-4/5 m-auto p-4 flex">
                <div className="shop-cart__content">
                    {ShopCartItem()}
                    {ShopCartItem()}
                    {ShopCartItem()}
                    {ShopCartItem()}
                </div>
                <div className="shop-cart__checkout w-1/3">
                    {OrderSumary()}
                </div>
            </div>
        </div>
    )
}