import {
  Home as HomeIcon,
  Security as SecurityIcon,
  Gavel as GavelIcon,
  Warning as WarningIcon,
  Storage as StorageIcon,
  Support as SupportIcon,
} from '@mui/icons-material';
import { Container, Typography, Box, Paper, Tabs, Tab, AppBar, Toolbar } from '@mui/material';
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { appName, developerName } = useParams<{
    appName?: string;
    developerName?: string;
  }>();

  const getCurrentTab = () => {
    if (location.pathname === '/' || location.pathname === '') return 0;
    if (location.pathname.includes('/privacy-policy')) return 1;
    if (location.pathname.includes('/terms-of-service')) return 2;
    if (location.pathname.includes('/disclaimer')) return 3;
    if (location.pathname.includes('/data-collection-policy')) return 4;
    if (location.pathname.includes('/support-policy')) return 5;
    return 0;
  };

  // Helper function to build navigation paths
  const buildPath = (policyType: string) => {
    if (appName && developerName) {
      return `/${appName}/${developerName}/${policyType}`;
    }
    return `/${policyType}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <AppBar position="static" className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
        <Toolbar>
          <Box className="flex-1 text-center py-4">
            <Typography variant="h4" component="h1" className="font-bold text-white mb-2">
              Mobile App Policies
            </Typography>
            <Typography variant="subtitle1" className="text-blue-100">
              Legal policies for experimental mobile applications
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className="py-8">
        {/* Navigation Tabs */}
        <Paper className="mb-8 shadow-md">
          <Tabs
            value={getCurrentTab()}
            variant="scrollable"
            scrollButtons="auto"
            className="border-b border-gray-200"
          >
            <Tab
              icon={<HomeIcon />}
              label="Home"
              component={Link}
              to="/"
              className="min-w-0 px-4"
            />
            <Tab
              icon={<SecurityIcon />}
              label="Privacy Policy"
              component={Link}
              to={buildPath('privacy-policy')}
              className="min-w-0 px-4"
            />
            <Tab
              icon={<GavelIcon />}
              label="Terms of Service"
              component={Link}
              to={buildPath('terms-of-service')}
              className="min-w-0 px-4"
            />
            <Tab
              icon={<WarningIcon />}
              label="Disclaimer"
              component={Link}
              to={buildPath('disclaimer')}
              className="min-w-0 px-4"
            />
            <Tab
              icon={<StorageIcon />}
              label="Data Collection"
              component={Link}
              to={buildPath('data-collection-policy')}
              className="min-w-0 px-4"
            />
            <Tab
              icon={<SupportIcon />}
              label="Support"
              component={Link}
              to={buildPath('support-policy')}
              className="min-w-0 px-4"
            />
          </Tabs>
        </Paper>

        {/* Main Content */}
        <Paper className="p-8 shadow-md rounded-xl">{children}</Paper>
      </Container>
    </div>
  );
};

export default Layout;
