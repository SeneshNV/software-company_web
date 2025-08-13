import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 15+ years in software development and business strategy.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@techflow.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Technology expert specializing in scalable architecture and cloud solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@techflow.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative designer focused on user experience and interface design excellence.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@techflow.com'
      }
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer with expertise in modern web technologies and frameworks.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@techflow.com'
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our talented team of professionals is dedicated to delivering exceptional 
            software solutions that drive your business forward.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Social overlay */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion 
            for innovation and excellence in software development.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;