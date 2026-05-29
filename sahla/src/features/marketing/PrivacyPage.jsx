import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Database, 
  Lock, 
  Mail,
  UserCheck,
  FileText
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

export default function PrivacyPage() {
  const sections = [
    {
      icon: <Eye className="w-5 h-5 text-blue-400" />,
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when you create an account, such as your email address and profile name. We also automatically track your study progress, quiz scores, and bookmarks to provide a personalized learning experience."
    },
    {
      icon: <Database className="w-5 h-5 text-accent-400" />,
      title: "2. How We Use Your Information",
      content: "Your data is solely used to provide, maintain, and improve the Sahla platform. This includes tracking academic progress across devices and responding to your feedback or support requests."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-emerald-400" />,
      title: "3. Third-Party Services",
      content: "We use Supabase for secure authentication and database management, and Google Analytics to understand basic traffic patterns. We do not sell, rent, or share your personal data with advertising companies."
    },
    {
      icon: <Lock className="w-5 h-5 text-amber-400" />,
      title: "4. Data Security",
      content: "We implement industry-standard security measures to protect your account and progress data. However, remember that no method of transmission over the internet is completely secure."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Sahla</title>
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
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Privacy Policy</h1>
              <p className="text-white/40 font-medium">Last updated: April 2026</p>
            </div>
          </div>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed mt-6">
            At Sahla, we take your privacy seriously. This policy explains how we handle your information to ensure a safe and effective learning environment.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass-tier-2 p-6 md:p-8 hover:bg-white/[0.04] transition-colors"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                {section.icon}
                {section.title}
              </h2>
              <p className="text-white/70 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}

          {/* Contact Component */}
          <motion.div variants={itemVariants} className="glass-tier-3 p-8 border-l-4 border-l-blue-500">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-400" />
              5. Contact Support
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, or need technical support, you can reach out directly via WhatsApp at <a href="https://wa.me/201029373214" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold underline decoration-emerald-500/30 underline-offset-2">+20 102 937 3214</a>. You can also join our <a href="https://chat.whatsapp.com/Cqrhg1cjdotJktytDUKAnA?mode=wwt" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold underline decoration-emerald-500/30 underline-offset-2">official WhatsApp Group</a> for the latest updates.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/30">
              <FileText className="w-3 h-3" />
              <span>Sahla Compliance 2026</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

