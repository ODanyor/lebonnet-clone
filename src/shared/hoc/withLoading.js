import React from "react"

export const withLoading = (Skeleton, WrappedComponent) => {
  return function ({ isLoading, ...props }) {
    if (isLoading) return <Skeleton />
    return <WrappedComponent {...props} />
  }
}
