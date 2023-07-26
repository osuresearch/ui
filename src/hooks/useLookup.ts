import { useState } from "react"

export function useLookup<T>() {
  const [terms, setTerms] = useState('');

  // Probably a simplified wrapper around React Stately

  return {
    terms,
    setTerms,
    searching: false,
    error: undefined,
    items: [
      {
        foo: 'bar'
      }
    ],
  }
}
