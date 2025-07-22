import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="home">
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            {t('welcome')}
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            {t('heroSubtitle')}
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/menu" className="cta-button">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('orderNow')}
              </motion.span>
            </Link>
          </motion.div>
        </div>
        
        <motion.div
          className="hero-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src="/hero-food.jpeg"
            alt="Quick Bite Food"
            className="hero-food-image"
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.section>
      
      <motion.section 
        className="features"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="features-grid">
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="feature-icon">⚡</div>
            <h3>{t('fastDelivery')}</h3>
            <p>{t('fastDeliveryDesc')}</p>
          </motion.div>
          
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="feature-icon">🌟</div>
            <h3>{t('freshIngredients')}</h3>
            <p>{t('freshIngredientsDesc')}</p>
          </motion.div>
          
          <motion.div
            className="feature-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="feature-icon">👨‍🍳</div>
            <h3>{t('expertChefs')}</h3>
            <p>{t('expertChefsDesc')}</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;