import React from 'react';

const RefundPolicy = () => {
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
              <span className="text-textPrimary">Refund</span>
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
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">1. General Refund Policy</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  At Zenith Creative Studio, we are committed to delivering exceptional service quality and ensuring client satisfaction. 
                  Our refund policy is designed to be fair and transparent while recognizing the specialized nature of digital marketing services.
                </p>
                <p className="text-textMuted mb-4 leading-relaxed">
                  <strong>Important:</strong> Due to the specialized nature of digital marketing services, which involve strategic planning, 
                  ongoing implementation, and campaign optimization, refunds are evaluated on a case-by-case basis and are 
                  subject to the conditions outlined below.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">2. Monthly Subscription Services</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  For monthly recurring subscription services:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li><strong>30-Day Satisfaction Guarantee:</strong> If you are not satisfied with our services within the first 30 days, you may request a refund for the current month's subscription fee</li>
                  <li><strong>Service Cancellation:</strong> You may cancel your monthly subscription at any time with 30 days written notice</li>
                  <li><strong>No Partial Refunds:</strong> We do not provide partial refunds for unused portions of a billing cycle</li>
                  <li><strong>Completed Work:</strong> Any work completed during the billing period will be delivered regardless of cancellation</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">3. Annual Subscription Services</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  For annual prepaid subscription services:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li><strong>60-Day Guarantee:</strong> If you are not satisfied within the first 60 days, you may request a prorated refund for the unused portion</li>
                  <li><strong>After 60 Days:</strong> No refunds are available after the initial 60-day period</li>
                  <li><strong>Early Termination:</strong> If you choose to terminate after 60 days, no refund will be provided for the unused portion</li>
                  <li><strong>Service Delivery:</strong> All work completed up to the termination date will be delivered</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">4. Setup Fees and One-Time Services</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  For setup fees and one-time project work:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li><strong>Setup Fees:</strong> Non-refundable once work has commenced</li>
                  <li><strong>Project-Based Work:</strong> Refunds considered only if we fail to deliver agreed-upon deliverables</li>
                  <li><strong>Completed Work:</strong> No refunds for work that has been completed and delivered</li>
                  <li><strong>Milestone Payments:</strong> Refunds only available for incomplete milestone work</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">5. Advertising Spend</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  For paid advertising campaigns:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li><strong>Ad Spend:</strong> Advertising budget paid to platforms (Google, Facebook, etc.) is non-refundable</li>
                  <li><strong>Management Fees:</strong> Management fees for advertising campaigns follow the same refund policy as subscription plans</li>
                  <li><strong>Unused Budget:</strong> Any unused advertising budget will remain in your advertising accounts</li>
                  <li><strong>Platform Policies:</strong> Refunds for advertising spend are subject to the respective platform's policies</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">6. Refund Exclusions</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Refunds will NOT be granted in the following situations:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Failure to provide necessary access, information, or approvals</li>
                  <li>Changes in business circumstances or priorities</li>
                  <li>Dissatisfaction with results due to factors beyond our control</li>
                  <li>Violation of our Terms & Conditions</li>
                  <li>Fraudulent or chargeback activity</li>
                  <li>Services already delivered and accepted</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">7. Refund Request Process</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  To request a refund:
                </p>
                <ol className="list-decimal pl-6 text-textMuted space-y-2">
                  <li>Contact us in writing at brownjulianumm175@hotmail.com</li>
                  <li>Include your account information and reason for the refund request</li>
                  <li>Provide any relevant documentation supporting your request</li>
                  <li>Allow 5-10 business days for review and response</li>
                  <li>If approved, refunds will be processed within 10-15 business days</li>
                  <li>Refunds will be issued to the original payment method</li>
                </ol>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">8. Alternative Solutions</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  In certain cases, instead of a monetary refund, we may offer:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Service credits for future work</li>
                  <li>Additional services at no charge</li>
                  <li>Extended service periods</li>
                  <li>Alternative service solutions</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">9. Dispute Resolution</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  If you dispute our refund decision:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Request a review by a senior team member</li>
                  <li>Provide additional documentation if available</li>
                  <li>Consider mediation if direct negotiation fails</li>
                  <li>Final decisions will be made in accordance with our Terms & Conditions</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">10. Chargeback Policy</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Initiating a chargeback without first contacting us may result in:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>Immediate suspension of all services</li>
                  <li>Forfeiture of any remaining service credits</li>
                  <li>Additional fees to cover chargeback costs</li>
                  <li>Termination of business relationship</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-3xl shadow-soft border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-4">11. Our Commitment</h2>
                <p className="text-textMuted mb-4 leading-relaxed">
                  Our commitment to you:
                </p>
                <ul className="list-disc pl-6 text-textMuted space-y-2">
                  <li>We will work diligently to address any concerns</li>
                  <li>Regular communication and transparent reporting</li>
                  <li>Strategy adjustments based on performance data</li>
                  <li>Professional service delivery at all times</li>
                  <li>Complete transparency in all business dealings</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary via-hover to-accent p-8 rounded-3xl text-card shadow-zenith">
                <h2 className="text-2xl font-heading font-bold mb-4">12. Contact Information</h2>
                <p className="mb-4 leading-relaxed">
                  For refund requests or questions about this policy:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Name:</strong> Randy Leroy Lowe</li>
                  <li><strong>Email:</strong> brownjulianumm175@hotmail.com</li>
                  <li><strong>Phone:</strong> +1 (847) 847-5608</li>
                  <li><strong>Address:</strong> West 13th Avenue 503, Kennewick, WA 99337, United States</li>
                  <li><strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM PST</li>
                </ul>
                
                <div className="mt-6 p-4 bg-card/20 rounded-2xl">
                  <h3 className="text-lg font-semibold mb-2">Need Assistance?</h3>
                  <p className="leading-relaxed">
                    Before requesting a refund, please contact us to discuss your concerns. Our team is dedicated 
                    to finding solutions and ensuring your satisfaction with our services. Many issues can be 
                    resolved through open communication and strategy adjustments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;