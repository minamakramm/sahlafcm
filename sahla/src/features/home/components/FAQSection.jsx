import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { ScrollReveal, AnimatedText } from '@/components/animation'

const FAQSectionInner = () => {
  const { t, i18n } = useTranslation('common')
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: t('faq.q1.question', "What subjects does Sahla cover?"),
      answer: t('faq.q1.answer', "Sahla currently covers core Computer Science subjects for Semester 4 of the Intelligent Systems department — including Machine Learning, Neural Networks, Data Mining (Apriori, Decision Trees), Expert Systems (CLIPS, Rule-based reasoning), Databases (SQL, Normalization), and Intelligent Programming. Cybersecurity and AI & Data Science departments are coming soon.")
    },
    {
      question: t('faq.q2.question', "Is Sahla free for university students?"),
      answer: t('faq.q2.answer', "Yes, Sahla is completely free. No paywalls, no ads — just organized lecture content, MCQ practice, and timed exams that every student deserves access to.")
    },
    {
      question: t('faq.q3.question', "Can I study in Arabic?"),
      answer: t('faq.q3.answer', "Yes. Sahla is fully bilingual — all content, explanations, and platform UI are available in both Arabic and English. Arabic is the default language.")
    },
    {
      question: t('faq.q4.question', "How are the practice exams structured?"),
      answer: t('faq.q4.answer', "Exams are timed and simulate real university tests. They include multiple-choice questions with instant feedback, so you know exactly what you got right and wrong before exam day.")
    },
    {
      question: t('faq.q5.question', "Who created Sahla?"),
      answer: t('faq.q5.answer', "Sahla was built by Mina Makram — a student who got tired of scattered PDFs, broken links, and WhatsApp chaos. It's not a company project or a graduation requirement. It's a genuine attempt to make university less painful for everyone who comes after.")
    },
    {
      question: t('faq.q6.question', "Can I track my progress?"),
      answer: t('faq.q6.answer', "Yes. Sahla tracks your progress per lecture and saves your quiz scores. You can also bookmark lectures to pick up exactly where you left off.")
    },
    {
      question: t('faq.q7.question', "Does Sahla work on mobile?"),
      answer: t('faq.q7.answer', "Sahla is designed mobile-first. It works on any screen size and handles weak internet connections gracefully — important for students studying on the go in Egypt.")
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto w-full">
      <ScrollReveal variant="scaleUp">
        <div className="flex items-center gap-4 mb-2 justify-center">
          <div className="w-12 h-px bg-accent-500/50" />
          <span className="text-xs font-bold text-secondary-400 uppercase tracking-widest leading-none translate-y-[1px]">
            {t('faq.label', 'FAQ')}
          </span>
          <div className="w-12 h-px bg-accent-500/50" />
        </div>
      </ScrollReveal>

      <AnimatedText as="h2" text={t('faq.heading', 'Frequently Asked Questions')} staggerDelay={0.05} className={`text-3xl md:text-5xl font-black text-center text-white tracking-tighter mb-12 flex justify-center ${fontFamily}`} />

      {/* Entire FAQ list reveals as one unit — individual items animate via CSS transitions */}
      <ScrollReveal variant="fadeUp">
        <div className="flex flex-col gap-4" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`glass-tier-2 border ${isOpen ? 'border-accent-500/50' : 'border-white/5'} rounded-2xl overflow-hidden transition-all duration-300`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3
                    className={`text-lg font-bold text-white ${fontFamily}`}
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`text-accent-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    className={`p-6 pt-0 text-white/50 leading-relaxed text-sm ${fontFamily}`}
                    itemProp="text"
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </ScrollReveal>
    </section>
  )
}

export const FAQSection = memo(FAQSectionInner)