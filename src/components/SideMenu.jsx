import { NavLink } from "react-router-dom";
import MENU_ITEMS from "../util/MENU_ITEMS";

const linkClass = (isActive) =>
    isActive
        ? "flex items-center gap-3 px-3 py-2.5 w-full text-sm font-medium text-white bg-purple-700 rounded-lg"
        : "flex items-center gap-3 px-3 py-2.5 w-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors";

const SideMenu = ({ sidebarVisible, onNavigate, activeMenu }) => {
    return (
        <>
            {sidebarVisible && (
                <button
                    type="button"
                    aria-label="Close menu"
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={onNavigate}
                />
            )}

            <aside
                className={`
                    fixed lg:static inset-y-0 left-0 z-50 w-64 min-h-screen bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800
                    flex flex-col pt-6 pb-8 px-4 shrink-0
                    transform transition-transform duration-200 ease-out
                    lg:translate-x-0
                    ${sidebarVisible ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                `}
            >
                <h2 className="text-xs font-semibold tracking-[0.14em] uppercase mb-4 px-3 text-gray-400">
                    Menu
                </h2>

                <nav className="flex flex-col gap-1">
                    {MENU_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({ isActive }) =>
                                    linkClass(isActive || activeMenu === item.label)
                                }
                                onClick={onNavigate}
                            >
                                <Icon className="w-5 h-5 shrink-0" />
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
};

export default SideMenu;
