import { render, screen } from '@testing-library/react';
import App from '../App';

import { Button, CssBaseline, ThemeProvider } from "@mui/material";

import Theme from '../context/ThemeContext/themeContext'

test('render application', () =>
{
  render(<App />);
  const linkElement = screen.getByText(/Lies/i);
  expect(linkElement).toBeInTheDocument();
});
test('render application', () =>
{
  render(<Button color="primary" variant="contained">
Primary
</Button>
);
  const linkElement = screen.getByText(/Lies/i);
  expect(linkElement).toBeInTheDocument();
});
