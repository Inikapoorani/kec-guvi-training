export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Program</h3>
            <p>KEC-GUVI collaboration for industrial training excellence</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/courses" className="hover:text-gray-300">Courses</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
              <li><a href="/faq" className="hover:text-gray-300">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: info@kec-guvi.com</p>
            <p>Phone: +91-XXXXX-XXXXX</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 KEC-GUVI Industrial Training Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
