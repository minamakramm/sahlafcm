import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Scale, 
  UserCircle, 
  AlertTriangle, 
  RefreshCw, 
  Gavel,
  CheckCircle2,
  FileCheck
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export default function TermsPage() {
  const terms = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      title: "1. Free Educational Use",
      content: "Sahla is provided as a free educational resource for university students. You may not copy, reproduce, scrape, or commercialize the content, lecture notes, MCQs, or source code (including visual elements and SVG animations) without explicit permission."
    },
    {
      icon: <UserCircle className="w-5 h-5 text-blue-400" />,
      title: "2. User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account credentials. Sahla reserves the right to terminate accounts that violate these terms or attempt to disrupt the platform's functionality."
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
      title: "3. Content Accuracy",
      content: "While we strive for accuracy, Sahla does not guarantee the content is completely error-free. Materials are meant to supplement your university education, not replace official curriculum updates from your professors."
    },
    {
      icon: <Gavel className="w-5 h-5 text-accent-400" />,
      title: "4. Disclaimer of Warranties",
      content: "The platform is provided 'as is' without warranties of any kind. Sahla does not warrant that the service will be entirely uninterrupted, error-free, or meet your specific academic grading requirements."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-rose-400" />,
      title: "5. Changes to Terms",
      content: "We reserve the right to modify these terms at any time. Your continued use of the platform constitutes acceptance of the modified Terms of Service."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service | Sahla</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <motion.div 
        className="flex-1 w-full max-w-4xl mx-auto px-4 py-12 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Terms of Service</h1>
              <p className="text-white/40 font-medium">Last updated: April 2026</p>
            </div>
          </div>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed mt-6">
            By accessing Sahla, you agree to the following terms. We've kept them simple and clear to ensure everyone understands their rights and responsibilities.
          </p>
        </motion.div>

        {/* Terms List */}
        <div className="grid grid-cols-1 gap-6">
          {terms.map((term, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-tier-2 p-8 relative overflow-hidden group hover:border-white/20 transition-all"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-white pointer-events-none group-hover:scale-110 transition-transform">
                {term.icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                {term.icon}
                {term.title}
              </h2>
              <p className="text-white/70 leading-relaxed relative z-10">
                {term.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-white/20 text-xs font-bold uppercase tracking-[0.2em]">
            <FileCheck className="w-4 h-4" />
            <span>Acceptance of terms is required for use</span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

