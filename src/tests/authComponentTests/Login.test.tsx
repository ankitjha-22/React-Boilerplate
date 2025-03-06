// import "@testing-library/jest-dom"; // Ensure this is at the top
// import { fireEvent, render, screen } from "@testing-library/react";
// import { vi } from "vitest";
// import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
// import LoginForm from "../../components/forms/3.formsComponent/LoginForm";
// import { useUserLogin } from "../../hooks/useUserLogin";

// vi.mock("../../hooks/useUserLogin", () => ({
//   __esModule: true,
//   useUserLogin: vi.fn(),
// }));

// describe("Login Form Component", () => {
//   it("should render login form accurately", () => {
//     // Mock the return value of useUserLogin
//     (useUserLogin as jest.Mock).mockReturnValue({
//       isLoading: false,
//       isLoginFormValid: true,
//       credentials: {
//         userName: { value: "", isDirty: false },
//         userPassword: { value: "", isDirty: false },
//         rememberMe: { value: false, isDirty: false },
//       },
//       errors: {},
//       handleFormChanges: vi.fn(),
//       handleLogin: vi.fn(),
//     });

//     // Render the LoginForm component
//     render(
//       <MemoryRouter>
//         <LoginForm />
//       </MemoryRouter>
//     );

//     // Assertions to check if elements are rendered correctly
//     expect(screen.getByLabelText(/Email or Username/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Remember Me/i)).toBeInTheDocument();
//     expect(screen.getByText(/Forgot Password?/i)).toBeInTheDocument();
//     expect(screen.getByText(/Create an account/i)).toBeInTheDocument();
//   });

//   it("should enable submit for valid form only", () => {
//     const mockHandleFormChanges = vi.fn();
//     const mockHandleLogin = vi.fn();
//     (useUserLogin as jest.Mock).mockReturnValue({
//       isLoading: false,
//       isLoginFormValid: false,
//       credentials: {
//         userName: { value: "", isDirty: false },
//         userPassword: { value: "", isDirty: false },
//         rememberMe: { value: false, isDirty: false },
//       },
//       errors: {},
//       handleFormChanges: mockHandleFormChanges,
//       handleLogin: mockHandleLogin,
//     });

//     const { rerender } = render(
//       <MemoryRouter>
//         <LoginForm />
//       </MemoryRouter>
//     );

//     const submitButton = screen.getByRole("button", { name: /login/i });
//     expect(submitButton).toBeDisabled();

//     const userName = screen.getByLabelText(/Email or Username/i);
//     fireEvent.change(userName, { target: { value: "abc@gmail.com" } });
//     expect(mockHandleFormChanges).toHaveBeenCalled();
//     expect(submitButton).toBeDisabled();

//     const password = screen.getByLabelText(/Password/i);
//     fireEvent.change(password, { target: { value: "Admin@123" } });
//     expect(mockHandleFormChanges).toHaveBeenCalled();

//     (useUserLogin as jest.Mock).mockReturnValue({
//       isLoading: false,
//       isLoginFormValid: true,
//       credentials: {
//         userName: { value: "abc@gmail.com", isDirty: true },
//         userPassword: { value: "Admin@123", isDirty: true },
//         rememberMe: { value: false, isDirty: true },
//       },
//       errors: {},
//       handleFormChanges: mockHandleFormChanges,
//       handleLogin: mockHandleLogin,
//     });

//     rerender(
//       <MemoryRouter>
//         <LoginForm />
//       </MemoryRouter>
//     );

//     expect(submitButton).toBeEnabled();
//     fireEvent.click(submitButton);
//     expect(mockHandleLogin).toHaveBeenCalled();
//   });

//   it("should render errors accurately", async () => {
//     (useUserLogin as jest.Mock).mockReturnValue({
//       isLoading: false,
//       isLoginFormValid: true,
//       credentials: {
//         userName: { value: "", isDirty: false },
//         userPassword: { value: "", isDirty: false },
//         rememberMe: { value: false, isDirty: false },
//       },
//       errors: {
//         userName: "Invalid Username",
//         userPassword: "Invalid Password",
//         global: "Invalid Global Error",
//       },
//       handleFormChanges: vi.fn(),
//       handleLogin: vi.fn(),
//     });

//     render(
//       <MemoryRouter>
//         <LoginForm />
//       </MemoryRouter>
//     );
//     const invalidUsername = await screen.findByText(/Invalid Username/i);
//     const invalidPassword = await screen.findByText(/Invalid Password/i);
//     const invalidGlobal = await screen.findByText(/Invalid global/i);
//     expect(invalidUsername).toBeInTheDocument();
//     expect(invalidPassword).toBeInTheDocument();
//     expect(invalidGlobal).toBeInTheDocument();
//   });
// });
