import { useState } from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Newsletter signup logic would go here
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <footer className="bg-brown text-beige mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">JOHERA</h3>
            <p className="text-beige/80 text-sm">
              Luxury Meets Culture - For Everyone
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-4 py-2 bg-beige/10 border border-beige/30 rounded-md text-beige placeholder-beige/50 focus:outline-none focus:border-brown"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-brown text-beige px-4 py-2 rounded-md font-medium hover:bg-brown/90 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-2xl hover:text-brown transition-colors"
              >
                📷
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="text-2xl hover:text-brown transition-colors"
              >
                Instagram
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-beige/20 mt-8 pt-8 text-center text-sm text-beige/60">
          <p>&copy; {new Date().getFullYear()} Johera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

