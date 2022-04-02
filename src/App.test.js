import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders Cart title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Leonard coat/i);
  expect(linkElement).toBeInTheDocument();
});
