import { useState, useEffect, useRef } from 'react';
import { adminApi } from '../api';
import { Globe, Plus, Pencil, Trash2, X, Loader2, Filter } from 'lucide-react';
import ImageUpload from '../components/ImageUpload';
import ListEditor from '../components/ListEditor';
import StringListEditor from '../components/StringListEditor';
import CollapsibleSection from '../components/CollapsibleSection';

const emptyForm = {
  name: '', slug: '', description: '', tuitionFees: '', visaInfo: '',
  livingCost: '', currency: '', heroImage: '', heroSubtitle: '',
  heroStats: [], overviewTitle: '', overviewDescription: [],
  details: [], popularCourses: [], admissionRequirements: [],
  intakes: [], scholarshipsDescription: ''
};

const CURRENCY_OPTIONS = ['USD', 'AUD', 'GBP', 'EUR', 'CAD', 'NZD', 'JPY', 'KRW'];

const DestinationsManagement = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterCurrency, setFilterCurrency] = useState('');
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const scrollRef = useRef(null);

  const load = async () => {
    setLoading(true);
    try {
      const res = await adminApi.listCountries({ limit: '100', search });
      setCountries(res.data || []);
    } catch { /* ignore */ }
    setLoading(false);
  };

  useEffect(() => { load(); }, [search]);

  const filtered = countries.filter(c =>
    !filterCurrency || c.currency === filterCurrency
  );

  const openCreate = () => {
    setForm(emptyForm);
    setError('');
    setModal('create');
    setTimeout(() => scrollRef.current?.scrollTo(0, 0), 0);
  };

  const openEdit = (c) => {
    setSelected(c);
    setForm({
      name: c.name || '',
      slug: c.slug || '',
      description: c.description || '',
      tuitionFees: String(c.tuitionFees || ''),
      visaInfo: c.visaInfo || '',
      livingCost: String(c.livingCost || ''),
      currency: c.currency || '',
      heroImage: c.heroImage || '',
      heroSubtitle: c.heroSubtitle || '',
      heroStats: Array.isArray(c.heroStats) ? c.heroStats : [],
      overviewTitle: c.overview?.title || '',
      overviewDescription: Array.isArray(c.overview?.description) ? c.overview.description : [],
      details: Array.isArray(c.details) ? c.details : [],
      popularCourses: Array.isArray(c.popularCourses) ? c.popularCourses : [],
      admissionRequirements: Array.isArray(c.admissionRequirements) ? c.admissionRequirements : [],
      intakes: Array.isArray(c.intakes) ? c.intakes : [],
      scholarshipsDescription: c.scholarships?.description || ''
    });
    setError('');
    setModal('edit');
    setTimeout(() => scrollRef.current?.scrollTo(0, 0), 0);
  };

  const openDelete = (c) => { setSelected(c); setModal('delete'); };

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const buildPayload = () => {
    const payload = {
      name: form.name,
      slug: form.slug,
      description: form.description,
      tuitionFees: Number(form.tuitionFees) || 0,
      visaInfo: form.visaInfo,
      livingCost: Number(form.livingCost) || 0,
      currency: form.currency
    };
    if (form.heroImage) payload.heroImage = form.heroImage;
    if (form.heroSubtitle) payload.heroSubtitle = form.heroSubtitle;
    if (form.heroStats.length) payload.heroStats = form.heroStats;
    if (form.overviewTitle || form.overviewDescription.length) {
      payload.overview = { title: form.overviewTitle, description: form.overviewDescription };
    }
    if (form.details.length) payload.details = form.details;
    if (form.popularCourses.length) payload.popularCourses = form.popularCourses;
    if (form.admissionRequirements.length) payload.admissionRequirements = form.admissionRequirements;
    if (form.intakes.length) payload.intakes = form.intakes;
    if (form.scholarshipsDescription) {
      payload.scholarships = { description: form.scholarshipsDescription };
    }
    return payload;
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      const payload = buildPayload();
      if (modal === 'create') {
        await adminApi.createCountry(payload);
      } else {
        await adminApi.updateCountry(selected.id, payload);
      }
      setModal(null);
      load();
    } catch (e) {
      setError(e.message);
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    setSaving(true);
    try {
      await adminApi.deleteCountry(selected.id);
      setModal(null);
      load();
    } catch (e) {
      setError(e.message);
    }
    setSaving(false);
  };

  const uniqueCurrencies = [...new Set(countries.map(c => c.currency).filter(Boolean))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Globe className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold text-on-surface">Destinations</h1>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-medium hover:opacity-90">
          <Plus className="w-4 h-4" /> Add Destination
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text" placeholder="Search destinations..." value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface text-sm outline-none focus:ring-2 focus:ring-primary/20"
        />
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-on-surface-variant" />
          <select
            value={filterCurrency} onChange={e => setFilterCurrency(e.target.value)}
            className="px-3 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface text-sm outline-none"
          >
            <option value="">All Currencies</option>
            {uniqueCurrencies.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-on-surface-variant py-12">No destinations found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-on-surface-variant">Name</th>
                <th className="text-left px-4 py-3 font-medium text-on-surface-variant">Slug</th>
                <th className="text-left px-4 py-3 font-medium text-on-surface-variant">Currency</th>
                <th className="text-left px-4 py-3 font-medium text-on-surface-variant">Avg. Tuition</th>
                <th className="text-left px-4 py-3 font-medium text-on-surface-variant">Avg. Living Cost</th>
                <th className="text-right px-4 py-3 font-medium text-on-surface-variant">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.map(c => (
                <tr key={c.id} className="hover:bg-surface-container-low/50">
                  <td className="px-4 py-3 font-medium text-on-surface">{c.name}</td>
                  <td className="px-4 py-3 text-on-surface-variant">{c.slug}</td>
                  <td className="px-4 py-3 text-on-surface-variant">{c.currency}</td>
                  <td className="px-4 py-3 text-on-surface-variant">${c.tuitionFees?.toLocaleString()}</td>
                  <td className="px-4 py-3 text-on-surface-variant">${c.livingCost?.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button onClick={() => openEdit(c)} className="p-1.5 text-on-surface-variant hover:text-primary"><Pencil className="w-4 h-4" /></button>
                    <button onClick={() => openDelete(c)} className="p-1.5 text-on-surface-variant hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Create/Edit Modal */}
      {(modal === 'create' || modal === 'edit') && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center pt-10 overflow-y-auto">
          <div className="bg-surface-container-lowest rounded-xl shadow-xl w-full max-w-3xl p-6 m-4 mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">{modal === 'create' ? 'Add Destination' : 'Edit Destination'}</h2>
              <button onClick={() => setModal(null)}><X className="w-5 h-5" /></button>
            </div>
            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
            <div ref={scrollRef} className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">

              {/* Basic Info — always open */}
              <fieldset className="border border-outline-variant rounded-lg p-4">
                <legend className="text-xs font-semibold text-primary px-2">Basic Info</legend>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ['name', 'Name'], ['slug', 'Slug'], ['currency', 'Currency'],
                    ['tuitionFees', 'Avg. Tuition Fees'], ['livingCost', 'Avg. Living Cost'], ['heroSubtitle', 'Hero Subtitle']
                  ].map(([key, label]) => (
                    <div key={key}>
                      <label className="block text-xs font-medium text-on-surface-variant mb-1">{label}</label>
                      <input name={key} value={form[key]} onChange={handleChange}
                        className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                  ))}
                  <div className="col-span-2">
                    <ImageUpload
                      label="Hero Image"
                      value={form.heroImage}
                      onChange={(url) => setForm(f => ({ ...f, heroImage: url }))}
                    />
                  </div>
                  {[['visaInfo', 'Visa Info'], ['description', 'Description']].map(([key, label]) => (
                    <div key={key} className="col-span-2">
                      <label className="block text-xs font-medium text-on-surface-variant mb-1">{label}</label>
                      <textarea name={key} value={form[key]} onChange={handleChange} rows={3}
                        className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20" />
                    </div>
                  ))}
                </div>
              </fieldset>

              {/* Collapsible sections */}
              <CollapsibleSection title="Hero Stats" badge={form.heroStats.length || null}>
                <ListEditor
                  label="Stats displayed in the hero section"
                  value={form.heroStats}
                  onChange={(v) => setForm(f => ({ ...f, heroStats: v }))}
                  fields={[
                    { key: 'label', label: 'Label', placeholder: 'e.g. Universities' },
                    { key: 'value', label: 'Value', placeholder: 'e.g. 43' }
                  ]}
                  emptyItem={() => ({ label: '', value: '' })}
                />
              </CollapsibleSection>

              <CollapsibleSection title="Overview" badge={form.overviewDescription.length || null}>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-on-surface-variant mb-1">Overview Title</label>
                    <input name="overviewTitle" value={form.overviewTitle} onChange={handleChange}
                      placeholder="e.g. Country Overview"
                      className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <StringListEditor
                    label="Overview Paragraphs"
                    value={form.overviewDescription}
                    onChange={(v) => setForm(f => ({ ...f, overviewDescription: v }))}
                    placeholder="Enter a paragraph..."
                  />
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="Details Grid" badge={form.details.length || null}>
                <ListEditor
                  label="Detail cards (e.g. Climate, Living Cost, Visa Type)"
                  value={form.details}
                  onChange={(v) => setForm(f => ({ ...f, details: v }))}
                  fields={[
                    { key: 'icon', label: 'Icon Name', placeholder: 'e.g. wb_sunny' },
                    { key: 'title', label: 'Title', placeholder: 'e.g. Climate' },
                    { key: 'description', label: 'Description', placeholder: 'Describe this detail...', type: 'textarea' }
                  ]}
                  emptyItem={() => ({ icon: '', title: '', description: '' })}
                />
              </CollapsibleSection>

              <CollapsibleSection title="Popular Courses" badge={form.popularCourses.length || null}>
                <ListEditor
                  label="Courses popular in this country"
                  value={form.popularCourses}
                  onChange={(v) => setForm(f => ({ ...f, popularCourses: v }))}
                  fields={[
                    { key: 'icon', label: 'Icon Name', placeholder: 'e.g. medical_services' },
                    { key: 'title', label: 'Course Title', placeholder: 'e.g. Nursing' },
                    { key: 'desc', label: 'Short Description', placeholder: 'e.g. High demand & PR pathways' }
                  ]}
                  emptyItem={() => ({ icon: '', title: '', desc: '' })}
                />
              </CollapsibleSection>

              <CollapsibleSection title="Admission Requirements" badge={form.admissionRequirements.length || null}>
                <StringListEditor
                  label="List of requirements"
                  value={form.admissionRequirements}
                  onChange={(v) => setForm(f => ({ ...f, admissionRequirements: v }))}
                  placeholder="e.g. Academic transcripts (Bachelor/High School)"
                />
              </CollapsibleSection>

              <CollapsibleSection title="Major Intakes" badge={form.intakes.length || null}>
                <ListEditor
                  label="Intake periods"
                  value={form.intakes}
                  onChange={(v) => setForm(f => ({ ...f, intakes: v }))}
                  fields={[
                    { key: 'name', label: 'Intake Name', placeholder: 'e.g. Semester 1' },
                    { key: 'month', label: 'Month', placeholder: 'e.g. February' }
                  ]}
                  emptyItem={() => ({ name: '', month: '' })}
                />
              </CollapsibleSection>

              <CollapsibleSection title="Scholarships" badge={form.scholarshipsDescription ? 1 : null}>
                <div>
                  <label className="block text-xs font-medium text-on-surface-variant mb-1">Scholarship Description</label>
                  <textarea
                    name="scholarshipsDescription"
                    value={form.scholarshipsDescription}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe available scholarships..."
                    className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </CollapsibleSection>
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
            <h2 className="text-lg font-bold mb-2">Delete Destination</h2>
            <p className="text-on-surface-variant text-sm mb-4">
              Are you sure you want to delete <strong>{selected?.name}</strong>? This will also delete all associated universities and colleges.
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

export default DestinationsManagement;
