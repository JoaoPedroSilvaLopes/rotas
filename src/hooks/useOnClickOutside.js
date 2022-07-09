import { useEffect } from "react";

const useOnClickOutside = (ref, handler) => {

  const listener = (e) => {
    if (!ref.current || ref.current.contains(e.target)) {
      return 
    }
    console.log("teste2")
    handler()
  }

  useEffect(() => {
      document.addEventListener("mousedown", listener)
      document.addEventListener("touchstart", listener)

      return () => {
        document.removeEventListener("mousedown", listener)
        document.removeEventListener("touchstart", listener)
      };
    },[ref, handler])
}

export default useOnClickOutside