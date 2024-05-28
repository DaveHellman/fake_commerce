import ProductGrid from "@/components/Grid/ProductGrid"
import Hero from "@/components/Hero"

async function getProducts() {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  )
  return res.json()
}

async function MensClothing() {
  const data = await getProducts()
  return (
    <>
      <Hero
        title={"Men's Clothing"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at interdum magna. Etiam quam tellus, congue quis posuere convallis, portaut diam. Maecenas nec volutpat mauris."
        }
      ></Hero>
      <ProductGrid products={data} />
    </>
  )
}

export default MensClothing
