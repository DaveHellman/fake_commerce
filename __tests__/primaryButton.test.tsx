import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import PrimaryButton from "@/components/Buttons/Primary"

describe("PrimaryButton", () => {
  test("renders PrimaryButton component", () => {
    render(<PrimaryButton type="button">BUY</PrimaryButton>)
    expect(screen.getByText("BUY")).toBeInTheDocument()
  })
})
