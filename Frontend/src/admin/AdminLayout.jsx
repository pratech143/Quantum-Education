import { useState } from 'react';
import { Outlet, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import {
  LayoutDashboard,
  Users,
  User,
  LogOut,
  Menu,
  X,
  Shield,
  ChevronLeft,
  MessageSquare,
  Globe,
  GraduationCap,
  Award,
  Newspaper
} from 'lucide-react';

const Sidebar = ({ open, onClose }) => {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const links = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    ...(admin?.role === 'SUPERADMIN'
      ? [{ to: '/admin/admins', icon: Shield, label: 'Admins' }]
      : []),
    { to: '/admin/destinations', icon: Globe, label: 'Destinations' },
    { to: '/admin/universities', icon: GraduationCap, label: 'Universities' },
    { to: '/admin/alumni', icon: Award, label: 'Alumni' },
    { to: '/admin/news', icon: Newspaper, label: 'News & Notices' },
    { to: '/admin/team', icon: Users, label: 'Our Team' },
    { to: '/admin/messages', icon: MessageSquare, label: 'Messages' },
    { to: '/admin/profile', icon: User, label: 'Profile' }
  ];

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-surface-container-lowest border-r border-outline-variant
          transform transition-transform duration-200 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-5 border-b border-outline-variant">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-headline font-bold text-on-surface text-lg">Admin</span>
            </div>
            <button onClick={onClose} className="lg:hidden text-on-surface-variant hover:text-on-surface">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 p-3 space-y-1">
            {links.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                  }`
                }
              >
                <Icon className="w-5 h-5" />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="p-3 border-t border-outline-variant">
            <div className="px-4 py-2 mb-2">
              <p className="text-sm font-medium text-on-surface truncate">{admin?.name}</p>
              <p className="text-xs text-on-surface-variant truncate">{admin?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium
                text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Sign out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

const AdminLayout = () => {
  const { admin, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!admin) return <Navigate to="/admin/login" replace />;

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-surface-container-lowest/80 backdrop-blur-sm border-b border-outline-variant">
          <div className="flex items-center justify-between px-4 lg:px-6 h-16">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 ml-auto">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold
                ${admin.role === 'SUPERADMIN'
                  ? 'bg-primary/10 text-primary'
                  : 'bg-secondary/10 text-secondary'
                }`}
              >
                {admin.role === 'SUPERADMIN' ? 'Super Admin' : 'Admin'}
              </span>
              <span className="text-sm font-medium text-on-surface">{admin.name}</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
