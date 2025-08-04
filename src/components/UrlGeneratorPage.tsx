import {
  Link as LinkIcon,
  ContentCopy as CopyIcon,
  Launch as LaunchIcon,
  CheckCircle as CheckIcon,
  Settings as SettingsIcon,
  Smartphone as PhoneIcon,
  Store as StoreIcon,
} from '@mui/icons-material';
import {
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Alert,
  Paper,
  Chip,
  IconButton,
  Tooltip,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { generateEncodedUrl, encodeForUrl } from '../utils/appInfoUtils';

const UrlGeneratorPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [appName, setAppName] = useState('');
  const [developerName, setDeveloperName] = useState('');

  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  const baseUrl = 'https://kgptapps.github.io/appmobilepolicies';
  const policies = [
    {
      key: 'privacy-policy',
      name: 'Privacy Policy',
      required: true,
      description: 'Required by App Store and Google Play',
    },
    {
      key: 'terms-of-service',
      name: 'Terms of Service',
      required: true,
      description: 'Recommended by all app stores',
    },
    {
      key: 'support-policy',
      name: 'Support Policy',
      required: false,
      description: 'Contact information for users',
    },
    { key: 'disclaimer', name: 'Disclaimer', required: false, description: 'Liability protection' },
    {
      key: 'data-collection-policy',
      name: 'Data Collection Policy',
      required: false,
      description: 'Detailed data practices',
    },
  ];

  const generateUrls = () => {
    if (!appName.trim() || !developerName.trim()) {
      return [];
    }

    return policies.map(policy => {
      return {
        ...policy,
        url: generateEncodedUrl(baseUrl, policy.key, appName.trim(), developerName.trim()),
      };
    });
  };

  const urls = generateUrls();
  const { encodedApp, encodedDev } =
    appName && developerName
      ? encodeForUrl(appName, developerName)
      : { encodedApp: '', encodedDev: '' };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedUrl(text);
      setTimeout(() => setCopiedUrl(null), 2000);
    } catch (err) {
      // Failed to copy text - silently handle error
    }
  };

  const openUrl = (url: string) => {
    window.open(url, '_blank');
  };

  const steps = ['Enter App Details', 'Generate Encoded URLs', 'Copy & Use'];

  useEffect(() => {
    if (appName.trim() && developerName.trim()) {
      setActiveStep(2);
    } else if (appName.trim() || developerName.trim()) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }
  }, [appName, developerName]);

  useEffect(() => {
    // Check if user was redirected here due to non-encoded URL attempt
    const redirect = searchParams.get('redirect');
    const reason = searchParams.get('reason');

    if (redirect === 'true' && reason === 'non-encoded') {
      setShowRedirectMessage(true);
      // Auto-hide the message after 10 seconds
      setTimeout(() => setShowRedirectMessage(false), 10000);
    }
  }, [searchParams]);

  return (
    <Box>
      {showRedirectMessage && (
        <Alert severity="warning" className="mb-6" onClose={() => setShowRedirectMessage(false)}>
          <Typography variant="body1" className="font-semibold mb-2">
            🔒 Encoded URLs Required
          </Typography>
          <Typography variant="body2">
            You were redirected here because this system only accepts encoded URLs for privacy and
            security. Please use the generator below to create proper encoded URLs for your app
            policies.
          </Typography>
        </Alert>
      )}

      <Box className="text-center mb-8">
        <Box className="flex items-center justify-center mb-4">
          <LinkIcon className="text-blue-600 mr-3" fontSize="large" />
          <Typography variant="h3" component="h1" className="text-gray-900 font-bold">
            URL Generator
          </Typography>
        </Box>
        <Typography variant="h6" className="text-gray-600 mb-2">
          Generate custom policy URLs for your mobile app
        </Typography>
        <Typography variant="body1" className="text-gray-500 max-w-2xl mx-auto">
          Create professional, customized policy URLs for your app store submissions. All URLs use
          compact encoding for privacy protection and shorter links.
        </Typography>
      </Box>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Form */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Typography variant="h5" className="mb-4 text-gray-800 flex items-center">
                <SettingsIcon className="mr-2 text-blue-600" />
                Configuration
              </Typography>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <TextField
                  fullWidth
                  label="Mobile App Name"
                  value={appName}
                  onChange={e => setAppName(e.target.value)}
                  placeholder="e.g., Weather Tracker Pro"
                  variant="outlined"
                  helperText="The name of your mobile application"
                  InputProps={{
                    startAdornment: <PhoneIcon className="text-gray-400 mr-2" fontSize="small" />,
                  }}
                />

                <TextField
                  fullWidth
                  label="Developer/Company Name"
                  value={developerName}
                  onChange={e => setDeveloperName(e.target.value)}
                  placeholder="e.g., Acme Mobile Solutions"
                  variant="outlined"
                  helperText="Your company or developer name"
                  InputProps={{
                    startAdornment: <StoreIcon className="text-gray-400 mr-2" fontSize="small" />,
                  }}
                />
              </div>

              <Alert severity="info" className="mb-4">
                <Typography variant="body2" className="font-semibold mb-1">
                  🔒 Secure Encoding Only
                </Typography>
                <Typography variant="body2">
                  This system only generates compact encoded URLs for privacy protection and shorter
                  links. All URLs are automatically encoded.
                </Typography>
              </Alert>

              {appName && developerName && (
                <Alert severity="success" className="mb-4">
                  <Typography variant="body2" className="font-semibold mb-2">
                    Compact Encoding Preview:
                  </Typography>
                  <div className="space-y-2">
                    <div>
                      <div>
                        App: <code className="bg-white px-2 py-1 rounded">{appName}</code> →{' '}
                        <code className="bg-white px-2 py-1 rounded text-green-700">
                          {encodedApp}
                        </code>
                      </div>
                      <Typography variant="caption" className="text-green-700 ml-2">
                        Saved {appName.length - encodedApp.length} characters (
                        {Math.round((1 - encodedApp.length / appName.length) * 100)}% compression)
                      </Typography>
                    </div>
                    <div>
                      <div>
                        Developer:{' '}
                        <code className="bg-white px-2 py-1 rounded">{developerName}</code> →{' '}
                        <code className="bg-white px-2 py-1 rounded text-green-700">
                          {encodedDev}
                        </code>
                      </div>
                      <Typography variant="caption" className="text-green-700 ml-2">
                        Saved {developerName.length - encodedDev.length} characters (
                        {Math.round((1 - encodedDev.length / developerName.length) * 100)}%
                        compression)
                      </Typography>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <Typography variant="caption" className="text-green-700 font-semibold">
                        Total URL reduction:{' '}
                        {appName.length +
                          developerName.length -
                          (encodedApp.length + encodedDev.length)}{' '}
                        characters shorter!
                      </Typography>
                    </div>
                  </div>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Generated URLs Section */}
          {urls.length > 0 && (
            <Card className="shadow-lg mt-6">
              <CardContent className="p-6">
                <Typography variant="h5" className="mb-4 text-gray-800 flex items-center">
                  <CheckIcon className="mr-2 text-green-600" />
                  Generated URLs
                </Typography>

                <div className="space-y-4">
                  {urls.map((item, index) => (
                    <Paper key={index} className="p-4 bg-gray-50 border">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <Typography variant="h6" className="text-gray-800 font-semibold">
                              {item.name}
                            </Typography>
                            {item.required && (
                              <Chip label="Required" size="small" color="error" className="ml-2" />
                            )}
                          </div>
                          <Typography variant="body2" className="text-gray-600 mb-3">
                            {item.description}
                          </Typography>
                        </div>
                      </div>

                      <div className="bg-white border rounded p-3 mb-3">
                        <code className="text-xs break-all text-gray-700 block">{item.url}</code>
                      </div>

                      <div className="flex gap-2">
                        <Tooltip title="Copy URL">
                          <IconButton
                            size="small"
                            onClick={() => copyToClipboard(item.url)}
                            className={copiedUrl === item.url ? 'text-green-600' : 'text-blue-600'}
                          >
                            <CopyIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Open in new tab">
                          <IconButton
                            size="small"
                            onClick={() => openUrl(item.url)}
                            className="text-blue-600"
                          >
                            <LaunchIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </Paper>
                  ))}
                </div>

                <Alert severity="success" className="mt-4">
                  <Typography variant="body2" className="font-semibold mb-1">
                    📋 Ready for App Store Submission!
                  </Typography>
                  <Typography variant="body2">
                    Copy the Privacy Policy and Terms of Service URLs above and paste them into your
                    app store listing forms.
                  </Typography>
                </Alert>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column - Progress & Instructions */}
        <div>
          <Card className="shadow-lg mb-6">
            <CardContent className="p-6">
              <Typography variant="h6" className="mb-4 text-gray-800">
                Progress
              </Typography>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                      <Typography variant="body2" className="text-gray-600">
                        {index === 0 && 'Enter your app name and developer/company name'}
                        {index === 1 && 'Encoded URLs are automatically generated as you type'}
                        {index === 2 && 'Copy URLs and use them in your app store listings'}
                      </Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <Typography variant="h6" className="mb-4 text-gray-800">
                App Store Requirements
              </Typography>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckIcon className="text-green-600 mr-2 mt-0.5" fontSize="small" />
                  <div>
                    <Typography variant="body2" className="font-medium">
                      Privacy Policy
                    </Typography>
                    <Typography variant="caption" className="text-gray-600">
                      Required by Apple App Store & Google Play
                    </Typography>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-green-600 mr-2 mt-0.5" fontSize="small" />
                  <div>
                    <Typography variant="body2" className="font-medium">
                      Terms of Service
                    </Typography>
                    <Typography variant="caption" className="text-gray-600">
                      Recommended by all app stores
                    </Typography>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-blue-600 mr-2 mt-0.5" fontSize="small" />
                  <div>
                    <Typography variant="body2" className="font-medium">
                      Support Contact
                    </Typography>
                    <Typography variant="caption" className="text-gray-600">
                      Required for app approval
                    </Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {urls.length === 0 && (appName.trim() || developerName.trim()) && (
        <Alert severity="warning" className="mt-6">
          <Typography variant="body2">
            Please enter both app name and developer name to generate URLs.
          </Typography>
        </Alert>
      )}
    </Box>
  );
};

export default UrlGeneratorPage;
