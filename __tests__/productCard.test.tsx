import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ProductCard from "@/components/Cards/ProductCard"

const mockData = {
  id: 1,
  title: "Test Product 1",
  price: 100,
  rating: { rate: 4, count: 10 },
  description: "Test Description 1",
  category: "Test Category 1",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
}

describe("ProductCard", () => {
  test("renders ProductCard component", () => {
    render(<ProductCard product={mockData} />)
    expect(screen.getByText(mockData.title)).toBeInTheDocument()
    expect(screen.getByText(`€${mockData.price}`)).toBeInTheDocument()
    expect(screen.getByText(`★ ${mockData.rating.rate}`)).toBeInTheDocument()
    expect(screen.getByText(`(${mockData.rating.count})`)).toBeInTheDocument()
  })
})
