import React from 'react';
import { AppInfo } from '../types/AppInfo';
import BasePolicyComponent from './BasePolicyComponent';

const Disclaimer: React.FC = () => {
  return (
    <BasePolicyComponent title="Disclaimer">
      {(appInfo: AppInfo) => (
        <>
          <h2>No Responsibility or Liability</h2>

          <h3>Complete Disclaimer of Responsibility</h3>
          <p>
            We, {appInfo.displayDeveloperName}, explicitly disclaim ALL responsibility for the "
            {appInfo.displayAppName}" application regarding:
          </p>
          <ul>
            <li>Any data loss or corruption</li>
            <li>Any system damage or malfunction</li>
            <li>Any security breaches or privacy violations</li>
            <li>Any financial losses or damages</li>
            <li>Any personal injury or harm</li>
            <li>Any business interruption or loss of profits</li>
            <li>Any legal issues arising from app usage</li>
            <li>Any third-party claims or disputes</li>
          </ul>

          <h3>Use at Your Own Risk</h3>
          <p>
            By using the "{appInfo.displayAppName}" application, you explicitly acknowledge and
            agree that:
          </p>
          <ul>
            <li>You assume ALL risks associated with its use</li>
            <li>You are solely responsible for any consequences</li>
            <li>We provide NO support, maintenance, or updates</li>
            <li>We make NO guarantees about functionality, security, or reliability</li>
          </ul>

          <h2>No Warranties</h2>
          <div className="warning" style={{ backgroundColor: '#ffebee', borderColor: '#f44336' }}>
            <p>
              <strong>
                WE PROVIDE THE "{appInfo.displayAppName.toUpperCase()}" APPLICATION WITH ABSOLUTELY
                NO WARRANTIES, INCLUDING BUT NOT LIMITED TO:
              </strong>
            </p>
            <ul>
              <li>No warranty of merchantability</li>
              <li>No warranty of fitness for any particular purpose</li>
              <li>No warranty of non-infringement</li>
              <li>No warranty of accuracy or completeness</li>
              <li>No warranty of security or privacy protection</li>
              <li>No warranty of continued availability or functionality</li>
            </ul>
          </div>

          <h2>Limitation of Liability</h2>
          <div className="warning" style={{ backgroundColor: '#ffebee', borderColor: '#f44336' }}>
            <p>
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</strong>
            </p>
            <ul>
              <li>{appInfo.displayDeveloperName}'s liability is limited to $0 (zero dollars)</li>
              <li>
                We shall not be liable for any damages whatsoever related to "
                {appInfo.displayAppName}"
              </li>
              <li>This limitation applies regardless of the legal theory of liability</li>
              <li>
                This limitation applies even if we have been advised of the possibility of such
                damages
              </li>
            </ul>
          </div>

          <h2>Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless {appInfo.displayDeveloperName} from
            and against any and all claims, damages, obligations, losses, liabilities, costs, and
            expenses arising from your use of the "{appInfo.displayAppName}" application.
          </p>

          <h2>Experimental Software Notice</h2>
          <div className="warning">
            <p>
              <strong>IMPORTANT:</strong> The "{appInfo.displayAppName}" application is experimental
              software developed for testing and educational purposes only. It should not be used in
              production environments or for critical applications.
            </p>
          </div>

          <h2>Third-Party Dependencies</h2>
          <p>
            The "{appInfo.displayAppName}" application may use third-party libraries, services, or
            components. {appInfo.displayDeveloperName} is not responsible for any issues,
            vulnerabilities, or problems arising from these third-party dependencies.
          </p>

          <h2>Jurisdiction and Governing Law</h2>
          <p>
            This disclaimer is governed by applicable laws. Any disputes arising from the use of the
            "{appInfo.displayAppName}" application shall be resolved according to applicable legal
            frameworks.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of this disclaimer is found to be unenforceable, the remaining
            provisions shall remain in full force and effect.
          </p>

          <h2>Final Notice</h2>
          <div className="warning" style={{ backgroundColor: '#ffebee', borderColor: '#f44336' }}>
            <p>
              <strong>
                BY USING THE "{appInfo.displayAppName.toUpperCase()}" APPLICATION, YOU ACKNOWLEDGE
                THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO THIS COMPLETE DISCLAIMER OF LIABILITY
                AND ASSUMPTION OF RISK.
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
              This disclaimer is part of the comprehensive legal framework for the "
              {appInfo.displayAppName}" experimental mobile application developed by{' '}
              {appInfo.displayDeveloperName}.
            </p>
          </div>
        </>
      )}
    </BasePolicyComponent>
  );
};

export default Disclaimer;
