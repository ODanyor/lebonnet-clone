import React from "react"
import { Spinner } from "shared/components"

export const withSkeleton = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { loadedComponent: null }
    }

    componentDidMount() {
      this.setState({ loadedComponent: <WrappedComponent {...this.props} /> })
    }

    render() {
      if (this.state.loadedComponent) return this.state.loadedComponent
      return <Spinner />
    }
  }
}
