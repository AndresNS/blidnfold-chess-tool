import React from "react";

function useLocalStorage() {
  const add = (key, value) => window.localStorage.setItem(key, value);

  const remove = (key) => window.localStorage.removeItem(key);

  const clear = (key) => window.localStorage.clear();

  return { add, remove, clear };
}

export default useLocalStorage;
