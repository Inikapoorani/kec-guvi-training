import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Industrial Training Program</h1>
            <p className="text-xl md:text-2xl mb-8">Enhance your skills with KEC & GUVI Collaboration</p>
            <div className="space-x-4">
              <a href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">Get Started</a>
              <a href="/courses" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">Explore Courses</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Program?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2">Expert Training</h3>
                <p className="text-gray-600">Learn from industry experts and experienced trainers</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
                <p className="text-gray-600">Practical projects and real-world applications</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Certification</h3>
                <p className="text-gray-600">Industry-recognized certifications upon completion</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold mb-2">Flexible Mode</h3>
                <p className="text-gray-600">Online and offline training options available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Students Trained</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                <p className="text-gray-600">Courses Available</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <p className="text-gray-600">Expert Trainers</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8">Join thousands of students in our industrial training program</p>
            <a href="/signup" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">Register Now</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
