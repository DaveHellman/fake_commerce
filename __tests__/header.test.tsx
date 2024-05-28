import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Header from "@/components/Header"

describe("Header", () => {
  test("renders Header component", () => {
    render(<Header />)
    expect(screen.getByText("Electronics")).toBeInTheDocument()
    expect(screen.getByText("Jewelery")).toBeInTheDocument()
    expect(screen.getByText("Men's clothing")).toBeInTheDocument()
    expect(screen.getByText("Women's clothing")).toBeInTheDocument()
  })
})
