"use client"
export default function Admin() {
    if (!localStorage.getItem('user')) {
        window.location.href = "/login-admin";
    }
    else {
        const userJSON = localStorage.getItem('user');
        const user = JSON.parse(userJSON);
        if (user?.position != 'admin') {
            window.location.href = "/login-admin";
        }
    }
    return (
        <div className="admin">
            Dashboard
        </div>
    );
}