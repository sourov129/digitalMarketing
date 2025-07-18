import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Users } from 'lucide-react';

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
    alert('Your message has been sent! We will respond shortly.');
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
      content: 'Rodney M Sease',
      link: null,
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'jamesemmacfl425@hotmail.com',
      link: 'mailto:jamesemmacfl425@hotmail.com',
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+1 (872) 772-4835',
      link: 'tel:+18727724835',
    },
    {
      icon: MapPin,
      title: 'Business Address',
      content: 'Arlington Drive 1818, Medford, OR 97501, United States',
      link: 'https://maps.google.com/?q=Arlington+Drive+1818,+Medford,+OR+97501',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
      link: null,
    },
  ];

  const services = [
    'Search Engine Optimization (SEO)',
    'Pay-Per-Click (PPC) Advertising',
    'Social Media Marketing',
    'Email Marketing Systems',
    'Content Strategy',
    'Website Development',
    'Analytics & Reporting',
    'Brand Development',
    'Other Marketing Services',
  ];

  const budgetRanges = [
    'Under $1,500/month',
    '$1,500 - $3,200/month',
    '$3,200 - $6,000/month',
    '$6,000 - $15,000/month',
    '$15,000 - $30,000/month',
    '$30,000+/month',
    'Consultation needed',
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-white">Get In Touch With</span>
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent"> Our Experts</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Ready to transform your digital strategy? Let's work together on innovative marketing solutions that 
              deliver exceptional results and accelerate your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                We're dedicated to your success. Reach out through any of these channels, 
                and we'll respond within 24 hours.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-r from-cyan-400 to-teal-500 p-3 rounded-3xl mr-4">
                      <info.icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-cyan-400 transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 border border-cyan-400/20 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Your Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cyan-400/30 bg-slate-800/50 text-white rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cyan-400/30 bg-slate-800/50 text-white rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cyan-400/30 bg-slate-800/50 text-white rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cyan-400/30 bg-slate-800/50 text-white rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cyan-400/30 bg-slate-800/50 text-white rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
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
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-cyan-400/30 bg-slate-800/50 text-white rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cyan-400/30 bg-slate-800/50 text-white rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Tell us about your project, goals, and specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-teal-500 text-black py-4 px-6 rounded-2xl font-bold hover:shadow-xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                  >
                    Send Inquiry
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Our Location</h2>
            <p className="text-xl text-gray-300">Visit us in person or get directions</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 border border-cyan-400/20 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.123456789!2d-122.431234!3d42.326034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54cf7c8b9c8d1234%3A0x9876543210abcdef!2sArlington%20Drive%201818%2C%20Medford%2C%20OR%2097501!5e0!3m2!1sen!2sus!4v1640995200000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BitBoostMedia Office Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about our services and methodology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How quickly can we start working together?',
                answer: 'We can usually begin your campaigns within 1-2 business days after our strategy consultation and agreement signing.',
              },
              {
                question: 'Do you work with businesses of all sizes?',
                answer: 'Absolutely! We partner with startups, growing businesses, and established companies. Our solutions are tailored to match your specific goals and budget.',
              },
              {
                question: 'How do you measure and report success?',
                answer: 'We track key performance indicators that directly impact your bottom line - qualified leads, conversion rates, revenue growth, and ROI. You receive detailed monthly reports.',
              },
              {
                question: 'What makes you different from other agencies?',
                answer: 'Our data-driven methodology, partnership approach, and commitment to transparency distinguish us. We act as growth partners, not just service providers.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 p-6 rounded-3xl border border-cyan-400/20">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;