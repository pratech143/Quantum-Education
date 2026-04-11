import { useState, useEffect, useCallback } from 'react';
import { adminApi } from '../api';
import { Mail, Trash2, X, Loader2, Phone, MapPin, Clock, Search, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-surface-container-lowest rounded-2xl border border-outline-variant shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
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

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [showView, setShowView] = useState(null);
  const [showDelete, setShowDelete] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const loadMessages = useCallback(async () => {
    try {
      const res = await adminApi.listContactRequests();
      setMessages(res.data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadMessages(); }, [loadMessages]);

  const filtered = messages.filter((m) => {
    const term = search.toLowerCase();
    return (
      m.fullName.toLowerCase().includes(term) ||
      m.email.toLowerCase().includes(term) ||
      m.message.toLowerCase().includes(term) ||
      (m.preferredDestination && m.preferredDestination.toLowerCase().includes(term))
    );
  });

  const handleDelete = async () => {
    setSubmitting(true);
    try {
      await adminApi.deleteContactRequest(showDelete.id);
      toast.success('Message deleted');
      setShowDelete(null);
      loadMessages();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
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
          <h1 className="text-2xl font-headline font-bold text-on-surface">Contact Messages</h1>
          <p className="text-sm text-on-surface-variant mt-1">
            {messages.length} message{messages.length !== 1 ? 's' : ''} received
          </p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, message, or destination..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-outline-variant bg-surface-container-low
            text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-12 text-center">
          <MessageSquare className="w-12 h-12 text-on-surface-variant/30 mx-auto mb-4" />
          <p className="text-on-surface-variant text-sm">
            {messages.length === 0 ? 'No messages yet' : 'No messages match your search'}
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((m) => (
            <div
              key={m.id}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant p-5 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-on-surface truncate">{m.fullName}</h3>
                    {m.preferredDestination && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary whitespace-nowrap">
                        {m.preferredDestination}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-on-surface-variant mb-3">
                    <span className="flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5" /> {m.email}
                    </span>
                    {m.phoneNumber && (
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" /> {m.phoneNumber}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {formatDate(m.createdAt)}
                    </span>
                  </div>

                  <p className="text-sm text-on-surface-variant line-clamp-2">{m.message}</p>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => setShowView(m)}
                    className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                    title="View full message"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setShowDelete(m)}
                    className="p-2 rounded-lg text-on-surface-variant hover:bg-red-50 hover:text-red-600"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View Message Modal */}
      <Modal open={!!showView} onClose={() => setShowView(null)} title="Message Details">
        {showView && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Name</p>
                <p className="text-sm text-on-surface font-medium">{showView.fullName}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm text-on-surface font-medium">{showView.email}</p>
              </div>
              {showView.phoneNumber && (
                <div>
                  <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-sm text-on-surface font-medium">{showView.phoneNumber}</p>
                </div>
              )}
              {showView.preferredDestination && (
                <div>
                  <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Destination</p>
                  <p className="text-sm text-on-surface font-medium">{showView.preferredDestination}</p>
                </div>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Message</p>
              <div className="bg-surface-container-low rounded-xl p-4">
                <p className="text-sm text-on-surface whitespace-pre-wrap">{showView.message}</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Received</p>
              <p className="text-sm text-on-surface-variant">{formatDate(showView.createdAt)}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal open={!!showDelete} onClose={() => setShowDelete(null)} title="Delete Message">
        <p className="text-sm text-on-surface-variant mb-6">
          Are you sure you want to permanently delete the message from <strong>{showDelete?.fullName}</strong>? This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <button onClick={() => setShowDelete(null)}
            className="px-4 py-2.5 rounded-xl border border-outline-variant text-sm font-medium text-on-surface hover:bg-surface-container-high transition-colors">
            Cancel
          </button>
          <button onClick={handleDelete} disabled={submitting}
            className="px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 disabled:opacity-50 transition-colors flex items-center gap-2">
            {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactMessages;
