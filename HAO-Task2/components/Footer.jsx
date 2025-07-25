import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaTimes,
  } from "react-icons/fa"
  
  const Footer = () => {
    return (
      <footer
        className="text-white mt-12"
        style={{
          backgroundImage: "url('/assets/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/70 py-10 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            {/* Company */}
            <div>
              <h3 className="font-bold mb-3">COMPANY</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Press Release</li>
                <li>Employee Wellness</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Preferred Vendors</li>
                <li>Accessibility</li>
              </ul>
            </div>
  
            {/* Gyms */}
            <div>
              <h3 className="font-bold mb-3">GYMS</h3>
              <ul className="space-y-2">
                <li>Find a Gym</li>
                <li>Own a Gym</li>
                <li>Franchise Login</li>
              </ul>
            </div>
  
            {/* Members */}
            <div>
              <h3 className="font-bold mb-3">MEMBERS</h3>
              <ul className="space-y-2">
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Events & Gallery</li>
                <li>Get Marathon Ready</li>
              </ul>
            </div>
  
            {/* Social */}
            <div className="flex flex-col items-center md:items-end">
              <h3 className="font-bold mb-3">FOLLOW US</h3>
              <div className="flex gap-4 text-xl">
                <FaInstagram />
                <FaFacebookF />
                <FaLinkedinIn />
                <FaTimes />
                <FaYoutube />
              </div>
            </div>
          </div>
  
          {/* Bottom copyright */}
          <div className="text-center mt-10 text-xs text-gray-300">
            © {new Date().getFullYear()} Fitness Mode. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  