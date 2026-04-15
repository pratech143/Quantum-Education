import { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { adminApi } from '../api';
import { Users, UserCheck, Shield, Globe, GraduationCap, Award, MessageSquare, Loader2 } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-6">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-on-surface-variant">{label}</p>
        <p className="text-2xl font-headline font-bold text-on-surface">{value}</p>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const { admin } = useAuth();
  const [stats, setStats] = useState(null);
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const statsRes = await adminApi.stats();
        setStats(statsRes.data);
        if (admin?.role === 'SUPERADMIN') {
          const adminsRes = await adminApi.listAdmins();
          setAdmins(adminsRes.data.slice(0, 5));
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [admin?.role]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-headline font-bold text-on-surface">Dashboard</h1>
        <p className="text-sm text-on-surface-variant mt-1">Welcome back, {admin?.name}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StatCard
          icon={Globe}
          label="Destinations"
          value={stats?.totalCountries ?? '—'}
          color="bg-blue-100 text-blue-700"
        />
        <StatCard
          icon={GraduationCap}
          label="Universities"
          value={stats?.totalUniversities ?? '—'}
          color="bg-purple-100 text-purple-700"
        />
        <StatCard
          icon={Award}
          label="Alumni"
          value={stats?.totalAlumni ?? '—'}
          color="bg-amber-100 text-amber-700"
        />
        <StatCard
          icon={MessageSquare}
          label="Contact Requests"
          value={stats?.totalContactRequests ?? '—'}
          color="bg-green-100 text-green-700"
        />
        <StatCard
          icon={Users}
          label="Total Admins"
          value={stats?.totalAdmins ?? '—'}
          color="bg-primary/10 text-primary"
        />
        <StatCard
          icon={UserCheck}
          label="Active Admins"
          value={stats?.activeAdmins ?? '—'}
          color="bg-green-100 text-green-700"
        />
        <StatCard
          icon={Shield}
          label="Your Role"
          value={admin?.role === 'SUPERADMIN' ? 'Super Admin' : 'Admin'}
          color="bg-secondary/10 text-secondary"
        />
      </div>

      {admin?.role === 'SUPERADMIN' && admins.length > 0 && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant">
            <h2 className="font-headline font-semibold text-on-surface">Recent Admins</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Name</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Email</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Role</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {admins.map((a) => (
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
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium
                        ${a.isActive ? 'text-green-700' : 'text-red-600'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${a.isActive ? 'bg-green-500' : 'bg-red-500'}`} />
                        {a.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
