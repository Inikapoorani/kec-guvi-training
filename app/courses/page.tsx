import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Learn to build complete web applications using modern technologies including React, Node.js, and databases.",
      duration: "12 weeks",
      level: "Intermediate",
      icon: "💻"
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      description: "Master data analysis, machine learning, and visualization techniques using Python and popular libraries.",
      duration: "10 weeks",
      level: "Advanced",
      icon: "📊"
    },
    {
      id: 3,
      title: "Cybersecurity Fundamentals",
      description: "Understand cybersecurity principles, threat detection, and security best practices for modern systems.",
      duration: "8 weeks",
      level: "Beginner",
      icon: "🔒"
    },
    {
      id: 4,
      title: "Cloud Computing with AWS",
      description: "Learn cloud architecture, deployment, and management using Amazon Web Services platform.",
      duration: "6 weeks",
      level: "Intermediate",
      icon: "☁️"
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build native mobile applications for iOS and Android using React Native framework.",
      duration: "10 weeks",
      level: "Intermediate",
      icon: "📱"
    },
    {
      id: 6,
      title: "DevOps Engineering",
      description: "Master continuous integration, deployment, and infrastructure automation using modern DevOps tools.",
      duration: "8 weeks",
      level: "Advanced",
      icon: "⚙️"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Industrial Training Courses</h1>
            <p className="text-xl md:text-2xl">Choose the course that best fits your career goals</p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{course.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                      <span className={`text-sm px-2 py-1 rounded ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
