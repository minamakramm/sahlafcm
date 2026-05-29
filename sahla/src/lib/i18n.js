import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// English translations
import enCommon from '../../locales/en/common.json'
import enAuth from '../../locales/en/auth.json'
import enSubjects from '../../locales/en/subjects.json'
import enLectures from '../../locales/en/lectures.json'
import enExam from '../../locales/en/exam.json'
import enAdmin from '../../locales/en/admin.json'
import enErrors from '../../locales/en/errors.json'
import enDeadlines from '../../locales/en/deadlines.json'

// Arabic translations
import arCommon from '../../locales/ar/common.json'
import arAuth from '../../locales/ar/auth.json'
import arSubjects from '../../locales/ar/subjects.json'
import arLectures from '../../locales/ar/lectures.json'
import arExam from '../../locales/ar/exam.json'
import arAdmin from '../../locales/ar/admin.json'
import arErrors from '../../locales/ar/errors.json'
import arDeadlines from '../../locales/ar/deadlines.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        auth: enAuth,
        subjects: enSubjects,
        lectures: enLectures,
        exam: enExam,
        admin: enAdmin,
        errors: enErrors,
        deadlines: enDeadlines,
      },
      ar: {
        common: arCommon,
        auth: arAuth,
        subjects: arSubjects,
        lectures: arLectures,
        exam: arExam,
        admin: arAdmin,
        errors: arErrors,
        deadlines: arDeadlines,
      },
    },
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'auth', 'subjects', 'lectures', 'exam', 'admin', 'errors', 'deadlines'],
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'sahla-lang',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
    react: {
      useSuspense: false, // translations are bundled, no async needed
    },
  })

export default i18n
