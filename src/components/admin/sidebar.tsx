import Link from "next/link";

function sidebarItem() {
    return (
        <>
            <ul className="admin__sidebar-menu-list">
                <li className="admin__sidebar-menu-item text-lg hover:bg-gray-100 my-1 rounded-md border">
                    <Link href="/admin" className="admin__sidebar-menu-link flex py-4">
                        <svg className="admin__sidebar-menu-icon mx-4 mt-1" fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M352.163,163.115L198.919,9.871c-10.449-10.449-27.389-10.449-37.838,0L7.837,163.115c-7.652,7.652-9.94,19.16-5.8,29.158 c4.142,9.998,13.898,16.516,24.719,16.516h20.762v114.574c0,19.112,15.493,34.603,34.603,34.603h195.758 c19.11,0,34.603-15.492,34.603-34.603V208.789h20.762c10.821,0,20.578-6.519,24.719-16.516 C362.103,182.275,359.815,170.767,352.163,163.115z M220.431,307.785h-80.862v-45.583c0-22.33,18.102-40.431,40.431-40.431 s40.431,18.1,40.431,40.431V307.785z"></path> </g></svg>
                        <span className="admin__sidebar-menu-text font-bold">
                            Dashboard
                        </span>
                    </Link>
                </li>
                <li className="admin__sidebar-menu-item text-lg hover:bg-gray-100 my-1 rounded-md border">
                    <Link href="/admin/product" className="admin__sidebar-menu-link flex py-4">
                        <svg className="admin__sidebar-menu-icon mx-4 mt-1" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M22 3H2v6h1v11c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zm-2-9v6h-2v-2.59l-3.29 3.29-1.41-1.41L13.59 13H11v-2h6z"></path> </g> </g></svg>
                        <span className="admin__sidebar-menu-text font-bold">
                            Product
                        </span>
                    </Link>
                </li>
                <li className="admin__sidebar-menu-item text-lg hover:bg-gray-100 my-1 rounded-md border">
                    <Link href="/admin/product" className="admin__sidebar-menu-link flex py-4">
                        <svg className="admin__sidebar-menu-icon mx-4 mt-1" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M22 3H2v6h1v11c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zm-2-9v6h-2v-2.59l-3.29 3.29-1.41-1.41L13.59 13H11v-2h6z"></path> </g> </g></svg>
                        <span className="admin__sidebar-menu-text font-bold">
                            Product
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default function Sidebar() {
    return (
        <div className="admin__sidebar-content min-h-screen border rounded-md">
            <div className="admin__sidebar-title my-5">
                <h1 className="text-xl font-bold text-center">WELCOME TO ADMIN</h1>
            </div>
            <div className="admin__sidebar-menu w-11/12 mx-auto my-10">
                {sidebarItem()}
            </div>
        </div>
    )
}