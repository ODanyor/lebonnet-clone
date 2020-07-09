import React, { Suspense } from "react"
import { Switch, Route } from "react-router-dom"

// Components
import Spinner from "components/Spinner"

// Pages
import AccountPage from "pages/AccountPage"
const HomePage = lazy(() => import("pages/HomePage"))
const ProductsPage = lazy(() => import("pages/ProductsPage"))
const ProductPage = lazy(() => import("pages/ProductPage"))

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={
          <Suspense fallback={<Spinner />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route exact path="/account" component={AccountPage} />
      <Route
        exact
        path="/products"
        render={
          <Suspense fallback={<Spinner />}>
            <ProductsPage />
          </Suspense>
        }
      />
      <Route
        exact
        path="/product/:productId"
        render={
          <Suspense fallback={<Spinner />}>
            <ProductPage />
          </Suspense>
        }
      />
    </Switch>
  )
}

export default Routes
