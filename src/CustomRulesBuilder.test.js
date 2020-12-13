import { render, screen } from '@testing-library/react';
import CustomRulesBuilder from './CustomRulesBuilder';

test('renders learn react link', () => {
  render(<CustomRulesBuilder />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
