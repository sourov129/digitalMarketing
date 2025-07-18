import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-white">Privacy</span>
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent"> Policy</span>
            </h1>
            <p className="text-xl text-gray-200">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection Practices</h2>
                <p className="text-gray-300 mb-4">
                  We collect information that you provide when registering accounts, 
                  joining our communications, filling out forms, or using our services. This information may include:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Personal identification details (name, email, phone, address)</li>
                  <li>Business information and professional title</li>
                  <li>Financial details and billing information</li>
                  <li>Communication records and feedback</li>
                  <li>Marketing preferences and interests</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Information Usage</h2>
                <p className="text-gray-300 mb-4">
                  We use collected information for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Delivering, maintaining, and enhancing our services</li>
                  <li>Processing transactions and sending related communications</li>
                  <li>Providing technical updates, security alerts, and support messages</li>
                  <li>Addressing inquiries, comments, and customer service requests</li>
                  <li>Sharing information about products, services, offers, and events</li>
                  <li>Analyzing trends, usage patterns, and service activities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Sharing and Disclosure</h2>
                <p className="text-gray-300 mb-4">
                  We may disclose your information in these situations:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>With service providers, consultants, and vendors who require access to perform work on our behalf</li>
                  <li>When responding to legal requests if we believe disclosure complies with applicable laws and regulations</li>
                  <li>If we believe your actions violate our agreements or policies, or to protect the rights and safety of MulenaDigital or others</li>
                  <li>In connection with business transactions such as mergers, acquisitions, or asset sales</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Information Security</h2>
                <p className="text-gray-300 mb-4">
                  We employ appropriate security measures to safeguard your information from loss, theft, misuse, 
                  unauthorized access, disclosure, modification, and destruction. However, no internet or electronic 
                  storage system can ensure absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Tracking Technologies and Cookies</h2>
                <p className="text-gray-300 mb-4">
                  We use cookies and similar tracking technologies to track website activity and store certain information. 
                  Cookies are small data files that may include anonymous unique identifiers.
                </p>
                <p className="text-gray-300 mb-4">
                  You can set your browser to reject cookies or notify you when cookies are being sent. 
                  However, declining cookies may restrict your ability to use certain features of our service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. User Rights and Options</h2>
                <p className="text-gray-300 mb-4">
                  You have certain rights concerning your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>The right to access, update, or delete your information</li>
                  <li>The right to correction if your information is inaccurate or incomplete</li>
                  <li>The right to object to our processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent where we rely on your consent for processing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention Practices</h2>
                <p className="text-gray-300 mb-4">
                  We keep personal information when we have a continuing legitimate business need. 
                  When we no longer have a legitimate business need to process your information, we will remove 
                  or anonymize it, or if this is not feasible, we will securely store and isolate it from further processing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
                <p className="text-gray-300 mb-4">
                  Your information, including personal data, may be transferred to and processed on systems located 
                  outside your jurisdiction where data protection laws may vary from those in your location.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy Protection</h2>
                <p className="text-gray-300 mb-4">
                  Our services are not intended for individuals under 13 years of age. We do not knowingly gather 
                  personal information from children under 13. If you discover that a child has provided us with 
                  personal information, please contact us right away.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Policy Updates</h2>
                <p className="text-gray-300 mb-4">
                  We may modify this Privacy Policy from time to time. We will inform you of any changes by posting 
                  the revised Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have questions about this Privacy Policy, please reach out to us:
                </p>
                <ul className="list-none text-gray-300 space-y-2">
                  <li>Email: jamesemmacfl425@hotmail.com</li>
                  <li>Phone: +1 (872) 772-4835</li>
                  <li>Address: Arlington Drive 1818, Medford, OR 97501, United States</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;