import Link from "next/link";
import Image from 'next/image'

export default function Header() {
    return (
        <header className="header">
            <div className="header-top bg-slate-200">
                <div className="container flex p-1 w-4/5 m-auto">
                    <span className="header-top__item flex mx-3">
                        <svg className="header-top__icon" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
                                <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path>
                                <path opacity="0.5" d="M15.1007 15.0272L14.5569 14.5107L15.1007 15.0272ZM15.5562 14.5477L16.1 15.0642H16.1L15.5562 14.5477ZM17.9728 14.2123L17.5987 14.8623H17.5987L17.9728 14.2123ZM19.8833 15.312L19.5092 15.962L19.8833 15.312ZM20.4217 18.7584L20.9655 19.2749L20.4217 18.7584ZM19.0011 20.254L18.4573 19.7375L19.0011 20.254ZM17.6763 20.9631L17.7499 21.7095L17.6763 20.9631ZM7.81536 16.4752L8.35915 15.9587L7.81536 16.4752ZM3.00289 6.96594L2.25397 7.00613L2.25397 7.00613L3.00289 6.96594ZM9.47752 8.50311L10.0213 9.01963H10.0213L9.47752 8.50311ZM9.63424 5.6931L10.2466 5.26012L9.63424 5.6931ZM8.37326 3.90961L7.76086 4.3426V4.3426L8.37326 3.90961ZM5.26145 3.60864L5.80524 4.12516L5.26145 3.60864ZM3.69185 5.26114L3.14806 4.74462L3.14806 4.74462L3.69185 5.26114ZM11.0631 13.0559L11.6069 12.5394L11.0631 13.0559ZM15.6445 15.5437L16.1 15.0642L15.0124 14.0312L14.5569 14.5107L15.6445 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4573 19.7375L19.5449 20.7705L20.9655 19.2749L19.8779 18.2419ZM17.6026 20.2167C16.1676 20.3584 12.4233 20.2375 8.35915 15.9587L7.27157 16.9917C11.7009 21.655 15.9261 21.8895 17.7499 21.7095L17.6026 20.2167ZM8.35915 15.9587C4.48303 11.8778 3.83285 8.43556 3.75181 6.92574L2.25397 7.00613C2.35322 8.85536 3.1384 12.6403 7.27157 16.9917L8.35915 15.9587ZM9.7345 9.32159L10.0213 9.01963L8.93372 7.9866L8.64691 8.28856L9.7345 9.32159ZM10.2466 5.26012L8.98565 3.47663L7.76086 4.3426L9.02185 6.12608L10.2466 5.26012ZM4.71766 3.09213L3.14806 4.74462L4.23564 5.77765L5.80524 4.12516L4.71766 3.09213ZM9.1907 8.80507C8.64691 8.28856 8.64622 8.28929 8.64552 8.29002C8.64528 8.29028 8.64458 8.29102 8.64411 8.29152C8.64316 8.29254 8.64219 8.29357 8.64121 8.29463C8.63924 8.29675 8.6372 8.29896 8.6351 8.30127C8.63091 8.30588 8.62646 8.31087 8.62178 8.31625C8.61243 8.32701 8.60215 8.33931 8.59116 8.3532C8.56918 8.38098 8.54431 8.41512 8.51822 8.45588C8.46591 8.53764 8.40917 8.64531 8.36112 8.78033C8.26342 9.0549 8.21018 9.4185 8.27671 9.87257C8.40742 10.7647 8.99198 11.9644 10.5193 13.5724L11.6069 12.5394C10.1793 11.0363 9.82761 10.1106 9.76086 9.65511C9.72866 9.43536 9.76138 9.31957 9.77432 9.28321C9.78159 9.26277 9.78635 9.25709 9.78169 9.26437C9.77944 9.26789 9.77494 9.27451 9.76738 9.28407C9.76359 9.28885 9.75904 9.29437 9.7536 9.30063C9.75088 9.30375 9.74793 9.30706 9.74476 9.31056C9.74317 9.31231 9.74152 9.3141 9.73981 9.31594C9.73896 9.31686 9.73809 9.31779 9.7372 9.31873C9.73676 9.3192 9.73608 9.31992 9.73586 9.32015C9.73518 9.32087 9.7345 9.32159 9.1907 8.80507ZM10.5193 13.5724C12.0422 15.1757 13.1923 15.806 14.0698 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4022 15.7387 15.4823 15.6819C15.5223 15.6535 15.5556 15.6266 15.5824 15.6031C15.5959 15.5913 15.6077 15.5803 15.618 15.5703C15.6232 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6367 15.5518 15.6387 15.5497C15.6397 15.5487 15.6407 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6431 15.5452C15.6438 15.5444 15.6445 15.5437 15.1007 15.0272C14.5569 14.5107 14.5576 14.51 14.5583 14.5093C14.5585 14.509 14.5592 14.5083 14.5596 14.5078C14.5605 14.5069 14.5614 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5674 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.583 14.4846 14.5885 14.4796 14.5933 14.4754C14.6028 14.467 14.6099 14.4616 14.6145 14.4584C14.6239 14.4517 14.6229 14.454 14.6102 14.459C14.5909 14.4666 14.5 14.4987 14.3103 14.4679C13.9077 14.4025 13.0391 14.0472 11.6069 12.5394L10.5193 13.5724ZM8.98565 3.47663C7.97206 2.04305 5.94384 1.80119 4.71766 3.09213L5.80524 4.12516C6.32808 3.57471 7.24851 3.61795 7.76086 4.3426L8.98565 3.47663ZM3.75181 6.92574C3.73038 6.52644 3.90425 6.12654 4.23564 5.77765L3.14806 4.74462C2.61221 5.30877 2.20493 6.09246 2.25397 7.00613L3.75181 6.92574ZM18.4573 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.7499 21.7095C18.497 21.6357 19.1016 21.2373 19.5449 20.7705L18.4573 19.7375ZM10.0213 9.01963C10.9889 8.00095 11.0574 6.40678 10.2466 5.26012L9.02185 6.12608C9.44399 6.72315 9.37926 7.51753 8.93372 7.9866L10.0213 9.01963ZM19.5092 15.962C20.33 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2704 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8861 13.1113 15.0124 14.0312L16.1 15.0642Z" fill="#1C274C">
                                </path>
                            </g>
                        </svg>
                        <a className="header-top__link text-sm" href="tel:0862552433" aria-label="Gọi đến số 0862552433">0862552433</a>
                    </span>
                    <span className="header-top__item flex mx-3">
                        <svg className="header-top__icon" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2" stroke-linecap="round">
                                </rect>
                            </g>
                        </svg>
                        <Link className="header-top__link text-sm" href="maito:{{ $email }}" aria-label="Gửi mail đến {{ $email }}">ducle1701work@gmail.com</Link>
                    </span>
                    <span className="header-top__item flex mx-3">
                        <svg className="header-top__icon" fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z">
                                </path>
                            </g>
                        </svg>
                        <Link className="header-top__link text-sm" href="#" aria-label="Địa chủ {{ $address }}">Vũ Bản, Bình Lục, Hà Nam</Link>
                    </span>
                </div>
            </div>
            <div className="header-main flex justify-between py-2 w-4/5 m-auto">
                <div className="header-main__logo flex justify-items-center items-center">
                    <Link href="/">
                        <img className="logo-image"
                            src="https://webadmin.beeart.vn/upload/image/20220629/6379211571097799404175786.jpg"
                            width={100}
                            height={100}
                            alt="Picture of the author" />
                    </Link>
                </div>
                <div className="search-form flex justify-items-center items-center w-1/3">
                    <form className="relative w-full" role="search" method="get" action="/search">
                        <input type="text" name="keyWord" className="search-form__input border p-2 w-full" placeholder="Nhập từ khoá tìm kiếm..." />
                        <button type="submit" value="Tìm kiếm" aria-label="Tìm kiếm">
                            <svg className="header-top__icon absolute top-0  bg-blue-300 p-2 border" width="41px" height="42px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </g>
                            </svg>
                        </button>
                    </form>
                </div>
                <div className="header-main__action flex">
                    <div className="header-main__action__item flex justify-items-center items-center mx-3">
                        <div className="header-main__action__item__icon">
                            <svg className="text-blue-300" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                        <div className="header-main__action__item__text text-sm">
                            <Link className="hover:text-blue-300" href="/">Đăng nhập</Link><br></br>
                            <Link className="hover:text-blue-300" href="/">Đăng ký</Link>
                        </div>
                    </div>
                    <div className="header-main__action__item  flex justify-items-center items-center mx-3">
                        <div className="header-main__action__item__icon">
                            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#1C274C" stroke-width="1.5"></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#1C274C" stroke-width="1.5"></path> <path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                        </div>
                        <div className="header-main__action__item__text">
                            <Link className="hover:text-blue-300" href="/">Giỏ hàng</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom bg-blue-300">
                <div className="container w-4/5 m-auto">
                    <div className="header-bottom__menu">
                        <ul className="menu flex font-bold">
                            <li className="menu-item py-3 px-3 hover:text-white">
                                <Link href="/" className="">
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="menu-item py-3 px-3 hover:text-white">
                                <Link href="/" className="">
                                    Sản phẩm
                                </Link>
                            </li>
                            <li className="menu-item py-3 px-3 hover:text-white">
                                <Link href="/" className="">
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- header mobile --> */}
            {/* <div className="header-mobile d-md-none container-fluid py-2 shadow-sm">
                <div className="header-mobile-top d-flex justify-content-between py-2">
                    <div className="header-mobile-top__canvas">
                        <button className="btn .bg-light fs-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title color-1 fw-1" id="offcanvasRightLabel">Danh mục</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="menu-mobile">
                                    <li className="menu-mobile-item py-3">
                                        <a href="/" className="text-decoration-none color-1">
                                            Trang chủ
                                        </a>
                                    </li>
                                    <li className="menu-mobile-item py-3">
                                        <a href="/products" className="text-decoration-none color-1">
                                            Sản phẩm
                                        </a>
                                    </li>
                                    <li className="menu-mobile-item py-3">
                                        <a href="/contact" className="text-decoration-none color-1">
                                            Liên hệ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header-mobile-top__logo">
                        <a href="/">
                            <img className="header-mobile-logo" src="{{ $logo }}" alt="logo" />
                        </a>
                    </div>
                    <div className="header-mobile-top__item ms-3">
                        <div className="header-mobile-top__item-title text-center">
                            <a href="/contact" className="header-top__icon text-decoration-none" aria-label="Contact">
                                <i className="fa-solid fa-phone-volume color-1 fs-5"></i>
                            </a>
                            <span className="d-none d-sm-inline">Liên hệ</span>
                        </div>
                        <div>
                            <a href=" tel:{{ $phone }}" className="fs-8 color-9 text-decoration-none text link-text">{{ $phone }}</a>
                        </div>
                    </div>
                </div>
                <div className="header-mobile-bottom position-relative">
                    <form className="mb-0 rounded-6 overflow-hidden" role="search" method="get" action="/search">
                        <input type="text" name="keyWord" className="py-2 px-4 rounded-6 border border-color-14 fs-7 w-100" placeholder="Nhập từ khoá tìm kiếm..." />
                        <button type="submit" value="Tìm kiếm" className="position-absolute top-50 end-0 translate-middle-y border-0 me-3 bg-transparent" aria-label="Tìm kiếm">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div> */}
        </header>

    )
}