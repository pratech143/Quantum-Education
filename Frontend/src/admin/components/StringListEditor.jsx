import { Plus, Trash2 } from 'lucide-react';

/**
 * Editor for arrays of strings (e.g. admission requirements, how-to-apply steps).
 */
const StringListEditor = ({ label, value = [], onChange, placeholder = 'Enter item...' }) => {
  const items = Array.isArray(value) ? value : [];

  const handleAdd = () => onChange([...items, '']);

  const handleRemove = (index) => onChange(items.filter((_, i) => i !== index));

  const handleChange = (index, val) => {
    const updated = [...items];
    updated[index] = val;
    onChange(updated);
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
      {items.length === 0 && (
        <p className="text-xs text-on-surface-variant/60 italic py-2">No items added yet.</p>
      )}
      <div className="space-y-1.5">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-xs text-on-surface-variant/60 w-5 text-right">{index + 1}.</span>
            <input
              value={item}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-2 py-1.5 border border-outline-variant rounded text-xs outline-none focus:ring-1 focus:ring-primary/20"
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="p-1 text-on-surface-variant hover:text-red-600"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StringListEditor;
