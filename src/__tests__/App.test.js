import { render, screen } from '@testing-library/react';
import App from '../App';

import { Button, CssBaseline, ThemeProvider } from "@mui/material";

describe('Testing Store', () =>
{
  test('render application', () =>
  {
    render(<App />);
    const linkElement = screen.getByText(/Lies/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('theme', () =>
  {
    render(
    <Button color="primary" variant="contained">
      Primary
    </Button>);
    expect();
  });
});
