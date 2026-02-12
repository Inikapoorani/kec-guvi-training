import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              KEC-GUVI
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-gray-900">
              Courses
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-gray-900">
              FAQ
            </Link>
            <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Login
            </Link>
            <Link href="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
