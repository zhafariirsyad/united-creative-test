"use client";
import Navbar from "@/components/dynamic/Navbar";
import StatCard from "@/components/dynamic/StatCard";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface User {
    id: number;
    is_verified_kyc: boolean;
    created_at: string;
}

interface Balance {
    id: number;
    user_id: number;
    type: "deposit" | "withdraw";
    nominal: number;
    created_at: string;
}

export default function Dashboard() {
    const [selectedYear, setSelectedYear] = useState("2025");
    const [selectedMonth, setSelectedMonth] = useState("1");
    const [stats, setStats] = useState({ deposit: 0, withdraw: 0, kyc: 0, registration: 0, totalNominalDeposit: 0, totalNominalWithdraw: 0 });

    const years = ["2020", "2021", "2022", "2023", "2024", "2025"];
    const months = [
        { label: "Januari", value: "1" },
        { label: "Februari", value: "2" },
        { label: "Maret", value: "3" },
        { label: "April", value: "4" },
        { label: "Mei", value: "5" },
        { label: "Juni", value: "6" },
        { label: "Juli", value: "7" },
        { label: "Agustus", value: "8" },
        { label: "September", value: "9" },
        { label: "Oktober", value: "10" },
        { label: "November", value: "11" },
        { label: "Desember", value: "12" },
    ];

    const [chartData, setBarChartData] = useState<{ date: string; total: number }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const [usersRes, balancesRes] = await Promise.all([
                fetch("/data/users_dummy_2020_2025.json"),
                fetch("/data/balances_dummy_2020_2025.json"),
            ]);

            const users: User[] = await usersRes.json();
            const balances: Balance[] = await balancesRes.json();

            const filteredUsers = users.filter((u) => {
                const date = new Date(u.created_at);
                const isYearMatch = date.getFullYear().toString() === selectedYear;
                const isMonthMatch = selectedMonth ? date.getMonth() + 1 === Number(selectedMonth) : true;
                return isYearMatch && isMonthMatch;
            });

            const filteredBalances = balances.filter((b) => {
                const date = new Date(b.created_at);
                const isYearMatch = date.getFullYear().toString() === selectedYear;
                const isMonthMatch = selectedMonth ? date.getMonth() + 1 === Number(selectedMonth) : true;
                return isYearMatch && isMonthMatch;
            });

            const totalDeposit = filteredBalances
                .filter((b) => b.type === "deposit").length;

            const totalNominalDeposit = filteredBalances
                .filter((b) => b.type === "deposit")
                .filter((b) => b.nominal > 0)
                .reduce((acc, b) => acc + b.nominal, 0);

            const totalWithdraw = filteredBalances
                .filter((b) => b.type === "withdraw").length;

            const totalNominalWithdraw = filteredBalances
                .filter((b) => b.type === "withdraw")
                .filter((b) => b.nominal > 0)
                .reduce((acc, b) => acc + b.nominal, 0);

            const totalVerifiedKYC = filteredUsers.filter((u) => u.is_verified_kyc).length;
            const totalRegistrations = filteredUsers.length;

            setStats({
                deposit: totalDeposit,
                withdraw: totalWithdraw,
                kyc: totalVerifiedKYC,
                registration: totalRegistrations,
                totalNominalDeposit: totalNominalDeposit,
                totalNominalWithdraw: totalNominalWithdraw,
            });

            // ===== Build Bar Chart Data per Tanggal =====
            if (selectedMonth) {
                const daysInMonth = new Date(Number(selectedYear), Number(selectedMonth), 0).getDate();
                const dailyDeposit: Record<number, number> = {};

                // Inisialisasi semua tanggal dengan 0
                for (let day = 1; day <= daysInMonth; day++) {
                dailyDeposit[day] = 0;
                }

                filteredBalances.forEach((b) => {
                if (b.type === "deposit") {
                    const day = new Date(b.created_at).getDate();
                    dailyDeposit[day] += b.nominal;
                }
                });

                const barData = Object.entries(dailyDeposit).map(([day, total]) => ({
                    date: day,
                    total,
                }));

                setBarChartData(barData);
            } else {
                setBarChartData([]);
            }
        };

        fetchData();
    }, [selectedYear, selectedMonth]);

    return (
        <div className="max-w-full mx-auto">
            <Navbar />

            <div className="flex h-screen bg-[#0E0E0E] text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-[#050911] p-4 space-y-6">
                <nav className="space-y-4 text-sm">
                    <Link href="/dashboard">
                        <div className="flex gap-4">
                            <Image src="/dashboard.svg" alt="Dashboard" width={20} height={20} />
                            Dashboard
                        </div>
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="bg-black flex-1 px-10 py-4">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col items-start">
                        <h1 className="text-xl font-semibold">Welcome John Doe</h1>
                        <p className="text-gray-400 text-sm">How are you today...</p>
                    </div>
                    {/* Filters */}
                    <div className="flex justify-end items-center gap-4">
                        <select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            className="bg-gray-800 border border-gray-600 px-3 py-2 rounded"
                            >
                            {months.map((m) => (
                                <option key={m.value} value={m.value}>{m.label}</option>
                            ))}
                        </select>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            className="bg-gray-800 border border-gray-600 px-3 py-2 rounded"
                            >
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <hr />
                {/* Stats */}
                <div className="grid grid-cols-2 gap-2">
                        {selectedMonth && (
                            <div className="bg-[#13213F]/[0.4] p-4 rounded shadow mt-6 w-full">
                                <h2 className="text-lg font-semibold mb-2">Total Nominal Deposit per Hari</h2>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip formatter={(value) => `Rp${Number(value).toLocaleString()}`} />
                                    <Bar dataKey="total" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <StatCard label="Deposit" nominal={stats.totalNominalDeposit.toString()} value={stats.deposit.toString() + ' Deposit(s)'} />
                        <StatCard label="Withdraw" nominal={stats.totalNominalWithdraw.toString()} value={stats.withdraw.toString() + ' Withdraw(s)'} />
                        <StatCard label="Verified KYC" nominal="" value={stats.kyc.toString() + ' Verified'} />
                        <StatCard label="Registration" nominal="" value={stats.registration.toString() + ' Registered'} />
                    </div>
                </div>
            </main>
            </div>

        </div>
    );
}