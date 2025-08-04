import {
  CheckCircle as CheckIcon,
  Cancel as CancelIcon,
  Security as SecurityIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Alert,
} from '@mui/material';
import React from 'react';
import { AppInfo } from '../types/AppInfo';
import BasePolicyComponent from './BasePolicyComponent';

const PrivacyPolicy: React.FC = () => {
  return (
    <BasePolicyComponent title="Privacy Policy">
      {(appInfo: AppInfo) => (
        <>
          {/* Overview Section */}
          <Card className="mb-6 shadow-sm">
            <CardContent>
              <Box className="flex items-center mb-3">
                <InfoIcon className="text-blue-600 mr-2" />
                <Typography variant="h4" component="h2" className="text-gray-800 font-semibold">
                  Overview
                </Typography>
              </Box>
              <Typography variant="body1" className="text-gray-700 leading-relaxed">
                This Privacy Policy applies to the mobile application "{appInfo.displayAppName}"
                developed and published by {appInfo.displayDeveloperName} ("we," "us," or "our").
                This application is experimental in nature and provided for educational and testing
                purposes only.
              </Typography>
            </CardContent>
          </Card>

          {/* Information We DO NOT Collect Section */}
          <Card className="mb-6 shadow-sm">
            <CardContent>
              <Box className="flex items-center mb-4">
                <CancelIcon className="text-red-500 mr-2" />
                <Typography variant="h4" component="h2" className="text-gray-800 font-semibold">
                  Information We DO NOT Collect
                </Typography>
              </Box>
              <Alert severity="success" className="mb-3">
                <Typography variant="body1" className="font-semibold">
                  🔒 We prioritize your privacy by NOT collecting any of the following:
                </Typography>
              </Alert>
              <List className="bg-green-50 rounded-lg p-2">
                <ListItem>
                  <ListItemIcon>
                    <CancelIcon className="text-red-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Personal identification information"
                    primaryTypographyProps={{ className: 'text-gray-700' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CancelIcon className="text-red-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Location data"
                    primaryTypographyProps={{ className: 'text-gray-700' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CancelIcon className="text-red-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Contact information"
                    primaryTypographyProps={{ className: 'text-gray-700' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CancelIcon className="text-red-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Payment information"
                    primaryTypographyProps={{ className: 'text-gray-700' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CancelIcon className="text-red-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Device identifiers (beyond what's required for basic app functionality)"
                    primaryTypographyProps={{ className: 'text-gray-700' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Information We MAY Collect Section */}
          <Card className="mb-6 shadow-sm">
            <CardContent>
              <Box className="flex items-center mb-4">
                <CheckIcon className="text-orange-500 mr-2" />
                <Typography variant="h4" component="h2" className="text-gray-800 font-semibold">
                  Information We MAY Collect
                </Typography>
              </Box>
              <Alert severity="info" className="mb-3">
                <Typography variant="body1" className="font-semibold">
                  📊 Only anonymous, non-personal data for app improvement:
                </Typography>
              </Alert>
              <List className="bg-blue-50 rounded-lg p-2">
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon className="text-orange-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Basic app usage analytics (anonymous)"
                    primaryTypographyProps={{ className: 'text-gray-700' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon className="text-orange-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Crash reports (anonymous)"
                    primaryTypographyProps={{ className: 'text-gray-700' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon className="text-orange-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Performance metrics (anonymous)"
                    primaryTypographyProps={{ className: 'text-gray-700' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* How We Use Information Section */}
          <Card className="mb-6 shadow-sm">
            <CardContent>
              <Box className="flex items-center mb-4">
                <InfoIcon className="text-blue-600 mr-2" />
                <Typography variant="h4" component="h2" className="text-gray-800 font-semibold">
                  How We Use Information
                </Typography>
              </Box>
              <Typography variant="body1" className="text-gray-700 mb-3">
                Any information collected is used solely for:
              </Typography>
              <List className="bg-blue-50 rounded-lg p-2">
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon className="text-blue-600" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Improving app performance and stability"
                    primaryTypographyProps={{ className: 'text-gray-700' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon className="text-blue-600" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Understanding basic usage patterns"
                    primaryTypographyProps={{ className: 'text-gray-700' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon className="text-blue-600" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Debugging and error resolution"
                    primaryTypographyProps={{ className: 'text-gray-700' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Data Sharing Section */}
          <Card className="mb-6 shadow-sm">
            <CardContent>
              <Box className="flex items-center mb-4">
                <SecurityIcon className="text-green-600 mr-2" />
                <Typography variant="h4" component="h2" className="text-gray-800 font-semibold">
                  Data Sharing
                </Typography>
              </Box>
              <Alert severity="success" className="mb-3">
                <Typography variant="body1" className="font-semibold">
                  We do NOT engage in any of the following practices:
                </Typography>
              </Alert>
              <List className="bg-green-50 rounded-lg p-2">
                <ListItem>
                  <ListItemIcon>
                    <CancelIcon className="text-red-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sell your data"
                    primaryTypographyProps={{ className: 'text-gray-700 font-medium' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CancelIcon className="text-red-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Share personal information with third parties"
                    primaryTypographyProps={{ className: 'text-gray-700 font-medium' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CancelIcon className="text-red-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Use data for advertising purposes"
                    primaryTypographyProps={{ className: 'text-gray-700 font-medium' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CancelIcon className="text-red-500" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Store personal information on our servers"
                    primaryTypographyProps={{ className: 'text-gray-700 font-medium' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Third-Party Services Section */}
          <Card className="mb-6 shadow-sm">
            <CardContent>
              <Box className="flex items-center mb-3">
                <WarningIcon className="text-orange-600 mr-2" />
                <Typography variant="h4" component="h2" className="text-gray-800 font-semibold">
                  Third-Party Services
                </Typography>
              </Box>
              <Alert severity="warning" className="mb-3">
                <Typography variant="body1">
                  The "{appInfo.displayAppName}" app may use third-party services (such as app
                  stores, analytics platforms) that have their own privacy policies. We are not
                  responsible for the privacy practices of these third parties.
                </Typography>
              </Alert>
            </CardContent>
          </Card>

          {/* Data Security Section */}
          <Card className="mb-6 shadow-sm">
            <CardContent>
              <Box className="flex items-center mb-3">
                <SecurityIcon className="text-blue-600 mr-2" />
                <Typography variant="h4" component="h2" className="text-gray-800 font-semibold">
                  Data Security
                </Typography>
              </Box>
              <Alert severity="info">
                <Typography variant="body1">
                  While we implement reasonable security measures, we cannot guarantee absolute
                  security. Use the "{appInfo.displayAppName}" experimental app at your own risk.
                </Typography>
              </Alert>
            </CardContent>
          </Card>

          {/* Children's Privacy Section */}
          <Card className="mb-6 shadow-sm">
            <CardContent>
              <Box className="flex items-center mb-3">
                <InfoIcon className="text-purple-600 mr-2" />
                <Typography variant="h4" component="h2" className="text-gray-800 font-semibold">
                  Children's Privacy
                </Typography>
              </Box>
              <Typography variant="body1" className="text-gray-700">
                The "{appInfo.displayAppName}" app is not intended for children under 13. We do not
                knowingly collect information from children under 13.
              </Typography>
            </CardContent>
          </Card>

          {/* Experimental Nature Disclaimer */}
          <Alert severity="error" className="mb-6">
            <Box>
              <Typography variant="h5" component="h2" className="font-semibold mb-2">
                Experimental Nature Disclaimer
              </Typography>
              <Typography variant="body1" className="font-semibold">
                IMPORTANT: The "{appInfo.displayAppName}" application is experimental and provided
                "as is" without any warranties. {appInfo.displayDeveloperName} is not responsible
                for any data loss, privacy breaches, or other issues that may arise from using this
                application.
              </Typography>
            </Box>
          </Alert>

          {/* Changes to Privacy Policy Section */}
          <Card className="mb-6 shadow-sm">
            <CardContent>
              <Box className="flex items-center mb-3">
                <InfoIcon className="text-gray-600 mr-2" />
                <Typography variant="h4" component="h2" className="text-gray-800 font-semibold">
                  Changes to Privacy Policy
                </Typography>
              </Box>
              <Typography variant="body1" className="text-gray-700">
                We may update this policy at any time. Continued use of "{appInfo.displayAppName}"
                constitutes acceptance of any changes.
              </Typography>
            </CardContent>
          </Card>

          {/* No Liability Section */}
          <Alert severity="error" className="mb-6">
            <Box>
              <Typography variant="h5" component="h2" className="font-semibold mb-2">
                No Liability
              </Typography>
              <Typography variant="body1" className="font-bold">
                To the maximum extent permitted by law, {appInfo.displayDeveloperName} disclaims all
                liability for any privacy-related issues, data breaches, or misuse of information in
                connection with the "{appInfo.displayAppName}" experimental application.
              </Typography>
            </Box>
          </Alert>

          {/* Footer Information */}
          <Card className="shadow-sm border-l-4 border-l-gray-400">
            <CardContent className="bg-gray-50">
              <Typography variant="body1" className="text-gray-600 text-center">
                This policy is part of the comprehensive legal framework for the "
                {appInfo.displayAppName}" experimental mobile application developed by{' '}
                {appInfo.displayDeveloperName}.
              </Typography>
            </CardContent>
          </Card>

          {/* Build Version Information */}
          <Box className="mt-4 pt-3 border-t border-gray-200 text-center">
            <Typography variant="caption" className="text-gray-400 text-xs block">
              Build Version: {process.env.REACT_APP_VERSION || '1.0.0'} | Build Time:{' '}
              {process.env.REACT_APP_BUILD_TIME || new Date().toISOString()} | Commit:{' '}
              {process.env.REACT_APP_COMMIT_SHA?.substring(0, 7) || 'local'}
            </Typography>
            <Typography variant="caption" className="text-gray-400 text-xs block mt-1">
              Generated: {new Date().toLocaleString()}
            </Typography>
          </Box>
        </>
      )}
    </BasePolicyComponent>
  );
};

export default PrivacyPolicy;
