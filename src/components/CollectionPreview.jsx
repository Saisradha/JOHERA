import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CollectionPreview = () => {
  const collections = [
    {
      id: 'streetwear',
      title: 'The Streetwear Line',
      description: 'Bold, Graphic',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop',
      color: 'from-brown to-beige',
    },
    {
      id: 'luxury',
      title: 'The Luxury Line',
      description: 'Minimal, Premium',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1000&fit=crop',
      color: 'from-brown to-beige',
    },
    {
      id: 'ethnic',
      title: 'The Ethnic Edit',
      description: 'Elegant, Occasion',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop',
      color: 'from-brown to-beige',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige to-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center text-brown mb-16"
        >
          Our Collections
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <div className="aspect-[3/4] bg-gradient-to-br bg-beige relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div
                  className={`hidden w-full h-full bg-gradient-to-br ${collection.color} items-center justify-center text-beige text-4xl font-serif`}
                >
                  {collection.title.split(' ')[0]}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-beige">
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-beige mb-4">{collection.description}</p>
                  <Link to={`/shop/${collection.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-brown text-beige px-6 py-2 rounded-full font-semibold hover:bg-brown/90 transition-colors"
                    >
                      Explore
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectionPreview

