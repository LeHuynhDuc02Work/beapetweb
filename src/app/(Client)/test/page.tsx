"use client"
import api from "@/app/api";

export default function Test() {
    return (
        <div>
            <input className="border" id="file" type="file" />
            <button className="border" type="button"
                onClick={() => {
                    var html = document.getElementById('file');
                    const formData = new FormData();
                    formData.append('fileImage', html?.files[0]);
                    console.log(`${api}/upload`)
                    fetch("https://localhost:7012/api/BeaShop/upload", {
                        method: 'POST',
                        body: formData,
                    })
                }}
            >Button</button>

        </div>
    )
}