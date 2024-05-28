import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ProductGrid from "@/components/Grid/ProductGrid"

const mockData: Product[] = [
  {
    id: 1,
    title: "Test Product 1",
    price: 100,
    rating: { rate: 4, count: 10 },
    description: "Test Description 1",
    category: "Test Category 1",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Test Product 2",
    price: 200,
    rating: { rate: 4, count: 10 },
    description: "Test Description 2",
    category: "Test Category 2",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
]

describe("ProductGrid", () => {
  test("renders ProductGrid component", () => {
    render(<ProductGrid products={mockData} />)
    expect(screen.getByText(mockData[0].title)).toBeInTheDocument()
    expect(screen.getByText(mockData[1].title)).toBeInTheDocument()
  })
})
