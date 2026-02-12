import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Our Program</h1>
            <p className="text-xl md:text-2xl">Learn about the KEC-GUVI collaboration</p>
          </div>
        </section>

        {/* KEC Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Kongu Engineering College (KEC)</h2>
                <p className="text-gray-600 mb-4">
                  Kongu Engineering College, established in 1990, is one of India's leading autonomous engineering institutions
                  located in Perundurai, Erode. With a commitment to academic excellence and holistic development, KEC has been
                  producing skilled engineers for over three decades.
                </p>
                <p className="text-gray-600 mb-6">
                  The institution boasts state-of-the-art facilities, experienced faculty, and a strong focus on practical learning
                  through various programs and initiatives. KEC's emphasis on industry collaboration has made it a preferred choice
                  for employers worldwide.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>2500+ Students</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>50+ Faculty Members</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>7 Engineering Disciplines</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>NAAC Accredited</li>
                </ul>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">KEC Campus</span>
              </div>
            </div>
          </div>
        </section>

        {/* GUVI Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">GUVI Geek Network</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">GUVI - Geek Network</h2>
                <p className="text-gray-600 mb-4">
                  GUVI (Geek Network) is a learning platform dedicated to skill development in emerging technologies. As an IIT Madras
                  incubated company, GUVI has trained hundreds of professionals and students in cutting-edge technologies and industry-relevant skills.
                </p>
                <p className="text-gray-600 mb-6">
                  With a focus on hands-on training, GUVI provides comprehensive courses in web development, data science, cloud computing,
                  and other in-demand technical skills. The platform's unique approach combines theoretical knowledge with practical application.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>IIT Madras Incubated</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Industry Expert Trainers</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>100,000+ Students Trained</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Hands-on Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Collaboration</h2>
                <p className="text-gray-600 mb-4">
                  The collaboration between KEC and GUVI represents a shared vision to bridge the gap between academic learning and
                  industry requirements. This partnership brings together KEC's strong academic foundation with GUVI's industry-focused
                  training expertise.
                </p>
                <p className="text-gray-600 mb-6">
                  Through this industrial training program, KEC students gain access to world-class training in cutting-edge technologies
                  from GUVI's expert trainers. The program is designed to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Develop practical technical skills</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Bridge the skills gap in the IT industry</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Provide industry-recognized certifications</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Enhance employability of students</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Foster innovation and creativity</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Build professional networks</li>
                </ul>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg">Partnership</span>
              </div>
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                <p className="text-gray-600">Develop in-demand skills that boost your career prospects in the tech industry</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold mb-2">Expert Training</h3>
                <p className="text-gray-600">Learn from industry professionals with years of practical experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🏅</div>
                <h3 className="text-xl font-semibold mb-2">Certification</h3>
                <p className="text-gray-600">Earn recognized certificates that validate your technical expertise</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Networking</h3>
                <p className="text-gray-600">Connect with peers, trainers, and industry professionals</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-2">Internship Opportunities</h3>
                <p className="text-gray-600">Get access to internship and job placement opportunities</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold mb-2">Industry Exposure</h3>
                <p className="text-gray-600">Understand real-world industry practices and standards</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Program Timeline</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-4">Week 1-2</div>
                  <h4 className="text-lg font-semibold mb-2">Foundations</h4>
                  <p className="text-gray-600">Introduction to core concepts and tools</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-4">Week 3-6</div>
                  <h4 className="text-lg font-semibold mb-2">Core Learning</h4>
                  <p className="text-gray-600">Intensive technical training with hands-on projects</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-4">Week 7-8</div>
                  <h4 className="text-lg font-semibold mb-2">Advanced Topics</h4>
                  <p className="text-gray-600">Advanced concepts and best practices</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-4">Week 9-10</div>
                  <h4 className="text-lg font-semibold mb-2">Project & Assessment</h4>
                  <p className="text-gray-600">Final project and certification exam</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
