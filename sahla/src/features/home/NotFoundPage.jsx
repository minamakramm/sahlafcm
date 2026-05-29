import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, ShieldQuestion } from 'lucide-react'
import { Button } from '@/components/ui'

export default function NotFoundPage() {
  const { t, i18n } = useTranslation('common')
  const isRtl = i18n.language === 'ar'

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <Helmet>
        <title>404 — {t('notFound.title', 'Page Not Found')} | Sahla</title>
      </Helmet>
      
      <div className="relative min-h-[85vh] flex items-center justify-center p-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px]" 
          />
          
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-card max-w-2xl w-full p-8 md:p-16 text-center relative z-10 border-white/5 shadow-2xl backdrop-blur-2xl"
        >
          {/* Decoration Icon */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 mb-8 mx-auto relative group"
          >
            <ShieldQuestion className="w-10 h-10 text-accent-400 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-2xl bg-accent-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.div variants={itemVariants} className="relative mb-6">
            <motion.h1 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-8xl md:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none leading-none tracking-tighter"
            >
              404
            </motion.h1>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-4">
              <span className="text-xl md:text-2xl font-bold text-accent-400 tracking-[0.3em] uppercase opacity-90 mix-blend-overlay">
                Lost In Space
              </span>
            </div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight px-4"
          >
            {t('notFound.title', 'Zay el Outlier, Di Malhash Makan.')}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-white/60 mb-12 text-base md:text-lg leading-relaxed max-w-lg mx-auto px-4"
          >
            {t('notFound.subtitle', "We searched high and low, from Intelligent Programming to Data Mining, but this page seems to have vanished into el space. Don't worry, even expert systems have heuristics for gaps like this.")}
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button as={Link} to="/" variant="accent" size="lg" className="w-full sm:w-auto gap-3 py-7 px-10 text-lg shadow-glow-accent hover:shadow-glow-accent-lg transition-all">
              <Home size={22} />
              {t('notFound.goHome', 'Go Back Home')}
            </Button>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-glass border border-white/10 text-white/70 hover:text-white hover:bg-white/5 transition-all text-lg font-semibold group"
            >
              <ArrowLeft size={20} className={`${isRtl ? 'rotate-180' : ''} group-hover:-translate-x-1 transition-transform`} />
              {t('notFound.goBack', 'Go Back')}
            </button>
          </motion.div>
          
          {/* Subtle footer tip */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center gap-2 text-white/30 text-sm"
          >
            <Search size={14} />
            <span>Try searching for a subject from the home page</span>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
