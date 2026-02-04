import { motion } from 'framer-motion'

const Cart = () => {
  // In a real app, this would come from a state management solution
  const cartItems = []

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-beige">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center text-brown mb-12"
        >
          Your Cart
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-beige rounded-lg shadow-md p-12 text-center"
          >
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-xl text-brown/80 mb-6">Your cart is empty</p>
            <motion.a
              href="/shop"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-brown text-beige px-8 py-3 rounded-full font-semibold hover:bg-brown/90 transition-colors"
            >
              Start Shopping
            </motion.a>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {/* Cart items would be rendered here */}
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart

