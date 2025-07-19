import React from 'react';

const TermsConditions = () => {
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
              <span className="text-textPrimary">Terms &</span>
              <span className="bg-gradient-to-r from-primary via-hover to-accent bg-clip-text text-transparent"> Conditions</span>
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
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">1. Agreement Acceptance</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  By accessing and using Zenith Creative Studio's services, you acknowledge that you have read, 
                  understood, and agree to be bound by these terms and conditions. If you do not agree to these terms, 
                  please discontinue use of our services immediately.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">2. Service Offerings</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Zenith Creative Studio provides comprehensive digital marketing services including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Pay-Per-Click (PPC) Advertising Management</li>
                  <li>Social Media Marketing Strategy</li>
                  <li>Email Marketing Automation</li>
                  <li>Content Marketing and Creation</li>
                  <li>Website Design and Development</li>
                  <li>Digital Analytics and Reporting</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">3. Client Responsibilities</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Clients are responsible for:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Providing accurate and complete information necessary for service delivery</li>
                  <li>Responding promptly to requests for information or approvals</li>
                  <li>Providing necessary access to accounts, websites, and platforms</li>
                  <li>Reviewing and approving deliverables within agreed timeframes</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Making payments according to agreed terms</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">4. Payment Terms</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Payment terms are structured as follows:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Monthly subscriptions are billed in advance on a monthly basis</li>
                  <li>Annual subscriptions are billed annually in advance with applicable discounts</li>
                  <li>Setup fees, when applicable, are due upon service commencement</li>
                  <li>Additional services beyond package scope will be billed separately</li>
                  <li>Late payments may result in service suspension and additional fees</li>
                  <li>All fees are non-refundable except as specified in our Refund Policy</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">5. Service Commitment</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Zenith Creative Studio commits to:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Delivering services with professional expertise and diligence</li>
                  <li>Meeting agreed-upon deliverable timelines</li>
                  <li>Maintaining strict confidentiality of client information</li>
                  <li>Providing regular reporting and communication</li>
                  <li>Responding to client inquiries within 24 hours during business days</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">6. Intellectual Property Rights</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Intellectual property ownership is defined as follows:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Clients retain ownership of their brand, trademarks, and existing content</li>
                  <li>Zenith Creative Studio retains ownership of proprietary methodologies and processes</li>
                  <li>Work products created specifically for clients become client property upon full payment</li>
                  <li>Zenith Creative Studio may use anonymized case studies for marketing purposes</li>
                  <li>Third-party tools and platforms remain the property of their respective owners</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">7. Confidentiality</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Both parties agree to maintain strict confidentiality regarding:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Business strategies and proprietary information</li>
                  <li>Financial information and performance data</li>
                  <li>Customer lists and contact information</li>
                  <li>Technical specifications and processes</li>
                  <li>Any information designated as confidential</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">8. Limitation of Liability</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Zenith Creative Studio's liability is limited as follows:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Total liability shall not exceed amounts paid by client in the preceding 12 months</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>We cannot guarantee specific results or performance metrics</li>
                  <li>External factors beyond our control may affect campaign performance</li>
                  <li>Clients are responsible for backing up their own data and content</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">9. Termination</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Either party may terminate this agreement:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>With 30 days written notice for ongoing services</li>
                  <li>Immediately for material breach of contract</li>
                  <li>Immediately for non-payment after 15 days notice</li>
                  <li>Upon completion of project-based work</li>
                </ul>
                <p className="text-textMuted mt-4 leading-relaxed">
                  Upon termination, clients will receive all completed work and Zenith Creative Studio will 
                  return or destroy confidential information as requested.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">10. Force Majeure</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Zenith Creative Studio shall not be liable for any failure to perform due to unforeseen circumstances 
                  or causes beyond our reasonable control, including but not limited to acts of God, war, terrorism, 
                  pandemic, government regulations, disasters, strikes, or network failures.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">11. Governing Law</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the State of Washington, 
                  United States, without regard to its conflict of law provisions.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">12. Dispute Resolution</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Any disputes arising from this agreement shall be resolved through:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Good faith negotiation between the parties</li>
                  <li>Mediation if negotiation fails</li>
                  <li>Binding arbitration if mediation is unsuccessful</li>
                  <li>Court proceedings only as a last resort</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">13. Modifications</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Zenith Creative Studio reserves the right to modify these terms at any time. Clients will be notified 
                  of significant changes with 30 days advance notice. Continued use of services after notification 
                  constitutes acceptance of the modified terms.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary via-hover to-accent p-8 rounded-3xl text-card shadow-zenith">
                <h2 className="text-2xl font-heading font-bold mb-4">14. Contact Information</h2>
                <p className="mb-4 leading-relaxed">
                  For questions regarding these Terms & Conditions, please contact:
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

export default TermsConditions;