import {render, screen} from "@testing-library/react"
import Greeting from "./Greeting";



test("display the correct greeting", () => {
    render(< Greeting name="Jest" />)
    expect(screen.getByText("hi, Jest")).toBeInTheDocument()
})