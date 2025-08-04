import React from 'react';
import { AppInfo } from '../types/AppInfo';
import BasePolicyComponent from './BasePolicyComponent';

const PrivacyPolicy: React.FC = () => {
  return (
    <BasePolicyComponent title="Privacy Policy">
      {(appInfo: AppInfo) => (
        <>
          <h2>Overview</h2>
          <p>
            This Privacy Policy applies to the mobile application "{appInfo.displayAppName}"
            developed and published by {appInfo.displayDeveloperName} ("we," "us," or "our"). This
            application is experimental in nature and provided for educational and testing purposes
            only.
          </p>

          <h2>Information We Collect</h2>

          <h3>Information We DO NOT Collect</h3>
          <ul>
            <li>Personal identification information</li>
            <li>Location data</li>
            <li>Contact information</li>
            <li>Payment information</li>
            <li>Device identifiers (beyond what's required for basic app functionality)</li>
          </ul>

          <h3>Information We MAY Collect</h3>
          <ul>
            <li>Basic app usage analytics (anonymous)</li>
            <li>Crash reports (anonymous)</li>
            <li>Performance metrics (anonymous)</li>
          </ul>

          <h2>How We Use Information</h2>
          <p>Any information collected is used solely for:</p>
          <ul>
            <li>Improving app performance and stability</li>
            <li>Understanding basic usage patterns</li>
            <li>Debugging and error resolution</li>
          </ul>

          <h2>Data Sharing</h2>
          <p>We do NOT:</p>
          <ul>
            <li>Sell your data</li>
            <li>Share personal information with third parties</li>
            <li>Use data for advertising purposes</li>
            <li>Store personal information on our servers</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            The "{appInfo.displayAppName}" app may use third-party services (such as app stores,
            analytics platforms) that have their own privacy policies. We are not responsible for
            the privacy practices of these third parties.
          </p>

          <h2>Data Security</h2>
          <p>
            While we implement reasonable security measures, we cannot guarantee absolute security.
            Use the "{appInfo.displayAppName}" experimental app at your own risk.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            The "{appInfo.displayAppName}" app is not intended for children under 13. We do not
            knowingly collect information from children under 13.
          </p>

          <h2>Experimental Nature Disclaimer</h2>
          <div className="warning">
            <p>
              <strong>IMPORTANT:</strong> The "{appInfo.displayAppName}" application is experimental
              and provided "as is" without any warranties. {appInfo.displayDeveloperName} is not
              responsible for any data loss, privacy breaches, or other issues that may arise from
              using this application.
            </p>
          </div>

          <h2>Changes to Privacy Policy</h2>
          <p>
            We may update this policy at any time. Continued use of "{appInfo.displayAppName}"
            constitutes acceptance of any changes.
          </p>

          <h2>No Liability</h2>
          <p>
            <strong>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, {appInfo.displayDeveloperName.toUpperCase()}
              DISCLAIMS ALL LIABILITY FOR ANY PRIVACY-RELATED ISSUES, DATA BREACHES, OR MISUSE OF
              INFORMATION IN CONNECTION WITH THE "{appInfo.displayAppName.toUpperCase()}"
              EXPERIMENTAL APPLICATION.
            </strong>
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

export default PrivacyPolicy;
