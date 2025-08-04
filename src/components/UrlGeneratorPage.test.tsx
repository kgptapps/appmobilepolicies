import { ThemeProvider } from '@mui/material/styles';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../theme/theme';
import UrlGeneratorPage from './UrlGeneratorPage';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </BrowserRouter>
  );
};

describe('UrlGeneratorPage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<UrlGeneratorPage />);
    expect(screen.getByText('URL Generator')).toBeInTheDocument();
  });

  it('displays form inputs', () => {
    renderWithProviders(<UrlGeneratorPage />);
    expect(screen.getByLabelText(/Mobile App Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Developer\/Company Name/i)).toBeInTheDocument();
  });

  it('shows progress stepper', () => {
    renderWithProviders(<UrlGeneratorPage />);
    expect(screen.getByText('Progress')).toBeInTheDocument();
    expect(screen.getByText('Enter App Details')).toBeInTheDocument();
  });

  it('displays app store requirements', () => {
    renderWithProviders(<UrlGeneratorPage />);
    expect(screen.getByText('App Store Requirements')).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/)).toBeInTheDocument();
    expect(screen.getByText(/Terms of Service/)).toBeInTheDocument();
  });

  it('generates URLs when both fields are filled', async () => {
    renderWithProviders(<UrlGeneratorPage />);

    const appNameInput = screen.getByLabelText(/Mobile App Name/i);
    const devNameInput = screen.getByLabelText(/Developer\/Company Name/i);

    fireEvent.change(appNameInput, { target: { value: 'Test App' } });
    fireEvent.change(devNameInput, { target: { value: 'Test Developer' } });

    await waitFor(() => {
      expect(screen.getByText('Generated URLs')).toBeInTheDocument();
    });
  });

  it('shows encoding preview when both fields are filled', async () => {
    renderWithProviders(<UrlGeneratorPage />);

    const appNameInput = screen.getByLabelText(/Mobile App Name/i);
    const devNameInput = screen.getByLabelText(/Developer\/Company Name/i);

    fireEvent.change(appNameInput, { target: { value: 'Weather App' } });
    fireEvent.change(devNameInput, { target: { value: 'Acme Corp' } });

    await waitFor(() => {
      expect(screen.getByText('Compact Encoding Preview:')).toBeInTheDocument();
    });
  });

  it('displays secure encoding message', () => {
    renderWithProviders(<UrlGeneratorPage />);
    expect(screen.getByText(/Secure Encoding Only/i)).toBeInTheDocument();
    expect(screen.getByText(/automatically encoded/i)).toBeInTheDocument();
  });

  it('shows redirect message when redirected from non-encoded URL', () => {
    // Mock URLSearchParams to simulate redirect
    const mockSearchParams = new URLSearchParams('?redirect=true&reason=non-encoded');
    jest.spyOn(require('react-router-dom'), 'useSearchParams').mockReturnValue([mockSearchParams]);

    renderWithProviders(<UrlGeneratorPage />);
    expect(screen.getByText(/Encoded URLs Required/i)).toBeInTheDocument();
  });
});
