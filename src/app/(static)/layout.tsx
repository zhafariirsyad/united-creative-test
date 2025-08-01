import "../globals.css";
export default function StaticLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="id">
            <body className="bg-gradient-to-b from-[#000] to-[#020c29]">
                {children}
            </body>
        </html>
    )
}