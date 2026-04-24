const API_PREFIX = '/api/v1';

const fetchJson = async (url) => {
  const response = await fetch(url);
  const data = await response.json().catch(() => ({}));
  
  if (!response.ok) {
    const error = new Error(data.message || `Request failed: ${response.status}`);
    Object.assign(error, data);
    throw error;
  }
  return data;
};

export const api = {
  // Alumni
  getAlumni: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchJson(`${API_PREFIX}/alumni${query ? `?${query}` : ''}`);
  },

  // Destinations / Countries
  getDestinations: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchJson(`${API_PREFIX}/countries${query ? `?${query}` : ''}`);
  },

  getDestinationBySlug: (slug) =>
    fetchJson(`${API_PREFIX}/countries/slug/${slug}`),

  getDestinationById: (id) =>
    fetchJson(`${API_PREFIX}/countries/${id}`),

  // Universities
  getUniversities: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchJson(`${API_PREFIX}/universities${query ? `?${query}` : ''}`);
  },

  getUniversityById: (id) =>
    fetchJson(`${API_PREFIX}/universities/${id}`),

  getUniversityBySlug: (slug) =>
    fetchJson(`${API_PREFIX}/universities/slug/${slug}`),

  getUniversitiesByCountry: (countryId, params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchJson(`${API_PREFIX}/universities/country/${countryId}${query ? `?${query}` : ''}`);
  },

  getUniversityCourses: (id) =>
    fetchJson(`${API_PREFIX}/universities/${id}/courses`),

  // Colleges
  getColleges: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchJson(`${API_PREFIX}/universities/colleges${query ? `?${query}` : ''}`);
  },

  // News
  getNews: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchJson(`${API_PREFIX}/news${query ? `?${query}` : ''}`);
  },

  getNewsById: (id) =>
    fetchJson(`${API_PREFIX}/news/${id}`)
};
