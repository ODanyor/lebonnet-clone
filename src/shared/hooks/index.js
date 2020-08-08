import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logOut } from 'store/actions/userActions'
import { getCartItems } from 'store/actions/productActions'
import { getStoredAuthToken } from 'shared/utils/authToken'
import jwtDecode from 'jwt-decode'

export const useIsAuthenticated = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    const token = getStoredAuthToken()

    if (token) {
      const decodedToken = jwtDecode(token)

      if (decodedToken.exp * 1000 < Date.now()) dispatch(logOut(history))
      else {
        dispatch(getCartItems())
        dispatch({ type: 'SET_AUTHENTICATED' })
      }
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

export const useHandleWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  function handleWindowWidth() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth)

    return () => window.removeEventListener('resize', handleWindowWidth)
  })

  return width
}
