"use client"
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const MyPage: React.FC = () => {
    const downloadPdf = () => {
        try {
            // Lấy phần tử HTML mà bạn muốn chuyển đổi sang PDF
            const element = document.getElementById('content');

            if (element) {
                // Sử dụng html2canvas để chụp ảnh màn hình của phần tử HTML
                html2canvas(element).then((canvas) => {
                    // Tạo một PDF mới bằng jsPDF
                    const doc = new jsPDF('p', 'mm', 'a4');

                    // Thêm canvas vào PDF
                    const imgData = canvas.toDataURL('image/png');
                    doc.addImage(imgData, 'PNG', 0, 0);

                    // Mở PDF trong cửa sổ mới
                    const pdfUrl = doc.output('bloburl');
                    window.open(pdfUrl);
                });
            }
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <div>
            <h1>My Page</h1>
            <div id="content">
                <p>This is some content that will be converted to PDF.</p>
                <p>You can add more HTML elements here.</p>
                <br></br>
            </div>
            <button onClick={downloadPdf}>Preview PDF</button>
        </div>
    );
};

export default MyPage;