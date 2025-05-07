
const Contactus = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl w-full bg-orange-100 shadow-xl rounded-lg p-8 md:flex md:space-x-8">
      {/* Left Column: Contact Information */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h4v4H3zm14 0h4v4h-4z" />
            </svg>
            <span className="text-lg text-gray-700">📍 Fresh eats, Mumbai, India</span>
          </div>
          <div className="flex items-center">
            <svg className="h-6 w-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h4v4H3zm14 0h4v4h-4z" />
            </svg>
            <span className="text-lg text-gray-700">📞 +91 123 456 7890</span>
          </div>
          <div className="flex items-center">
            <svg className="h-6 w-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h4v4H3zm14 0h4v4h-4z" />
            </svg>
            <span className="text-lg text-gray-700">✉️ support@foodapp.com</span>
          </div>
        </div>
      </div>

      {/* Right Column: Map or Additional Information */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Find Us Here</h3>
        {/* Replace with an actual map or image */}
        <div className="bg-gray-300 h-64 rounded-lg mb-6">
          {/* Placeholder for map */}
        </div>
        <p className="text-lg text-gray-700">
          We're located in the heart of Mumbai, ready to serve you delicious meals.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Contactus