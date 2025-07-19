import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Users, CheckCircle, Sparkles, Crown, Diamond } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Your message has been sent! We will respond within 24 hours.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Users,
      title: 'Executive Contact',
      content: 'Randy Leroy Lowe',
      link: null,
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'brownjulianumm175@hotmail.com',
      link: 'mailto:brownjulianumm175@hotmail.com',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+1 (847) 847-5608',
      link: 'tel:+18478475608',
    },
    {
      icon: MapPin,
      title: 'Business Address',
      content: 'West 13th Avenue 503, Kennewick, WA 99337, United States',
      link: 'https://maps.google.com/?q=West+13th+Avenue+503,+Kennewick,+WA+99337',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
      link: null,
    },
  ];

  const services = [
    'Strategic Brand Development',
    'Digital Marketing Excellence',
    'Search Engine Optimization',
    'Pay-Per-Click Advertising',
    'Social Media Strategy',
    'Email Marketing Automation',
    'Content Strategy & Creation',
    'Website Design & Development',
    'Analytics & Performance Tracking',
    'Comprehensive Marketing Consultation',
  ];

  const budgetRanges = [
    'Under $2,000/month',
    '$2,000 - $5,000/month',
    '$5,000 - $10,000/month',
    '$10,000 - $25,000/month',
    '$25,000 - $50,000/month',
    '$50,000+/month',
    'Project-based consultation',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-card to-background py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-card/60 backdrop-blur-md border border-accent/40 text-accent px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-soft">
              <Crown className="w-5 h-5 mr-3 text-accent" />
              Connect With Our Experts
              <Sparkles className="w-5 h-5 ml-3 text-accent" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-textPrimary mb-6">
              <span className="block">Let's Create</span>
              <span className="block bg-gradient-to-r from-primary via-hover to-accent bg-clip-text text-transparent">
                Something Extraordinary
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-textMuted max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Let's collaborate on innovative solutions that 
              deliver exceptional results and accelerate your business growth beyond expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-card p-8 rounded-3xl shadow-zenith border border-cardBorder">
                <h2 className="text-2xl font-heading font-bold text-textPrimary mb-6">Connect With Us</h2>
                <p className="text-textMuted mb-8 leading-relaxed">
                  We're committed to your success. Reach out through any of these channels, 
                  and we'll respond within 24 hours with personalized insights.
                </p>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-2xl mr-4 group-hover:scale-110 transition-transform shadow-md">
                        <info.icon className="h-6 w-6 text-card" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-textPrimary mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-textMuted hover:text-accent transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-textMuted">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-cardBorder rounded-3xl p-8 shadow-zenith">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-primary to-accent w-12 h-12 rounded-full flex items-center justify-center mr-4 shadow-md">
                    <Send className="w-6 h-6 text-card" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-textPrimary">Start Your Project</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-textPrimary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cardBorder bg-background text-textPrimary rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cardBorder bg-background text-textPrimary rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-textPrimary mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cardBorder bg-background text-textPrimary rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-textPrimary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cardBorder bg-background text-textPrimary rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-textPrimary mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cardBorder bg-background text-textPrimary rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-textPrimary mb-2">
                        Investment Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cardBorder bg-background text-textPrimary rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      >
                        <option value="">Select investment range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-textPrimary mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cardBorder bg-background text-textPrimary rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Tell us about your project, goals, and how we can help you achieve extraordinary results..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-buttonGradientStart to-buttonGradientEnd text-card py-4 px-6 rounded-2xl font-bold hover:shadow-zenith transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                  >
                    Send Your Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">Visit Our Creative Studio</h2>
            <p className="text-xl text-textMuted">Experience innovation in person at our Kennewick headquarters</p>
          </div>
          <div className="bg-card border border-cardBorder rounded-3xl overflow-hidden shadow-zenith">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.123456789!2d-119.137234!3d46.211034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54984c8b9c8d1234%3A0x9876543210abcdef!2sWest%2013th%20Avenue%20503%2C%20Kennewick%2C%20WA%2099337!5e0!3m2!1sen!2sus!4v1640995200000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zenith Creative Studio Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Quick answers to common questions about our services and partnership approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How quickly can we begin our partnership?',
                answer: 'We can typically initiate your project within 1-2 business days following our strategic consultation and partnership agreement.',
              },
              {
                question: 'Do you work with businesses of all sizes?',
                answer: 'Absolutely! We partner with startups, growing enterprises, and established corporations. Our solutions are customized to align with your specific objectives and investment capacity.',
              },
              {
                question: 'How do you measure and communicate success?',
                answer: 'We track key performance indicators that directly impact your business goals - qualified leads, conversion optimization, revenue growth, and ROI. You receive comprehensive monthly performance reports.',
              },
              {
                question: 'What distinguishes Zenith Creative Studio?',
                answer: 'Our data-driven methodology, strategic partnership approach, and unwavering commitment to transparency set us apart. We function as growth partners, not just service providers.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card p-8 rounded-3xl shadow-soft hover:shadow-zenith transition-all duration-300 border border-cardBorder group">
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-r from-primary to-accent w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4 text-card" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-textPrimary">{faq.question}</h3>
                </div>
                <p className="text-textMuted ml-12 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-hover to-accent text-card relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-card/20 backdrop-blur-md w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Diamond className="h-10 w-10 text-card" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Digital Future?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's create a strategic partnership that drives exceptional growth and establishes 
            your market leadership through innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:brownjulianumm175@hotmail.com"
              className="bg-card text-primary px-10 py-4 rounded-full font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center"
            >
              Email Us Directly
              <Mail className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:+18478475608"
              className="border-2 border-card text-card px-10 py-4 rounded-full font-bold hover:bg-card hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              Call Now
              <Phone className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;