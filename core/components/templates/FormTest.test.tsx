import { render, screen, fireEvent } from "@testing-library/react";
import { RegistrationForm } from "./FormTest";

describe("Registration Form", () => {
  test("render all form fields", () => {
    render(<RegistrationForm />);

    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  test("shows error when fields are empty", () => {
    render(<RegistrationForm />);
    fireEvent.click(screen.getByTestId("submit-button"));

    expect(screen.getByTestId("error")).toHaveTextContent(
      "All fields are required",
    );
  });
});
// describe("RegistrationForm", () => {
//   test("renders all form fields", () => {
//     render(<RegistrationForm />);

//     expect(screen.getByTestId("email-input")).toBeInTheDocument();
//     expect(screen.getByTestId("password-input")).toBeInTheDocument();
//     expect(screen.getByTestId("submit-button")).toBeInTheDocument();
//   });

//   test("shows error when fields are empty", () => {
//     render(<RegistrationForm />);

//     fireEvent.click(screen.getByTestId("submit-button"));

//     expect(screen.getByTestId("error")).toHaveTextContent(
//       "All fields are required",
//     );
//   });

//   test("shows error when password is too short", () => {
//     render(<RegistrationForm />);

//     fireEvent.change(screen.getByTestId("email-input"), {
//       target: { value: "test@example.com" },
//     });
//     fireEvent.change(screen.getByTestId("password-input"), {
//       target: { value: "123" },
//     });
//     fireEvent.click(screen.getByTestId("submit-button"));

//     expect(screen.getByTestId("error")).toHaveTextContent(
//       "Password must be at least 6 characters",
//     );
//   });
// });
