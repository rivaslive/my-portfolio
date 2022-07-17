const storage = {
  getItem: <T>(key: string) => {
    const value = window.localStorage.getItem(key);
    try {
      return JSON.parse(value as string) as T;
    } catch (e) {
      return value as unknown as T;
    }
  },
  setItem: (key: string, value: any) => {
    const newValue = typeof value === 'object' ? JSON.stringify(value) : value;
    window.localStorage.setItem(key, newValue as string);
  },
  removeItem: (key: string) => {
    window.localStorage.removeItem(key);
  },
};

export default storage;
