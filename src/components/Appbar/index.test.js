import { render, screen } from '@testing-library/react';
import Appbar from '.';

test('renders Appbar with Defaut Brand Name', () => {
  render(<Appbar />);
  const linkElement = screen.getByText(/Movie Hub/i);
  expect(linkElement).toBeInTheDocument();
});
