import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const Shop = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState(category || 'all')

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching products:', error)
      // Fallback mock data
      setProducts([
        { id: 1, name: 'Streetwear Tee', category: 'streetwear', price: 49, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400' },
        { id: 2, name: 'Luxury Blazer', category: 'luxury', price: 199, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400' },
        { id: 3, name: 'Ethnic Kurta', category: 'ethnic', price: 89, image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'streetwear', label: 'Streetwear' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'ethnic', label: 'Ethnic' },
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center text-brown mb-12"
        >
          Shop
        </motion.h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-brown text-beige'
                  : 'bg-beige text-brown hover:bg-brown/10'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brown"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-beige rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-square bg-beige overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-brown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-brown font-bold text-lg mb-4">
                    ${product.price}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-brown text-beige px-4 py-2 rounded-full font-semibold hover:bg-brown/90 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Shop

