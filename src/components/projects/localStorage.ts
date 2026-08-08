export const getStorageItem = <T>(key: string, fallback: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item !== null ? (JSON.parse(item) as T) : fallback;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return fallback;
  }
};

export const setStorageItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
};
