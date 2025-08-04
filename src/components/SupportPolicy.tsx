import React from 'react';
import { AppInfo } from '../types/AppInfo';
import BasePolicyComponent from './BasePolicyComponent';

const SupportPolicy: React.FC = () => {
  return (
    <BasePolicyComponent title="Support Policy">
      {(appInfo: AppInfo) => (
        <>
          <h2>Overview</h2>
          <p>
            This Support Policy outlines the limited support available for the "
            {appInfo.displayAppName}" experimental mobile application developed by{' '}
            {appInfo.displayDeveloperName}.
          </p>

          <h2>Experimental Software Notice</h2>
          <div className="warning">
            <p>
              <strong>IMPORTANT:</strong> The "{appInfo.displayAppName}" application is experimental
              software provided for testing and educational purposes only. Support is extremely
              limited and provided on a best-effort basis only.
            </p>
          </div>

          <h2>No Guaranteed Support</h2>
          <div className="warning" style={{ backgroundColor: '#ffebee', borderColor: '#f44336' }}>
            <h3>Disclaimer of Support Obligations</h3>
            <p>We explicitly state that for the "{appInfo.displayAppName}" application:</p>
            <ul>
              <li>We have NO obligation to provide support</li>
              <li>Support is provided at our sole discretion</li>
              <li>We may discontinue support at any time without notice</li>
              <li>Response times are not guaranteed</li>
            </ul>
          </div>

          <h2>Types of Support</h2>

          <h3>What We MAY Provide (No Guarantees)</h3>
          <ul>
            <li>Occasional bug fixes for "{appInfo.displayAppName}" (if time permits)</li>
            <li>Basic documentation updates</li>
            <li>General usage guidance (limited)</li>
          </ul>

          <h3>What We DO NOT Provide</h3>
          <ul>
            <li>Technical support or troubleshooting for "{appInfo.displayAppName}"</li>
            <li>Feature requests or enhancements</li>
            <li>Data recovery assistance</li>
            <li>Compatibility support</li>
            <li>Training or tutorials</li>
            <li>Phone or live chat support</li>
            <li>Guaranteed response to inquiries</li>
          </ul>

          <h2>Self-Service Approach</h2>
          <p>Users of the "{appInfo.displayAppName}" application are expected to:</p>
          <ul>
            <li>Troubleshoot issues independently</li>
            <li>Back up their own data</li>
            <li>Accept the experimental nature of the software</li>
            <li>Use the app at their own risk</li>
          </ul>

          <h2>Community Support</h2>
          <p>While {appInfo.displayDeveloperName} provides no guaranteed support, users may:</p>
          <ul>
            <li>Share experiences with other users</li>
            <li>Report issues through app store reviews</li>
            <li>Participate in community discussions (if available)</li>
          </ul>
          <p>
            <strong>Note:</strong> Community support is not moderated or guaranteed by{' '}
            {appInfo.displayDeveloperName}.
          </p>

          <h2>Contact Methods</h2>
          <p>If you need to contact us regarding the "{appInfo.displayAppName}" application:</p>
          <ul>
            <li>App store reviews and ratings</li>
            <li>GitHub repository issues (if available)</li>
            <li>Developer contact through app store listings</li>
          </ul>
          <p>
            <strong>Important:</strong> Contact does not guarantee a response or resolution.
          </p>

          <h2>Response Expectations</h2>
          <div className="warning">
            <p>
              <strong>NO RESPONSE GUARANTEES:</strong> We make no commitments regarding response
              times, resolution of issues, or availability of support for the "
              {appInfo.displayAppName}" application.
            </p>
          </div>

          <h2>Discontinuation of Support</h2>
          <p>{appInfo.displayDeveloperName} reserves the right to:</p>
          <ul>
            <li>Discontinue the "{appInfo.displayAppName}" application at any time</li>
            <li>Stop providing any support without notice</li>
            <li>Remove the app from distribution platforms</li>
            <li>Archive or delete related resources</li>
          </ul>

          <h2>Alternative Solutions</h2>
          <p>If the "{appInfo.displayAppName}" application does not meet your needs:</p>
          <ul>
            <li>Consider alternative applications</li>
            <li>Use professional, supported software for critical needs</li>
            <li>Develop your own solutions</li>
            <li>Hire professional developers for custom solutions</li>
          </ul>

          <h2>Final Notice</h2>
          <div className="warning" style={{ backgroundColor: '#ffebee', borderColor: '#f44336' }}>
            <p>
              <strong>
                BY USING THE "{appInfo.displayAppName.toUpperCase()}" APPLICATION, YOU ACKNOWLEDGE
                AND ACCEPT THE LIMITED NATURE OF SUPPORT AND AGREE TO USE THE APPLICATION WITHOUT
                EXPECTATION OF ASSISTANCE FROM {appInfo.displayDeveloperName.toUpperCase()}.
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

export default SupportPolicy;
