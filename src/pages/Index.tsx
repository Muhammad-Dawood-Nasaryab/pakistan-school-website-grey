
import React from 'react';
import { Phone, Mail, MapPin, Users, BookOpen, Award, Calendar, ChevronRight } from 'lucide-react';

const Index = () => {
  const academicPrograms = [
    {
      title: "Primary Education",
      description: "Foundation learning with focus on core subjects and character building",
      grades: "Grades 1-5",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop"
    },
    {
      title: "Secondary Education", 
      description: "Comprehensive curriculum preparing students for higher education",
      grades: "Grades 6-10",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop"
    },
    {
      title: "Higher Secondary",
      description: "Advanced studies in Science, Commerce, and Arts streams",
      grades: "Grades 11-12",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop"
    }
  ];

  const facilities = [
    {
      title: "Modern Classrooms",
      description: "State-of-the-art learning environments with digital boards",
      icon: <BookOpen className="w-8 h-8 text-red-600" />
    },
    {
      title: "Science Labs",
      description: "Well-equipped laboratories for Physics, Chemistry, and Biology",
      icon: <Award className="w-8 h-8 text-red-600" />
    },
    {
      title: "Sports Complex",
      description: "Indoor and outdoor sports facilities for physical development",
      icon: <Users className="w-8 h-8 text-red-600" />
    },
    {
      title: "Library",
      description: "Extensive collection of books and digital resources",
      icon: <BookOpen className="w-8 h-8 text-red-600" />
    }
  ];

  const newsEvents = [
    {
      title: "Annual Sports Day 2024",
      date: "March 15, 2024",
      description: "Join us for our exciting annual sports competition"
    },
    {
      title: "Science Fair Exhibition",
      date: "March 20, 2024", 
      description: "Students showcase their innovative science projects"
    },
    {
      title: "Parent-Teacher Conference",
      date: "March 25, 2024",
      description: "Discussion on student progress and academic planning"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/da5b9528-8c1f-4f2c-8690-e3ee869e46aa.png" 
                alt="Pakistan International School Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-red-600">PAKISTAN</h1>
                <p className="text-sm text-gray-600 font-medium">INTERNATIONAL SCHOOL</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
              <a href="#academics" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Academics</a>
              <a href="#facilities" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Facilities</a>
              <a href="#gallery" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-100 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-800 leading-tight">
                Excellence in <span className="text-red-600">Education</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nurturing young minds with quality education, character building, and holistic development 
                in a supportive learning environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Admissions Open
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-red-600 hover:text-red-600 transition-colors">
                  Virtual Tour
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/37fe7e37-5e5a-46d7-b31d-55a48e92b170.png" 
                alt="Pakistan International School Building" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our School</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pakistan International School has been a beacon of educational excellence for over two decades, 
              committed to developing well-rounded individuals who contribute positively to society.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2000+</h3>
              <p className="text-gray-600">Happy Students</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">150+</h3>
              <p className="text-gray-600">Qualified Teachers</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">25+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section id="academics" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive curriculum is designed to challenge and inspire students at every level
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {academicPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                      {program.grades}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <button className="text-red-600 font-semibold hover:text-red-700 transition-colors flex items-center">
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our campus is equipped with modern facilities to support comprehensive learning and development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Campus Gallery</h2>
            <p className="text-xl text-gray-600">Take a virtual tour of our beautiful campus</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/0b829a46-06a6-4a69-adb9-35e5655ca4b0.png" 
                alt="School Building Exterior"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Main Building</h3>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/8e1561d5-fa2d-436b-a64d-74b7c4b6ed5f.png" 
                alt="School Entrance"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">School Entrance</h3>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/9be0ea3e-946e-47f5-8c22-16d6c0787b98.png" 
                alt="Campus View"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Campus View</h3>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Students in Classroom"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Modern Classrooms</h3>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                alt="Students Studying Together"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Collaborative Learning</h3>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Science Laboratory"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Science Labs</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">News & Events</h2>
            <p className="text-xl text-gray-600">Stay updated with latest happenings at our school</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {newsEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-center mb-3">
                  <Calendar className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-red-600 font-medium">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch with us for admissions and inquiries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">
                    123 Education Street<br />
                    Knowledge City, Pakistan<br />
                    ZIP Code: 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    +92 300 1234567<br />
                    +92 42 1234567
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">
                    info@pakistaninternationalschool.edu.pk<br />
                    admissions@pakistaninternationalschool.edu.pk
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/da5b9528-8c1f-4f2c-8690-e3ee869e46aa.png" 
                  alt="Pakistan International School" 
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="font-bold text-red-400">PAKISTAN</h3>
                  <p className="text-sm text-gray-300">INTERNATIONAL SCHOOL</p>
                </div>
              </div>
              <p className="text-gray-300">
                Nurturing excellence in education and character development for over 25 years.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#academics" className="hover:text-white transition-colors">Academics</a></li>
                <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Primary Education</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Secondary Education</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Higher Secondary</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Extracurricular</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +92 300 1234567</p>
                <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@pakschool.edu.pk</p>
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Knowledge City, Pakistan</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pakistan International School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
