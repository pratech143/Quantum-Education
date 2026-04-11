const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const request = async (path, options = {}) => {
  const token = localStorage.getItem('admin_token');
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_BASE}/api/admin${path}`, {
    ...options,
    headers,
    credentials: 'include'
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data;
};

export const adminApi = {
  login: (email, password) =>
    request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),

  logout: () => request('/auth/logout', { method: 'POST' }),

  me: () => request('/auth/me'),

  // Admin management
  listAdmins: () => request('/admins'),
  createAdmin: (data) => request('/admins', { method: 'POST', body: JSON.stringify(data) }),
  updateAdmin: (id, data) => request(`/admins/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteAdmin: (id) => request(`/admins/${id}`, { method: 'DELETE' }),
  resetPassword: (id, newPassword) =>
    request(`/admins/${id}/password`, { method: 'PUT', body: JSON.stringify({ newPassword }) }),

  // Stats
  stats: () => request('/stats'),

  // Profile
  updateProfile: (data) => request('/profile', { method: 'PUT', body: JSON.stringify(data) }),
  changePassword: (data) => request('/profile/password', { method: 'PUT', body: JSON.stringify(data) })
};
