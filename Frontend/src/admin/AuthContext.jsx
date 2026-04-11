import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { adminApi } from './api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const res = await adminApi.me();
      setAdmin(res.data);
    } catch {
      setAdmin(null);
      localStorage.removeItem('admin_token');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      checkAuth();
    } else {
      setLoading(false);
    }
  }, [checkAuth]);

  const login = async (email, password) => {
    const res = await adminApi.login(email, password);
    localStorage.setItem('admin_token', res.data.token);
    setAdmin(res.data);
    return res.data;
  };

  const logout = async () => {
    try {
      await adminApi.logout();
    } catch {
      // ignore
    }
    localStorage.removeItem('admin_token');
    setAdmin(null);
  };

  const refreshAdmin = async () => {
    const res = await adminApi.me();
    setAdmin(res.data);
  };

  return (
    <AuthContext.Provider value={{ admin, loading, login, logout, refreshAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
