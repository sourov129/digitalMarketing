import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, TrendingUp, CheckCircle, ArrowRight, Mail, Phone, MapPin, User } from 'lucide-react';

const About = () => {
  const values = [
  {
    icon: Target,
    title: 'Outcome-Focused',
    description: 'We prioritize delivering quantifiable results that generate real business impact and value.',
  },
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description: 'We work closely with our clients, considering your achievements as our primary objective.',
  },
  {
    icon: Award,
    title: 'Quality Standards',
    description: 'We uphold exceptional quality benchmarks and consistently deliver outstanding work.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation Leadership',
    description: 'We utilize advanced technologies and strategies to maintain your competitive advantage.',
  },
];

  const achievements = [
    'Successfully delivered over 750 digital marketing initiatives',
    '97% client satisfaction and retention rate',
    'Average 350% return on marketing investment',
    'Recognized industry expertise and thought leadership',
    'Strategic alliances with top technology platforms',
    '24/7 dedicated client support services',
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
              <span className="text-white">About</span>
              <span className="bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent"> BitBoostMedia</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We're an innovative team of digital marketing professionals dedicated to transforming businesses through strategic approaches and quantifiable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Key Information Sections */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Who We Are */}
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 p-8 rounded-3xl border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Target className="h-6 w-6 text-cyan-400 mr-3" />
                Our Foundation
              </h3>
              <p className="text-lg text-gray-300">
                BitBoostMedia is a performance-driven digital agency specializing in innovative marketing solutions through analytical, strategic approaches.
              </p>
            </div>

            {/* Our Customers */}
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 p-8 rounded-3xl border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Users className="h-6 w-6 text-cyan-400 mr-3" />
                Our Partners
              </h3>
              <p className="text-lg text-gray-300">
                We collaborate with business owners, scaling companies, and established enterprises looking to strengthen their digital presence and achieve lasting online growth.
              </p>
            </div>

            {/* What We Offer */}
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 p-8 rounded-3xl border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Award className="h-6 w-6 text-cyan-400 mr-3" />
                Our Solutions
              </h3>
              <p className="text-lg text-gray-300">
                Our full-service offerings include tailored SEO strategies, social media management, targeted advertising, brand development, and content marketing designed for your specific goals.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 p-8 rounded-3xl border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 text-cyan-400 mr-3" />
                Our Vision
              </h3>
              <p className="text-lg text-gray-300">
                Our goal is to enable businesses with cutting-edge marketing strategies that produce measurable outcomes and long-term growth in today's dynamic digital environment.
              </p>
            </div>
          </div>

          {/* Why Choose Us - Full Width */}
          <div className="mt-12">
            <div className="bg-gradient-to-r from-cyan-400 to-teal-500 text-black p-8 rounded-3xl text-center">
              <h3 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 mr-3" />
                Why Select BitBoostMedia
              </h3>
              <p className="text-xl max-w-4xl mx-auto">
                We blend strategic insight, creative innovation, and data-driven precision to provide competitive advantages online. Our tested approaches and dedicated commitment ensure optimal value from your marketing budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 mb-6">
                BitBoostMedia was established with the mission to make premium digital marketing accessible to organizations of every scale. We identified that all businesses deserve access to professional marketing expertise.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our path started by recognizing the disconnect between advanced marketing technologies and businesses seeking practical, effective solutions. We've committed ourselves to closing this gap through innovative strategies and personalized service.
              </p>
              <p className="text-lg text-gray-300">
                We go beyond traditional service relationships—we're strategic growth allies who understand your vision and develop tailored solutions that ensure sustainable success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 p-8 rounded-3xl border border-cyan-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Purpose</h3>
              <p className="text-lg text-gray-300 mb-6">
                To enable businesses of all sizes with marketing solutions that are strategically effective, outcome-oriented, and built to grow with their success.
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">Our Aspiration</h3>
              <p className="text-lg text-gray-300">
                To establish ourselves as the most reliable digital marketing ally—known for authenticity, innovation, and results that drive significant business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Guiding Principles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles shape our methodology and determine how we interact with clients and achieve outstanding results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 p-6 rounded-2xl shadow-sm text-center border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="bg-gradient-to-r from-cyan-400 to-teal-500 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Executive Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Led by our visionary founder and supported by a skilled team of marketing experts who blend extensive experience with dedication to achieving business excellence.
            </p>
          </div>
          
          {/* Owner Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Leadership Team</h3>
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 border-2 border-cyan-400/30 rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-center lg:text-left">
                  <div className="bg-gradient-to-r from-cyan-400 to-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <User className="h-10 w-10 text-black" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">RODNEY M SEASE</h4>
                  <p className="text-cyan-400 font-semibold text-lg mb-4">Founder & CEO</p>
                  <p className="text-gray-300 mb-6">
                    With over 20 years of experience in digital marketing, Rodney leads our strategic direction and client relationships. 
                    An expert in growth strategies and business development, he founded BitBoostMedia with a vision to help 
                    businesses thrive in the digital landscape.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">Strategic Leadership</span>
                    <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">Client Success</span>
                    <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">Business Growth</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-white mb-4">Contact Information</h5>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-300">Email</p>
                      <a href="mailto:jamesemmacfl425@hotmail.com" className="text-cyan-400 hover:text-teal-400">
                        jamesemmacfl425@hotmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-300">Direct Phone</p>
                      <a href="tel:+18727724835" className="text-cyan-400 hover:text-teal-400">
                        +1 (872) 772-4835
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-cyan-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-300">Location</p>
                      <div className="text-gray-300">
                        <p>Arlington Drive 1818</p>
                        <p>Medford, OR 97501</p>
                        <p>Oregon, United States of America</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Office Picture */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Office</h3>
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 border border-cyan-400/20 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                alt="BitBoostMedia Office" 
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-white mb-2">BitBoostMedia Office</h4>
                <p className="text-gray-300">
                  Our contemporary headquarters in Gresham, Oregon, where innovation meets strategy 
                  and our expert team crafts transformative digital solutions for ambitious businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-600 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We celebrate our accomplishments, but we're more focused on the success we'll achieve together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center bg-black bg-opacity-10 p-4 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <span className="text-black">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Our Collaboration?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you reach your marketing goals and drive your business forward.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-400 to-teal-500 text-black px-10 py-5 rounded-2xl font-bold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center text-lg"
          >
            Start Your Success Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;