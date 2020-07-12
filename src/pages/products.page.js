import React, { useEffect } from "react"

// Components
import { Title } from "shared/components"

// Compositions
import { WithScrollbar, Products } from "shared/compositions"

// Images
import beanie from "shared/assets/images/loaders/beanie.jpg"
import scarve from "shared/assets/images/loaders/scarve.jpg"
import gloves from "shared/assets/images/loaders/gloves.jpg"
import exclusive from "shared/assets/images/loaders/exclusive.jpg"

// Redux
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getProducts } from "store/actions/productActions"

function Index(props) {
  const { products, getProducts } = props

  useEffect(() => {
    if (products.length === 0) {
      getProducts()
    }
  })

  return (
    <WithScrollbar>
      <section id="beanies">
        <Title centered={true} colored={true}>
          Beanies
        </Title>
        <Products products={products} category="beanies" img={beanie} />
      </section>
      <section id="scarves">
        <Title centered={true} colored={true}>
          Scarves
        </Title>
        <Products products={products} category="scarves" img={scarve} />
      </section>
      <section id="gloves">
        <Title centered={true} colored={true}>
          Gloves
        </Title>
        <Products products={products} category="gloves" img={gloves} />
      </section>
      <section id="exclusives">
        <Title centered={true} colored={true}>
          Exclusives
        </Title>
        <Products products={products} category="exclusives" img={exclusive} />
      </section>
    </WithScrollbar>
  )
}
Index.propTypes = {
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  products: state.products.products,
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
