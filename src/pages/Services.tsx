import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MousePointer, Share2, BarChart3, Mail, Palette, ArrowRight, Crown, Sparkles, Diamond, Zap, Target, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Optimization Mastery',
      description: 'Dominate search results and capture premium organic visibility through advanced optimization strategies and technical excellence.',
      features: [
        'Comprehensive SEO Audits',
        'Strategic Keyword Research',
        'Content & Technical Optimization',
        'Authority Link Building',
        'Local Search Dominance',
        'Performance Analytics'
      ],
      price: 'Starting at $2,499/month',
    },
    {
      icon: MousePointer,
      title: 'Precision Advertising Management',
      description: 'Maximize ROI with strategically targeted campaigns across high-converting platforms and emerging digital channels.',
      features: [
        'Strategic Campaign Development',
        'Multi-Platform Management',
        'Creative Excellence & Design',
        'Conversion Rate Optimization',
        'Advanced Bidding Strategies',
        'Performance Intelligence'
      ],
      price: 'Starting at $2,999/month',
    },
    {
      icon: Share2,
      title: 'Social Media Excellence',
      description: 'Build commanding brand presence and cultivate engaged communities across all major social platforms.',
      features: [
        'Platform Strategy Development',
        'Premium Content Creation',
        'Community Management',
        'Social Advertising Excellence',
        'Influencer Partnerships',
        'Social Analytics Intelligence'
      ],
      price: 'Starting at $1,999/month',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Intelligence',
      description: 'Transform complex data into actionable insights with advanced analytics and business intelligence dashboards.',
      features: [
        'Advanced Analytics Setup',
        'Custom Dashboard Creation',
        'Performance Reporting',
        'Strategic Growth Analysis',
        'Predictive Insights',
        'Competitive Intelligence'
      ],
      price: 'Starting at $1,499/month',
    },
    {
      icon: Mail,
      title: 'Email Marketing Excellence',
      description: 'Nurture lasting customer relationships and drive revenue through sophisticated automation and personalization.',
      features: [
        'Strategic Email Planning',
        'Advanced Segmentation',
        'Automated Customer Journeys',
        'Personalization Technology',
        'A/B Testing Excellence',
        'Revenue Attribution'
      ],
      price: 'Starting at $1,799/month',
    },
    {
      icon: Palette,
      title: 'Brand & Creative Innovation',
      description: 'Elevate your brand identity with exceptional creative solutions and strategic brand positioning.',
      features: [
        'Brand Strategy Development',
        'Premium Website Design',
        'Content Strategy & Creation',
        'Creative Design Solutions',
        'Video Content Production',
        'Brand Messaging Strategy'
      ],
      price: 'Starting at $2,299/month',
    },
  ];

  const packages = [
    {
      name: 'Accelerate',
      price: '$3,999',
      period: '/month',
      description: 'Perfect for growing businesses ready to scale their digital presence',
      features: [
        'Comprehensive SEO Strategy',
        'Google Ads Management',
        'Social Media Excellence (3 platforms)',
        'Monthly Performance Reports',
        'Priority Support Access',
        'Strategic Consultation',
      ],
      popular: false,
    },
    {
      name: 'Dominate',
      price: '$7,499',
      period: '/month',
      description: 'Complete digital ecosystem for businesses seeking market leadership',
      features: [
        'Everything in Accelerate Package',
        'Advanced Content Marketing',
        'Multi-Channel Advertising',
        'Full Social Media Management (5 platforms)',
        'Marketing Automation Systems',
        'Real-Time Analytics Dashboard',
        'Dedicated Account Manager',
        'Weekly Strategy Sessions',
      ],
      popular: true,
    },
    {
      name: 'Transform',
      price: '$12,999',
      period: '/month',
      description: 'Premium solutions for industry leaders and enterprise organizations',
      features: [
        'Everything in Dominate Package',
        'Executive Strategy Consultation',
        'Custom Solution Development',
        'AI-Enhanced Analytics',
        'Complete Creative Production',
        'Video Marketing Suite',
        'White-Glove 24/7 Support',
        'Quarterly Business Reviews',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-card to-background py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(91 44 111) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-card/60 backdrop-blur-md border border-accent/40 text-accent px-8 py-4 rounded-full text-sm font-semibold mb-8 shadow-soft">
              <Target className="w-5 h-5 mr-3 text-accent" />
              Premium Digital Solutions
              <Zap className="w-5 h-5 ml-3 text-accent" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-textPrimary mb-6">
              <span className="block">EXCEPTIONAL DIGITAL</span>
              <span className="block bg-gradient-to-r from-primary via-hover to-accent bg-clip-text text-transparent">
                SERVICES
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
            <p className="text-xl text-textMuted max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital marketing services designed to elevate your brand presence, 
              expand market reach, and deliver sustainable business growth through strategic innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">
              Our Service Excellence
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Each service is crafted with precision and delivered with excellence to ensure 
              your business achieves extraordinary results and market leadership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-cardBorder rounded-3xl p-8 hover:shadow-zenith transition-all duration-300 group">
                <div className="bg-gradient-to-r from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <service.icon className="h-8 w-8 text-card" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-textPrimary mb-4">{service.title}</h3>
                <p className="text-textMuted mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-textMuted flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-primary mb-6">{service.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-buttonGradientStart to-buttonGradientEnd text-card py-3 rounded-2xl font-medium hover:shadow-zenith transform hover:-translate-y-1 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">
              Strategic Partnership Packages
            </h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Choose the perfect package for your business objectives. Each includes our commitment to excellence, 
              comprehensive performance tracking, and dedicated professional support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-card rounded-3xl p-8 transition-all duration-300 ${pkg.popular ? 'ring-2 ring-accent relative shadow-zenith scale-105' : 'border border-cardBorder shadow-soft hover:shadow-zenith'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-card px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-md">
                      <Diamond className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-heading font-bold text-textPrimary mb-3">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{pkg.price}</span>
                    <span className="text-textMuted ml-1">{pkg.period}</span>
                  </div>
                  <p className="text-textMuted mb-8 leading-relaxed">{pkg.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-textMuted">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-4 rounded-2xl font-semibold text-center block transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-buttonGradientStart to-buttonGradientEnd text-card hover:shadow-zenith transform hover:-translate-y-1'
                      : 'border-2 border-accent text-accent hover:bg-accent hover:text-card'
                  }`}
                >
                  Choose {pkg.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">Our Strategic Process</h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results and sustainable growth for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We conduct comprehensive analysis of your business landscape, competitive environment, and growth opportunities.',
              },
              {
                step: '02',
                title: 'Strategy Development',
                description: 'Create tailored digital marketing strategies aligned with your vision and business objectives.',
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute strategies with precision, utilizing cutting-edge technologies and proven methodologies.',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Monitor, analyze, and optimize campaigns for maximum performance and exceptional ROI.',
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-primary to-accent text-card w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-zenith">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-textPrimary mb-4">{step.title}</h3>
                <p className="text-textMuted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-textPrimary mb-4">Industries We Serve</h2>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Specialized expertise across diverse business sectors with proven success records.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: 'E-commerce', icon: '🛒' },
              { name: 'Healthcare', icon: '🏥' },
              { name: 'Technology', icon: '💻' },
              { name: 'Real Estate', icon: '🏠' },
              { name: 'Finance', icon: '💰' },
              { name: 'Education', icon: '🎓' },
              { name: 'Hospitality', icon: '🏨' },
              { name: 'Manufacturing', icon: '🏭' },
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-3xl hover:bg-accent/5 transition-all duration-300 shadow-soft hover:shadow-zenith hover:-translate-y-1 border border-cardBorder group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <div className="text-sm font-medium text-textMuted">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-hover to-accent text-card relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="bg-card/20 backdrop-blur-md w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Crown className="h-10 w-10 text-card" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's create a customized marketing strategy that drives exceptional growth and 
            establishes your market leadership through innovative digital solutions.
          </p>
          <Link
            to="/contact"
            className="bg-card text-primary px-12 py-6 rounded-full font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center text-lg"
          >
            Start Your Transformation
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;