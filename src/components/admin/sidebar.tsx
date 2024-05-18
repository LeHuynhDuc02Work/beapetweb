"use client"
import Link from "next/link";

function sidebarItem() {
    return (
        <>
            <ul className="admin__sidebar-menu-list">
                <li className="admin__sidebar-menu-item text-lg hover:bg-gray-100 my-1 rounded-md border">
                    <Link href="/admin" className="admin__sidebar-menu-link flex py-4">
                        <svg className="admin__sidebar-menu-icon mx-4 mt-1" fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M352.163,163.115L198.919,9.871c-10.449-10.449-27.389-10.449-37.838,0L7.837,163.115c-7.652,7.652-9.94,19.16-5.8,29.158 c4.142,9.998,13.898,16.516,24.719,16.516h20.762v114.574c0,19.112,15.493,34.603,34.603,34.603h195.758 c19.11,0,34.603-15.492,34.603-34.603V208.789h20.762c10.821,0,20.578-6.519,24.719-16.516 C362.103,182.275,359.815,170.767,352.163,163.115z M220.431,307.785h-80.862v-45.583c0-22.33,18.102-40.431,40.431-40.431 s40.431,18.1,40.431,40.431V307.785z"></path> </g></svg>
                        <span className="admin__sidebar-menu-text font-bold">
                            THỐNG KÊ
                        </span>
                    </Link>
                </li>
                <li className="admin__sidebar-menu-item text-lg hover:bg-gray-100 my-1 rounded-md border">
                    <Link href="/admin/product" className="admin__sidebar-menu-link flex py-4">
                        <svg className="admin__sidebar-menu-icon mx-4 mt-1" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M22 3H2v6h1v11c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zm-2-9v6h-2v-2.59l-3.29 3.29-1.41-1.41L13.59 13H11v-2h6z"></path> </g> </g></svg>
                        <span className="admin__sidebar-menu-text font-bold">
                            SẢN PHẨM
                        </span>
                    </Link>
                </li>
                <li className="admin__sidebar-menu-item text-lg hover:bg-gray-100 my-1 rounded-md border">
                    <Link href="/admin/category" className="admin__sidebar-menu-link flex py-4">
                        <svg className="admin__sidebar-menu-icon mx-4 mt-1" fill="#000000" width="20px" height="20px" viewBox="0 0 35 35" data-name="Layer 2" id="e73e2821-510d-456e-b3bd-9363037e93e3" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.933,15.055H3.479A3.232,3.232,0,0,1,.25,11.827V3.478A3.232,3.232,0,0,1,3.479.25h8.454a3.232,3.232,0,0,1,3.228,3.228v8.349A3.232,3.232,0,0,1,11.933,15.055ZM3.479,2.75a.73.73,0,0,0-.729.728v8.349a.73.73,0,0,0,.729.728h8.454a.729.729,0,0,0,.728-.728V3.478a.729.729,0,0,0-.728-.728Z"></path><path d="M11.974,34.75H3.52A3.233,3.233,0,0,1,.291,31.521V23.173A3.232,3.232,0,0,1,3.52,19.945h8.454A3.232,3.232,0,0,1,15.2,23.173v8.348A3.232,3.232,0,0,1,11.974,34.75ZM3.52,22.445a.73.73,0,0,0-.729.728v8.348a.73.73,0,0,0,.729.729h8.454a.73.73,0,0,0,.728-.729V23.173a.729.729,0,0,0-.728-.728Z"></path><path d="M31.522,34.75H23.068a3.233,3.233,0,0,1-3.229-3.229V23.173a3.232,3.232,0,0,1,3.229-3.228h8.454a3.232,3.232,0,0,1,3.228,3.228v8.348A3.232,3.232,0,0,1,31.522,34.75Zm-8.454-12.3a.73.73,0,0,0-.729.728v8.348a.73.73,0,0,0,.729.729h8.454a.73.73,0,0,0,.728-.729V23.173a.729.729,0,0,0-.728-.728Z"></path><path d="M27.3,15.055a7.4,7.4,0,1,1,7.455-7.4A7.437,7.437,0,0,1,27.3,15.055Zm0-12.3a4.9,4.9,0,1,0,4.955,4.9A4.935,4.935,0,0,0,27.3,2.75Z"></path></g></svg>
                        <span className="admin__sidebar-menu-text font-bold">
                            DANH MỤC
                        </span>
                    </Link>
                </li>
                <li className="admin__sidebar-menu-item text-lg hover:bg-gray-100 my-1 rounded-md border">
                    <Link href="/admin/brand" className="admin__sidebar-menu-link flex py-4">
                        <svg className="admin__sidebar-menu-icon mx-4 mt-1" fill="#000000" width="20px" height="20px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m 12.937649,5.689685 c -0.11625,-0.68661 -0.388914,-1.33016 -0.810638,-1.91282 -0.476314,-0.65811 -1.127922,-1.20761 -1.884324,-1.58903 -0.7645339,-0.38552 -1.6178829,-0.58938 -2.4678369,-0.58938 -0.239783,0 -0.481475,0.0163 -0.71843,0.0482 -0.992367,0.13407 -1.968118,0.54689 -2.747572,1.16243 -0.878239,0.69354 -1.444993,1.58521 -1.638884,2.57878 -0.05777,0.29537 -0.08238,0.62212 -0.106209,0.93806 -0.03734,0.49456 -0.07594,1.00595 -0.233207,1.34013 -0.107482,0.2284 -0.267856,0.3805 -0.701389,0.3805 -0.238581,0 -0.456585,0.13492 -0.563077,0.34847 -0.10642098,0.21355 -0.08294,0.46889 0.0606,0.65931 0.653164,0.8665 1.505522,1.39133 2.402923,1.70755 -0.04087,0.12346 -0.06385,0.25491 -0.06385,0.39209 0,0.68902 0.558551,1.24757 1.247566,1.24757 0.671972,0 1.218291,-0.53161 1.244949,-1.19701 0.292534,0.0159 1.685483,0.0197 1.840836,0.0153 0.03444,0.65825 0.577502,1.18166 1.244243,1.18166 0.688943,0 1.2474949,-0.55848 1.2474949,-1.24757 0,-0.15705 -0.03026,-0.30674 -0.08316,-0.44513 0.489183,-0.23794 0.95093,-0.55904 1.353845,-0.94576 0.561875,-0.53918 0.974265,-1.1753 1.192764,-1.83964 0.245865,-0.7477 0.307667,-1.4993 0.183355,-2.23378 m -8.2243299,5.876 c -0.227338,0 -0.411684,-0.18421 -0.411684,-0.41169 0,-0.22733 0.184346,-0.41168 0.411684,-0.41168 0.227408,0 0.411683,0.18435 0.411683,0.41168 0,0.22748 -0.184275,0.41169 -0.411683,0.41169 m 4.330028,0 c -0.227409,0 -0.411754,-0.18421 -0.411754,-0.41169 0,-0.22733 0.184345,-0.41168 0.411754,-0.41168 0.227408,0 0.411683,0.18435 0.411683,0.41168 7.1e-5,0.22748 -0.184275,0.41169 -0.411683,0.41169 m 3.1132919,-3.83873 c -0.360276,1.09533 -1.309862,1.9998 -2.3218169,2.46289 -0.215458,-0.17706 -0.490951,-0.28327 -0.791405,-0.28327 -0.484233,0 -0.903058,0.2762 -1.109748,0.67933 -0.210438,0.009 -1.777338,0.003 -2.120219,-0.0202 -0.210155,-0.39223 -0.623818,-0.65917 -1.100061,-0.65917 -0.316788,0 -0.605221,0.11894 -0.825134,0.31354 -0.852358,-0.27543 -1.65734,-0.74608 -2.259025,-1.54449 1.779176,0 1.428092,-1.98827 1.658259,-3.16731 0.350659,-1.79693 2.12835,-3.00518 3.853148,-3.23817 0.212135,-0.0286 0.42427,-0.0426 0.634213,-0.0426 2.8347599,7e-5 5.3581049,2.53098 4.3817889,5.49938 m -4.4056189,0.87435 c -1.023692,0 -1.945914,-0.67119 -2.115056,-1.54978 -0.03281,-0.17056 0.07891,-0.33553 0.249471,-0.36834 0.170627,-0.0329 0.335527,0.0789 0.368337,0.24947 0.09942,0.51648 0.717865,1.06039 1.542221,1.03882 0.858722,-0.0225 1.4259,-0.53599 1.542433,-1.03154 0.03981,-0.16907 0.209378,-0.27379 0.378308,-0.23419 0.169213,0.0398 0.274007,0.20916 0.234197,0.37823 -0.09518,0.40454 -0.35568,0.77932 -0.733634,1.05545 -0.393652,0.28779 -0.879511,0.44718 -1.404757,0.46104 -0.02051,6.3e-4 -0.04108,8.4e-4 -0.06152,8.4e-4 m 2.037132,-3.23958 c 0,0.33369 -0.270542,0.60423 -0.604231,0.60423 -0.333617,0 -0.60416,-0.27054 -0.60416,-0.60423 0,-0.33369 0.270543,-0.60409 0.60416,-0.60409 0.333689,0 0.604231,0.27033 0.604231,0.60409 m -2.822597,0 c 0,0.33369 -0.270472,0.60423 -0.60416,0.60423 -0.333618,0 -0.60416,-0.27054 -0.60416,-0.60423 0,-0.33369 0.270542,-0.60409 0.60416,-0.60409 0.333688,0 0.60416,0.27033 0.60416,0.60409"></path></g></svg>
                        <span className="admin__sidebar-menu-text font-bold">
                            NHÃN HÀNG
                        </span>
                    </Link>
                </li>
                <li className="admin__sidebar-menu-item text-lg hover:bg-gray-100 my-1 rounded-md border">
                    <Link href="/admin/order" className="admin__sidebar-menu-link flex py-4">
                        <svg className="admin__sidebar-menu-icon mx-4 mt-1" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58579 4.58579C5 5.17157 5 6.11438 5 8V17C5 18.8856 5 19.8284 5.58579 20.4142C6.17157 21 7.11438 21 9 21H15C16.8856 21 17.8284 21 18.4142 20.4142C19 19.8284 19 18.8856 19 17V8C19 6.11438 19 5.17157 18.4142 4.58579C17.8284 4 16.8856 4 15 4H9C7.11438 4 6.17157 4 5.58579 4.58579ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10H15C15.5523 10 16 9.55228 16 9C16 8.44772 15.5523 8 15 8H9ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H9ZM9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H9Z" fill="#222222"></path> </g></svg>
                        <span className="admin__sidebar-menu-text font-bold">
                            ĐƠN HÀNG
                        </span>
                    </Link>
                </li>
                <li className="admin__sidebar-menu-item text-lg hover:bg-gray-100 my-1 rounded-md border">
                    <Link href="/admin/user" className="admin__sidebar-menu-link flex py-4">
                        <svg className="admin__sidebar-menu-icon mx-4 mt-1" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 21C4 17.4735 6.60771 14.5561 10 14.0709M19.8726 15.2038C19.8044 15.2079 19.7357 15.21 19.6667 15.21C18.6422 15.21 17.7077 14.7524 17 14C16.2923 14.7524 15.3578 15.2099 14.3333 15.2099C14.2643 15.2099 14.1956 15.2078 14.1274 15.2037C14.0442 15.5853 14 15.9855 14 16.3979C14 18.6121 15.2748 20.4725 17 21C18.7252 20.4725 20 18.6121 20 16.3979C20 15.9855 19.9558 15.5853 19.8726 15.2038ZM15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        <span className="admin__sidebar-menu-text font-bold">
                            TÀI KHOẢN
                        </span>
                    </Link>
                </li>
                <li className="admin__sidebar-menu-item text-lg hover:bg-gray-100 my-1 rounded-md border">
                    <button className="admin__sidebar-menu-link flex py-4"
                        onClick={() => {
                            localStorage.removeItem('user');
                            window.location.href = '/login-admin';
                        }}
                    >
                        <svg className="admin__sidebar-menu-icon mx-4 mt-1" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L6 12M6 12L8 14M6 12L8 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 21.9827C10.4465 21.9359 9.51995 21.7626 8.87865 21.1213C8.11027 20.3529 8.01382 19.175 8.00171 17M16 21.9983C18.175 21.9862 19.3529 21.8897 20.1213 21.1213C21 20.2426 21 18.8284 21 16V14V10V8C21 5.17157 21 3.75736 20.1213 2.87868C19.2426 2 17.8284 2 15 2H14C11.1715 2 9.75733 2 8.87865 2.87868C8.11027 3.64706 8.01382 4.82497 8.00171 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M3 9.5V14.5C3 16.857 3 18.0355 3.73223 18.7678C4.46447 19.5 5.64298 19.5 8 19.5M3.73223 5.23223C4.46447 4.5 5.64298 4.5 8 4.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                        <span className="admin__sidebar-menu-text font-bold">
                            ĐĂNG XUẤT
                        </span>
                    </button>
                </li>
            </ul >
        </>
    )
}

export default function Sidebar() {
    const userLocal = localStorage.getItem('user');
    const user = JSON.parse(userLocal);
    return (
        <div className="admin__sidebar-content min-h-screen border rounded-md">
            <div className="admin__sidebar-title my-5">
                <h1 className="text-xl font-bold text-center">Xin chào {user?.userName}</h1>
            </div>
            <div className="admin__sidebar-menu w-11/12 mx-auto my-10">
                {sidebarItem()}
            </div>
        </div>
    )
}