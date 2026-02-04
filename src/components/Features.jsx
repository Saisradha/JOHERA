import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      title: 'Affordable Luxury',
      description: 'Premium designs without the premium price tag.',
      icon: '✨',
    },
    {
      title: 'Fusion Fashion',
      description: 'Streetwear meets Indian heritage.',
      icon: '🎨',
    },
    {
      title: 'Sustainability',
      description: 'Direct artisan partnerships.',
      icon: '🌱',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-beige">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-center text-brown mb-16"
        >
          Why Johera?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-beige p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-serif font-semibold text-brown mb-4">
                {feature.title}
              </h3>
              <p className="text-brown/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

