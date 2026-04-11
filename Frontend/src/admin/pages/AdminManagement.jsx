import { useState, useEffect, useCallback } from 'react';
import { adminApi } from '../api';
import { useAuth } from '../AuthContext';
import {
  Plus, Search, Edit3, KeyRound, Trash2, X, Loader2, UserX, UserCheck
} from 'lucide-react';
import toast from 'react-hot-toast';

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant">
          <h3 className="font-headline font-semibold text-on-surface">{title}</h3>
          <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-on-surface mb-1.5">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low
        text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
    />
  </div>
);

const AdminManagement = () => {
  const { admin: currentAdmin } = useAuth();
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

  // Modal states
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(null);
  const [showResetPw, setShowResetPw] = useState(null);
  const [showDelete, setShowDelete] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Form states
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'ADMIN' });
  const [editForm, setEditForm] = useState({ name: '', email: '', role: 'ADMIN' });
  const [resetPw, setResetPw] = useState('');

  const loadAdmins = useCallback(async () => {
    try {
      const res = await adminApi.listAdmins();
      setAdmins(res.data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadAdmins(); }, [loadAdmins]);

  const filtered = admins.filter((a) => {
    const matchSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = !roleFilter || a.role === roleFilter;
    return matchSearch && matchRole;
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await adminApi.createAdmin(form);
      toast.success('Admin created');
      setShowCreate(false);
      setForm({ name: '', email: '', password: '', role: 'ADMIN' });
      loadAdmins();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await adminApi.updateAdmin(showEdit.id, editForm);
      toast.success('Admin updated');
      setShowEdit(null);
      loadAdmins();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await adminApi.resetPassword(showResetPw.id, resetPw);
      toast.success('Password reset');
      setShowResetPw(null);
      setResetPw('');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleToggleActive = async (admin) => {
    try {
      if (admin.isActive) {
        await adminApi.deleteAdmin(admin.id);
        toast.success('Admin deactivated');
      } else {
        await adminApi.updateAdmin(admin.id, { isActive: true });
        toast.success('Admin activated');
      }
      loadAdmins();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDelete = async () => {
    setSubmitting(true);
    try {
      await adminApi.deleteAdmin(showDelete.id);
      toast.success('Admin deactivated');
      setShowDelete(null);
      loadAdmins();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const openEdit = (admin) => {
    setEditForm({ name: admin.name, email: admin.email, role: admin.role });
    setShowEdit(admin);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-headline font-bold text-on-surface">Admin Management</h1>
          <p className="text-sm text-on-surface-variant mt-1">{admins.length} admin{admins.length !== 1 ? 's' : ''} total</p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-on-primary
            font-semibold text-sm hover:bg-primary-container transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Admin
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low
              text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low
            text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        >
          <option value="">All roles</option>
          <option value="SUPERADMIN">Super Admin</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low">
                <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Name</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Email</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Role</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Created</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-sm text-on-surface-variant">
                    No admins found
                  </td>
                </tr>
              ) : (
                filtered.map((a) => (
                  <tr key={a.id} className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-3.5 text-sm font-medium text-on-surface">{a.name}</td>
                    <td className="px-6 py-3.5 text-sm text-on-surface-variant">{a.email}</td>
                    <td className="px-6 py-3.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold
                        ${a.role === 'SUPERADMIN' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                        {a.role === 'SUPERADMIN' ? 'Super Admin' : 'Admin'}
                      </span>
                    </td>
                    <td className="px-6 py-3.5">
                      <button
                        onClick={() => handleToggleActive(a)}
                        disabled={a.id === currentAdmin?.id}
                        className="inline-flex items-center gap-1.5 text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {a.isActive ? (
                          <span className="flex items-center gap-1.5 text-green-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Active
                          </span>
                        ) : (
                          <span className="flex items-center gap-1.5 text-red-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Inactive
                          </span>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-3.5 text-sm text-on-surface-variant">
                      {new Date(a.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-3.5">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => openEdit(a)}
                          className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setShowResetPw(a)}
                          className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                          title="Reset password"
                        >
                          <KeyRound className="w-4 h-4" />
                        </button>
                        {a.id !== currentAdmin?.id && (
                          <button
                            onClick={() => setShowDelete(a)}
                            className="p-2 rounded-lg text-on-surface-variant hover:bg-red-50 hover:text-red-600"
                            title="Deactivate"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Admin Modal */}
      <Modal open={showCreate} onClose={() => setShowCreate(false)} title="Add Admin">
        <form onSubmit={handleCreate} className="space-y-4">
          <Input label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <Input label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <Input label="Temporary Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required minLength={8} />
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Role</label>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface text-sm
                focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              <option value="ADMIN">Admin</option>
              <option value="SUPERADMIN">Super Admin</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => setShowCreate(false)}
              className="px-4 py-2.5 rounded-xl border border-outline-variant text-sm font-medium text-on-surface hover:bg-surface-container-high transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={submitting}
              className="px-4 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-semibold hover:bg-primary-container disabled:opacity-50 transition-colors flex items-center gap-2">
              {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
              Create Admin
            </button>
          </div>
        </form>
      </Modal>

      {/* Edit Admin Modal */}
      <Modal open={!!showEdit} onClose={() => setShowEdit(null)} title="Edit Admin">
        <form onSubmit={handleEdit} className="space-y-4">
          <Input label="Name" value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} required />
          <Input label="Email" type="email" value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} required />
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Role</label>
            <select
              value={editForm.role}
              onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low text-on-surface text-sm
                focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              <option value="ADMIN">Admin</option>
              <option value="SUPERADMIN">Super Admin</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => setShowEdit(null)}
              className="px-4 py-2.5 rounded-xl border border-outline-variant text-sm font-medium text-on-surface hover:bg-surface-container-high transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={submitting}
              className="px-4 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-semibold hover:bg-primary-container disabled:opacity-50 transition-colors flex items-center gap-2">
              {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
              Save Changes
            </button>
          </div>
        </form>
      </Modal>

      {/* Reset Password Modal */}
      <Modal open={!!showResetPw} onClose={() => { setShowResetPw(null); setResetPw(''); }} title="Reset Password">
        <p className="text-sm text-on-surface-variant mb-4">
          Set a new password for <strong>{showResetPw?.name}</strong>. They will be required to change it on next login.
        </p>
        <form onSubmit={handleResetPassword} className="space-y-4">
          <Input label="New Password" type="password" value={resetPw} onChange={(e) => setResetPw(e.target.value)} required minLength={8} />
          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={() => { setShowResetPw(null); setResetPw(''); }}
              className="px-4 py-2.5 rounded-xl border border-outline-variant text-sm font-medium text-on-surface hover:bg-surface-container-high transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={submitting}
              className="px-4 py-2.5 rounded-xl bg-primary text-on-primary text-sm font-semibold hover:bg-primary-container disabled:opacity-50 transition-colors flex items-center gap-2">
              {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
              Reset Password
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal open={!!showDelete} onClose={() => setShowDelete(null)} title="Deactivate Admin">
        <p className="text-sm text-on-surface-variant mb-6">
          Are you sure you want to deactivate <strong>{showDelete?.name}</strong>? They will no longer be able to sign in.
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={() => setShowDelete(null)}
            className="px-4 py-2.5 rounded-xl border border-outline-variant text-sm font-medium text-on-surface hover:bg-surface-container-high transition-colors">
            Cancel
          </button>
          <button onClick={handleDelete} disabled={submitting}
            className="px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 disabled:opacity-50 transition-colors flex items-center gap-2">
            {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
            Deactivate
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminManagement;
