import React from 'react';
import { AppInfo } from '../types/AppInfo';
import BasePolicyComponent from './BasePolicyComponent';

const TermsOfService: React.FC = () => {
  return (
    <BasePolicyComponent title="Terms of Service">
      {(appInfo: AppInfo) => (
        <>
          <h2>Agreement to Terms</h2>
          <p>
            By downloading, installing, or using the "{appInfo.displayAppName}" mobile application
            developed by {appInfo.displayDeveloperName} ("we," "us," or "our"), you agree to be
            bound by these Terms of Service ("Terms").
          </p>

          <h2>Experimental Nature</h2>
          <div className="warning" style={{ backgroundColor: '#ffebee', borderColor: '#f44336' }}>
            <p>
              <strong>CRITICAL NOTICE:</strong> The "{appInfo.displayAppName}" application is
              experimental, developmental, and provided for testing and educational purposes only.
              It is NOT intended for production use, commercial purposes, or critical applications.
            </p>
          </div>

          <h2>Acceptance of Risk</h2>
          <p>
            By using the "{appInfo.displayAppName}" application, you acknowledge and agree that:
          </p>
          <ul>
            <li>You use this app entirely at your own risk</li>
            <li>This app may contain bugs, errors, or security vulnerabilities</li>
            <li>We provide no warranties of any kind</li>
            <li>You assume all risks associated with its use</li>
          </ul>

          <h2>Prohibited Uses</h2>
          <p>You may NOT use the "{appInfo.displayAppName}" application for:</p>
          <ul>
            <li>Any illegal activities</li>
            <li>Commercial purposes without explicit permission</li>
            <li>Critical systems or applications where failure could cause harm</li>
            <li>Any purpose that violates applicable laws or regulations</li>
          </ul>

          <h2>No Warranties</h2>
          <div className="warning">
            <p>
              <strong>
                THE "{appInfo.displayAppName.toUpperCase()}" APPLICATION IS PROVIDED "AS IS" WITHOUT
                WARRANTIES OF ANY KIND, INCLUDING BUT NOT LIMITED TO:
              </strong>
            </p>
            <ul>
              <li>Merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement</li>
              <li>Reliability or availability</li>
              <li>Data accuracy or completeness</li>
            </ul>
          </div>

          <h2>Limitation of Liability</h2>
          <div className="warning" style={{ backgroundColor: '#ffebee', borderColor: '#f44336' }}>
            <p>
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
            </p>
            <ul>
              <li>
                {appInfo.displayDeveloperName} shall not be liable for any direct, indirect,
                incidental, special, or consequential damages
              </li>
              <li>Our total liability shall not exceed $0 (zero dollars)</li>
              <li>We are not responsible for any data loss, system damage, or other harm</li>
              <li>You waive any claims against us related to "{appInfo.displayAppName}" usage</li>
            </ul>
          </div>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold {appInfo.displayDeveloperName} harmless from any claims,
            damages, or expenses arising from your use of the "{appInfo.displayAppName}"
            application.
          </p>

          <h2>Data and Privacy</h2>
          <ul>
            <li>
              We are not responsible for any data you input into the "{appInfo.displayAppName}"
              application
            </li>
            <li>You are solely responsible for backing up your data</li>
            <li>We make no guarantees about data security or privacy</li>
            <li>See our Privacy Policy for additional details</li>
          </ul>

          <h2>Modifications</h2>
          <p>We reserve the right to:</p>
          <ul>
            <li>
              Modify or discontinue the "{appInfo.displayAppName}" app at any time without notice
            </li>
            <li>Update these Terms at any time</li>
            <li>Remove the app from distribution platforms</li>
          </ul>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by applicable laws without regard to conflict of law
            principles.
          </p>

          <h2>Acknowledgment</h2>
          <div className="warning" style={{ backgroundColor: '#ffebee', borderColor: '#f44336' }}>
            <p>
              <strong>
                BY USING THE "{appInfo.displayAppName.toUpperCase()}" APPLICATION, YOU ACKNOWLEDGE
                THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
              </strong>
            </p>
          </div>

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

export default TermsOfService;
