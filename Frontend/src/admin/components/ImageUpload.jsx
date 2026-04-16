import { useState, useRef } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';
import { adminApi } from '../api';

export const getImageUrl = (url) => {
  if (!url) return null;
  return url;
};

const ImageUpload = ({ value, onChange, label = 'Image' }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');
    try {
      const res = await adminApi.uploadFile(file);
      onChange(res.data.url);
    } catch (err) {
      setError(err.message || 'Upload failed');
    }
    setUploading(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  const handleRemove = () => {
    onChange('');
  };

  const previewUrl = getImageUrl(value);

  return (
    <div>
      <label className="block text-xs font-medium text-on-surface-variant mb-1">{label}</label>
      {previewUrl ? (
        <div className="relative inline-block">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-24 h-24 object-cover rounded-lg border border-outline-variant"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-2 px-4 py-2.5 border-2 border-dashed border-outline-variant rounded-lg
            text-sm text-on-surface-variant hover:border-primary hover:text-primary transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Uploading...</>
          ) : (
            <><Upload className="w-4 h-4" /> Choose Image</>
          )}
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="mt-1 text-xs text-primary hover:underline disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Change image'}
        </button>
      )}
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default ImageUpload;
