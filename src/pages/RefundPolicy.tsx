import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              <span className="text-white">Refund</span>
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent"> Policy</span>
            </h1>
            <p className="text-xl text-slate-200">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. General Refund Guidelines</h2>
                <p className="text-slate-300 mb-4">
                  At BitBoostMedia, we are dedicated to providing outstanding service quality and ensuring client satisfaction. 
                  Our refund policy is structured to be fair and transparent while acknowledging the specialized nature of digital marketing services.
                </p>
                <p className="text-slate-300 mb-4">
                  <strong>Important:</strong> Due to the specialized nature of digital marketing services, which involve strategic planning, 
                  continuous implementation, and campaign optimization, refunds are assessed on a case-by-case basis and are 
                  subject to the conditions described below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Monthly Subscription Plans</h2>
                <p className="text-slate-300 mb-4">
                  For monthly recurring subscription services:
                </p>
                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                  <li><strong>Initial Month Guarantee:</strong> If you are not satisfied with our services within the first 30 days, you may request a refund for the current month's subscription fee</li>
                  <li><strong>Service Cancellation:</strong> You may cancel your monthly subscription at any time with 30 days written notice</li>
                  <li><strong>No Partial Refunds:</strong> We do not provide partial refunds for unused portions of a billing cycle</li>
                  <li><strong>Completed Work:</strong> Any work completed during the billing period will be delivered regardless of cancellation</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Annual Subscription Plans</h2>
                <p className="text-slate-300 mb-4">
                  For annual prepaid subscription services:
                </p>
                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                  <li><strong>60-Day Guarantee:</strong> If you are not satisfied within the first 60 days, you may request a prorated refund for the unused portion</li>
                  <li><strong>After 60 Days:</strong> No refunds are available after the initial 60-day period</li>
                  <li><strong>Early Termination:</strong> If you choose to terminate after 60 days, no refund will be provided for the unused portion</li>
                  <li><strong>Service Delivery:</strong> All work completed up to the termination date will be delivered</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Setup Fees and One-Time Services</h2>
                <p className="text-slate-300 mb-4">
                  For setup fees and one-time project work:
                </p>
                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                  <li><strong>Setup Fees:</strong> Non-refundable once work has commenced</li>
                  <li><strong>Project-Based Work:</strong> Refunds considered only if we fail to deliver agreed-upon deliverables</li>
                  <li><strong>Completed Work:</strong> No refunds for work that has been completed and delivered</li>
                  <li><strong>Milestone Payments:</strong> Refunds only available for incomplete milestone work</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Advertising Investment</h2>
                <p className="text-slate-300 mb-4">
                  For paid advertising initiatives:
                </p>
                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                  <li><strong>Ad Spend:</strong> Advertising investment paid to platforms (Google, Facebook, etc.) is non-refundable</li>
                  <li><strong>Management Fees:</strong> Management fees for advertising campaigns follow the same refund policy as subscription plans</li>
                  <li><strong>Unused Budget:</strong> Any unused advertising budget will remain in your advertising accounts</li>
                  <li><strong>Platform Policies:</strong> Refunds for advertising spend are subject to the respective platform's policies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Refund Exclusions</h2>
                <p className="text-slate-300 mb-4">
                  Refunds will NOT be granted in the following situations:
                </p>
                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                  <li>Failure to provide necessary access, information, or approvals</li>
                  <li>Changes in business circumstances or priorities</li>
                  <li>Dissatisfaction with results due to factors beyond our control</li>
                  <li>Violation of our Terms & Conditions</li>
                  <li>Fraudulent or chargeback activity</li>
                  <li>Services already delivered and accepted</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Refund Request Process</h2>
                <p className="text-slate-300 mb-4">
                  To submit a refund request:
                </p>
                <ol className="list-decimal pl-6 text-slate-300 space-y-2">
                  <li>Contact us in writing at jamesemmacfl425@hotmail.com</li>
                  <li>Include your account information and reason for the refund request</li>
                  <li>Provide any relevant documentation supporting your request</li>
                  <li>Allow 5-10 business days for review and response</li>
                  <li>If approved, refunds will be processed within 10-15 business days</li>
                  <li>Refunds will be issued to the original payment method</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Alternative Solutions</h2>
                <p className="text-slate-300 mb-4">
                  In certain cases, instead of a monetary refund, we may provide:
                </p>
                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                  <li>Service credits for future work</li>
                  <li>Additional services at no charge</li>
                  <li>Extended service periods</li>
                  <li>Alternative service solutions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Dispute Resolution</h2>
                <p className="text-slate-300 mb-4">
                  If you dispute our refund decision:
                </p>
                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                  <li>Request a review by a senior team member</li>
                  <li>Provide additional documentation if available</li>
                  <li>Consider mediation if direct negotiation fails</li>
                  <li>Final decisions will be made in accordance with our Terms & Conditions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Chargeback Policy</h2>
                <p className="text-slate-300 mb-4">
                  Starting a chargeback without first contacting us may result in:
                </p>
                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                  <li>Immediate suspension of all services</li>
                  <li>Forfeiture of any remaining service credits</li>
                  <li>Additional fees to cover chargeback costs</li>
                  <li>Termination of business relationship</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">11. Satisfaction Commitment</h2>
                <p className="text-slate-300 mb-4">
                  Our promise to you:
                </p>
                <ul className="list-disc pl-6 text-slate-300 space-y-2">
                  <li>We will work diligently to address any concerns</li>
                  <li>Regular communication and reporting</li>
                  <li>Adjustments to strategy based on performance</li>
                  <li>Professional service delivery at all times</li>
                  <li>Transparency in all our business dealings</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
                <p className="text-slate-300 mb-4">
                  For refund requests or questions about this policy:
                </p>
                <ul className="list-none text-slate-300 space-y-2">
                  <li>Email: jamesemmacfl425@hotmail.com</li>
                  <li>Phone: +1 (872) 772-4835</li>
                  <li>Address: Arlington Drive 1818, Medford, OR 97501, United States</li>
                  <li>Business Hours: Monday-Friday, 9:00 AM - 6:00 PM PST</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-cyan-400/20 to-teal-500/20 p-6 rounded-lg border border-cyan-400/30">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Need Help?</h3>
                <p className="text-slate-300">
                  Before submitting a refund request, please contact us to discuss your concerns. Our team is committed 
                  to finding solutions and ensuring your satisfaction with our services. Many issues can be 
                  resolved through clear communication and strategy modifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;