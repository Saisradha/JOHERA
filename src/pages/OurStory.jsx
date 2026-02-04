import { motion } from 'framer-motion'

const OurStory = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-beige to-beige">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold text-center text-brown mb-12"
        >
          Our Story
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-lg text-brown/80 leading-relaxed"
        >
          <p>
            Johera was born from a simple belief: luxury fashion shouldn't be
            exclusive. We saw a gap in the market where streetwear energy and
            ethnic elegance existed in separate worlds, and we decided to bridge
            that gap.
          </p>

          <p>
            Our mission is to bring affordable luxury to Gen Z—those who appreciate
            premium design but refuse to compromise on authenticity. We merge the
            bold graphics of streetwear with the refined elegance of Indian
            heritage, creating pieces that speak to your unique style.
          </p>

          <p>
            Every piece in our collection is crafted with attention to detail,
            sourced through direct artisan partnerships that ensure both quality
            and sustainability. We believe fashion should be accessible, ethical,
            and absolutely stunning.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-8 bg-brown text-beige rounded-lg"
          >
            <p className="text-xl font-serif italic text-center">
              "No peace, no rest until Johera is in your closet!"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default OurStory
