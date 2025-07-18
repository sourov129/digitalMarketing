import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MousePointer, Share2, BarChart3, Mail, Palette, ArrowRight, Crown, Sparkles, Diamond, Zap, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Optimization Excellence',
      description: 'Establish search dominance and capture premium organic traffic through sophisticated optimization strategies.',
      features: [
        'In-Depth SEO Analysis',
        'Strategic Keyword Research',
        'Content & Technical Enhancement',
        'Premium Link Development',
        'Local Search Mastery',
        'Performance Monitoring'
      ],
      price: 'Starting at $1,399/month',
    },
    {
      icon: MousePointer,
      title: 'Advanced Advertising Management',
      description: 'Amplify ROI with strategically targeted advertising campaigns across premium conversion platforms.',
      features: [
        'Strategic Campaign Architecture',
        'Multi-Platform Ad Management',
        'Creative Excellence & Design',
        'Conversion Rate Enhancement',
        'Smart Bidding Optimization',
        'Comprehensive Analytics'
      ],
      price: 'Starting at $1,699/month',
    },
    {
      icon: Share2,
      title: 'Social Media Leadership',
      description: 'Establish commanding brand authority and cultivate engaged communities across all major social platforms.',
      features: [
        'Platform Strategy Development',
        'Engaging Content Creation',
        'Community Building & Management',
        'Social Advertising Excellence',
        'Influencer Collaboration',
        'Social Intelligence Analytics'
      ],
      price: 'Starting at $1,099/month',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Intelligence Systems',
      description: 'Convert complex data into strategic insights with advanced analytics and business intelligence platforms.',
      features: [
        'Advanced Analytics Implementation',
        'Custom Intelligence Dashboards',
        'Dynamic Performance Reports',
        'Strategic Growth Analysis',
        'Predictive Insights',
        'Competitive Intelligence'
      ],
      price: 'Starting at $799/month',
    },
    {
      icon: Mail,
      title: 'Email Marketing Mastery',
      description: 'Develop enduring customer relationships and generate revenue through advanced email marketing systems.',
      features: [
        'Strategic Email Planning',
        'Advanced Segmentation',
        'Automated Customer Journeys',
        'Personalization Technology',
        'A/B Testing Excellence',
        'Revenue Attribution'
      ],
      price: 'Starting at $999/month',
    },
    {
      icon: Palette,
      title: 'Brand & Creative Innovation',
      description: 'Elevate your brand identity with exceptional creative solutions and strategic brand positioning.',
      features: [
        'Brand Strategy Development',
        'Professional Website Design',
        'Content Strategy & Creation',
        'Creative Design Solutions',
        'Video Content Production',
        'Strategic Brand Messaging'
      ],
      price: 'Starting at $1,299/month',
    },
  ];

  const packages = [
    {
      name: 'Growth',
      price: '$2,099',
      period: '/month',
      description: 'Ideal for growing businesses ready to expand their digital reach',
      features: [
        'Comprehensive SEO Strategy',
        'Google Ads Management',
        'Social Media Excellence (3 platforms)',
        'Monthly Analytics Reports',
        'Priority Support Access',
      ],
      popular: false,
    },
    {
      name: 'Scale',
      price: '$3,899',
      period: '/month',
      description: 'Complete digital ecosystem for businesses seeking market leadership',
      features: [
        'Everything in Growth Package',
        'Advanced Content Marketing',
        'Multi-Channel Advertising',
        'Full Social Media Management (5 platforms)',
        'Marketing Automation Systems',
        'Real-Time Analytics Dashboard',
        'Dedicated Account Manager',
      ],
      popular: true,
    },
    {
      name: 'Dominate',
      price: '$6,499',
      period: '/month',
      description: 'Premium marketing solutions for industry leaders',
      features: [
        'Everything in Scale Package',
        'Executive Strategy Consultation',
        'Custom Solution Development',
        'AI-Enhanced Analytics',
        'Complete Creative Production',
        'Video Marketing Suite',
        'White-Glove 24/7 Support',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-teal-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(34 211 238) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-400/20 to-teal-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-2xl">
              <Target className="w-5 h-5 mr-3 text-cyan-400" />
              Professional Marketing Services
              <Zap className="w-5 h-5 ml-3 text-cyan-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="block">ADVANCED MARKETING</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional digital marketing services designed to enhance your brand presence, 
              expand market reach, and deliver sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 border border-cyan-400/20 rounded-3xl p-8 hover:shadow-2xl hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-cyan-400 to-teal-500 w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-cyan-400 mb-4">{service.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-400 to-teal-500 text-black py-3 rounded-2xl font-medium hover:shadow-xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 text-center block"
                >
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Strategic Marketing Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the ideal package for your business goals. Each includes our commitment to excellence, 
              detailed performance tracking, and dedicated professional support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-gray-900/50 rounded-3xl p-8 ${pkg.popular ? 'ring-2 ring-cyan-400 relative' : 'border border-cyan-400/20'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-black px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Diamond className="w-4 h-4 mr-1" />
                      Best Value
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">{pkg.price}</span>
                    <span className="text-gray-300 ml-1">{pkg.period}</span>
                  </div>
                  <p className="text-gray-300 mb-8">{pkg.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-2xl font-medium text-center block transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-teal-500 text-black hover:shadow-xl hover:shadow-cyan-500/25 transform hover:-translate-y-1'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                  }`}
                >
                  Get {pkg.name} Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-600 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create a tailored marketing strategy that drives growth and delivers exceptional results.
          </p>
          <Link
            to="/contact"
            className="bg-black text-cyan-400 px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center text-lg"
          >
            Start Your Growth Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;