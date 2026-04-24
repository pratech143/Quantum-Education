import { useState, useEffect } from 'react';
import { adminApi } from '../api';
import { Newspaper, Plus, Pencil, Trash2, X, Loader2, Filter, Calendar, Type, Heading1, Heading2, Quote, List, GripVertical } from 'lucide-react';
import ImageUpload, { getImageUrl } from '../components/ImageUpload';

const emptyForm = { 
  headTitle: '', 
  subtitle: '', 
  label: 'news', 
  description: '', 
  image: '', 
  date: new Date().toISOString().split('T')[0],
  author: '',
  authorRole: '',
  authorImage: '',
  caption: '',
  readTime: '',
  content: [] 
};

const NewsManagement = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterLabel, setFilterLabel] = useState('');
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const res = await adminApi.listNews({ search });
      setItems(res.data || []);
    } catch { /* ignore */ }
    setLoading(false);
  };

  useEffect(() => { load(); }, [search]);

  const filtered = items.filter(n =>
    !filterLabel || n.label === filterLabel
  );

  const openCreate = () => { setForm(emptyForm); setError(''); setModal('create'); };

  const openEdit = (n) => {
    setSelected(n);
    setForm({
      headTitle: n.headTitle || '',
      subtitle: n.subtitle || '',
      label: n.label || 'news',
      description: n.description || '',
      image: n.image || '',
      date: n.date ? new Date(n.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      author: n.author || '',
      authorRole: n.authorRole || '',
      authorImage: n.authorImage || '',
      caption: n.caption || '',
      readTime: n.readTime || '',
      content: Array.isArray(n.content) ? n.content : []
    });
    setError('');
    setModal('edit');
  };

  const openDelete = (n) => { setSelected(n); setError(''); setModal('delete'); };

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  // Content Block Handlers
  const addBlock = (type) => {
    const newBlock = { type, value: type === 'list' ? [''] : '' };
    if (type === 'quote') newBlock.author = '';
    setForm(f => ({ ...f, content: [...f.content, newBlock] }));
  };

  const removeBlock = (idx) => {
    setForm(f => ({ ...f, content: f.content.filter((_, i) => i !== idx) }));
  };

  const updateBlock = (idx, value) => {
    setForm(f => ({
      ...f,
      content: f.content.map((b, i) => i === idx ? { ...b, value } : b)
    }));
  };

  const updateBlockProp = (idx, prop, value) => {
    setForm(f => ({
      ...f,
      content: f.content.map((b, i) => i === idx ? { ...b, [prop]: value } : b)
    }));
  };

  const handleSave = async () => {
    setSaving(true); setError('');
    try {
      const payload = { 
        ...form,
        date: new Date(form.date).toISOString()
      };
      
      if (modal === 'create') {
        await adminApi.createNews(payload);
      } else {
        await adminApi.updateNews(selected.id, payload);
      }
      setModal(null); load();
    } catch (e) { 
      if (e.errors) {
        const firstErrorField = Object.keys(e.errors)[0];
        const firstErrorMessage = e.errors[firstErrorField][0];
        setError(`${firstErrorField}: ${firstErrorMessage}`);
      } else {
        setError(e.message || 'An error occurred while saving.');
      }
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    setSaving(true); setError('');
    try {
      await adminApi.deleteNews(selected.id);
      setModal(null); load();
    } catch (e) { setError(e.message || 'Failed to delete.'); }
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Newspaper className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold text-on-surface">News & Notices</h1>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-medium hover:opacity-90">
          <Plus className="w-4 h-4" /> Add News/Notice
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" placeholder="Search news..." value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface text-sm outline-none focus:ring-2 focus:ring-primary/20" />
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-on-surface-variant" />
          <select value={filterLabel} onChange={e => setFilterLabel(e.target.value)}
            className="px-3 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface text-sm outline-none">
            <option value="">All Types</option>
            <option value="news">News</option>
            <option value="notice">Notice</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-on-surface-variant py-12">No news found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(n => (
            <div key={n.id} className="bg-surface-container-lowest rounded-lg border border-outline-variant p-4 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {n.image ? (
                    <img src={getImageUrl(n.image)} alt={n.headTitle} className="w-12 h-12 rounded-lg object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                      <Newspaper className="w-6 h-6" />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="font-bold text-on-surface text-sm line-clamp-1">{n.headTitle}</p>
                    <p className="text-xs text-on-surface-variant uppercase">{n.label}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => openEdit(n)} className="p-1 text-on-surface-variant hover:text-primary"><Pencil className="w-3.5 h-3.5" /></button>
                  <button onClick={() => openDelete(n)} className="p-1 text-on-surface-variant hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant mb-2 line-clamp-2">{n.description}</p>
              <div className="mt-auto flex items-center justify-between border-t border-outline-variant pt-2">
                <span className="text-[10px] text-on-surface-variant flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(n.date).toLocaleDateString()}
                </span>
                <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-[10px] font-medium uppercase">
                  {n.readTime || '5m read'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create/Edit Modal */}
      {(modal === 'create' || modal === 'edit') && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center overflow-y-auto py-10">
          <div className="bg-surface-container-lowest rounded-xl shadow-xl w-full max-w-4xl p-6 m-4 my-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">{modal === 'create' ? 'Add News/Notice' : 'Edit News/Notice'}</h2>
              <button onClick={() => setModal(null)}><X className="w-5 h-5" /></button>
            </div>
            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-h-[75vh] overflow-y-auto px-1">
              <div className="md:col-span-4 space-y-4">
                <h3 className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">Basic Details</h3>
                <div>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1">Title</label>
                  <input name="headTitle" value={form.headTitle} onChange={handleChange}
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1">Subtitle/Preview</label>
                  <textarea name="subtitle" value={form.subtitle} onChange={handleChange} rows={2}
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-on-surface-variant mb-1">Type</label>
                    <select name="label" value={form.label} onChange={handleChange}
                      className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none">
                      <option value="news">News</option>
                      <option value="notice">Notice</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-on-surface-variant mb-1">Date</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange}
                      className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none" />
                  </div>
                </div>
                <ImageUpload
                  label="Featured Image"
                  value={form.image}
                  onChange={(url) => setForm(f => ({ ...f, image: url }))}
                />
                <div>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1">Author Name</label>
                  <input name="author" value={form.author} onChange={handleChange}
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1">Read Time</label>
                  <input name="readTime" value={form.readTime} onChange={handleChange} placeholder="5m read"
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none" />
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase text-on-surface-variant tracking-wider">Article Content Blocks</h3>
                  <div className="flex gap-2">
                    <button onClick={() => addBlock('heading')} className="p-1.5 bg-surface-container-high rounded hover:bg-primary/10 hover:text-primary transition-colors" title="Add Heading"><Heading1 className="w-4 h-4" /></button>
                    <button onClick={() => addBlock('subheading')} className="p-1.5 bg-surface-container-high rounded hover:bg-primary/10 hover:text-primary transition-colors" title="Add Subheading"><Heading2 className="w-4 h-4" /></button>
                    <button onClick={() => addBlock('paragraph')} className="p-1.5 bg-surface-container-high rounded hover:bg-primary/10 hover:text-primary transition-colors" title="Add Paragraph"><Type className="w-4 h-4" /></button>
                    <button onClick={() => addBlock('list')} className="p-1.5 bg-surface-container-high rounded hover:bg-primary/10 hover:text-primary transition-colors" title="Add List"><List className="w-4 h-4" /></button>
                    <button onClick={() => addBlock('quote')} className="p-1.5 bg-surface-container-high rounded hover:bg-primary/10 hover:text-primary transition-colors" title="Add Quote"><Quote className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="space-y-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant min-h-[300px]">
                  {form.content.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center py-20 text-on-surface-variant">
                      <Plus className="w-8 h-8 mb-2 opacity-20" />
                      <p className="text-sm">Click above to add content blocks</p>
                    </div>
                  ) : (
                    form.content.map((block, idx) => (
                      <div key={idx} className="group relative bg-surface-container-lowest border border-outline-variant rounded-lg p-3 pt-8 shadow-sm">
                        <div className="absolute top-2 left-3 flex items-center gap-2">
                          <GripVertical className="w-3.5 h-3.5 text-outline cursor-grab" />
                          <span className="text-[10px] font-bold uppercase text-primary tracking-widest">{block.type}</span>
                        </div>
                        <button onClick={() => removeBlock(idx)} className="absolute top-2 right-2 p-1 text-on-surface-variant hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        {block.type === 'heading' || block.type === 'subheading' ? (
                          <input 
                            value={block.value} 
                            onChange={(e) => updateBlock(idx, e.target.value)}
                            placeholder={`Enter ${block.type}...`}
                            className={`w-full bg-transparent outline-none ${block.type === 'heading' ? 'text-lg font-bold' : 'font-bold'}`}
                          />
                        ) : block.type === 'paragraph' ? (
                          <textarea 
                            value={block.value} 
                            onChange={(e) => updateBlock(idx, e.target.value)}
                            placeholder="Enter paragraph text..."
                            className="w-full bg-transparent outline-none text-sm resize-none"
                            rows={3}
                          />
                        ) : block.type === 'list' ? (
                          <div className="space-y-2">
                            {block.value.map((item, i) => (
                              <div key={i} className="flex gap-2">
                                <span className="text-primary">•</span>
                                <input 
                                  value={item} 
                                  onChange={(e) => {
                                    const newList = [...block.value];
                                    newList[i] = e.target.value;
                                    updateBlock(idx, newList);
                                  }}
                                  className="flex-1 bg-transparent outline-none text-sm border-b border-transparent focus:border-primary/20"
                                  placeholder="List item..."
                                />
                                <button onClick={() => {
                                  const newList = block.value.filter((_, li) => li !== i);
                                  updateBlock(idx, newList);
                                }} className="text-on-surface-variant hover:text-red-600"><X className="w-3 h-3" /></button>
                              </div>
                            ))}
                            <button onClick={() => updateBlock(idx, [...block.value, ''])} className="text-[10px] text-primary font-bold hover:underline">+ ADD ITEM</button>
                          </div>
                        ) : block.type === 'quote' ? (
                          <div className="space-y-3">
                            <textarea 
                              value={block.value} 
                              onChange={(e) => updateBlock(idx, e.target.value)}
                              placeholder="Enter quote..."
                              className="w-full bg-transparent outline-none text-sm italic border-l-2 border-primary/20 pl-3"
                              rows={2}
                            />
                            <input 
                              value={block.author} 
                              onChange={(e) => updateBlockProp(idx, 'author', e.target.value)}
                              placeholder="Quote author..."
                              className="w-full bg-transparent outline-none text-[10px] font-bold"
                            />
                          </div>
                        ) : null}
                      </div>
                    ))
                  )}
                </div>
                
                {/* Fallback description for preview/meta */}
                <div>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1">Legacy Description (Fallback/Search)</label>
                  <textarea name="description" value={form.description} onChange={handleChange} rows={2}
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-[11px] outline-none bg-surface-container-lowest" />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-outline-variant">
              <button onClick={() => setModal(null)} className="px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50">
                {saving ? 'Saving...' : 'Save News'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {modal === 'delete' && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-surface-container-lowest rounded-xl shadow-xl w-full max-w-md p-6 m-4">
            <h2 className="text-lg font-bold mb-2">Delete News/Notice</h2>
            <p className="text-on-surface-variant text-sm mb-4">
              Are you sure you want to delete <strong>{selected?.headTitle}</strong>? This action cannot be undone.
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

export default NewsManagement;
