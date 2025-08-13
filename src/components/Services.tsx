import React from 'react';
import { Code2, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from the ground up to meet your specific business requirements and objectives.',
      features: ['Full-stack development', 'API integration', 'Database design', 'Performance optimization']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Application Development',
      description: 'Modern, responsive web applications that provide exceptional user experiences across all devices and browsers.',
      features: ['React & Next.js', 'Progressive Web Apps', 'E-commerce platforms', 'Content management']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'Cross-platform solutions', 'App Store optimization', 'Push notifications']
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services that grow with your business needs and ensure reliability.',
      features: ['AWS & Azure', 'Serverless architecture', 'Auto-scaling', 'Cost optimization']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: ['Data visualization', 'Machine learning', 'Real-time analytics', 'Custom dashboards']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      features: ['Security audits', 'Penetration testing', 'Compliance consulting', '24/7 monitoring']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive software development services to help your business 
            thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to discuss your project?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;