# Mobile App Policies - React App

This repository contains a React-based policy system for experimental mobile applications. The system allows you to generate customized legal policies by including app and developer information directly in the URL path.

## ⚠️ IMPORTANT NOTICE

**ALL APPLICATIONS ARE EXPERIMENTAL AND PROVIDED FOR TESTING PURPOSES ONLY**

These policies are designed to protect developers from liability while clearly communicating the experimental nature of applications to users.

## 🌐 Live Policy URLs (GitHub Pages)

**The policies are deployed and publicly accessible at:**

### 🔗 For App Store Submissions (Dynamic URLs)

**Replace "YourAppName" and "YourCompany" with your actual values:**

```
Privacy Policy: https://kgptapps.github.io/appmobilepolicies/privacy-policy/YourAppName/YourCompany
Terms of Service: https://kgptapps.github.io/appmobilepolicies/terms-of-service/YourAppName/YourCompany
Support: https://kgptapps.github.io/appmobilepolicies/support-policy/YourAppName/YourCompany
```

### 📱 URL Structure Options

**Multiple ways to use the policy system:**

1. **Default (backward compatible):**
   - `https://kgptapps.github.io/appmobilepolicies/privacy-policy`
   - Uses default "kgptapps" information

2. **Legacy Format (still supported):**
   - `https://kgptapps.github.io/appmobilepolicies/privacy-policy/MyAwesomeApp/AcmeCorp`
   - Old format for backward compatibility

3. **🆕 New Clean Format (Recommended):**
   - `https://kgptapps.github.io/appmobilepolicies/MyAwesomeApp/AcmeCorp/privacy-policy`
   - Cleaner, more intuitive URL structure

4. **🆕 Compact Encoded Format (Best):**
   - `https://kgptapps.github.io/appmobilepolicies/myws1pp/1cm2crp/privacy-policy`
   - Shortest URLs with privacy protection

### 📱 All Policy Types
- **Homepage:** https://kgptapps.github.io/appmobilepolicies/
- **🔗 URL Generator:** https://kgptapps.github.io/appmobilepolicies/generator
- **Privacy Policy:** `/privacy-policy/[AppName]/[DeveloperName]`
- **Terms of Service:** `/terms-of-service/[AppName]/[DeveloperName]`
- **Disclaimer:** `/disclaimer/[AppName]/[DeveloperName]`
- **Data Collection Policy:** `/data-collection-policy/[AppName]/[DeveloperName]`
- **Support Policy:** `/support-policy/[AppName]/[DeveloperName]`

## 📋 Available Policies

### Core Legal Documents
- **Privacy Policy** - Data collection and privacy practices
- **Terms of Service** - Legal terms and user agreements
- **Disclaimer** - Comprehensive liability disclaimers
- **Data Collection Policy** - Detailed data handling practices
- **Support Policy** - Limited support expectations

## 🎯 Purpose

These policies serve to:
- ✅ Protect developers from legal liability
- ✅ Clearly communicate experimental nature of apps
- ✅ Meet app store policy requirements
- ✅ Set appropriate user expectations
- ✅ Minimize data collection and privacy risks
- ✅ **NEW:** Dynamically customize content based on app/developer details

## 🚀 How to Use These Policies

### 🔗 Interactive URL Generator (Recommended)

**For the easiest experience, use our interactive URL generator:**
- **URL Generator Tool:** https://kgptapps.github.io/appmobilepolicies/generator
- Enter your app name and developer name
- Choose between readable or compact encoded URLs
- Copy generated URLs with one click
- Get real-time compression statistics

### For App Store Submissions

**Replace placeholders with your actual information:**

**Apple App Store:**
- Privacy Policy URL: `https://kgptapps.github.io/appmobilepolicies/privacy-policy/YourAppName/YourCompany`
- Terms of Use URL: `https://kgptapps.github.io/appmobilepolicies/terms-of-service/YourAppName/YourCompany`

**Google Play Store:**
- Privacy Policy: `https://kgptapps.github.io/appmobilepolicies/privacy-policy/YourAppName/YourCompany`
- Terms of Service: `https://kgptapps.github.io/appmobilepolicies/terms-of-service/YourAppName/YourCompany`

**Other App Stores:**
- Use the same URL pattern above for any app store requiring policy links

### URL Examples

**For an app called "Weather Tracker" by "Acme Corp":**

**Plain URLs (names visible):**
```
Privacy Policy: https://kgptapps.github.io/appmobilepolicies/privacy-policy/Weather-Tracker/Acme-Corp
Terms of Service: https://kgptapps.github.io/appmobilepolicies/terms-of-service/Weather-Tracker/Acme-Corp
Support: https://kgptapps.github.io/appmobilepolicies/support-policy/Weather-Tracker/Acme-Corp
```

