import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { adminApi } from '../api';
import { User, Shield, Calendar, Eye, EyeOff, Loader2, AlertTriangle } from 'lucide-react';
import toast from 'react-hot-toast';

const Profile = () => {
  const { admin, refreshAdmin } = useAuth();
  const [name, setName] = useState(admin?.name || '');
  const [email, setEmail] = useState(admin?.email || '');
  const [saving, setSaving] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  const [changingPw, setChangingPw] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await adminApi.updateProfile({ name, email });
      await refreshAdmin();
      toast.success('Profile updated');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    setChangingPw(true);
    try {
      await adminApi.changePassword({ currentPassword, newPassword, confirmPassword });
      await refreshAdmin();
      toast.success('Password changed');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setChangingPw(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-headline font-bold text-on-surface">Profile</h1>
        <p className="text-sm text-on-surface-variant mt-1">Manage your account settings</p>
      </div>

      {admin?.forcePasswordChange && (
        <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-800">Password change required</p>
            <p className="text-xs text-amber-700 mt-0.5">Please change your password below for security.</p>
          </div>
        </div>
      )}

      {/* Profile Info Card */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-outline-variant">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <User className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="font-headline font-semibold text-on-surface">{admin?.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold
                ${admin?.role === 'SUPERADMIN' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                {admin?.role === 'SUPERADMIN' ? 'Super Admin' : 'Admin'}
              </span>
              <span className="text-xs text-on-surface-variant flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Member since {admin?.createdAt ? new Date(admin.createdAt).toLocaleDateString() : '—'}
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low
                text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low
                text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-sm
                hover:bg-primary-container disabled:opacity-50 transition-colors flex items-center gap-2"
            >
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Change Password Card */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6">
        <h2 className="font-headline font-semibold text-on-surface mb-4">Change Password</h2>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Current Password</label>
            <div className="relative">
              <input
                type={showPasswords ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low
                  text-on-surface text-sm pr-11 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPasswords(!showPasswords)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
              >
                {showPasswords ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">New Password</label>
            <input
              type={showPasswords ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low
                text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
            <p className="text-xs text-on-surface-variant mt-1">Min 8 chars, with uppercase, lowercase, number, and special character</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-on-surface mb-1.5">Confirm New Password</label>
            <input
              type={showPasswords ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low
                text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={changingPw}
              className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-semibold text-sm
                hover:bg-primary-container disabled:opacity-50 transition-colors flex items-center gap-2"
            >
              {changingPw && <Loader2 className="w-4 h-4 animate-spin" />}
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
