import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const CollapsibleSection = ({ title, defaultOpen = false, badge, children }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-outline-variant rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between w-full px-4 py-3 bg-surface-container-low/50 hover:bg-surface-container-low transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-primary">{title}</span>
          {badge !== undefined && badge !== null && (
            <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium">
              {badge}
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-on-surface-variant transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="p-4 border-t border-outline-variant">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
