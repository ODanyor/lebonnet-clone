import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { logOut } from "store/actions/userActions"
import { getStoredAuthToken } from "shared/utils/authToken"
import jwtDecode from "jwt-decode"

export const useIsAuthenticated = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = getStoredAuthToken()

    if (token) {
      const decodedToken = jwtDecode(token)

      if (decodedToken.exp * 1000 < Date.now()) dispatch(logOut(history))
      else dispatch({ type: "SET_AUTHENTICATED" })
    }

    //eslint-disable-next-line
  }, [history])
}

export const useOutsideClickHandle = (ref, event) => {
  useEffect(() => {
    if (ref.current.contains(event.target)) return false
    return true

    // eslint-disable-next-line
  }, [event])
}
