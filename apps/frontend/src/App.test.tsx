import { render, screen } from '@testing-library/react'
import App from './App'

it('renders CI/CD success page', () => {
  render(<App />)
  expect(screen.getByText(/GitHub CI\/CD 实践成功/)).toBeInTheDocument()
  expect(screen.getByText(/史嘉怡/)).toBeInTheDocument()
  expect(screen.getByText(/2022210402019/)).toBeInTheDocument()
})

