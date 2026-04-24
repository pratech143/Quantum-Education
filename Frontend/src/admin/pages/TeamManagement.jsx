import { useState, useEffect } from 'react';
import { adminApi } from '../api';
import { Users, Plus, Pencil, Trash2, X, Loader2, GripVertical, Linkedin, Twitter, Facebook } from 'lucide-react';
import ImageUpload, { getImageUrl } from '../components/ImageUpload';

const emptyForm = { 
  name: '', 
  role: '', 
  description: '', 
  image: '', 
  order: 0,
  isActive: true,
  socials: { linkedin: '', twitter: '', facebook: '' }
};

const TeamManagement = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      // Pass all=true to see inactive members too
      const res = await adminApi.listTeam({ all: true });
      setItems(res.data || []);
    } catch { /* ignore */ }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setForm(emptyForm); setError(''); setModal('create'); };

  const openEdit = (m) => {
    setSelected(m);
    setForm({
      name: m.name || '',
      role: m.role || '',
      description: m.description || '',
      image: m.image || '',
      order: m.order || 0,
      isActive: m.isActive ?? true,
      socials: m.socials || { linkedin: '', twitter: '', facebook: '' }
    });
    setError('');
    setModal('edit');
  };

  const openDelete = (m) => { setSelected(m); setError(''); setModal('delete'); };

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  
  const handleSocialChange = (e) => setForm(f => ({ 
    ...f, 
    socials: { ...f.socials, [e.target.name]: e.target.value } 
  }));

  const handleSave = async () => {
    setSaving(true); setError('');
    try {
      if (modal === 'create') {
        await adminApi.createTeam(form);
      } else {
        await adminApi.updateTeam(selected.id, form);
      }
      setModal(null); load();
    } catch (e) { 
      setError(e.message || 'An error occurred while saving.');
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    setSaving(true); setError('');
    try {
      await adminApi.deleteTeam(selected.id);
      setModal(null); load();
    } catch (e) { setError(e.message || 'Failed to delete.'); }
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold text-on-surface">Team Management</h1>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-medium hover:opacity-90">
          <Plus className="w-4 h-4" /> Add Team Member
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
      ) : items.length === 0 ? (
        <p className="text-center text-on-surface-variant py-12">No team members found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(m => (
            <div key={m.id} className={`bg-surface-container-lowest rounded-xl border border-outline-variant p-5 flex flex-col transition-all ${!m.isActive ? 'opacity-60 grayscale' : 'shadow-sm hover:shadow-md'}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  {m.image ? (
                    <img src={getImageUrl(m.image)} alt={m.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/10" />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      <Users className="w-8 h-8" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-on-surface">{m.name}</h3>
                    <p className="text-xs text-primary font-bold uppercase tracking-wider">{m.role}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => openEdit(m)} className="p-1.5 text-on-surface-variant hover:text-primary transition-colors"><Pencil className="w-4 h-4" /></button>
                  <button onClick={() => openDelete(m)} className="p-1.5 text-on-surface-variant hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
              
              <p className="text-xs text-on-surface-variant mb-4 line-clamp-3 leading-relaxed">{m.description}</p>
              
              <div className="mt-auto pt-4 border-t border-outline-variant flex items-center justify-between">
                <div className="flex gap-2">
                  {m.socials?.linkedin && <Linkedin className="w-3.5 h-3.5 text-outline" />}
                  {m.socials?.twitter && <Twitter className="w-3.5 h-3.5 text-outline" />}
                  {m.socials?.facebook && <Facebook className="w-3.5 h-3.5 text-outline" />}
                </div>
                <div className="flex items-center gap-2">
                  {!m.isActive && <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded text-[9px] font-bold uppercase">Hidden</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create/Edit Modal */}
      {(modal === 'create' || modal === 'edit') && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center overflow-y-auto py-10">
          <div className="bg-surface-container-lowest rounded-2xl shadow-2xl w-full max-w-xl p-8 m-4 my-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">{modal === 'create' ? 'Add Team Member' : 'Edit Team Member'}</h2>
              <button onClick={() => setModal(null)} className="p-1 hover:bg-surface-container-high rounded-full transition-colors"><X className="w-6 h-6" /></button>
            </div>
            
            {error && <p className="bg-red-50 text-red-600 text-xs p-3 rounded-lg mb-4 border border-red-100">{error}</p>}
            
            <div className="space-y-5 max-h-[70vh] overflow-y-auto px-1 pr-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 ml-1">Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Suman Thapa"
                    className="w-full px-4 py-2.5 border border-outline-variant rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 ml-1">Role / Position</label>
                  <input name="role" value={form.role} onChange={handleChange} placeholder="e.g. Chief Consultant"
                    className="w-full px-4 py-2.5 border border-outline-variant rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-1.5 ml-1">Short Biography</label>
                <textarea name="description" value={form.description} onChange={handleChange} rows={3} placeholder="Tell us about this expert..."
                  className="w-full px-4 py-2.5 border border-outline-variant rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ImageUpload
                  label="Profile Photo"
                  value={form.image}
                  onChange={(url) => setForm(f => ({ ...f, image: url }))}
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-xl border border-outline-variant">
                    <input type="checkbox" id="isActive" checked={form.isActive} onChange={(e) => setForm(f => ({ ...f, isActive: e.target.checked }))}
                      className="w-4 h-4 text-primary rounded border-outline-variant focus:ring-primary" />
                    <label htmlFor="isActive" className="text-sm font-bold text-on-surface">Active & Visible on Website</label>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant">
                <h3 className="text-[11px] font-bold uppercase text-outline tracking-[0.2em] mb-4">Social Links (Optional)</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-outline" />
                    <input name="linkedin" value={form.socials.linkedin} onChange={handleSocialChange} placeholder="LinkedIn Profile URL"
                      className="flex-1 px-4 py-2 border border-outline-variant rounded-xl text-xs outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Twitter className="w-5 h-5 text-outline" />
                    <input name="twitter" value={form.socials.twitter} onChange={handleSocialChange} placeholder="Twitter/X Profile URL"
                      className="flex-1 px-4 py-2 border border-outline-variant rounded-xl text-xs outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div className="flex items-center gap-3">
                    <Facebook className="w-5 h-5 text-outline" />
                    <input name="facebook" value={form.socials.facebook} onChange={handleSocialChange} placeholder="Facebook Profile URL"
                      className="flex-1 px-4 py-2 border border-outline-variant rounded-xl text-xs outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <button onClick={() => setModal(null)} className="px-6 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="px-8 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50">
                {saving ? 'Saving...' : 'Save Member'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {modal === 'delete' && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-surface-container-lowest rounded-2xl shadow-xl w-full max-w-md p-8 m-4">
            <h2 className="text-xl font-bold mb-3">Remove Team Member</h2>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              Are you sure you want to remove <strong>{selected?.name}</strong>? This will delete their profile from the database permanently.
            </p>
            {error && <p className="text-red-600 text-xs mb-4">{error}</p>}
            <div className="flex justify-end gap-3">
              <button onClick={() => setModal(null)} className="px-6 py-2 text-sm font-bold text-on-surface-variant hover:bg-surface-container-high rounded-xl transition-all">Cancel</button>
              <button onClick={handleDelete} disabled={saving} className="px-6 py-2 bg-red-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-red-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50">
                {saving ? 'Removing...' : 'Delete Permanently'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;
