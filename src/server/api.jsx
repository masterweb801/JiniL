const api = process.env.NODE_ENV === 'production' ? '' : import.meta.env.VITE_API;

export default api