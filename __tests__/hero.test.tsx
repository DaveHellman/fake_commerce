import Hero from "@/components/Hero"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

const MockData = {
  title: "Hero Title",
  description: "Hero Description",
}

describe("Hero", () => {
  test("renders Hero component", () => {
    render(<Hero {...MockData} />)
    expect(screen.getByText(MockData.title)).toBeInTheDocument()
    expect(screen.getByText(MockData.description)).toBeInTheDocument()
  })
})
