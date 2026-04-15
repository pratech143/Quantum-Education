import { useState, useEffect } from 'react';
import { adminApi } from '../api';
import { Award, Plus, Pencil, Trash2, X, Loader2, Filter } from 'lucide-react';
import ImageUpload, { getImageUrl } from '../components/ImageUpload';

const emptyForm = { name: '', university: '', degree: '', country: '', quote: '', image: '' };

const AlumniManagement = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const res = await adminApi.listAlumni({ limit: '100', search });
      setItems(res.data || []);
    } catch { /* ignore */ }
    setLoading(false);
  };

  useEffect(() => { load(); }, [search]);

  const filtered = items.filter(a =>
    !filterCountry || a.country === filterCountry
  );

  const uniqueCountries = [...new Set(items.map(a => a.country).filter(Boolean))];

  const openCreate = () => { setForm(emptyForm); setError(''); setModal('create'); };

  const openEdit = (a) => {
    setSelected(a);
    setForm({
      name: a.name || '', university: a.university || '', degree: a.degree || '',
      country: a.country || '', quote: a.quote || '', image: a.image || ''
    });
    setError('');
    setModal('edit');
  };

  const openDelete = (a) => { setSelected(a); setError(''); setModal('delete'); };

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSave = async () => {
    setSaving(true); setError('');
    try {
      const payload = { ...form };
      if (!payload.image) delete payload.image;
      if (modal === 'create') {
        await adminApi.createAlumni(payload);
      } else {
        await adminApi.updateAlumni(selected.id, payload);
      }
      setModal(null); load();
    } catch (e) { setError(e.message); }
    setSaving(false);
  };

  const handleDelete = async () => {
    setSaving(true);
    try {
      await adminApi.deleteAlumni(selected.id);
      setModal(null); load();
    } catch (e) { setError(e.message); }
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Award className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold text-on-surface">Alumni</h1>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-medium hover:opacity-90">
          <Plus className="w-4 h-4" /> Add Alumni
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" placeholder="Search alumni..." value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface text-sm outline-none focus:ring-2 focus:ring-primary/20" />
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-on-surface-variant" />
          <select value={filterCountry} onChange={e => setFilterCountry(e.target.value)}
            className="px-3 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface text-sm outline-none">
            <option value="">All Countries</option>
            {uniqueCountries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-on-surface-variant py-12">No alumni found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(a => (
            <div key={a.id} className="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {a.image ? (
                    <img src={getImageUrl(a.image)} alt={a.name} className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      {a.name?.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-on-surface text-sm">{a.name}</p>
                    <p className="text-xs text-on-surface-variant">{a.degree}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => openEdit(a)} className="p-1 text-on-surface-variant hover:text-primary"><Pencil className="w-3.5 h-3.5" /></button>
                  <button onClick={() => openDelete(a)} className="p-1 text-on-surface-variant hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant mb-2">{a.university}</p>
              <p className="text-xs text-on-surface-variant italic flex-1 line-clamp-2">"{a.quote}"</p>
              <span className="mt-2 inline-block px-2 py-0.5 bg-primary/10 text-primary rounded-full text-[10px] font-medium self-start">
                {a.country}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Create/Edit Modal */}
      {(modal === 'create' || modal === 'edit') && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-surface-container-lowest rounded-xl shadow-xl w-full max-w-lg p-6 m-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">{modal === 'create' ? 'Add Alumni' : 'Edit Alumni'}</h2>
              <button onClick={() => setModal(null)}><X className="w-5 h-5" /></button>
            </div>
            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
            <div className="space-y-3">
              {[
                ['name', 'Full Name'], ['university', 'University'], ['degree', 'Degree'],
                ['country', 'Country (lowercase, e.g. australia)']
              ].map(([key, label]) => (
                <div key={key}>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1">{label}</label>
                  <input name={key} value={form[key]} onChange={handleChange}
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
              ))}
              <ImageUpload
                label="Photo"
                value={form.image}
                onChange={(url) => setForm(f => ({ ...f, image: url }))}
              />
              <div>
                <label className="block text-xs font-medium text-on-surface-variant mb-1">Testimonial Quote</label>
                <textarea name="quote" value={form.quote} onChange={handleChange} rows={3}
                  className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-outline-variant">
              <button onClick={() => setModal(null)} className="px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50">
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {modal === 'delete' && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-surface-container-lowest rounded-xl shadow-xl w-full max-w-md p-6 m-4">
            <h2 className="text-lg font-bold mb-2">Delete Alumni</h2>
            <p className="text-on-surface-variant text-sm mb-4">
              Are you sure you want to delete <strong>{selected?.name}</strong>?
            </p>
            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
            <div className="flex justify-end gap-3">
              <button onClick={() => setModal(null)} className="px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg">Cancel</button>
              <button onClick={handleDelete} disabled={saving} className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50">
                {saving ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniManagement;
