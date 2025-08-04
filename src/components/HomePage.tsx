import {
  Security as SecurityIcon,
  Gavel as GavelIcon,
  Warning as WarningIcon,
  Storage as StorageIcon,
  Support as SupportIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';
import {
  Typography,
  Box,
  Alert,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Chip,
  Paper,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { generateExampleUrls } from '../utils/appInfoUtils';
import UrlGenerator from './UrlGenerator';

const HomePage: React.FC = () => {
  const baseUrl = 'https://kgptapps.github.io/appmobilepolicies';
  const exampleUrls = generateExampleUrls(baseUrl);

  return (
    <Box>
      <Alert severity="warning" className="mb-6" icon={<WarningIcon />}>
        <Typography variant="body1" className="font-semibold">
          ⚠️ EXPERIMENTAL SOFTWARE
        </Typography>
        <Typography variant="body2">
          All applications using these policies are for testing purposes only. Use at your own risk.
        </Typography>
      </Alert>

      <Typography variant="h4" component="h2" className="mb-4 text-gray-800">
        Policy System
      </Typography>
      <Typography variant="body1" className="mb-6 text-gray-600 leading-relaxed">
        This policy system generates customized legal policies for your mobile apps using compact
        encoded URLs for privacy protection and shorter links.
      </Typography>

      <Card className="mb-6 shadow-sm">
        <CardContent>
          <Typography variant="h6" className="mb-3 text-gray-800">
            URL Structure
          </Typography>
          <Typography variant="body2" className="mb-3 text-gray-600">
            All custom policies use compact encoded URLs for privacy and shorter links:
          </Typography>
          <List dense>
            <ListItem className="py-1">
              <ListItemText
                primary={
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">/policy-type</code>
                }
                secondary="Default policies with kgptapps information"
              />
            </ListItem>
            <ListItem className="py-1">
              <ListItemText
                primary={
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    /encodedApp/encodedDev/policy-type
                  </code>
                }
                secondary={
                  <Box className="flex items-center gap-2">
                    <span>Compact encoded URLs for your app (privacy protected)</span>
                    <Chip label="Secure" size="small" color="primary" />
                  </Box>
                }
              />
            </ListItem>
          </List>
          <Alert severity="info" className="mt-3">
            <Typography variant="body2">
              <strong>🔒 Privacy First:</strong> All custom URLs use intelligent compression to
              create short, privacy-protected links. Use the URL Generator to create your custom
              URLs.
            </Typography>
          </Alert>
        </CardContent>
      </Card>

      <Typography variant="h5" component="h3" className="mb-4 text-gray-800">
        Available Policies
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="h-full hover:shadow-lg transition-shadow duration-200">
          <CardContent>
            <Box className="flex items-center mb-2">
              <SecurityIcon className="text-blue-600 mr-2" />
              <Typography
                variant="h6"
                component={Link}
                to="/privacy-policy"
                className="text-blue-600 no-underline hover:underline"
              >
                Privacy Policy
              </Typography>
            </Box>
            <Typography variant="body2" className="text-gray-600">
              Data collection and privacy practices for your mobile application.
            </Typography>
          </CardContent>
        </Card>

        <Card className="h-full hover:shadow-lg transition-shadow duration-200">
          <CardContent>
            <Box className="flex items-center mb-2">
              <GavelIcon className="text-blue-600 mr-2" />
              <Typography
                variant="h6"
                component={Link}
                to="/terms-of-service"
                className="text-blue-600 no-underline hover:underline"
              >
                Terms of Service
              </Typography>
            </Box>
            <Typography variant="body2" className="text-gray-600">
              Legal terms and user agreements for app usage.
            </Typography>
          </CardContent>
        </Card>

        <Card className="h-full hover:shadow-lg transition-shadow duration-200">
          <CardContent>
            <Box className="flex items-center mb-2">
              <WarningIcon className="text-orange-600 mr-2" />
              <Typography
                variant="h6"
                component={Link}
                to="/disclaimer"
                className="text-blue-600 no-underline hover:underline"
              >
                Disclaimer
              </Typography>
            </Box>
            <Typography variant="body2" className="text-gray-600">
              Comprehensive liability disclaimers for experimental applications.
            </Typography>
          </CardContent>
        </Card>

        <Card className="h-full hover:shadow-lg transition-shadow duration-200">
          <CardContent>
            <Box className="flex items-center mb-2">
              <StorageIcon className="text-green-600 mr-2" />
              <Typography
                variant="h6"
                component={Link}
                to="/data-collection-policy"
                className="text-blue-600 no-underline hover:underline"
              >
                Data Collection Policy
              </Typography>
            </Box>
            <Typography variant="body2" className="text-gray-600">
              Detailed information about data handling practices.
            </Typography>
          </CardContent>
        </Card>

        <Card className="h-full hover:shadow-lg transition-shadow duration-200">
          <CardContent>
            <Box className="flex items-center mb-2">
              <SupportIcon className="text-purple-600 mr-2" />
              <Typography
                variant="h6"
                component={Link}
                to="/support-policy"
                className="text-blue-600 no-underline hover:underline"
              >
                Support Policy
              </Typography>
            </Box>
            <Typography variant="body2" className="text-gray-600">
              Support expectations and contact information.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Typography variant="h5" component="h3" className="mb-4 text-gray-800">
        Example URLs
      </Typography>
      <Typography variant="body1" className="mb-4 text-gray-600">
        Here are some example URLs showing how to customize policies:
      </Typography>

      {Object.entries(exampleUrls).map(([policyType, urls]) => (
        <Card key={policyType} className="mb-4 shadow-sm">
          <CardContent>
            <Typography variant="h6" className="mb-2 text-gray-800">
              {policyType}
            </Typography>
            <List dense>
              {urls.map((url, index) => (
                <ListItem key={index} className="py-1">
                  <ListItemText
                    primary={
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs break-all">{url}</code>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}

      <Alert severity="info" className="mb-6">
        <Typography variant="h6" className="mb-2">
          For App Store Submissions
        </Typography>
        <Typography variant="body2" className="mb-2">
          Use these URL patterns in your app store listings:
        </Typography>
        <Paper className="p-3 bg-gray-50 mt-2">
          <Typography variant="body2" className="font-semibold mb-2">
            Replace "YourAppName" and "YourCompany" with your actual values:
          </Typography>
          <Box className="space-y-1">
            <code className="block text-xs">
              Privacy Policy: {baseUrl}/privacy-policy/YourAppName/YourCompany
            </code>
            <code className="block text-xs">
              Terms of Service: {baseUrl}/terms-of-service/YourAppName/YourCompany
            </code>
            <code className="block text-xs">
              Support: {baseUrl}/support-policy/YourAppName/YourCompany
            </code>
          </Box>
        </Paper>
        <Box className="mt-3">
          <Typography variant="body2" className="mb-2">
            💡 <strong>Need help generating URLs?</strong> Use our interactive URL generator:
          </Typography>
          <Typography
            variant="body2"
            component={Link}
            to="/generator"
            className="text-blue-600 hover:underline font-medium"
          >
            → Go to URL Generator Tool
          </Typography>
        </Box>
      </Alert>

      <Card className="mb-6 shadow-sm">
        <CardContent>
          <Typography variant="h6" className="mb-3 text-gray-800">
            Key Features
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Dynamic content based on URL parameters',
              'URL encoding support (spaces, special characters)',
              'Compact encoding for much shorter URLs',
              'Privacy protection with encoded names',
              'Backward compatibility with existing static URLs',
              'Mobile-responsive design',
              'SEO-friendly structure',
              'Professional legal language',
              'Experimental app disclaimers',
            ].map((feature, index) => (
              <Box key={index} className="flex items-center">
                <CheckIcon className="text-green-600 mr-2" fontSize="small" />
                <Typography variant="body2" className="text-gray-700">
                  {feature}
                </Typography>
              </Box>
            ))}
          </div>
        </CardContent>
      </Card>

      <UrlGenerator />
    </Box>
  );
};

export default HomePage;
