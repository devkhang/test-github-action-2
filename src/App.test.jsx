// src/App.test.jsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// ──────────────────────────────────────
// NHÓM TẤT CẢ TEST CỦA COMPONENT APP
// ──────────────────────────────────────
describe('App component', () => {
  // Render chỉ 1 lần duy nhất cho tất cả test trong nhóm này
  beforeEach(() => {
    render(<App />);
  });

  // Test 1: Logo
  it('should render the logo', () => {
    const logo = screen.getByTestId('logo-img');
    expect(logo).toBeInTheDocument();
  });

  // Test 2: Tiêu đề chính
  it('should render the main heading', () => {
    const heading = screen.getByRole('heading', {
      name: /learn & master github actions/i
    });
    expect(heading).toBeInTheDocument();
  });

  // Test 3: MainContent có nút
  it('should render MainContent with a button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});