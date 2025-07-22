import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2024 Quick Bite Restaurant. All rights reserved.</p>
        </div>
        <div className="footer-credit">
          <p>
            Created by{' '}
            <motion.a 
              href="https://prolder.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="prolder-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Prolder Solutions
            </motion.a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;