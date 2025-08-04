import { AppInfo, DEFAULT_APP_INFO } from '../types/AppInfo';

/**
 * Compact encoding using character mapping and compression
 */
function encodeValue(value: string): string {
  try {
    // Step 1: Convert to lowercase and remove common words
    let compressed = value
      .toLowerCase()
      .replace(/\b(app|mobile|the|and|of|for|inc|llc|corp|company|ltd|limited)\b/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    // Step 2: Character mapping for common patterns
    const charMap: { [key: string]: string } = {
      a: '1',
      e: '2',
      i: '3',
      o: '4',
      u: '5',
      ' ': 'x',
      '-': 'y',
      _: 'z',
      th: 'q',
      er: 'w',
      on: 'r',
      an: 't',
      in: 'p',
      ed: 's',
      nd: 'd',
      to: 'f',
      en: 'g',
      ti: 'h',
      es: 'j',
      or: 'k',
      te: 'l',
      of: 'm',
      be: 'n',
      he: 'b',
      ar: 'v',
      ou: 'c',
    };

    // Step 3: Apply character mapping (longest patterns first)
    const sortedKeys = Object.keys(charMap).sort((a, b) => b.length - a.length);
    for (const key of sortedKeys) {
      compressed = compressed.replace(new RegExp(key, 'g'), charMap[key]);
    }

    // Step 4: Remove remaining vowels if still too long
    if (compressed.length > 8) {
      compressed = compressed.replace(/[aeiou]/g, '');
    }

    // Step 5: Truncate if still too long and add length indicator
    if (compressed.length > 12) {
      compressed = compressed.substring(0, 10) + compressed.length.toString(36);
    }

    return compressed || 'app';
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
 * Decodes and formats strings for display
 */
export function decodeAndFormat(value: string): string {
  try {
    // Check if this looks like an encoded value (short, contains numbers and specific chars)
    const looksEncoded = /^[a-z0-9]{3,12}$/.test(value) && /[0-9]/.test(value);

    if (looksEncoded) {
      // For encoded values, create a more readable representation
      // Since we can't reliably decode back to original, we'll make it look like a code
      return `[${value.toUpperCase()}]`;
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
    displayAppName: finalAppName, // Use original name directly
    displayDeveloperName: finalDeveloperName, // Use original name directly
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
  // Add original names as query parameters for proper decoding
  const params = new URLSearchParams({
    app: appName,
    dev: developerName,
  });
  return `${baseUrl}/${encodedApp}/${encodedDev}/${policyType}?${params.toString()}`;
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
