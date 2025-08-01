import Image from "next/image";

export default function CryptoCard({label, price, volume, percent, isUp}: {label: string, price: number, volume: number, percent: number, isUp: boolean}){
    return (
        <div>
            <div className="bg-[#0f111a] rounded-xl p-4 w-full max-w-full shadow-md text-white">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h4 className="text-sm text-white">{label}</h4>
                        <div className="text-2xl font-semibold mt-5">Rp {price.toLocaleString("id-ID")}</div>
                    </div>
                    <div className="flex items-center justify-end">
                        {isUp ? (
                            <Image src="/up-line.svg" alt="up-line" width={128} height={46} />
                        ) : (
                            <Image src="/down-line.svg" alt="down-line" width={128} height={46} />
                        )}
                    </div>
                </div>
                <div className="flex justify-between items-center text-sm mt-3">
                    <span className={`${isUp ? "text-[#6EDC86]" : "text-[#FF3B3B]"}`}>
                        {isUp ? "+" : ""}
                        {percent}%
                    </span>
                    <span className="text-[#959595]">Volume : {volume.toLocaleString("id-ID")} IDR</span>
                </div>
            </div>
        </div>
    )
}