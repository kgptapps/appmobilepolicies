import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataCollectionPolicy from './components/DataCollectionPolicy';
import Disclaimer from './components/Disclaimer';
import HomePage from './components/HomePage';
import Layout from './components/Layout';
import PrivacyPolicy from './components/PrivacyPolicy';
import SupportPolicy from './components/SupportPolicy';
import TermsOfService from './components/TermsOfService';
import UrlGeneratorPage from './components/UrlGeneratorPage';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/appmobilepolicies">
        <Layout>
          <Routes>
            {/* Home page */}
            <Route path="/" element={<HomePage />} />

            {/* URL Generator page */}
            <Route path="/generator" element={<UrlGeneratorPage />} />

            {/* Static routes (default policies) */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/data-collection-policy" element={<DataCollectionPolicy />} />
            <Route path="/support-policy" element={<SupportPolicy />} />

            {/* Encoded URL structure: /encodedApp/encodedDev/policyType */}
            <Route path="/:appName/:developerName/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/:appName/:developerName/terms-of-service" element={<TermsOfService />} />
            <Route path="/:appName/:developerName/disclaimer" element={<Disclaimer />} />
            <Route
              path="/:appName/:developerName/data-collection-policy"
              element={<DataCollectionPolicy />}
            />
            <Route path="/:appName/:developerName/support-policy" element={<SupportPolicy />} />

            {/* Catch-all route - redirect to home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
