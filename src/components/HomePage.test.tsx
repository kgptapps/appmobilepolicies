import { ThemeProvider } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../theme/theme';
import HomePage from './HomePage';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </BrowserRouter>
  );
};

describe('HomePage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText('Policy System')).toBeInTheDocument();
  });

  it('displays warning about experimental software', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText(/EXPERIMENTAL SOFTWARE/i)).toBeInTheDocument();
  });

  it('shows all policy types', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getAllByText('Privacy Policy')).toHaveLength(2); // One in nav, one in content
    expect(screen.getAllByText('Terms of Service')).toHaveLength(2); // One in nav, one in content
    expect(screen.getByText('Disclaimer')).toBeInTheDocument();
    expect(screen.getByText('Data Collection Policy')).toBeInTheDocument();
    expect(screen.getAllByText('Support Policy')).toHaveLength(2); // One in nav, one in content
  });

  it('displays URL structure information', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText('URL Structure')).toBeInTheDocument();
    expect(screen.getAllByText(/compact encoded URLs/i)).toHaveLength(3); // Multiple mentions
  });

  it('shows key features', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText('Key Features')).toBeInTheDocument();
    expect(screen.getByText(/Dynamic content based on URL parameters/i)).toBeInTheDocument();
  });

  it('includes link to URL generator', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText(/URL Generator Tool/i)).toBeInTheDocument();
  });

  it('displays privacy-first messaging', () => {
    renderWithProviders(<HomePage />);
    expect(screen.getByText(/Privacy First/i)).toBeInTheDocument();
  });
});
