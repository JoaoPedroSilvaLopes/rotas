import { useEffect } from "react";

const useOnClickOutside = (ref, callback) => {
  const isTarget = (e) => {
    if (!ref.current || ref.current.contains(e.target)) {
      return 
    }
    callback()
  }

  useEffect(() => {
      document.addEventListener("mousedown", isTarget)
      document.addEventListener("touchstart", isTarget)

      return () => {
        document.removeEventListener("mousedown", isTarget)
        document.removeEventListener("touchstart", isTarget)
      };
    },[ref, callback])
}

export default useOnClickOutside