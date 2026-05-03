// src/PrivacyContent.tsx
import React from "react";

// Customize colors, font sizes, spacing here
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    color: "#181818",
  },
  subheading: {
    color: "#5bc1be",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
  },
  list: {
    paddingLeft: 20,
    marginBottom: 12,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginBottom: 12,
  },
  th: {
    border: "1px solid #ccc",
    padding: 8,
    background: "#f6f7fb",
    textAlign: "left" as const,
  },
  td: {
    border: "1px solid #ccc",
    padding: 8,
  },
};

export default function PrivacyContent() {
  return (
    <div style={styles.container}>
      {/* Example Subheading */}
      <h3 style={styles.subheading}>1. Introduction</h3>
      {/* Paragraph */}
      <p style={styles.paragraph}>
        Welcome to Rate Your Supervisor (“Company,” “we,” “our,” or “us”). We
        respect your privacy and are committed to protecting it through this
        Privacy Policy.
      </p>
      {/* Another paragraph */}
      <p style={styles.paragraph}>
        This Privacy Policy describes how we collect, use, disclose, and
        safeguard your information when you visit our website...
      </p>
      {/* Example List */}
      <h3 style={styles.subheading}>2. Data Collection</h3>
      <ul style={styles.list}>
        <li>Information you provide directly</li>
        <li>Automatically collected data</li>
        <li>Information from third-party sources</li>
      </ul>
      {/* Example Table */}
      <h3 style={styles.subheading}>3. Example Table</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Type of Data</th>
            <th style={styles.th}>Description </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Personal Data</td>
            <td style={styles.td}>
              Name or username (if provided),
              <br /> Email address, Employment-related information (e.g., role,
              organization), <br />
              Any information included in ratings or written reviews
            </td>
          </tr>
          <tr>
            <td style={styles.td}>Non-personal Data</td>
            <td style={styles.td}>
              IP address, Browser type, <br />
              Device information, <br />
              Pages visited/usage data
              <br />
              Referring URLs
            </td>
          </tr>
        </tbody>
      </table>
      {/* Example List */}
      <h3 style={styles.subheading}>3. How We Use Your Information</h3>
      <ul style={styles.list}>
        <li>
          Operate and maintain the website
          <li>Allow users to submit and view supervisor ratings</li>
          <li>Improve user experience and functionality</li>
          <li>Monitor and analyze usage trends</li>
          Detect and prevent fraud, abuse, or harmful activity Comply with legal
          obligations
        </li>
        <li>Automatically collected data</li>
        <li>Information from third-party sources</li>
      </ul>
      {/* Example List */}
      <h3 style={styles.subheading}>4. Anonymity and Content Responsibility</h3>
      <p style={styles.paragraph}>
        While users may submit reviews anonymously, we cannot guarantee complete
        anonymity.
      </p>
      <p>
        {" "}
        You are responsible for the content you submit. You agree not to post:{" "}
      </p>
      <ul style={styles.list}>
        <li>False or misleading information</li>
        <li>Defamatory or harmful statements</li>
        <li>
          Personally identifiable information about others without consent
        </li>

        <p>We reserve the right to remove content at our discretion.</p>
      </ul>
      <h3 style={styles.subheading}>
        5. Sharing and Disclosure of Information
      </h3>
      <p>We do not sell your personal information.</p>
      We may share information in the following situations:
      <ul style={styles.list}>
        <li>
          Service Providers: With third-party vendors (e.g., hosting providers
          such as Vercel)
        </li>
        <li>
          Legal Requirements: If required by law, subpoena, or legal process
        </li>
        <li>Protection of Rights: To protect our rights, users, or others</li>
        <li>
          Business Transfers: In connection with a merger, sale, or acquisition
        </li>
      </ul>
      <h3 style={styles.subheading}>6. Cookies and Tracking Technologies</h3>
      We may use cookies and similar tracking technologies to:
      <ul style={styles.list}>
        <li>Enhance user experience</li>
        <li> Analyze website traffic Store user preferences</li>
      </ul>
      You can modify your browser settings to refuse cookies, but this may
      affect functionality.
      <h3 style={styles.subheading}> 7. Data Retention</h3>
      We retain your information only as long as necessary to:
      <ul style={styles.list}>
        <li> Provide our services Comply with legal obligations</li>
        <li> Resolve disputes Enforce agreements </li>
      </ul>
      <h3 style={styles.subheading}> 8. Data Security</h3>
      We implement reasonable administrative, technical, and physical safeguards
      to protect your information. However, no method of transmission over the
      Internet is 100% secure, and we cannot guarantee absolute security.
      <h3 style={styles.subheading}>
        9. Your Privacy Rights (California Residents)
      </h3>
      If you are a California resident, you may have rights under the California
      Consumer Privacy Act (CCPA/CPRA), including:
      <ul style={styles.list}>
        <li>The right to know what personal information is collected </li>
        <li> The right to request deletion of your data </li>
        <li> The right to correct inaccurate information </li>
        <li>The right to opt out of certain data sharing </li>
      </ul>
      To exercise these rights, contact us at: [Insert Contact Email]
      <h3 style={styles.subheading}>10. Children’s Privacy</h3>
      This website is not intended for individuals under the age of 18. We do
      not knowingly collect personal information from children. If we become
      aware that we have collected such information, we will take steps to
      delete it.
      <h3 style={styles.subheading}>11. Third-Party Links</h3>
      Our website may contain links to third-party websites. We are not
      responsible for the privacy practices of those websites.
      <h3 style={styles.subheading}>12. Hosting and Infrastructure</h3>
      This website is hosted on Vercel. Vercel may collect certain technical
      data (such as IP addresses and request logs) necessary to operate and
      secure the platform. Please refer to Vercel’s privacy policy for more
      information.
      <h3 style={styles.subheading}>13. Changes to This Privacy Policy</h3> We
      may update this Privacy Policy from time to time. We will notify users of
      changes by updating the “Last Updated” date. Continued use of the website
      after changes constitutes acceptance of the revised policy.
      <h3 style={styles.subheading}> 14. Contact Us </h3>
      If you have questions or concerns about this Privacy Policy, please
      contact us at: Email: [Insert Email Address] Website: [Insert Website URL]
      <h3 style={styles.subheading}> 15. Disclaimer </h3>
      This platform provides user-generated opinions and ratings. We do not
      verify the accuracy of submitted content and are not responsible for user
      opinions.
    </div>
  );
}
