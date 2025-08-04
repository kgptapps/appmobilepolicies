import { ThemeProvider } from '@mui/material/styles';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from '../theme/theme';
import BasePolicyComponent from './BasePolicyComponent';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/:appName?/:developerName?" element={component} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const TestComponent = () => (
  <BasePolicyComponent title="Test Policy">
    {() => <div>Test policy content</div>}
  </BasePolicyComponent>
);

describe('BasePolicyComponent', () => {
  it('renders without crashing', () => {
    renderWithProviders(<TestComponent />);
    expect(screen.getByText('Test Policy')).toBeInTheDocument();
  });

  it('displays children content', () => {
    renderWithProviders(<TestComponent />);
    expect(screen.getByText('Test policy content')).toBeInTheDocument();
  });

  it('shows experimental software warning', () => {
    renderWithProviders(<TestComponent />);
    expect(screen.getByText(/EXPERIMENTAL SOFTWARE/i)).toBeInTheDocument();
  });

  it('displays default app information when no params', () => {
    renderWithProviders(<TestComponent />);
    expect(screen.getAllByText(/kgptapps/i)).toHaveLength(2); // Developer and app name
  });

  it('shows contact information', () => {
    renderWithProviders(<TestComponent />);
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText(/contact the app developer/i)).toBeInTheDocument();
  });

  it('displays last updated date', () => {
    renderWithProviders(<TestComponent />);
    expect(screen.getByText(/Last Updated/i)).toBeInTheDocument();
  });

  it('includes disclaimer about experimental nature', () => {
    renderWithProviders(<TestComponent />);
    expect(screen.getByText(/testing purposes only/i)).toBeInTheDocument();
  });

  // Note: Testing redirect functionality would require more complex setup
  // with actual routing and navigation mocking
});
