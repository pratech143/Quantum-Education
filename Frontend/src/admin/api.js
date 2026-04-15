const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const request = async (path, options = {}) => {
  const token = localStorage.getItem('admin_token');
  const headers = { ...options.headers };
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`${API_BASE}${path}`, {
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

const adminRequest = (path, options = {}) => request(`/api/admin${path}`, options);
const apiRequest = (path, options = {}) => request(`/api/v1${path}`, options);

export const adminApi = {
  login: (email, password) =>
    adminRequest('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),

  logout: () => adminRequest('/auth/logout', { method: 'POST' }),

  me: () => adminRequest('/auth/me'),

  // Admin management
  listAdmins: () => adminRequest('/admins'),
  createAdmin: (data) => adminRequest('/admins', { method: 'POST', body: JSON.stringify(data) }),
  updateAdmin: (id, data) => adminRequest(`/admins/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteAdmin: (id) => adminRequest(`/admins/${id}`, { method: 'DELETE' }),
  resetPassword: (id, newPassword) =>
    adminRequest(`/admins/${id}/password`, { method: 'PUT', body: JSON.stringify({ newPassword }) }),

  // File upload
  uploadFile: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return adminRequest('/upload', { method: 'POST', body: formData });
  },

  // Stats
  stats: () => adminRequest('/stats'),

  // Contact requests
  listContactRequests: () => adminRequest('/contact-requests'),
  deleteContactRequest: (id) => adminRequest(`/contact-requests/${id}`, { method: 'DELETE' }),

  // Profile
  updateProfile: (data) => adminRequest('/profile', { method: 'PUT', body: JSON.stringify(data) }),
  changePassword: (data) => adminRequest('/profile/password', { method: 'PUT', body: JSON.stringify(data) }),

  // Countries / Destinations
  listCountries: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/countries${query ? `?${query}` : ''}`);
  },
  getCountry: (id) => apiRequest(`/countries/${id}`),
  createCountry: (data) => apiRequest('/countries', { method: 'POST', body: JSON.stringify(data) }),
  updateCountry: (id, data) => apiRequest(`/countries/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  deleteCountry: (id) => apiRequest(`/countries/${id}`, { method: 'DELETE' }),

  // Universities
  listUniversities: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/universities${query ? `?${query}` : ''}`);
  },
  getUniversity: (id) => apiRequest(`/universities/${id}`),
  createUniversity: (countryId, data) =>
    apiRequest(`/universities/country/${countryId}`, { method: 'POST', body: JSON.stringify(data) }),
  updateUniversity: (id, data) => apiRequest(`/universities/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  deleteUniversity: (id) => apiRequest(`/universities/${id}`, { method: 'DELETE' }),

  // Alumni
  listAlumni: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiRequest(`/alumni${query ? `?${query}` : ''}`);
  },
  getAlumni: (id) => apiRequest(`/alumni/${id}`),
  createAlumni: (data) => apiRequest('/alumni', { method: 'POST', body: JSON.stringify(data) }),
  updateAlumni: (id, data) => apiRequest(`/alumni/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
  deleteAlumni: (id) => apiRequest(`/alumni/${id}`, { method: 'DELETE' })
};
