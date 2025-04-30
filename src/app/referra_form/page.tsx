"use client";

const PDFViewerPage = () => {
    return (
        <div className="w-full h-screen flex flex-col">
            <iframe
                src="/referral.pdf"
                title="Referral Form"
                className="w-full h-full border-none"
            />
            <div className="p-4 text-center">
                <a
                    href="/referral.pdf"
                    download
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Download PDF
                </a>
            </div>
        </div>
    );
};

export default PDFViewerPage;
