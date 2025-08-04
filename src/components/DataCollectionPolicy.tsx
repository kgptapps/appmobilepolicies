import React from 'react';
import { AppInfo } from '../types/AppInfo';
import BasePolicyComponent from './BasePolicyComponent';

const DataCollectionPolicy: React.FC = () => {
  return (
    <BasePolicyComponent title="Data Collection Policy">
      {(appInfo: AppInfo) => (
        <>
          <h2>Overview</h2>
          <p>
            This Data Collection Policy outlines our approach to data handling for the "
            {appInfo.displayAppName}" experimental mobile application developed by{' '}
            {appInfo.displayDeveloperName}.
          </p>

          <h2>Minimal Data Collection Principle</h2>
          <div
            style={{
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              borderRadius: '5px',
              padding: '15px',
              margin: '20px 0',
            }}
          >
            <p>
              <strong>
                ✅ We follow a principle of minimal data collection and maximum user privacy
                protection for the "{appInfo.displayAppName}" application.
              </strong>
            </p>
          </div>

          <h2>Types of Data</h2>

          <h3>Data We DO NOT Collect</h3>
          <div
            style={{
              backgroundColor: '#d4edda',
              border: '1px solid #c3e6cb',
              borderRadius: '5px',
              padding: '15px',
              margin: '20px 0',
            }}
          >
            <ul>
              <li>Personal identification information (names, emails, phone numbers)</li>
              <li>Precise location data</li>
              <li>Contact lists or address books</li>
              <li>Photos, videos, or media files</li>
              <li>Financial or payment information</li>
              <li>Biometric data</li>
              <li>Health information</li>
              <li>Social media profiles or connections</li>
              <li>Device identifiers for tracking purposes</li>
            </ul>
          </div>

          <h3>Data We MAY Collect (Anonymous Only)</h3>
          <ul>
            <li>Basic app usage statistics (anonymous)</li>
            <li>Crash reports (stripped of personal information)</li>
            <li>Performance metrics (anonymous)</li>
            <li>Error logs (sanitized)</li>
          </ul>

          <h2>Data Processing</h2>

          <h3>Local Processing</h3>
          <ul>
            <li>
              Most data processing in "{appInfo.displayAppName}" occurs locally on your device
            </li>
            <li>We prefer local storage over cloud storage</li>
            <li>User data remains under user control</li>
            <li>No server-side storage of personal information</li>
          </ul>

          <h3>Third-Party Services</h3>
          <p>The "{appInfo.displayAppName}" application may use third-party services for:</p>
          <ul>
            <li>Anonymous analytics (if any)</li>
            <li>Crash reporting (anonymized)</li>
            <li>App store distribution</li>
          </ul>
          <p>
            These services have their own privacy policies. {appInfo.displayDeveloperName} is not
            responsible for third-party data practices.
          </p>

          <h2>Data Retention</h2>
          <ul>
            <li>We do not retain personal data on our servers</li>
            <li>Anonymous analytics data may be retained for app improvement purposes</li>
            <li>Users can delete local app data at any time</li>
            <li>Uninstalling the app removes all local data</li>
          </ul>

          <h2>User Rights</h2>
          <p>Regarding the "{appInfo.displayAppName}" application, you have the right to:</p>
          <ul>
            <li>Use the app without providing personal information</li>
            <li>Delete all app data by uninstalling</li>
            <li>Opt out of any optional data collection</li>
            <li>Request information about data practices</li>
          </ul>

          <h2>Data Security</h2>
          <div className="warning">
            <p>
              <strong>IMPORTANT:</strong> While we implement reasonable security measures for the "
              {appInfo.displayAppName}" application, we cannot guarantee absolute security. As an
              experimental application, use it at your own risk.
            </p>
          </div>

          <h2>Changes to Data Practices</h2>
          <p>
            We may update our data collection practices for the "{appInfo.displayAppName}"
            application. Continued use constitutes acceptance of any changes.
          </p>

          <h2>Compliance</h2>
          <p>
            This policy is designed to comply with major privacy regulations, but as an experimental
            application, "{appInfo.displayAppName}" should not be used where strict compliance is
            required.
          </p>

          <div
            style={{
              marginTop: '40px',
              padding: '15px',
              backgroundColor: '#f6f8fa',
              borderRadius: '5px',
            }}
          >
            <p>
              This policy is part of the comprehensive legal framework for the "
              {appInfo.displayAppName}" experimental mobile application developed by{' '}
              {appInfo.displayDeveloperName}.
            </p>
          </div>
        </>
      )}
    </BasePolicyComponent>
  );
};

export default DataCollectionPolicy;
