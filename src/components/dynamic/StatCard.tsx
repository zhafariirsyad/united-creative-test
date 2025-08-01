export default function StatCard({ label, nominal, value }: { label: string; nominal: string; value: string }) {
    return (
        <div className="min-h-[150px] bg-[#13213F]/[0.4] rounded shadow flex flex-col items-center justify-center text-center p-4">
            <div className="flex gap-4 items-center justify-center mb-2">
                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 6.75H10C7.92893 6.75 6.25 8.42893 6.25 10.5V30.5C6.25 32.5711 7.92893 34.25 10 34.25H30C32.0711 34.25 33.75 32.5711 33.75 30.5V10.5C33.75 8.42893 32.0711 6.75 30 6.75Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M27.5 11.75H12.5C11.8096 11.75 11.25 12.3096 11.25 13V28C11.25 28.6904 11.8096 29.25 12.5 29.25H27.5C28.1904 29.25 28.75 28.6904 28.75 28V13C28.75 12.3096 28.1904 11.75 27.5 11.75Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M20 6.75V4.25M26.25 6.75V4.25M13.75 6.75V4.25M20 36.75V34.25M26.25 36.75V34.25M13.75 36.75V34.25M33.75 20.5H36.25M33.75 26.75H36.25M33.75 14.25H36.25M3.75 20.5H6.25M3.75 26.75H6.25M3.75 14.25H6.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white font-semibold text-sm">Total {label}</span>
            </div>
            <div>
                {nominal !== "" && (
                    <h2 className="text-2xl text-gray-300">IDR {nominal}</h2>
                )}
                <p className="text-white text-[14px] font-bold">{value}</p>
            </div>
        </div>
    );
}