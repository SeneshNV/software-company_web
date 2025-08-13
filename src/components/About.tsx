import React from 'react';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About: React.FC = () => {
  const values = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Quality First',
      description: 'We never compromise on quality, ensuring every line of code meets the highest standards.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their success journey.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, exceeding expectations consistently.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">TechFlow</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2018, TechFlow has been at the forefront of software innovation, 
                helping businesses transform their operations through cutting-edge technology solutions. 
                Our team of expert developers, designers, and strategists work together to create 
                software that not only meets today's needs but anticipates tomorrow's challenges.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in the power of technology to solve complex problems and create 
                opportunities. Our mission is to empower businesses with software solutions 
                that drive growth, efficiency, and innovation.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office environment"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t">
          <Card className="text-center p-6">
            <div className="text-4xl font-bold text-foreground mb-2">7+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-4xl font-bold text-foreground mb-2">500+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-4xl font-bold text-foreground mb-2">150+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-4xl font-bold text-foreground mb-2">25+</div>
            <div className="text-muted-foreground">Team Members</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern office environment"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">7+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;