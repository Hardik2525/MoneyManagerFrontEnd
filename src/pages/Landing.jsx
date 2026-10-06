import { Link } from "react-router-dom";
import {
    ArrowRight,
    Coins,
    LayoutDashboard,
    Receipt,
    Tags,
    User,
    Wallet,
    WalletCards,
} from "lucide-react";
import { assets } from "../assets/assets";
import ThemeToggle from "../components/ThemeToggle";

const navLink = "text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white";

const Landing = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <header className="sticky top-0 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
                    <Link to="/home" className="flex items-center gap-2 shrink-0">
                        <img src={assets.logo} alt="Money Manager" className="h-9 w-9 object-contain" />
                        <span className="font-semibold">Money Manager</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#top" className={navLink}>Home</a>
                        <a href="#about" className={navLink}>About us</a>
                        <a href="#contact" className={navLink}>Contact us</a>
                    </nav>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <ThemeToggle />
                        <Link to="/login" className="text-sm font-medium px-3 py-2 hover:text-purple-700">
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="text-sm font-medium px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-800 text-white"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>

            <main id="top">
                <section className="max-w-3xl mx-auto px-4 pt-20 pb-12 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Take Control of Your Finances
                    </h1>
                    <p className="mt-5 text-gray-500 dark:text-gray-400 leading-relaxed">
                        Your foundation for secure, intelligent financial management. Effortlessly
                        track your income and expenses to achieve your financial goals.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Link
                            to="/signup"
                            className="px-5 py-3 rounded-lg bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium"
                        >
                            Start Tracking for Free
                        </Link>
                        <a
                            href="#preview"
                            className="px-5 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-sm font-medium inline-flex items-center gap-2"
                        >
                            Learn More <ArrowRight size={16} />
                        </a>
                    </div>
                </section>

                <section id="preview" className="max-w-5xl mx-auto px-4 pb-20">
                    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-xl overflow-hidden">
                        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
                            <div className="flex items-center gap-2">
                                <img src={assets.logo} alt="" className="h-7 w-7 object-contain" />
                                <span className="text-sm font-medium">Money Manager</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                <User size={16} className="text-purple-600" />
                            </div>
                        </div>

                        <div className="grid grid-cols-[180px_1fr] min-h-[340px]">
                            <aside className="hidden sm:block border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4 space-y-1">
                                <p className="text-xs font-semibold tracking-wide text-gray-400 uppercase px-3 mb-3">Menu</p>
                                {[
                                    [LayoutDashboard, "Dashboard", true],
                                    [Tags, "Category", false],
                                    [Wallet, "Income", false],
                                    [Receipt, "Expense", false],
                                ].map(([Icon, label, active]) => (
                                    <div
                                        key={label}
                                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm ${
                                            active
                                                ? "bg-purple-700 text-white"
                                                : "text-gray-600 dark:text-gray-300"
                                        }`}
                                    >
                                        <Icon size={16} />
                                        {label}
                                    </div>
                                ))}
                            </aside>

                            <div className="p-4 sm:p-6 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    {[
                                        [WalletCards, "Total Balance", "₹84,200", "bg-purple-700"],
                                        [Wallet, "Total Income", "₹1,85,000", "bg-green-600"],
                                        [Coins, "Total Expense", "₹1,00,800", "bg-red-600"],
                                    ].map(([Icon, label, value, color]) => (
                                        <div key={label} className="flex items-center gap-3 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-3">
                                            <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center ${color}`}>
                                                <Icon size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500">{label}</p>
                                                <p className="text-sm font-semibold">{value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-4">
                                        <p className="text-sm font-medium mb-3">Recent Transactions</p>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Freelance</span>
                                            <span className="text-green-600">+ ₹8,000</span>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex items-center justify-center">
                                        <div className="w-28 h-28 rounded-full border-[14px] border-purple-700 border-r-green-600 border-b-red-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="bg-gray-50 dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
                    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
                        <h2 className="text-2xl font-semibold">About us</h2>
                        <p className="mt-3 text-gray-500 dark:text-gray-400">
                            Money Manager helps you see where your money comes from and where it goes.
                            Add income, expenses, and categories, then review the month in one dashboard.
                        </p>
                    </div>
                </section>

                <section id="contact" className="max-w-3xl mx-auto px-4 py-16 text-center">
                    <h2 className="text-2xl font-semibold">Contact us</h2>
                    <p className="mt-3 text-gray-500 dark:text-gray-400">
                        Questions about your account? Email{" "}
                        <a href="mailto:support@moneymanager.app" className="text-purple-700 dark:text-purple-300 underline">
                            support@moneymanager.app
                        </a>
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Landing;
