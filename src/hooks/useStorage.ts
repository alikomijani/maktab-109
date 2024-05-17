import { useEffect, useState } from "react";

export function useStorage<T>(
  key: string,
  initState: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const defaultInStorage = localStorage.getItem(key);
  if (!defaultInStorage) {
    localStorage.setItem(key, JSON.stringify(initState));
  }

  const [state, setState] = useState<T>(JSON.parse(localStorage.getItem(key)!));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
