export function withLoadableComponent(LoadableComponent) {
  LoadableComponent.load()
    .then((LoadedComponent) => LoadedComponent)
    .catch((error) => console.log("Error with loadable component:", error))
}
