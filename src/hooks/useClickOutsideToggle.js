import { useEffect, useRef, useState } from 'react'

// Handles the dropdown navbar on smaller screens, toggles from open and close

const useClickOutsideToggle = () => {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false)
      }
    }

    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [ref]);

  return { expanded, setExpanded, ref };
}

export default useClickOutsideToggle