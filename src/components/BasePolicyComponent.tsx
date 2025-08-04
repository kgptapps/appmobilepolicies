import {
  Warning as WarningIcon,
  Info as InfoIcon,
  ContactSupport as ContactIcon,
} from '@mui/icons-material';
import { Typography, Box, Alert, Card, CardContent, Divider, Chip } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { AppInfo } from '../types/AppInfo';
import { createAppInfo } from '../utils/appInfoUtils';

interface BasePolicyProps {
  title: string;
  children: (appInfo: AppInfo) => React.ReactNode;
}

/**
 * Check if a string looks like it contains readable text (not encoded)
 */
function isLikelyReadableText(text: string): boolean {
  if (!text) return false;

  // Check for common patterns that suggest readable text
  const readablePatterns = [
    /\s/, // contains spaces
    /[A-Z][a-z]/, // contains capital followed by lowercase
    /app|mobile|corp|inc|llc|ltd|company|solutions|tech|dev/i, // common words
    /-.*-/, // multiple hyphens
    /_{2,}/, // multiple underscores
  ];

  return readablePatterns.some(pattern => pattern.test(text));
}

const BasePolicyComponent: React.FC<BasePolicyProps> = ({ title, children }) => {
  const { appName, developerName } = useParams<{
    appName?: string;
    developerName?: string;
  }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Check if user is trying to access with non-encoded URLs
  useEffect(() => {
    if (appName && developerName) {
      const isAppReadable = isLikelyReadableText(appName);
      const isDevReadable = isLikelyReadableText(developerName);

      if (isAppReadable || isDevReadable) {
        // Redirect to URL generator with a message
        navigate('/generator?redirect=true&reason=non-encoded');
        return;
      }
    }
  }, [appName, developerName, navigate]);

  // Check for original names in query parameters first (for encoded URLs)
  const queryAppName = searchParams.get('app');
  const queryDeveloperName = searchParams.get('dev');

  // Use query parameters if available (for encoded URLs), otherwise use path parameters
  const finalAppName = queryAppName || appName;
  const finalDeveloperName = queryDeveloperName || developerName;

  const appInfo = createAppInfo(finalAppName, finalDeveloperName);

  return (
    <Box>
      <Alert severity="warning" className="mb-6" icon={<WarningIcon />}>
        <Typography variant="body1" className="font-semibold">
          ⚠️ EXPERIMENTAL SOFTWARE
        </Typography>
        <Typography variant="body2">
          This application is provided for testing purposes only. Use at your own risk. The
          developer assumes no responsibility for any issues, data loss, or damages arising from app
          usage.
        </Typography>
      </Alert>

      {(appName || developerName) && (
        <Card className="mb-6 shadow-sm border-l-4 border-l-blue-500">
          <CardContent>
            <Box className="flex items-center mb-3">
              <InfoIcon className="text-blue-600 mr-2" />
              <Typography variant="h6" className="text-gray-800">
                Policy Information
              </Typography>
            </Box>
            <Box className="space-y-2">
              <Box className="flex items-center">
                <Typography variant="body2" className="font-semibold mr-2 text-gray-700">
                  Application:
                </Typography>
                <Chip
                  label={appInfo.displayAppName}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box className="flex items-center">
                <Typography variant="body2" className="font-semibold mr-2 text-gray-700">
                  Developer:
                </Typography>
                <Chip
                  label={appInfo.displayDeveloperName}
                  color="secondary"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}

      <Typography variant="h3" component="h1" className="mb-4 text-gray-900 font-bold">
        {title}
      </Typography>

      <Box className="mb-6 flex flex-wrap gap-4">
        <Typography variant="body2" className="text-gray-600">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </Typography>
      </Box>

      <Box className="mb-8">{children(appInfo)}</Box>

      <Divider className="my-8" />

      <Card className="shadow-sm">
        <CardContent>
          <Box className="flex items-center mb-3">
            <ContactIcon className="text-blue-600 mr-2" />
            <Typography variant="h5" className="text-gray-800">
              Contact Information
            </Typography>
          </Box>
          <Typography variant="body1" className="mb-4 text-gray-600">
            If you have any questions about this {title.toLowerCase()}, please contact the app
            developer through the app store listing or their GitHub repository.
          </Typography>

          <Box className="space-y-2">
            <Box className="flex items-center">
              <Typography variant="body2" className="font-semibold mr-2 text-gray-700">
                Developer:
              </Typography>
              <Chip
                label={appInfo.displayDeveloperName}
                color="secondary"
                variant="outlined"
                size="small"
              />
            </Box>
            <Box className="flex items-center">
              <Typography variant="body2" className="font-semibold mr-2 text-gray-700">
                Application:
              </Typography>
              <Chip
                label={appInfo.displayAppName}
                color="primary"
                variant="outlined"
                size="small"
              />
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Box className="mt-8 text-center">
        <Typography variant="caption" className="text-gray-500">
          This policy is generated dynamically. For the most up-to-date version, please visit this
          URL directly.
        </Typography>
      </Box>
    </Box>
  );
};

export default BasePolicyComponent;
