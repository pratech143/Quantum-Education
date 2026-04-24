import { useState } from 'react';
import { Plus, Trash2, ChevronDown } from 'lucide-react';

/**
 * Generic list editor for arrays of objects.
 * Each item is collapsible — shows a summary header when collapsed.
 */
const ListEditor = ({ label, description, value = [], onChange, fields, emptyItem }) => {
  const items = Array.isArray(value) ? value : [];
  // Track which items are expanded; new items start expanded
  const [expanded, setExpanded] = useState({});

  const toggle = (index) => {
    setExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleAdd = () => {
    const newIndex = items.length;
    setExpanded(prev => ({ ...prev, [newIndex]: true }));
    onChange([...items, emptyItem()]);
  };

  const handleRemove = (index) => {
    onChange(items.filter((_, i) => i !== index));
    // Shift expanded keys above the removed index
    setExpanded(prev => {
      const next = {};
      for (const [k, v] of Object.entries(prev)) {
        const n = Number(k);
        if (n < index) next[n] = v;
        else if (n > index) next[n - 1] = v;
      }
      return next;
    });
  };

  const handleChange = (index, key, val) => {
    const updated = items.map((item, i) =>
      i === index ? { ...item, [key]: val } : item
    );
    onChange(updated);
  };

  // Build a short summary string from the first text field that has a value
  const getSummary = (item) => {
    for (const f of fields) {
      if (item[f.key]) {
        const text = String(item[f.key]);
        return text.length > 60 ? text.slice(0, 60) + '...' : text;
      }
    }
    return 'Empty item';
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs font-medium text-on-surface-variant">{label}</label>
        <button
          type="button"
          onClick={handleAdd}
          className="flex items-center gap-1 text-xs text-primary hover:underline"
        >
          <Plus className="w-3 h-3" /> Add
        </button>
      </div>
      {description && (
        <p className="text-[10px] text-on-surface-variant/60 mb-2">{description}</p>
      )}
      {items.length === 0 && (
        <p className="text-xs text-on-surface-variant/60 italic py-2">No items added yet.</p>
      )}
      <div className="space-y-1.5">
        {items.map((item, index) => {
          const isOpen = !!expanded[index];
          return (
            <div
              key={index}
              className="border border-outline-variant rounded-lg bg-surface-container-low/30 overflow-hidden"
            >
              {/* Collapsible header */}
              <div className="flex items-center gap-2 px-3 py-2">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex items-center gap-2 flex-1 min-w-0 text-left"
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-on-surface-variant shrink-0 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
                  />
                  <span className="text-xs text-on-surface truncate">
                    <span className="text-on-surface-variant/50 mr-1">{index + 1}.</span>
                    {getSummary(item)}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => handleRemove(index)}
                  className="p-1 text-on-surface-variant hover:text-red-600 shrink-0"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Expandable content */}
              {isOpen && (
                <div className="px-3 pb-3 pt-1 border-t border-outline-variant/50">
                  <div className="grid grid-cols-2 gap-2">
                    {fields.map(({ key, label: fieldLabel, placeholder, type, options }) => (
                      <div key={key} className={type === 'textarea' ? 'col-span-2' : ''}>
                        <label className="block text-[10px] text-on-surface-variant mb-0.5">{fieldLabel}</label>
                        {type === 'textarea' ? (
                          <textarea
                            value={item[key] || ''}
                            onChange={(e) => handleChange(index, key, e.target.value)}
                            placeholder={placeholder}
                            rows={2}
                            className="w-full px-2 py-1.5 border border-outline-variant rounded text-xs outline-none focus:ring-1 focus:ring-primary/20"
                          />
                        ) : type === 'select' ? (
                          <select
                            value={item[key] || ''}
                            onChange={(e) => handleChange(index, key, e.target.value)}
                            className="w-full px-2 py-1.5 border border-outline-variant rounded text-xs outline-none"
                          >
                            {options?.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            value={item[key] || ''}
                            onChange={(e) => handleChange(index, key, e.target.value)}
                            placeholder={placeholder}
                            className="w-full px-2 py-1.5 border border-outline-variant rounded text-xs outline-none focus:ring-1 focus:ring-primary/20"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListEditor;
