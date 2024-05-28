import ProductGrid from "@/components/Grid/ProductGrid"
import Hero from "@/components/Hero"

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products")
  return res.json()
}

async function Home() {
  const data = await getProducts()
  return (
    <>
      <Hero
        title="Products"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at interdum magna. Etiam quam tellus, congue quis posuere convallis, portaut diam. Maecenas nec volutpat mauris."
      />
      <ProductGrid products={data} />
    </>
  )
}

export default Home
