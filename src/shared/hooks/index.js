import { useEffect } from "react"

export const useOutsideClickHandle = (ref, event) => {
  useEffect(() => {
    if (ref.current.contains(event.target)) return true
    return false
    // eslint-disable-next-line
  }, [event])
}
