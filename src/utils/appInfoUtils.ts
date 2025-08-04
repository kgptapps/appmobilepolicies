import { AppInfo, DEFAULT_APP_INFO } from '../types/AppInfo';

/**
 * Simple base64 encoding for URL use (URL-safe)
 */
function encodeValue(value: string): string {
  try {
    // Convert to base64 and make URL-safe
    const base64 = btoa(value).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, ''); // Remove padding

    return base64;
  } catch (error) {
    // Fallback: just take first letters of words
    return (
      value
        .split(/\s+/)
        .map(word => word[0])
        .join('')
        .toLowerCase()
        .substring(0, 6) || 'app'
    );
  }
}

/**
 * Decodes a base64 encoded value back to original string
 */
function decodeValue(encoded: string): string {
  try {
    // Restore base64 padding and convert back from URL-safe
    let base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');

    // Add padding if needed
    while (base64.length % 4) {
      base64 += '=';
    }

    return atob(base64);
  } catch (error) {
    // If decoding fails, return the encoded string
    return encoded;
  }
}

/**
 * Decodes and formats strings for display
 */
export function decodeAndFormat(value: string): string {
  try {
    // Check if this looks like a base64 encoded value (URL-safe base64 pattern)
    const looksEncoded = /^[A-Za-z0-9_-]+$/.test(value) && value.length > 3;

    if (looksEncoded) {
      // Try to decode the base64 value
      const decoded = decodeValue(value);

      // If decoding was successful and produced a reasonable result, use it
      if (decoded !== value && decoded.length > 0 && /[a-zA-Z]/.test(decoded)) {
        return decoded;
      }
    }

    // Otherwise, treat as regular URL-encoded string
    const urlDecoded = decodeURIComponent(value);
    const formatted = urlDecoded.replace(/[-_]/g, ' ');
    return formatted.replace(/\b\w/g, l => l.toUpperCase());
  } catch (error) {
    // Fallback: just format the original string
    const formatted = value.replace(/[-_]/g, ' ');
    return formatted.replace(/\b\w/g, l => l.toUpperCase());
  }
}

/**
 * Creates AppInfo from URL parameters
 */
export function createAppInfo(appName?: string, developerName?: string): AppInfo {
  if (!appName && !developerName) {
    return DEFAULT_APP_INFO;
  }

  const finalAppName = appName || DEFAULT_APP_INFO.appName;
  const finalDeveloperName = developerName || DEFAULT_APP_INFO.developerName;

  return {
    appName: finalAppName,
    developerName: finalDeveloperName,
    displayAppName: decodeAndFormat(finalAppName),
    displayDeveloperName: decodeAndFormat(finalDeveloperName),
  };
}

/**
 * Encode app and developer names for URL use
 */
export function encodeForUrl(
  appName: string,
  developerName: string
): { encodedApp: string; encodedDev: string } {
  return {
    encodedApp: encodeValue(appName),
    encodedDev: encodeValue(developerName),
  };
}

/**
 * Generate encoded URL for a policy (new cleaner format)
 */
export function generateEncodedUrl(
  baseUrl: string,
  policyType: string,
  appName: string,
  developerName: string
): string {
  const { encodedApp, encodedDev } = encodeForUrl(appName, developerName);
  return `${baseUrl}/${encodedApp}/${encodedDev}/${policyType}`;
}

/**
 * Generates example URLs for documentation (both plain and encoded)
 */
export function generateExampleUrls(baseUrl: string): Record<string, string[]> {
  const plainApp = 'Weather Tracker Pro';
  const plainDev = 'Acme Mobile Solutions';
  const { encodedApp, encodedDev } = encodeForUrl(plainApp, plainDev);

  return {
    'Privacy Policy': [
      `${baseUrl}/privacy-policy`,
      `${baseUrl}/privacy-policy/WeatherApp`,
      `${baseUrl}/privacy-policy/WeatherApp/AcmeCorp (legacy format)`,
      `${baseUrl}/WeatherApp/AcmeCorp/privacy-policy (new format)`,
      `${baseUrl}/${encodedApp}/${encodedDev}/privacy-policy (compact: ${encodedApp.length + encodedDev.length + 1} chars vs ${plainApp.length + plainDev.length + 1})`,
    ],
    'Terms of Service': [
      `${baseUrl}/terms-of-service`,
      `${baseUrl}/WeatherApp/AcmeCorp/terms-of-service (new format)`,
      `${baseUrl}/${encodedApp}/${encodedDev}/terms-of-service (compact)`,
    ],
    'Support Policy': [
      `${baseUrl}/support-policy`,
      `${baseUrl}/WeatherApp/AcmeCorp/support-policy (new format)`,
      `${baseUrl}/${encodedApp}/${encodedDev}/support-policy (compact)`,
    ],
  };
}
