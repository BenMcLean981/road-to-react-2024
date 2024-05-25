import { useState, useEffect } from "react";

export function useStorageState(
  key: string,
  initialState: string
): [string, (s: string) => void] {
  const [value, setValue] = useState(localStorage.getItem(key) ?? initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  function onSearch(s: string) {
    setValue(s);
  }

  return [value, onSearch];
}
