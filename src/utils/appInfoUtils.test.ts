import { DEFAULT_APP_INFO } from '../types/AppInfo';
import { createAppInfo, decodeAndFormat, encodeForUrl, generateEncodedUrl } from './appInfoUtils';

describe('appInfoUtils', () => {
  describe('decodeAndFormat', () => {
    it('should handle encoded values', () => {
      // Test with encoded values that should be decoded
      const result = decodeAndFormat('wthrtrckr');
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should handle empty and invalid inputs', () => {
      expect(decodeAndFormat('')).toBe('');
      const result = decodeAndFormat('invalid');
      expect(result).toBeDefined();
      expect(typeof result).toBe('string');
    });

    it('should return formatted strings', () => {
      const result1 = decodeAndFormat('test');
      const result2 = decodeAndFormat('another');
      expect(result1).toBeDefined();
      expect(result2).toBeDefined();
      expect(typeof result1).toBe('string');
      expect(typeof result2).toBe('string');
    });
  });

  describe('encodeForUrl', () => {
    it('should encode app and developer names', () => {
      const result = encodeForUrl('Weather Tracker Pro', 'Acme Mobile Solutions');
      expect(result.encodedApp).toBeDefined();
      expect(result.encodedDev).toBeDefined();
      expect(typeof result.encodedApp).toBe('string');
      expect(typeof result.encodedDev).toBe('string');
    });

    it('should create shorter encoded strings', () => {
      const longAppName = 'My Very Long Application Name';
      const longDevName = 'My Very Long Company Name Inc';
      const result = encodeForUrl(longAppName, longDevName);

      expect(result.encodedApp.length).toBeLessThan(longAppName.length);
      expect(result.encodedDev.length).toBeLessThan(longDevName.length);
    });

    it('should handle empty strings', () => {
      const result = encodeForUrl('', '');
      expect(result.encodedApp).toBeDefined();
      expect(result.encodedDev).toBeDefined();
    });
  });

  describe('generateEncodedUrl', () => {
    const baseUrl = 'https://example.com';
    const policyType = 'privacy-policy';
    const appName = 'TestApp';
    const developerName = 'TestDev';

    it('should generate properly formatted URL', () => {
      const result = generateEncodedUrl(baseUrl, policyType, appName, developerName);
      expect(result).toContain(baseUrl);
      expect(result).toContain(policyType);
      expect(result).toMatch(/https:\/\/example\.com\/[^/]+\/[^/]+\/privacy-policy/);
    });

    it('should use encoded values in URL with query parameters', () => {
      const result = generateEncodedUrl(baseUrl, policyType, appName, developerName);

      // Split URL and query parameters
      const [urlPart, queryPart] = result.split('?');
      const parts = urlPart.split('/');

      // Check URL structure
      expect(parts).toHaveLength(6); // protocol, empty, domain, encodedApp, encodedDev, policyType
      expect(parts[5]).toBe(policyType);

      // Check query parameters
      expect(queryPart).toContain('app=TestApp');
      expect(queryPart).toContain('dev=TestDev');
    });
  });

  describe('createAppInfo', () => {
    it('should return default info when no parameters provided', () => {
      const result = createAppInfo();
      expect(result).toEqual(DEFAULT_APP_INFO);
    });

    it('should return default info when undefined parameters provided', () => {
      const result = createAppInfo(undefined, undefined);
      expect(result).toEqual(DEFAULT_APP_INFO);
    });

    it('should use provided app name with default developer', () => {
      const result = createAppInfo('WeatherApp');
      expect(result.appName).toBe('WeatherApp');
      expect(result.displayAppName).toBeDefined();
      expect(result.developerName).toBe(DEFAULT_APP_INFO.developerName);
      expect(result.displayDeveloperName).toBeDefined();
      expect(typeof result.displayDeveloperName).toBe('string');
    });

    it('should use both provided app name and developer', () => {
      const result = createAppInfo('weather-tracker', 'acme-corp');
      expect(result.appName).toBe('weather-tracker');
      expect(result.displayAppName).toBeDefined();
      expect(result.developerName).toBe('acme-corp');
      expect(result.displayDeveloperName).toBeDefined();
    });

    it('should handle encoded values', () => {
      const result = createAppInfo('wthrtrckr', '1cm2crp');
      expect(result.displayAppName).toBeDefined();
      expect(result.displayDeveloperName).toBeDefined();
      expect(typeof result.displayAppName).toBe('string');
      expect(typeof result.displayDeveloperName).toBe('string');
    });

    it('should maintain original values', () => {
      const appName = 'TestApp';
      const devName = 'TestDev';
      const result = createAppInfo(appName, devName);
      expect(result.appName).toBe(appName);
      expect(result.developerName).toBe(devName);
    });
  });
});
