/**
 * Horizontal tab bar for sectioned forms.
 * Each tab can show a badge (item count) and an error dot.
 */
const TabBar = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex gap-1 border-b border-outline-variant mb-4 overflow-x-auto no-scrollbar -mx-1 px-1">
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`relative flex items-center gap-1.5 px-3 py-2 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
              isActive
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-on-surface hover:border-outline-variant'
            }`}
          >
            {tab.label}
            {tab.badge != null && tab.badge > 0 && (
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-medium ${
                isActive ? 'bg-primary/10 text-primary' : 'bg-surface-container-high text-on-surface-variant'
              }`}>
                {tab.badge}
              </span>
            )}
            {tab.hasError && (
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 absolute top-1.5 right-0.5" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;
