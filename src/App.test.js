import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Hiddenza header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Hiddenza/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders Our Services section', () => {
  render(<App />);
  const servicesHeading = screen.getByText(/Our Services/i);
  expect(servicesHeading).toBeInTheDocument();
});
