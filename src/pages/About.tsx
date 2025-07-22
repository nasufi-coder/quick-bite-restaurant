import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about">
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>{t('aboutTitle')}</h1>
      </motion.div>

      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="about-text">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('aboutDescription')}
          </motion.p>
        </div>

        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="restaurant-visual">
            <motion.div
              className="chef-icon"
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              👨‍🍳
            </motion.div>
            <motion.div
              className="restaurant-icon"
              animate={{ 
                y: [0, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              🏪
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="about-features"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="features-grid">
          <motion.div
            className="feature"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="feature-icon">🌟</div>
            <h3>{t('qualityFirst')}</h3>
            <p>{t('qualityFirstDesc')}</p>
          </motion.div>

          <motion.div
            className="feature"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="feature-icon">🚀</div>
            <h3>{t('fastService')}</h3>
            <p>{t('fastServiceDesc')}</p>
          </motion.div>

          <motion.div
            className="feature"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="feature-icon">💚</div>
            <h3>{t('freshIngredientsAbout')}</h3>
            <p>{t('freshIngredientsAboutDesc')}</p>
          </motion.div>

          <motion.div
            className="feature"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="feature-icon">👥</div>
            <h3>{t('familyBusiness')}</h3>
            <p>{t('familyBusinessDesc')}</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="contact-info"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2>{t('visitUs')}</h2>
        <div className="contact-details">
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>{t('address')}</span>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <span>{t('phone')}</span>
          </div>
          <div className="contact-item">
            <span className="icon">🕒</span>
            <span>{t('hours')}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;