import { Link as LinkIcon } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Alert,
  Paper,
} from '@mui/material';
import React, { useState } from 'react';
import { generateEncodedUrl, encodeForUrl } from '../utils/appInfoUtils';

const UrlGenerator: React.FC = () => {
  const [appName, setAppName] = useState('');
  const [developerName, setDeveloperName] = useState('');
  const [showEncoded, setShowEncoded] = useState(true);

  const baseUrl = 'https://kgptapps.github.io/appmobilepolicies';
  const policies = [
    'privacy-policy',
    'terms-of-service',
    'disclaimer',
    'data-collection-policy',
    'support-policy',
  ];

  const generateUrls = () => {
    if (!appName.trim() || !developerName.trim()) {
      return [];
    }

    return policies.map(policy => {
      if (showEncoded) {
        return {
          policy: policy.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          url: generateEncodedUrl(baseUrl, policy, appName.trim(), developerName.trim()),
        };
      } else {
        return {
          policy: policy.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          url: `${baseUrl}/${policy}/${encodeURIComponent(appName.trim())}/${encodeURIComponent(developerName.trim())}`,
        };
      }
    });
  };

  const urls = generateUrls();
  const { encodedApp, encodedDev } =
    appName && developerName
      ? encodeForUrl(appName, developerName)
      : { encodedApp: '', encodedDev: '' };

  return (
    <Card className="mt-8 shadow-md">
      <CardContent>
        <Box className="flex items-center mb-4">
          <LinkIcon className="text-blue-600 mr-2" />
          <Typography variant="h5" component="h3" className="text-gray-800">
            URL Generator
          </Typography>
        </Box>
        <Typography variant="body1" className="mb-6 text-gray-600">
          Generate custom policy URLs for your app with optional encoding to obscure app details.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <TextField
            fullWidth
            label="App Name"
            value={appName}
            onChange={e => setAppName(e.target.value)}
            placeholder="e.g., Weather Tracker"
            variant="outlined"
            className="mb-4"
          />

          <TextField
            fullWidth
            label="Developer/Company Name"
            value={developerName}
            onChange={e => setDeveloperName(e.target.value)}
            placeholder="e.g., Acme Corp"
            variant="outlined"
            className="mb-4"
          />
        </div>

        <FormControlLabel
          control={
            <Checkbox
              checked={showEncoded}
              onChange={e => setShowEncoded(e.target.checked)}
              color="primary"
            />
          }
          label={
            <Box>
              <Typography variant="body2" className="font-medium">
                Use encoded URLs (recommended for privacy)
              </Typography>
              <Typography variant="caption" className="text-gray-500">
                Encoded URLs obscure your app and company names in the URL path
              </Typography>
            </Box>
          }
          className="mb-4"
        />

        {urls.length > 0 && (
          <Box>
            <Typography variant="h6" className="mb-4 text-gray-800">
              Generated URLs:
            </Typography>

            {showEncoded && (
              <Alert severity="info" className="mb-4">
                <Typography variant="body2" className="font-semibold mb-1">
                  Encoded values:
                </Typography>
                <Box className="space-y-1">
                  <Typography variant="caption" component="div">
                    App: <code className="bg-white px-1 rounded">{appName}</code> →{' '}
                    <code className="bg-white px-1 rounded">{encodedApp}</code>
                  </Typography>
                  <Typography variant="caption" component="div">
                    Developer: <code className="bg-white px-1 rounded">{developerName}</code> →{' '}
                    <code className="bg-white px-1 rounded">{encodedDev}</code>
                  </Typography>
                </Box>
              </Alert>
            )}

            <div className="space-y-4 mb-4">
              {urls.map((item, index) => (
                <Paper key={index} className="p-3 bg-gray-50">
                  <Typography variant="subtitle2" className="mb-2 text-gray-800 font-semibold">
                    {item.policy}:
                  </Typography>
                  <code className="block p-2 bg-white border rounded text-xs break-all text-gray-700">
                    {item.url}
                  </code>
                </Paper>
              ))}
            </div>

            <Alert severity="success" icon={<LinkIcon />}>
              <Typography variant="body2" className="font-semibold mb-1">
                📋 For App Store Submissions:
              </Typography>
              <Typography variant="caption">
                Copy the Privacy Policy and Terms of Service URLs above and paste them into your app
                store listing forms.
              </Typography>
            </Alert>
          </Box>
        )}

        {urls.length === 0 && (appName.trim() || developerName.trim()) && (
          <Alert severity="warning">
            <Typography variant="body2">
              Please enter both app name and developer name to generate URLs.
            </Typography>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default UrlGenerator;
