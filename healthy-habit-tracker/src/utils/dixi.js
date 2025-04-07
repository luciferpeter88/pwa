const dixi = {
  async get(key) {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  },

  async set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  async remove(key) {
    localStorage.removeItem(key);
  },

  async getAll(prefix = "") {
    const results = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(prefix)) {
        results[key] = JSON.parse(localStorage.getItem(key));
      }
    }
    return results;
  },
};

export default dixi;