**🆕 Encoded URLs (names hidden):**
```
Privacy Policy: https://kgptapps.github.io/appmobilepolicies/privacy-policy/V2VhdGhlciBUcmFja2Vy/QWNtZSBDb3Jw
Terms of Service: https://kgptapps.github.io/appmobilepolicies/terms-of-service/V2VhdGhlciBUcmFja2Vy/QWNtZSBDb3Jw
Support: https://kgptapps.github.io/appmobilepolicies/support-policy/V2VhdGhlciBUcmFja2Vy/QWNtZSBDb3Jw
```

**Compact Encoding Benefits:**
- 🔒 App and company names are not visible in URLs
- 📏 Much shorter URLs (up to 70% compression)
- 🛡️ Privacy protection for sensitive app names
- ⚡ Intelligent compression removes common words
- ✅ Still fully functional and SEO-friendly

**💡 Pro Tip:** Use the [URL Generator](https://kgptapps.github.io/appmobilepolicies/generator) to see real-time compression statistics and generate URLs instantly!

### For In-App Integration
**Add these dynamic links to your app's settings or about section:**
```swift
// iOS Example - Replace with your app/company names
let appName = "YourAppName"
let companyName = "YourCompany"
let baseURL = "https://kgptapps.github.io/appmobilepolicies"

let privacyURL = URL(string: "\(baseURL)/privacy-policy/\(appName)/\(companyName)")
let termsURL = URL(string: "\(baseURL)/terms-of-service/\(appName)/\(companyName)")
let supportURL = URL(string: "\(baseURL)/support-policy/\(appName)/\(companyName)")
```

```kotlin
// Android Example - Replace with your app/company names
val appName = "YourAppName"
val companyName = "YourCompany"
val baseUrl = "https://kgptapps.github.io/appmobilepolicies"

val privacyUrl = "$baseUrl/privacy-policy/$appName/$companyName"
val termsUrl = "$baseUrl/terms-of-service/$appName/$companyName"
val supportUrl = "$baseUrl/support-policy/$appName/$companyName"
```

### App Description Template
**Copy this text for your app store descriptions (customize the URLs):**
```
⚠️ EXPERIMENTAL SOFTWARE - Use at your own risk. This app is for testing purposes only.

Privacy Policy: https://kgptapps.github.io/appmobilepolicies/privacy-policy/YourAppName/YourCompany
Terms of Service: https://kgptapps.github.io/appmobilepolicies/terms-of-service/YourAppName/YourCompany

Developer assumes no responsibility for any issues, data loss, or damages arising from app usage.
```

### Customization Features
- **No forking required** - Just change the URL path
- **Automatic formatting** - App and developer names are properly displayed
- **URL encoding support** - Handles spaces and special characters
- **Backward compatibility** - Old static URLs still work
- **Professional appearance** - Clean, mobile-responsive design
- **SEO friendly** - Each URL combination is indexable

## 🛡️ Key Protection Features

### Liability Protection
- Complete disclaimer of responsibility
- No warranties provided
- User assumes all risks
- Indemnification clauses
- **Dynamic customization** per app/developer

### Data Protection
- Minimal data collection approach
- Anonymous analytics only
- No personal information storage
- User controls all local data

### Support Limitations
- No guaranteed support
- Best-effort basis only
- Self-service approach
- Community-driven assistance

## 🆕 Key Features

### URL Path-Based Customization
- **App Name Integration:** Policies automatically include your app's name
- **Developer Branding:** Your company/developer name appears throughout
- **🆕 Optional Encoding:** Hide app/developer names in URLs for privacy
- **No Code Changes:** Just modify the URL path
- **Instant Updates:** Changes reflect immediately

### Privacy & Encoding Features
- **🔒 Name Obfuscation:** Encode app and developer names in URLs
- **📏 Compact URLs:** Intelligent compression creates much shorter URLs
- **🛡️ Privacy Protection:** Sensitive app names not visible in browser history
- **🔄 Reversible:** System automatically decodes for display
- **⚡ Interactive Generator:** Dedicated tool to create encoded URLs with compression stats

### Technical Features
- **React-Based:** Modern, fast, responsive web application
- **TypeScript:** Type-safe development and better maintainability
- **GitHub Actions:** Automated deployment on every commit
- **Mobile Optimized:** Perfect display on all device sizes
- **SEO Friendly:** Each policy variation is properly indexed

## ⚖️ Legal Considerations

### Important Notes
- These policies are templates and may need legal review
- Consult with a lawyer for specific legal advice
- Ensure compliance with local laws and regulations
- App store policies may have additional requirements

### Jurisdiction
- Update governing law clauses as needed
- Consider international users and regulations
- Comply with GDPR, CCPA, and other privacy laws

## 📱 App Store Requirements

### ✅ All Requirements Met
- **Privacy Policy** (required by Apple App Store, Google Play Store)
- **Terms of Service** (recommended by all app stores)
- **Data Collection Disclosure** (GDPR, CCPA compliant)
- **Support Contact Information** (required for app store approval)
- **Clear Experimental Nature Communication** (protects from user complaints)

### 🎯 Quick Setup Checklist
- [ ] Copy privacy policy URL to app store listing
- [ ] Copy terms of service URL to app store listing
- [ ] Add experimental warning to app description
- [ ] Include policy links in app settings
- [ ] Test all URLs before submission

### 📋 App Store Submission Fields
**When submitting to app stores, customize these URLs with your information:**

| Field | Value Template | Example |
|-------|-------|---------|
| Privacy Policy URL | `https://kgptapps.github.io/appmobilepolicies/privacy-policy/[AppName]/[Developer]` | `https://kgptapps.github.io/appmobilepolicies/privacy-policy/WeatherApp/AcmeCorp` |
| Terms of Service URL | `https://kgptapps.github.io/appmobilepolicies/terms-of-service/[AppName]/[Developer]` | `https://kgptapps.github.io/appmobilepolicies/terms-of-service/WeatherApp/AcmeCorp` |
| Support URL | `https://kgptapps.github.io/appmobilepolicies/support-policy/[AppName]/[Developer]` | `https://kgptapps.github.io/appmobilepolicies/support-policy/WeatherApp/AcmeCorp` |
| App Category | Games/Entertainment/Utilities (avoid sensitive categories) | |
| Age Rating | 4+ or 9+ (experimental apps should avoid mature ratings) | |

## 🔄 Maintenance & Updates

### Automatic Deployment
- **GitHub Actions** automatically builds and deploys React app to GitHub Pages
- **Push to main branch** triggers immediate build and deployment
- **Live URLs update** within 2-3 minutes of pushing changes
- **No manual deployment** required

### Making Changes
1. **Edit React components** in the `/src` folder
2. **Commit and push** changes to main branch
3. **GitHub Actions** automatically builds and deploys the React app
4. **URLs remain the same** - no need to update app store listings
5. **Dynamic content** updates automatically for all URL combinations

### Version Control
- **All changes tracked** in git history
- **Rollback capability** if needed
- **Deployment history** available in Actions tab
- **Professional change management** with commit messages
- **React development** with hot reloading for local development

### Custom Domain (Optional)
- **GitHub Pages supports** custom domains (e.g., policies.yourdomain.com)
- **HTTPS automatically** provisioned by GitHub
- **DNS configuration** instructions available in GitHub Pages settings
- **URLs would change** to your custom domain if configured

## 🚀 GitHub Actions Deployment

### Deployment Status
- **Deployed via:** GitHub Actions workflow (React build → GitHub Pages)
- **Deployment URL:** https://kgptapps.github.io/appmobilepolicies/
- **Auto-deploy:** ✅ Enabled on push to main branch
- **HTTPS:** ✅ Automatically enabled
- **Mobile Responsive:** ✅ Professional React-based design

### Technical Stack
- **Frontend:** React 18 with TypeScript
- **Routing:** React Router for dynamic URL handling
- **Build:** Create React App with optimized production builds
- **Deployment:** GitHub Actions → GitHub Pages

### Development Workflow
1. **Local Development:** `npm start` for development server
2. **Testing:** `npm test` for running tests
3. **Building:** `npm run build` for production build
4. **Deployment:** Automatic via GitHub Actions on push to main

## 🔗 URL Generator Tool

### Interactive Policy URL Generator

**Access the tool:** https://kgptapps.github.io/appmobilepolicies/generator

The URL Generator is a powerful, interactive tool that helps you create custom policy URLs for your mobile app:

#### Features:
- **📱 App & Developer Input:** Enter your app name and company/developer name
- **🔄 Real-time Generation:** URLs are generated as you type
- **📊 Compression Statistics:** See exactly how much space you save with encoding
- **📋 One-click Copy:** Copy URLs directly to clipboard
- **🚀 Test URLs:** Open generated URLs in new tabs to verify they work
- **📈 Progress Tracking:** Visual stepper shows your progress through the process

#### Encoding Benefits:
- **"Weather Tracker Pro"** → **"wthrtrckr"** (65% compression)
- **"Acme Mobile Solutions"** → **"1cm4bl"** (73% compression)
- **Total URL reduction:** Up to 70% shorter URLs while maintaining full functionality

#### Perfect for App Store Submissions:
- Generate all required policy URLs at once
- Get clear guidance on which policies are required vs optional
- Copy-paste ready URLs for Apple App Store and Google Play Store forms

## 🔧 Development & Quality Standards

### Pre-commit Quality Checks

This project enforces the highest quality standards with comprehensive pre-commit hooks:

#### 🛡️ **Automated Quality Gates**
- **📝 TypeScript Type Checking**: Ensures type safety across the codebase
- **🧹 ESLint**: Enforces code quality and consistency rules
- **💅 Prettier**: Automatic code formatting for consistent style
- **🧪 Unit Tests**: All tests must pass with minimum 80% coverage
- **🏗️ Build Verification**: Ensures the application builds successfully
- **📋 Conventional Commits**: Enforces standardized commit message format

#### 🚀 **Quality Commands**
```bash
# Run all quality checks
npm run quality:check

# Individual checks
npm run type-check      # TypeScript type checking
npm run lint           # ESLint code analysis
npm run lint:fix       # Auto-fix linting issues
npm run format         # Format code with Prettier
npm run format:check   # Check code formatting
npm run test:coverage  # Run tests with coverage report
```

#### 📊 **Coverage Requirements**
- **Minimum 80% coverage** for branches, functions, lines, and statements
- **Comprehensive test suites** for utilities, components, and integrations
- **Automated coverage reporting** in CI/CD pipeline

#### 🔒 **Commit Standards**
All commits must follow [Conventional Commits](https://www.conventionalcommits.org/) format:
```
<type>[optional scope]: <description>

Examples:
feat: add URL encoding for privacy protection
fix(routing): resolve navigation issue with encoded URLs
docs: update README with new URL structure
test: add unit tests for URL encoding utility
```

### Local Development Setup
```bash
# Clone the repository
git clone https://github.com/kgptapps/appmobilepolicies.git
cd appmobilepolicies

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000 in your browser
```

### Testing Dynamic URLs Locally
```bash
# Test different URL patterns:
http://localhost:3000/privacy-policy
http://localhost:3000/privacy-policy/TestApp
http://localhost:3000/privacy-policy/TestApp/TestCompany
http://localhost:3000/terms-of-service/My-Awesome-App/Acme-Corp
```

### Building for Production
```bash
# Create production build
npm run build

# The build folder contains the static files ready for deployment
```

### Project Structure
```
src/
├── components/          # React components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── HomePage.tsx    # Homepage with documentation
│   ├── BasePolicyComponent.tsx  # Base policy template
│   ├── PrivacyPolicy.tsx       # Privacy policy component
│   ├── TermsOfService.tsx      # Terms of service component
│   ├── Disclaimer.tsx          # Disclaimer component
│   ├── DataCollectionPolicy.tsx # Data collection policy
│   └── SupportPolicy.tsx       # Support policy component
├── types/              # TypeScript type definitions
├── utils/              # Utility functions for URL handling
├── App.tsx            # Main app with routing
└── index.tsx          # App entry point
```

## 📞 Contact

For questions about these policies:
- **App Developer:** Contact the app developer through their app store listing
- **Developer Repository:** Contact the app developer through their GitHub repository
- **Policy System:** https://github.com/kgptapps/appmobilepolicies

## 📄 License

This policy system and templates are provided as-is for use with experimental mobile applications. Use at your own risk and consider legal review before implementation.

## 🔄 Migration from Static Version

If you were using the old static HTML policies:

### Old URLs (still work):
```
https://kgptapps.github.io/appmobilepolicies/privacy-policy.html
https://kgptapps.github.io/appmobilepolicies/terms-of-service.html
```

### New Dynamic URLs:
```
https://kgptapps.github.io/appmobilepolicies/privacy-policy/YourApp/YourCompany
https://kgptapps.github.io/appmobilepolicies/terms-of-service/YourApp/YourCompany
```

**Benefits of upgrading:**
- ✅ Personalized content with your app/company name
- ✅ Professional appearance
- ✅ Better Google Play Store compliance
- ✅ No need to fork the repository
- ✅ Automatic updates when we improve the system

---

**Disclaimer:** This policy system creates templates for experimental mobile applications. The generated policies are not legal advice and may not be suitable for all situations. Consult with a qualified attorney for legal guidance specific to your needs.
