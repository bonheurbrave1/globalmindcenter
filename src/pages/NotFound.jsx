import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'react-feather';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white p-8 rounded-xl shadow-md text-center"
      >
        <div className="text-yellow-500 flex justify-center mb-4">
          <AlertTriangle size={48} />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}