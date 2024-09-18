// src/app/components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Address Section */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Located at</h3>
              <p className="text-sm">
                Scottsdale, AZ
              </p>
            </div>
  
            {/* About Us Section */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <ul>
                <li>
                  <a href="/contact" className="text-blue-400 hover:underline">Contact Us</a>
                </li>
                <li>
                  <a href="/accessibility" className="text-blue-400 hover:underline">Accessibility</a>
                </li>
                <li>
                  <a href="/privacy" className="text-blue-400 hover:underline">Privacy</a>
                </li>
                <li>
                  <a href="/security" className="text-blue-400 hover:underline">Security</a>
                </li>
              </ul>
            </div>
  
            {/* Customer Section */}
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Customer</h3>
              <ul>
                <li>
                  <a href="/higher-ed" className="text-blue-400 hover:underline">Higher Ed</a>
                </li>
                <li>
                  <a href="/professional-organizations" className="text-blue-400 hover:underline">Professional Organizations</a>
                </li>
                <li>
                  <a href="/general-customer" className="text-blue-400 hover:underline">General Customer</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Salary Negotiation Guide. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  