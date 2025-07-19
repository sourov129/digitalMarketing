import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-background via-card to-background py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-textPrimary mb-6">
              <span className="text-textPrimary">Privacy</span>
              <span className="bg-gradient-to-r from-primary via-hover to-accent bg-clip-text text-transparent"> Policy</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-textMuted">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">1. Information Collection Practices</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  We collect information that you voluntarily provide when creating accounts, 
                  subscribing to our communications, completing forms, or utilizing our services. This information may include:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Personal identification information (name, email, phone, address)</li>
                  <li>Business information and professional details</li>
                  <li>Financial information and billing details</li>
                  <li>Communication records and feedback</li>
                  <li>Marketing preferences and interests</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">2. Information Usage</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  We utilize collected information for various purposes, including:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Providing, maintaining, and improving our services</li>
                  <li>Processing transactions and sending related communications</li>
                  <li>Delivering technical updates, security alerts, and support messages</li>
                  <li>Responding to inquiries, comments, and customer service requests</li>
                  <li>Communicating about products, services, offers, and events</li>
                  <li>Analyzing usage patterns and service performance</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  We may share your information in these circumstances:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>With service providers, consultants, and vendors who need access to perform work on our behalf</li>
                  <li>To respond to legal requests if we believe disclosure is in accordance with applicable laws</li>
                  <li>If we believe your actions violate our agreements or policies, or to protect rights and safety</li>
                  <li>In connection with business transactions such as mergers, acquisitions, or asset sales</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">4. Data Security</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  We implement appropriate security measures to protect your information against loss, theft, misuse, 
                  unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic 
                  storage system is completely secure.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                  Cookies are files with small amounts of data which may include an anonymous unique identifier.
                </p>
                <p className="text-textMuted mb-4 leading-relaxed">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                  However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">6. Your Rights and Choices</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>The right to access, update, or delete your information</li>
                  <li>The right to rectification if your information is inaccurate or incomplete</li>
                  <li>The right to object to our processing of your personal information</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent where we rely on your consent for processing</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">7. Data Retention</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  We retain personal information for as long as we have an ongoing legitimate business need to do so. 
                  When we no longer have a legitimate business need to process your information, we will delete 
                  or anonymize it, or if this is not possible, we will securely store and isolate it from further processing.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">8. International Data Transfers</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Your information, including personal data, may be transferred to and maintained on computers located 
                  outside of your jurisdiction where data protection laws may differ from those in your location.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">9. Children's Privacy</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Our services are not intended for individuals under the age of 13. We do not knowingly collect 
                  personal information from children under 13. If you become aware that a child has provided us with 
                  personal information, please contact us immediately.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">10. Policy Changes</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary via-hover to-accent p-8 rounded-3xl text-card shadow-zenith">
                <h2 className="text-2xl font-heading font-bold mb-4">11. Contact Information</h2>
                <p className="mb-4 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Name:</strong> Randy Leroy Lowe</li>
                  <li><strong>Email:</strong> brownjulianumm175@hotmail.com</li>
                  <li><strong>Phone:</strong> +1 (847) 847-5608</li>
                  <li><strong>Address:</strong> West 13th Avenue 503, Kennewick, WA 99337, United States</li>
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