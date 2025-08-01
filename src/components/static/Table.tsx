'use client';
import Image from "next/image";
import { useState } from "react";

export default function Table(){
    const data = [
        {
            pair: "BTC/DAI",
            price: "98,832.93 / Rp 1,612,213,281.72",
            change: "+3.89%",
            highLow: "102,451.34 / Rp 94,288.07",
            marketCap: "Rp 31,953.00T",
            volume: "1.538M",
            isPositive: true,
            isFavorite: true
        },
        {
            pair: "ETH/DAI",
            price: "1,612,213,281.72 / Rp 1,612,213,281.72",
            change: "+3.89%",
            highLow: "102,451.34 / Rp 94,288.07",
            marketCap: "Rp 31,953.00T",
            volume: "1.538M",
            isPositive: false,
            isFavorite: false
        },
        {
            pair: "USDT/DAI",
            price: "1,612,213,281.72 / Rp 1,612,213,281.72",
            change: "+3.89%",
            highLow: "102,451.34 / Rp 94,288.07",
            marketCap: "Rp 31,953.00T",
            volume: "1.538M",
            isPositive: false,
            isFavorite: false
        },
        {
            pair: "USDC/DAI",
            price: "1,612,213,281.72 / Rp 1,612,213,281.72",
            change: "+3.89%",
            highLow: "102,451.34 / Rp 94,288.07",
            marketCap: "Rp 31,953.00T",
            volume: "1.538M",
            isPositive: true,
            isFavorite: false
        },
        {
            pair: "DAI/DAI",
            price: "1,612,213,281.72 / Rp 1,612,213,281.72",
            change: "+3.89%",
            highLow: "102,451.34 / Rp 94,288.07",
            marketCap: "Rp 31,953.00T",
            volume: "1.538M",
            isPositive: true,
            isFavorite: false
        },
    ];

    const [activeTab, setActiveTab] = useState("IDR");
    const tabs = ["IDR", "USD", "BNB", "BTC", "ALTS"];

    return (
        <div className="py-6 text-white min-h-screen">
            <div className="flex items-center gap-5 mb-6">
                <h1 className="text-xl font-bold">Favorit</h1>
                <div className="overflow-x-auto">
                    <div className="flex gap-6 text-sm">
                        {tabs.map((tab) => (
                            <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative pb-1 ${
                                activeTab === tab ? "text-[#E5933A] font-semibold" : "text-[#BCBCBC]"
                            }`}
                            >
                            {tab}
                            {activeTab === tab && (
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#E5933A]" />
                            )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto min-w-full border-black border-spacing-y-4 border-spacing-x-4">
                    <thead className="text-sm border-b-2">
                        <tr>
                            <th>
                                <div className="flex justify-between gap-2 m-4">
                                    Pasangan
                                    <Image src="/sort.svg" alt="sort" width={10} height={15} />
                                </div>
                            </th>
                            <th>
                                <div className="flex justify-end gap-2 m-4">
                                    Harga Terakhir
                                    <Image src="/sort.svg" alt="sort" width={10} height={15} />
                                </div>
                            </th>
                            <th>
                                <div className="flex justify-between gap-2 m-4">
                                    Perubahan 24jam
                                    <Image src="/sort.svg" alt="sort" width={10} height={15} />
                                </div>
                            </th>
                            <th>
                                <div className="flex justify-between gap-2 m-4">
                                    Tertinggi / Terendah 24jam
                                    <Image src="/sort.svg" alt="sort" width={10} height={15} />
                                </div>
                            </th>
                            <th>
                                <div className="flex justify-between gap-2 m-4">
                                    Kapitalisasi Pasar
                                    <Image src="/sort.svg" alt="sort" width={10} height={15} />
                                </div>
                            </th>
                            <th>
                                <div className="flex justify-between gap-2 m-4">
                                    Volume 24 Jam
                                    <Image src="/sort.svg" alt="sort" width={10} height={15} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={i} className="text-sm hover:bg-[#1a1a1a]">
                                <td className="p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Image
                                        src={item.isFavorite ? "/colored-star.svg" : "/uncolored-star.svg"}
                                        alt="favorite"
                                        width={22}
                                        height={22}
                                        />
                                        {item.pair}
                                    </div>
                                </td>
                                <td className="p-4">{item.price}</td>
                                <td className={`p-4 ${item.isPositive ? "text-[#6EDC86]" : "text-[#FF3B3B]"}`}>
                                    {item.change}
                                </td>
                                <td className="p-4">{item.highLow}</td>
                                <td className="p-4">{item.marketCap}</td>
                                <td className="p-4">{item.volume}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>

        </div>
    )
}