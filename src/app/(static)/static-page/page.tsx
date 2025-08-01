import CryptoCard from "@/components/static/CryptoCard";
import Navbar from "@/components/static/Navbar";
import Table from "@/components/static/Table";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Responsive Static Page",
    description: "Responsive Static Page",
};

export default function StaticPage(){
    const dummyCryptoCard = [
        {label: "TKO/IDR", price: "Rp 5.261,3", volume: "2.258 IDR", percent: "-3.5%", isUp: false},
        {label: "BTC/IDR", price: "Rp 3.261,3", volume: "2.258 IDR", percent: "3.5%", isUp: true},
        {label: "ETH/IDR", price: "Rp 2.261,3", volume: "2.258 IDR", percent: "-3.5%", isUp: false},
        {label: "USDT/IDR", price: "Rp 1.261,3", volume: "2.258 IDR", percent: "3.5%", isUp: false},
    ]
    return (
        <div className="max-w-full mx-auto">
            <Navbar />
            <div className="font-sans min-h-screen px-6 md:px-8 mx-auto my-10 md:my-20">
                <h1 className="text-[18px] md:text-[40px] font-bold">
                    Pasar
                </h1>
                <p className="text-[12px] md:text-[16px] mt-2">
                    Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
                </p>
                <div className="mt-10">
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {dummyCryptoCard.map((item, index) => (
                            <CryptoCard key={index} label={item.label} price={parseFloat(item.price.replace("Rp ", "").replace(".", "").replace(",", "."))} volume={parseFloat(item.volume.replace(" IDR", "").replace(".", "").replace(",", "."))} percent={parseFloat(item.percent.replace("%", ""))} isUp={item.isUp} />
                        ))}
                    </div>
                </div>
                <div className="mt-10">
                    <Table />
                </div>
            </div>
        </div>
    )
}