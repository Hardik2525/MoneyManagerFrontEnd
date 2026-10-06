const Card = ({ title, action, children, className = "" }) => (
    <section
        className={`h-full flex flex-col bg-white dark:bg-slate-900 border border-gray-200/70 dark:border-slate-800 rounded-2xl shadow-sm p-5 sm:p-6 ${className}`}
    >
        {(title || action) && (
            <div className="flex items-center justify-between gap-4 mb-5">
                {title && (
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                )}
                {action}
            </div>
        )}
        {children && <div className="flex-1">{children}</div>}
    </section>
);

export default Card;
