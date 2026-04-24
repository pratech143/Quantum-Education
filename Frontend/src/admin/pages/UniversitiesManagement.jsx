import { useState, useEffect, useRef } from 'react';
import { adminApi } from '../api';
import { GraduationCap, Plus, Pencil, Trash2, X, Loader2, Filter } from 'lucide-react';
import ImageUpload from '../components/ImageUpload';
import ListEditor from '../components/ListEditor';
import StringListEditor from '../components/StringListEditor';
import TabBar from '../components/TabBar';

const emptyForm = {
  name: '', slug: '', description: '', location: '', image: '',
  ranking: '', qsRanking: '', tagline: '', website: '', type: 'UNIVERSITY',
  fees: '', countryId: '',
  // heroData
  heroTitle: '', heroSubtitle: '', heroImage: '',
  // whySection
  whyTitle: '', whyReasons: [],
  // coursesData
  coursesTitle: '', coursesDescription: '', courses: [],
  // admissionData
  requirementsTitle: '', howToApplyTitle: '', requirements: [], howToApply: []
};

const UniversitiesManagement = () => {
  const [items, setItems] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [modal, setModal] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [errorFields, setErrorFields] = useState(null);
  const [activeTab, setActiveTab] = useState('basic');
  const scrollRef = useRef(null);

  const load = async () => {
    setLoading(true);
    try {
      const [uRes, cRes] = await Promise.all([
        adminApi.listUniversities({ limit: '100', search }),
        adminApi.listCountries({ limit: '100' })
      ]);
      setItems(uRes.data || []);
      setCountries(cRes.data || []);
    } catch { /* ignore */ }
    setLoading(false);
  };

  useEffect(() => { load(); }, [search]);

  const filtered = items.filter(u => {
    if (filterType && u.type !== filterType) return false;
    if (filterCountry && u.countryId !== filterCountry) return false;
    return true;
  });

  const openCreate = () => {
    setForm({ ...emptyForm, countryId: countries[0]?.id || '' });
    setError(''); setErrorFields(null); setActiveTab('basic');
    setModal('create');
    setTimeout(() => scrollRef.current?.scrollTo(0, 0), 0);
  };

  const openEdit = (u) => {
    setSelected(u);
    setForm({
      name: u.name || '', slug: u.slug || '', description: u.description || '',
      location: u.location || '', image: u.image || '', ranking: String(u.ranking || ''),
      qsRanking: u.qsRanking || '', tagline: u.tagline || '', website: u.website || '',
      type: u.type || 'UNIVERSITY', fees: u.fees || '', countryId: u.countryId || '',
      // heroData
      heroTitle: u.heroData?.title || '',
      heroSubtitle: u.heroData?.subtitle || '',
      heroImage: u.heroData?.image || '',
      // whySection
      whyTitle: u.whySection?.title || '',
      whyReasons: Array.isArray(u.whySection?.reasons) ? u.whySection.reasons : [],
      // coursesData
      coursesTitle: u.coursesData?.title || '',
      coursesDescription: u.coursesData?.description || '',
      courses: Array.isArray(u.coursesData?.courses) ? u.coursesData.courses : [],
      // admissionData
      requirementsTitle: u.admissionData?.requirementsTitle || '',
      howToApplyTitle: u.admissionData?.howToApplyTitle || '',
      requirements: Array.isArray(u.admissionData?.requirements) ? u.admissionData.requirements : [],
      howToApply: Array.isArray(u.admissionData?.howToApply) ? u.admissionData.howToApply : []
    });
    setError(''); setErrorFields(null); setActiveTab('basic');
    setModal('edit');
    setTimeout(() => scrollRef.current?.scrollTo(0, 0), 0);
  };

  const openDelete = (u) => { setSelected(u); setError(''); setErrorFields(null); setModal('delete'); };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errorFields?.[name]) {
      setErrorFields(prev => { const next = { ...prev }; delete next[name]; return next; });
    }
  };

  const fieldClass = (name) =>
    errorFields?.[name]
      ? 'w-full px-3 py-2 border border-red-500 rounded-lg text-sm outline-none focus:ring-2 focus:ring-red-300'
      : 'w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20';

  const fieldError = (name) =>
    errorFields?.[name]
      ? <p className="text-red-500 text-[10px] mt-0.5">{Array.isArray(errorFields[name]) ? errorFields[name].join(', ') : errorFields[name]}</p>
      : null;

  const buildPayload = () => {
    const payload = {
      name: form.name, slug: form.slug, description: form.description,
      ranking: Number(form.ranking) || 1, website: form.website, type: form.type
    };
    if (form.location) payload.location = form.location;
    if (form.image) payload.image = form.image;
    if (form.qsRanking) payload.qsRanking = form.qsRanking;
    if (form.tagline) payload.tagline = form.tagline;
    if (form.fees) payload.fees = form.fees;

    // heroData — buttons are auto-generated, not admin-configurable
    if (form.heroTitle || form.heroSubtitle) {
      payload.heroData = {
        title: form.heroTitle, subtitle: form.heroSubtitle,
        image: form.heroImage, primaryCta: 'Explore Courses', secondaryCta: 'Visit Website'
      };
    }
    // whySection
    if (form.whyTitle || form.whyReasons.length) {
      payload.whySection = { title: form.whyTitle, reasons: form.whyReasons };
    }
    // coursesData
    if (form.coursesTitle || form.courses.length) {
      payload.coursesData = {
        title: form.coursesTitle, description: form.coursesDescription,
        courses: form.courses
      };
    }
    // admissionData
    if (form.requirementsTitle || form.requirements.length || form.howToApply.length) {
      payload.admissionData = {
        requirementsTitle: form.requirementsTitle, howToApplyTitle: form.howToApplyTitle,
        requirements: form.requirements, howToApply: form.howToApply
      };
    }
    return payload;
  };

  const handleSave = async () => {
    setSaving(true); setError(''); setErrorFields(null);
    try {
      if (modal === 'create') {
        await adminApi.createUniversity(form.countryId, buildPayload());
      } else {
        await adminApi.updateUniversity(selected.id, buildPayload());
      }
      setModal(null);
      load();
    } catch (e) { setError(e.message); setErrorFields(e.fieldErrors || null); }
    setSaving(false);
  };

  const handleDelete = async () => {
    setSaving(true);
    try {
      await adminApi.deleteUniversity(selected.id);
      setModal(null); load();
    } catch (e) { setError(e.message); setErrorFields(e.fieldErrors || null); }
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold text-on-surface">Universities & Colleges</h1>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-medium hover:opacity-90">
          <Plus className="w-4 h-4" /> Add Institution
        </button>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" placeholder="Search institutions..." value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface text-sm outline-none focus:ring-2 focus:ring-primary/20" />
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-on-surface-variant" />
          <select value={filterType} onChange={e => setFilterType(e.target.value)}
            className="px-3 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface text-sm outline-none">
            <option value="">All Types</option>
            <option value="UNIVERSITY">University</option>
            <option value="COLLEGE">College</option>
          </select>
          <select value={filterCountry} onChange={e => setFilterCountry(e.target.value)}
            className="px-3 py-2.5 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface text-sm outline-none">
            <option value="">All Countries</option>
            {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-on-surface-variant py-12">No institutions found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-on-surface-variant">Name</th>
                <th className="text-left px-4 py-3 font-medium text-on-surface-variant">Type</th>
                <th className="text-left px-4 py-3 font-medium text-on-surface-variant">Location</th>
                <th className="text-left px-4 py-3 font-medium text-on-surface-variant">Country</th>
                <th className="text-left px-4 py-3 font-medium text-on-surface-variant">Ranking</th>
                <th className="text-left px-4 py-3 font-medium text-on-surface-variant">Avg. Fees</th>
                <th className="text-right px-4 py-3 font-medium text-on-surface-variant">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.map(u => (
                <tr key={u.id} className="hover:bg-surface-container-low/50">
                  <td className="px-4 py-3 font-medium text-on-surface">{u.name}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${u.type === 'COLLEGE' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'}`}>
                      {u.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant">{u.location || '-'}</td>
                  <td className="px-4 py-3 text-on-surface-variant">{u.country?.name || '-'}</td>
                  <td className="px-4 py-3 text-on-surface-variant">{u.qsRanking || u.ranking}</td>
                  <td className="px-4 py-3 text-on-surface-variant">{u.fees || '-'}</td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button onClick={() => openEdit(u)} className="p-1.5 text-on-surface-variant hover:text-primary"><Pencil className="w-4 h-4" /></button>
                    <button onClick={() => openDelete(u)} className="p-1.5 text-on-surface-variant hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
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
              <h2 className="text-lg font-bold">{modal === 'create' ? 'Add Institution' : 'Edit Institution'}</h2>
              <button onClick={() => setModal(null)}><X className="w-5 h-5" /></button>
            </div>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            )}
            <TabBar
              tabs={[
                { key: 'basic', label: 'Basic Info' },
                { key: 'hero', label: 'Hero', badge: form.heroTitle ? 1 : null },
                { key: 'why', label: 'Why Choose', badge: form.whyReasons.length || null },
                { key: 'courses', label: 'Courses', badge: form.courses.length || null },
                { key: 'admission', label: 'Admission', badge: (form.requirements.length + form.howToApply.length) || null }
              ]}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
            <div ref={scrollRef} className="max-h-[65vh] overflow-y-auto pr-2">

              {/* Basic Info */}
              {activeTab === 'basic' && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-medium text-on-surface-variant mb-1">Country</label>
                    <select name="countryId" value={form.countryId} onChange={handleChange}
                      className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none">
                      {countries.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-on-surface-variant mb-1">Type</label>
                    <select name="type" value={form.type} onChange={handleChange}
                      className="w-full px-3 py-2 border border-outline-variant rounded-lg text-sm outline-none">
                      <option value="UNIVERSITY">University</option>
                      <option value="COLLEGE">College</option>
                    </select>
                  </div>
                  {[
                    ['name', 'Name', 'e.g. University of Melbourne'],
                    ['slug', 'Slug', 'e.g. university-of-melbourne'],
                    ['location', 'Location', 'e.g. Melbourne, Victoria'],
                    ['ranking', 'Ranking', 'e.g. 1'],
                    ['qsRanking', 'QS Ranking', 'e.g. #14'],
                    ['tagline', 'Tagline', 'e.g. Australia\'s Leading University'],
                    ['website', 'Website URL', 'e.g. https://www.unimelb.edu.au'],
                    ['fees', 'Avg. Fees', 'e.g. $30,000 - $45,000 AUD/year']
                  ].map(([key, label, placeholder]) => (
                    <div key={key}>
                      <label className="block text-xs font-medium text-on-surface-variant mb-1">{label}</label>
                      <input name={key} value={form[key]} onChange={handleChange} placeholder={placeholder}
                        className={fieldClass(key)} />
                      {fieldError(key)}
                    </div>
                  ))}
                  <div>
                    <ImageUpload label="Thumbnail Image" value={form.image}
                      onChange={(url) => setForm(f => ({ ...f, image: url }))} />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-medium text-on-surface-variant mb-1">Description</label>
                    <textarea name="description" value={form.description} onChange={handleChange} rows={3}
                      placeholder="e.g. The University of Melbourne is a public research university located in Melbourne, Australia..."
                      className={fieldClass('description')} />
                    {fieldError('description')}
                  </div>
                </div>
              )}

              {/* Hero */}
              {activeTab === 'hero' && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-medium text-on-surface-variant mb-1">Title</label>
                    <input name="heroTitle" value={form.heroTitle} onChange={handleChange}
                      placeholder="e.g. University of Melbourne"
                      className={fieldClass('heroTitle')} />
                    {fieldError('heroTitle')}
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-medium text-on-surface-variant mb-1">Subtitle</label>
                    <textarea name="heroSubtitle" value={form.heroSubtitle} onChange={handleChange} rows={2}
                      placeholder="e.g. A world-class education in the heart of Melbourne, Australia"
                      className={fieldClass('heroSubtitle')} />
                    {fieldError('heroSubtitle')}
                  </div>
                  <div className="col-span-2">
                    <ImageUpload label="Hero Background Image" value={form.heroImage}
                      onChange={(url) => setForm(f => ({ ...f, heroImage: url }))} />
                  </div>
                </div>
              )}

              {/* Why Choose */}
              {activeTab === 'why' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-on-surface-variant mb-1">Section Title</label>
                    <input name="whyTitle" value={form.whyTitle} onChange={handleChange}
                      placeholder="e.g. Why University of Melbourne?"
                      className={fieldClass('whyTitle')} />
                    {fieldError('whyTitle')}
                  </div>
                  <ListEditor
                    label="Reasons"
                    description="Add reasons why students should choose this institution."
                    value={form.whyReasons}
                    onChange={(v) => setForm(f => ({ ...f, whyReasons: v }))}
                    fields={[
                      { key: 'title', label: 'Title', placeholder: 'e.g. #1 in Australia' },
                      { key: 'description', label: 'Description', placeholder: 'Describe this reason...', type: 'textarea' },
                      { key: 'link', label: 'Link URL (optional)', placeholder: 'https://...' },
                      { key: 'linkText', label: 'Link Text (optional)', placeholder: 'e.g. Learn More' }
                    ]}
                    emptyItem={() => ({ title: '', description: '', link: '', linkText: '' })}
                  />
                </div>
              )}

              {/* Courses */}
              {activeTab === 'courses' && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-on-surface-variant mb-1">Section Title</label>
                    <input name="coursesTitle" value={form.coursesTitle} onChange={handleChange}
                      placeholder="e.g. Popular Courses at University of Melbourne"
                      className={fieldClass('coursesTitle')} />
                    {fieldError('coursesTitle')}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-on-surface-variant mb-1">Section Description</label>
                    <textarea name="coursesDescription" value={form.coursesDescription} onChange={handleChange} rows={2}
                      placeholder="e.g. Explore world-renowned programs across diverse fields of study"
                      className={fieldClass('coursesDescription')} />
                    {fieldError('coursesDescription')}
                  </div>
                  <ListEditor
                    label="Course List"
                    description="Add courses offered by this institution with full details."
                    value={form.courses}
                    onChange={(v) => setForm(f => ({ ...f, courses: v }))}
                    fields={[
                      { key: 'title', label: 'Course Title', placeholder: 'e.g. Bachelor of Biomedicine' },
                      { key: 'description', label: 'Short Description', placeholder: 'e.g. A globally recognised pre-medical degree', type: 'textarea' },
                      { key: 'fees', label: 'Fees', placeholder: 'e.g. $45,000 AUD/year' },
                      { key: 'duration', label: 'Duration', placeholder: 'e.g. 3 years full-time' },
                      { key: 'semesters', label: 'Semesters', placeholder: 'e.g. 6 semesters' },
                      { key: 'scope', label: 'Scope in Country', placeholder: 'e.g. High demand in healthcare sector with strong PR pathways', type: 'textarea' },
                      { key: 'details', label: 'Other Details', placeholder: 'e.g. Includes lab work, clinical placements, and research project in final year', type: 'textarea' },
                      { key: 'tag', label: 'Tag (optional)', placeholder: 'e.g. Top Ranked' }
                    ]}
                    emptyItem={() => ({ title: '', description: '', fees: '', duration: '', semesters: '', scope: '', details: '', tag: '' })}
                  />
                </div>
              )}

              {/* Admission */}
              {activeTab === 'admission' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-on-surface-variant mb-1">Requirements Section Title</label>
                      <input name="requirementsTitle" value={form.requirementsTitle} onChange={handleChange}
                        placeholder="e.g. Entry Requirements"
                        className={fieldClass('requirementsTitle')} />
                      {fieldError('requirementsTitle')}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-on-surface-variant mb-1">How to Apply Section Title</label>
                      <input name="howToApplyTitle" value={form.howToApplyTitle} onChange={handleChange}
                        placeholder="e.g. How to Apply"
                        className={fieldClass('howToApplyTitle')} />
                      {fieldError('howToApplyTitle')}
                    </div>
                  </div>
                  <ListEditor
                    label="Entry Requirements"
                    description="Add admission requirements such as academic qualifications, language tests, etc."
                    value={form.requirements}
                    onChange={(v) => setForm(f => ({ ...f, requirements: v }))}
                    fields={[
                      { key: 'title', label: 'Requirement', placeholder: 'e.g. Academic Excellence' },
                      { key: 'description', label: 'Description', placeholder: 'Describe this requirement...', type: 'textarea' }
                    ]}
                    emptyItem={() => ({ title: '', description: '' })}
                  />
                  <StringListEditor
                    label="How to Apply Steps"
                    description="Add step-by-step instructions for how to apply to this institution."
                    value={form.howToApply}
                    onChange={(v) => setForm(f => ({ ...f, howToApply: v }))}
                    placeholder="e.g. Select your course and check the entry dates."
                  />
                </div>
              )}

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
            <h2 className="text-lg font-bold mb-2">Delete Institution</h2>
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

export default UniversitiesManagement;
