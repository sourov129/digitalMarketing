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
      description: 'Sophisticated targeting methodologies that illuminate pathways to your most valuable audiences through intelligent market analysis.',
    },
    {
      icon: TrendingUp,
      title: 'Exponential Growth',
      description: 'Systematic optimization frameworks that amplify performance metrics and catalyze sustainable business expansion.',
    },
    {
      icon: Users,
      title: 'Elite Expertise',
      description: 'Distinguished digital strategists and creative visionaries with exceptional track records across premium market segments.',
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Award-winning campaigns that consistently deliver extraordinary outcomes and surpass ambitious performance benchmarks.',
    },
  ];

  const stats = [
    { number: '1,200+', label: 'Premium Projects' },
    { number: '99%', label: 'Client Excellence' },
    { number: '580%', label: 'Average ROI Growth' },
    { number: '24/7', label: 'Dedicated Support' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Search Dominance Strategy',
      description: 'Command search landscapes with sophisticated SEO methodologies that capture premium organic visibility and authority.',
      features: ['Advanced Technical Audits', 'Content Excellence', 'Authority Building', 'Local Market Leadership'],
    },
    {
      icon: MousePointer,
      title: 'Premium Advertising Excellence',
      description: 'Maximize investment returns with precision-targeted campaigns across elite conversion platforms and emerging channels.',
      features: ['Strategic Campaign Architecture', 'Multi-Platform Mastery', 'Creative Innovation', 'Performance Optimization'],
    },
    {
      icon: Share2,
      title: 'Social Media Leadership',
      description: 'Establish commanding brand presence and cultivate engaged communities across all premium social platforms.',
      features: ['Platform Strategy Excellence', 'Engaging Content Creation', 'Community Leadership', 'Influencer Partnerships'],
    },
    {
      icon: Mail,
      title: 'Email Marketing Mastery',
      description: 'Nurture relationships and drive revenue through sophisticated automation and personalization technologies.',
      features: ['Advanced Segmentation', 'Automation Excellence', 'A/B Testing Mastery', 'Revenue Attribution'],
    },
    {
      icon: Globe,
      title: 'Digital Experience Design',
      description: 'Create exceptional websites and applications that deliver outstanding user experiences and conversion optimization.',
      features: ['Responsive Excellence', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
    },
    {
      icon: BarChart3,
      title: 'Analytics Intelligence',
      description: 'Transform complex data into strategic insights with advanced analytics and comprehensive intelligence dashboards.',
      features: ['Data Visualization', 'Custom Intelligence', 'ROI Tracking', 'Predictive Analytics'],
    },
  ];

  const testimonials = [
    {
      name: 'Alexandra Chen',
      company: 'Meridian Innovations',
      text: 'AuroraLux Digital revolutionized our entire market approach. Their sophisticated strategies delivered extraordinary growth and market leadership within months.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Marcus Wellington',
      company: 'Pinnacle Enterprises',
      text: 'Their strategic excellence and creative innovation exceeded every expectation. Truly a transformative partnership that redefined our business trajectory.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    {
      name: 'Victoria Sterling',
      company: 'Apex Ventures',
      text: 'Exceptional expertise, flawless execution, and remarkable results. They completely transformed our approach to digital excellence and market leadership.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
  ];

  const caseStudies = [
    {
      title: 'Luxury E-commerce Transformation',
      client: 'Premium Fashion House',
      result: '650% Revenue Surge',
      description: 'Comprehensive digital strategy combining advanced SEO, premium advertising, and social excellence for extraordinary growth.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['650% Revenue Growth', '420% Traffic Expansion', '285% Conversion Excellence'],
    },
    {
      title: 'Enterprise Lead Generation',
      client: 'Technology Platform',
      result: '780% Lead Acceleration',
      description: 'Strategic content marketing and automation excellence generating premium business opportunities and market leadership.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['780% Lead Growth', '320% Conversion Rate', '75% Cost Optimization'],
    },
    {
      title: 'Market Leadership Campaign',
      client: 'Healthcare Network',
      result: '450% Market Expansion',
      description: 'Local SEO and reputation excellence strategy achieving market dominance across multiple premium locations.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      metrics: ['450% Market Reach', '265% Client Inquiries', '380% Online Authority'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Intelligence',
      description: 'We analyze your business landscape, competitive environment, and market opportunities to identify strategic advantages.',
    },
    {
      step: '02',
      title: 'Strategy Architecture',
      description: 'Create comprehensive digital marketing strategies aligned with your vision and premium business objectives.',
    },
    {
      step: '03',
      title: 'Excellence Execution',
      description: 'Implement strategies with precision, utilizing cutting-edge technologies and proven premium methodologies.',
    },
    {
      step: '04',
      title: 'Continuous Optimization',
      description: 'Monitor, analyze, and optimize campaigns for maximum performance and exceptional return on investment.',
    },
  ];

  const industries = [
    { name: 'Luxury Retail', icon: '💎' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Technology', icon: '💻' },
    { name: 'Real Estate', icon: '🏠' },
    { name: 'Finance', icon: '💰' },
    { name: 'Education', icon: '🎓' },
    { name: 'Hospitality', icon: '🏨' },
    { name: 'Manufacturing', icon: '🏭' },
  ];

  return (
    <div className="min-h-screen bg-obsidian-900">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-obsidian-900 via-obsidian-800 to-midnight-900/20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-midnight-400/15 to-ethereal-600/15 rounded-full blur-3xl animate-drift"></div>
          <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-aurora-400/15 to-midnight-500/15 rounded-full blur-3xl animate-drift delay-700"></div>
          <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-gradient-to-r from-ethereal-300/10 to-aurora-400/10 rounded-full blur-2xl animate-drift delay-1500"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgb(79 143 247) 1px, transparent 1px),
              radial-gradient(circle at 25px 25px, rgb(212 175 55) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 30px 30px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center bg-obsidian-800/60 backdrop-blur-md border border-aurora-400/40 text-aurora-300 px-8 py-4 rounded-full text-sm font-medium mb-8 shadow-aurora">
                <div className="w-2 h-2 bg-aurora-400 rounded-full mr-3 animate-pulse"></div>
                Premium Digital Marketing Excellence
                <Zap className="w-4 h-4 ml-3 text-aurora-400" />
              </div>

              {/* Main Headlines */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">
                  <span className="block">ILLUMINATE</span>
                  <span className="block">YOUR</span>
                  <span className="block bg-gradient-to-r from-midnight-400 via-ethereal-500 to-aurora-500 bg-clip-text text-transparent">
                    DIGITAL EXCELLENCE
                  </span>
                </h1>
                <div className="w-32 h-2 bg-gradient-to-r from-midnight-400 to-ethereal-500 mb-6 rounded-full"></div>
                <p className="text-xl md:text-2xl text-platinum-300 leading-relaxed max-w-2xl font-light">
                  Transform your brand presence with sophisticated marketing strategies that deliver 
                  extraordinary results. Experience the pinnacle of digital innovation and strategic excellence.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-midnight-600 to-ethereal-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-aurora transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center overflow-hidden border border-aurora-400/30"
                >
                  <span className="relative z-10 flex items-center">
                    <Rocket className="mr-3 h-5 w-5" />
                    Begin Your Journey
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="group border-2 border-aurora-400/60 text-aurora-400 px-10 py-5 rounded-full font-semibold text-lg hover:bg-aurora-400/10 hover:border-aurora-400 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
                >
                  <Diamond className="mr-3 h-5 w-5" />
                  Explore Solutions
                </Link>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-midnight-400 to-ethereal-500 bg-clip-text text-transparent mb-1">1,200+</div>
                  <div className="text-sm text-platinum-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-midnight-400 to-ethereal-500 bg-clip-text text-transparent mb-1">99%</div>
                  <div className="text-sm text-platinum-400">Excellence Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-midnight-400 to-ethereal-500 bg-clip-text text-transparent mb-1">24/7</div>
                  <div className="text-sm text-platinum-400">Support</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="order-1 lg:order-2 relative">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Central Dashboard Mockup */}
                <div className="bg-gradient-to-br from-obsidian-800/80 to-midnight-900/80 backdrop-blur-xl border border-aurora-400/30 rounded-[3rem] p-8 shadow-aurora">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-aurora-400 text-sm font-medium">AuroraLux Analytics</div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-obsidian-700/50 rounded-3xl border border-aurora-400/10">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-aurora-400" />
                        <span className="text-white font-medium">Revenue Excellence</span>
                      </div>
                      <span className="text-aurora-400 font-bold">+580%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-obsidian-700/50 rounded-3xl border border-ethereal-400/10">
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-ethereal-400" />
                        <span className="text-white font-medium">Lead Generation</span>
                      </div>
                      <span className="text-ethereal-400 font-bold">+780%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-obsidian-700/50 rounded-3xl border border-midnight-400/10">
                      <div className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-midnight-400" />
                        <span className="text-white font-medium">Conversion Excellence</span>
                      </div>
                      <span className="text-midnight-400 font-bold">+285%</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-midnight-500 to-ethereal-600 p-4 rounded-full shadow-aurora animate-drift">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-aurora-500 to-midnight-600 p-3 rounded-3xl shadow-luxury animate-drift delay-1000">
                  <Target className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute top-20 -left-20 hidden lg:block">
                <div className="bg-obsidian-800/60 backdrop-blur-md border border-aurora-400/30 rounded-full p-4 shadow-aurora transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Search className="w-8 h-8 text-aurora-400 mb-2" />
                  <div className="text-white font-semibold text-sm">SEO Excellence</div>
                </div>
              </div>
              
              <div className="absolute bottom-32 -right-16 hidden lg:block">
                <div className="bg-obsidian-800/60 backdrop-blur-md border border-ethereal-400/30 rounded-full p-4 shadow-ethereal transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Share2 className="w-8 h-8 text-ethereal-400 mb-2" />
                  <div className="text-white font-semibold text-sm">Social Leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-obsidian-800 to-midnight-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Performance Excellence</h2>
            <p className="text-xl text-platinum-300">Measurable results that demonstrate our exceptional impact</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-obsidian-800/50 to-midnight-900/50 p-8 rounded-[3rem] shadow-premium hover:shadow-aurora transition-all duration-300 border border-aurora-400/20 hover:border-aurora-400/40 group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-midnight-400 to-ethereal-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">{stat.number}</div>
                <div className="text-platinum-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-obsidian-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Premium Marketing Solutions
            </h2>
            <p className="text-xl text-platinum-300 max-w-3xl mx-auto">
              Comprehensive digital marketing excellence designed to accelerate growth and maximize your competitive advantage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-obsidian-800/50 to-midnight-900/50 p-8 rounded-[3rem] shadow-premium hover:shadow-aurora transition-all duration-300 group border border-aurora-400/20 hover:border-aurora-400/40">
                <div className="bg-gradient-to-r from-midnight-600 to-ethereal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-platinum-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-platinum-300">
                      <CheckCircle className="h-4 w-4 text-aurora-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="text-aurora-400 font-semibold hover:text-ethereal-400 inline-flex items-center transition-colors"
                >
                  Discover More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-obsidian-800 to-midnight-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Excellence Stories</h2>
            <p className="text-xl text-platinum-300">Extraordinary results from our strategic partnerships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-obsidian-800/50 to-midnight-900/50 rounded-[3rem] overflow-hidden hover:shadow-aurora transition-all duration-300 group border border-aurora-400/20 hover:border-aurora-400/40">
                <img src={study.image} alt={study.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <div className="text-sm text-aurora-400 font-semibold mb-2">{study.client}</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-platinum-300 mb-4">{study.description}</p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-aurora-400 mr-2" />
                        <span className="text-platinum-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-2xl font-bold bg-gradient-to-r from-midnight-400 to-ethereal-500 bg-clip-text text-transparent">{study.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-obsidian-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Our Excellence Process</h2>
            <p className="text-xl text-platinum-300">A proven methodology for digital transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-midnight-600 to-ethereal-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-aurora">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-platinum-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-obsidian-800 to-midnight-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Premium Industries</h2>
            <p className="text-xl text-platinum-300">Specialized expertise across distinguished business sectors</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-obsidian-800/50 to-midnight-900/50 rounded-[3rem] hover:bg-aurora-400/10 transition-all duration-300 shadow-premium hover:shadow-aurora hover:-translate-y-1 border border-aurora-400/20 hover:border-aurora-400/40">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="text-sm font-medium text-platinum-300">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-obsidian-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Why Choose AuroraLux Digital?
            </h2>
            <p className="text-xl text-platinum-300 max-w-3xl mx-auto">
              We combine strategic innovation with data-driven execution to deliver marketing solutions that drive growth and maximize exceptional ROI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-obsidian-800/50 to-midnight-900/50 p-8 rounded-[3rem] shadow-premium hover:shadow-aurora transition-all duration-300 group border border-aurora-400/20 hover:border-aurora-400/40">
                <div className="bg-gradient-to-r from-midnight-600 to-ethereal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-platinum-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-obsidian-800 via-obsidian-900 to-midnight-900/30 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-midnight-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-ethereal-500/20 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Client Excellence Stories</h2>
            <p className="text-xl text-platinum-300">Hear from our distinguished partners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-obsidian-800/50 to-midnight-900/50 backdrop-blur-lg p-8 rounded-[3rem] border border-aurora-400/20 hover:border-aurora-400/40 transition-all duration-300 shadow-premium hover:shadow-aurora">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-aurora-400/30"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-platinum-300">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-aurora-400 fill-current" />
                  ))}
                </div>
                <p className="text-platinum-300 italic text-lg">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Subscription Section */}
      <section className="py-20 bg-obsidian-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-obsidian-800/50 to-midnight-900/50 p-8 md:p-12 rounded-[3rem] shadow-aurora border border-aurora-400/20">
            <div className="bg-gradient-to-r from-midnight-600 to-ethereal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Stay Ahead of Digital Excellence
            </h2>
            <p className="text-xl text-platinum-300 mb-8 max-w-2xl mx-auto">
              Get exclusive insights, industry intelligence, and proven strategies delivered to your inbox. 
              Join thousands of digital leaders who trust AuroraLux Digital for cutting-edge marketing excellence.
            </p>
            
            {subscriptionStatus === 'success' ? (
              <div className="bg-aurora-400/10 border border-aurora-400/20 rounded-full p-6 mb-6">
                <CheckCircle className="w-8 h-8 text-aurora-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-aurora-400 mb-2">Welcome to AuroraLux Digital!</h3>
                <p className="text-platinum-300">
                  You've successfully joined our community of digital innovators. Expect valuable insights 
                  and strategies that will illuminate your digital excellence. Your welcome package is on its way!
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
                    className="flex-1 px-6 py-4 border border-aurora-400/30 bg-obsidian-800/50 text-white rounded-full focus:ring-2 focus:ring-aurora-400 focus:border-transparent text-lg placeholder-platinum-400"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-midnight-600 to-ethereal-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-aurora transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap"
                  >
                    Subscribe
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            )}
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-platinum-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-aurora-400 mr-2" />
                Weekly insights
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-aurora-400 mr-2" />
                Industry intelligence
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-aurora-400 mr-2" />
                Premium content
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-midnight-600 via-ethereal-600 to-midnight-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Illuminate Your Excellence?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your digital strategy and unlock exponential growth with our sophisticated marketing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-obsidian-900 text-aurora-400 px-12 py-6 rounded-full font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center justify-center text-lg border border-aurora-400/30"
            >
              Begin Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-12 py-6 rounded-full font-bold hover:bg-white hover:text-midnight-600 transition-all duration-300 inline-flex items-center justify-center text-lg"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;