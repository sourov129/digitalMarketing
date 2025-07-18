import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, Award, CheckCircle, Star, Play, BarChart3, Zap, Globe, Smartphone, Search, MousePointer, Share2, Mail, Send, Sparkles, Crown, Diamond, Rocket, CloudLightning as Lightning } from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscriptionStatus('success');
      setEmail('');
      setTimeout(() => setSubscriptionStatus(''), 5000);
    }
  };

  const features = [
    {
      icon: Target,
      title: 'Strategic Precision',
      description: 'Data-driven targeting methodologies that connect with your ideal audience through intelligent segmentation.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Acceleration',
      description: 'Systematic optimization processes that amplify performance metrics and accelerate sustainable business growth.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Seasoned digital strategists and creative professionals with proven track records across diverse industries.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Award-winning campaigns that consistently deliver measurable outcomes and exceed performance benchmarks.',
    },
  ];

  const stats = [
    { number: '850+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '420%', label: 'Average ROI Boost' },
    { number: '24/7', label: 'Expert Support' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Search Engine Mastery',
      description: 'Dominate search results with advanced SEO strategies that drive qualified organic traffic and visibility.',
      features: ['Technical SEO Audits', 'Content Optimization', 'Link Building', 'Local Search'],
    },
    {
      icon: MousePointer,
      title: 'Paid Media Excellence',
      description: 'Maximize advertising ROI with precision-targeted campaigns across Google, Meta, and emerging platforms.',
      features: ['Campaign Strategy', 'Creative Development', 'Bid Optimization', 'Performance Analytics'],
    },
    {
      icon: Share2,
      title: 'Social Media Strategy',
      description: 'Build authentic brand communities and drive engagement across all major social media platforms.',
      features: ['Content Creation', 'Community Management', 'Influencer Partnerships', 'Social Commerce'],
    },
    {
      icon: Mail,
      title: 'Email Marketing Systems',
      description: 'Nurture leads and retain customers through sophisticated email automation and personalization.',
      features: ['List Building', 'Automation Workflows', 'A/B Testing', 'Revenue Attribution'],
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Create high-converting websites and applications that deliver exceptional user experiences.',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Intelligence',
      description: 'Transform data into actionable insights with advanced analytics and comprehensive reporting dashboards.',
      features: ['Data Visualization', 'Custom Dashboards', 'ROI Tracking', 'Predictive Analytics'],
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Innovations',
      text: 'VeloxStudio transformed our digital strategy completely. We saw incredible growth and market expansion within months of partnering with them.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Marcus Rodriguez',
      company: 'Elevate Commerce',
      text: 'Their strategic approach and creative execution delivered results beyond our expectations. Truly a game-changing partnership for our business.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Jennifer Kim',
      company: 'Nexus Ventures',
      text: 'Outstanding expertise, flawless execution, and remarkable results. They revolutionized our entire approach to digital marketing.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Revenue Surge',
      client: 'Fashion Retailer',
      result: '380% Sales Growth',
      description: 'Comprehensive digital strategy combining SEO, PPC, and social media for explosive growth.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['380% Revenue Increase', '250% Traffic Growth', '165% Conversion Rate'],
    },
    {
      title: 'B2B Lead Generation',
      client: 'SaaS Platform',
      result: '520% Lead Increase',
      description: 'Strategic content marketing and automation campaign generating high-quality business leads.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['520% Lead Growth', '180% Conversion Rate', '60% Cost Reduction'],
    },
    {
      title: 'Local Market Domination',
      client: 'Healthcare Network',
      result: '290% Local Visibility',
      description: 'Local SEO and reputation management strategy achieving market leadership across multiple locations.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['290% Local Reach', '145% Patient Inquiries', '200% Online Reviews'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business, market landscape, and competitive environment to identify strategic opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create comprehensive digital marketing strategy aligned with your goals and budget parameters.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the strategy with precision, utilizing cutting-edge tools and proven methodologies.',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously monitor, analyze, and optimize campaigns for maximum performance and ROI.',
    },
  ];

  const industries = [
    { name: 'E-commerce', icon: '🛍️' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Technology', icon: '💻' },
    { name: 'Real Estate', icon: '🏠' },
    { name: 'Finance', icon: '💰' },
    { name: 'Education', icon: '🎓' },
    { name: 'Hospitality', icon: '🏨' },
    { name: 'Manufacturing', icon: '🏭' },
  ];

  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-sapphire-900/20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-sapphire-400/15 to-violet-600/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-rosegold-400/15 to-sapphire-500/15 rounded-full blur-3xl animate-float delay-700"></div>
          <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-violet-300/10 to-rosegold-400/10 rounded-full blur-2xl animate-float delay-1500"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 1px),
              radial-gradient(circle at 25px 25px, rgb(139 92 246) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 30px 30px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center bg-charcoal-800/60 backdrop-blur-md border border-rosegold-400/40 text-rosegold-300 px-8 py-4 rounded-3xl text-sm font-medium mb-8 shadow-velox">
                <div className="w-2 h-2 bg-rosegold-400 rounded-full mr-3 animate-pulse"></div>
                Elite Digital Marketing Agency
                <Zap className="w-4 h-4 ml-3 text-rosegold-400" />
              </div>

              {/* Main Headlines */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-tight">
                  <span className="block">ACCELERATE</span>
                  <span className="block">YOUR</span>
                  <span className="block bg-gradient-to-r from-sapphire-400 via-violet-500 to-rosegold-500 bg-clip-text text-transparent">
                    DIGITAL GROWTH
                  </span>
                </h1>
                <div className="w-32 h-2 bg-gradient-to-r from-sapphire-400 to-violet-500 mb-6 rounded-full"></div>
                <p className="text-xl md:text-2xl text-pearl-300 leading-relaxed max-w-2xl font-light">
                  Transform your digital presence with innovative marketing strategies that drive 
                  measurable results. Experience the future of digital excellence.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-sapphire-600 to-violet-600 text-white px-10 py-5 rounded-3xl font-semibold text-lg hover:shadow-velox transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center overflow-hidden border border-rosegold-400/30"
                >
                  <span className="relative z-10 flex items-center">
                    <Rocket className="mr-3 h-5 w-5" />
                    Start Your Project
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="group border-2 border-rosegold-400/60 text-rosegold-400 px-10 py-5 rounded-3xl font-semibold text-lg hover:bg-rosegold-400/10 hover:border-rosegold-400 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
                >
                  <Diamond className="mr-3 h-5 w-5" />
                  Explore Services
                </Link>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-sapphire-400 to-violet-500 bg-clip-text text-transparent mb-1">850+</div>
                  <div className="text-sm text-pearl-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-sapphire-400 to-violet-500 bg-clip-text text-transparent mb-1">98%</div>
                  <div className="text-sm text-pearl-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-sapphire-400 to-violet-500 bg-clip-text text-transparent mb-1">24/7</div>
                  <div className="text-sm text-pearl-400">Support</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="order-1 lg:order-2 relative">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Central Dashboard Mockup */}
                <div className="bg-gradient-to-br from-charcoal-800/80 to-sapphire-900/80 backdrop-blur-xl border border-rosegold-400/30 rounded-[2rem] p-8 shadow-velox">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-rosegold-400 text-sm font-medium">VeloxStudio Analytics</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-charcoal-700/50 rounded-2xl border border-rosegold-400/10">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-rosegold-400" />
                        <span className="text-white font-medium">Revenue Growth</span>
                      </div>
                      <span className="text-rosegold-400 font-bold">+420%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-charcoal-700/50 rounded-2xl border border-sapphire-400/10">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-sapphire-400" />
                        <span className="text-white font-medium">Lead Generation</span>
                      </div>
                      <span className="text-sapphire-400 font-bold">+680%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-charcoal-700/50 rounded-2xl border border-violet-400/10">
                      <div className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-violet-400" />
                        <span className="text-white font-medium">Conversion Rate</span>
                      </div>
                      <span className="text-violet-400 font-bold">+185%</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-sapphire-500 to-violet-600 p-4 rounded-3xl shadow-velox animate-float">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-rosegold-500 to-sapphire-600 p-3 rounded-2xl shadow-rosegold animate-float delay-1000">
                  <Target className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute top-20 -left-20 hidden lg:block">
                <div className="bg-charcoal-800/60 backdrop-blur-md border border-rosegold-400/30 rounded-3xl p-4 shadow-velox transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Search className="w-8 h-8 text-rosegold-400 mb-2" />
                  <div className="text-white font-semibold text-sm">SEO Mastery</div>
                </div>
              </div>
              
              <div className="absolute bottom-32 -right-16 hidden lg:block">
                <div className="bg-charcoal-800/60 backdrop-blur-md border border-sapphire-400/30 rounded-3xl p-4 shadow-velox transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Share2 className="w-8 h-8 text-sapphire-400 mb-2" />
                  <div className="text-white font-semibold text-sm">Social Strategy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-charcoal-800 to-sapphire-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Performance Metrics</h2>
            <p className="text-xl text-pearl-300">Measurable results that demonstrate our impact</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-charcoal-800/50 to-sapphire-900/50 p-8 rounded-[2rem] shadow-depth hover:shadow-velox transition-all duration-300 border border-rosegold-400/20 hover:border-rosegold-400/40 group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sapphire-400 to-violet-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">{stat.number}</div>
                <div className="text-pearl-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Digital Marketing Excellence
            </h2>
            <p className="text-xl text-pearl-300 max-w-3xl mx-auto">
              Comprehensive digital marketing services designed to accelerate growth and maximize your competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-charcoal-800/50 to-sapphire-900/50 p-8 rounded-[2rem] shadow-depth hover:shadow-velox transition-all duration-300 group border border-rosegold-400/20 hover:border-rosegold-400/40">
                <div className="bg-gradient-to-r from-sapphire-600 to-violet-600 w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-pearl-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-pearl-300">
                      <CheckCircle className="h-4 w-4 text-rosegold-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="text-rosegold-400 font-semibold hover:text-sapphire-400 inline-flex items-center transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-800 to-sapphire-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-pearl-300">Real results from our strategic partnerships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-charcoal-800/50 to-sapphire-900/50 rounded-[2rem] overflow-hidden hover:shadow-velox transition-all duration-300 group border border-rosegold-400/20 hover:border-rosegold-400/40">
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <div className="text-sm text-rosegold-400 font-semibold mb-2">{study.client}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-pearl-300 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-rosegold-400 mr-2" />
                        <span className="text-pearl-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-2xl font-bold bg-gradient-to-r from-sapphire-400 to-violet-500 bg-clip-text text-transparent">{study.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-pearl-300">A proven methodology for digital success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-sapphire-600 to-violet-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-velox">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-pearl-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal-800 to-sapphire-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-pearl-300">Specialized expertise across diverse business sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-charcoal-800/50 to-sapphire-900/50 rounded-[2rem] hover:bg-rosegold-400/10 transition-all duration-300 shadow-depth hover:shadow-velox hover:-translate-y-1 border border-rosegold-400/20 hover:border-rosegold-400/40">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="text-sm font-medium text-pearl-300">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Why Choose VeloxStudio?
            </h2>
            <p className="text-xl text-pearl-300 max-w-3xl mx-auto">
              We combine strategic innovation with data-driven execution to deliver marketing solutions that drive growth and maximize ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-charcoal-800/50 to-sapphire-900/50 p-8 rounded-[2rem] shadow-depth hover:shadow-velox transition-all duration-300 group border border-rosegold-400/20 hover:border-rosegold-400/40">
                <div className="bg-gradient-to-r from-sapphire-600 to-violet-600 w-16 h-16 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-pearl-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-sapphire-900/30 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-sapphire-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-violet-500/20 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-pearl-300">Hear from our satisfied partners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-charcoal-800/50 to-sapphire-900/50 backdrop-blur-lg p-8 rounded-[2rem] border border-rosegold-400/20 hover:border-rosegold-400/40 transition-all duration-300 shadow-depth hover:shadow-velox">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-rosegold-400/30"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-pearl-300">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-rosegold-400 fill-current" />
                  ))}
                </div>
                <p className="text-pearl-300 italic text-lg">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Subscription Section */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-charcoal-800/50 to-sapphire-900/50 p-8 md:p-12 rounded-[2rem] shadow-velox border border-rosegold-400/20">
            <div className="bg-gradient-to-r from-sapphire-600 to-violet-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Stay Ahead of Digital Trends
            </h2>
            <p className="text-xl text-pearl-300 mb-8 max-w-2xl mx-auto">
              Get exclusive insights, industry trends, and proven strategies delivered to your inbox. 
              Join thousands of digital leaders who trust VeloxStudio for cutting-edge marketing intelligence.
            </p>
            
            {subscriptionStatus === 'success' ? (
              <div className="bg-rosegold-400/10 border border-rosegold-400/20 rounded-3xl p-6 mb-6">
                <CheckCircle className="w-8 h-8 text-rosegold-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-rosegold-400 mb-2">Welcome to VeloxStudio!</h3>
                <p className="text-pearl-300">
                  You've successfully joined our community of digital innovators. Expect valuable insights 
                  and strategies that will accelerate your digital growth. Your welcome package is on its way!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 border border-rosegold-400/30 bg-charcoal-800/50 text-white rounded-3xl focus:ring-2 focus:ring-rosegold-400 focus:border-transparent text-lg placeholder-pearl-400"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-sapphire-600 to-violet-600 text-white px-8 py-4 rounded-3xl font-bold hover:shadow-velox transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap"
                  >
                    Subscribe
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-pearl-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-rosegold-400 mr-2" />
                Weekly insights
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-rosegold-400 mr-2" />
                Industry trends
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-rosegold-400 mr-2" />
                No spam, ever
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sapphire-600 via-violet-600 to-sapphire-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your digital strategy and unlock exponential growth with our innovative marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-charcoal-900 text-rosegold-400 px-12 py-6 rounded-3xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center text-lg border border-rosegold-400/30"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-12 py-6 rounded-3xl font-bold hover:bg-white hover:text-sapphire-600 transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;