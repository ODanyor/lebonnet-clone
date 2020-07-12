import React from "react"
import { Spinner } from "shared/components"

export const withLoading = (WrappedComponent) => {
  return function ({ isLoading, ...props }) {
    if (isLoading) return <Spinner />
    else return <WrappedComponent {...props} />
  }
}
