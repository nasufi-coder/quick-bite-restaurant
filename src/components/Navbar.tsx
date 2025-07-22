import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const Navbar = () => {
  const location = useLocation();
  const { language, switchLanguage, t } = useLanguage();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar"
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quick Bite
          </motion.div>
        </Link>
        
        <div className="nav-menu">
          <Link 
            to="/menu" 
            className={`nav-link ${location.pathname === '/menu' ? 'active' : ''}`}
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('menu')}
            </motion.span>
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('about')}
            </motion.span>
          </Link>
          
          <div className="language-switcher">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => switchLanguage('en')}
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            >
              EN
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => switchLanguage('sq')}
              className={`lang-btn ${language === 'sq' ? 'active' : ''}`}
            >
              SQ
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;