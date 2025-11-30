// src/App.test.jsx
import { render, screen } from '@testing-library/react';
import App from './App'; // file App.jsx của bạn
import '@testing-library/jest-dom';

// Test 1: Kiểm tra có hiện logo không
test('phải hiện logo của trang web', () => {
  render(<App />);

  const logoImage = screen.getByAltText(''); // vì bạn chưa có alt, tạm tìm bằng img
  // Cách tốt hơn: tìm bằng id bạn đã có trong code
  const logoDiv = screen.getByTestId('logo-img'); // mình sẽ thêm data-testid dưới đây

  expect(logoDiv).toBeInTheDocument();
});

// Test 2: Kiểm tra có hiện tiêu đề đúng không
test('phải hiện tiêu đề "Learn & Master GitHub Actions"', () => {
  render(<App />);

  const heading = screen.getByRole('heading', {
    name: /learn & master github actions/i // tìm chữ gần đúng, không phân biệt hoa/thường
  });

  expect(heading).toBeInTheDocument();
});

// Test 3: Kiểm tra MainContent có được render không
test('phải render component MainContent', () => {
  render(<App />);

  // Cách đơn giản nhất: kiểm tra xem có chữ nào đặc biệt trong MainContent không
  // (giả sử MainContent có nút "Show Help" như ví dụ trước)
  expect(screen.getByRole('button')).toBeInTheDocument();
});