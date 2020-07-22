import React, { lazy, Suspense } from "react"
import { Switch, Route } from "react-router-dom"
import { Spinner } from "shared/components"
import * as ROUTE from "shared/constants/routes"
import Auth from "Auth"

const Home = lazy(() => import("pages/home.page"))
const Account = lazy(() => import("pages/account.page"))
const Products = lazy(() => import("pages/products.page"))
const Product = lazy(() => import("pages/product.page"))
const NotFound = lazy(() => import("pages/404.page"))

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTE.AUTH} component={Auth} />

      <Route
        exact
        path={ROUTE.HOME}
        render={() => (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        )}
      />
      <Route
        exact
        path={ROUTE.ACCOUNT}
        render={() => (
          <Suspense fallback={<Spinner />}>
            <Account />
          </Suspense>
        )}
      />
      <Route
        exact
        path={ROUTE.PRODUCTS}
        render={() => (
          <Suspense fallback={<Spinner />}>
            <Products />
          </Suspense>
        )}
      />
      <Route
        exact
        path={ROUTE.PRODUCT}
        render={() => (
          <Suspense fallback={<Spinner />}>
            <Product />
          </Suspense>
        )}
      />
      <Route
        exact
        path={ROUTE.NOT_FOUND}
        render={() => (
          <Suspense fallback={<Spinner />}>
            <NotFound />
          </Suspense>
        )}
      />
    </Switch>
  )
}
