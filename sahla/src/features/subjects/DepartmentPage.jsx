import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getDepartmentBySlug, getSubjectIndex } from '@/features/home/utils/staticData'
import { SubjectGrid } from '@/features/home/components/SubjectGrid'

export default function DepartmentPage() {
  const { departmentSlug } = useParams()
  const { t, i18n } = useTranslation('subjects')
  const fontFamily = i18n.language === 'ar' ? 'font-arabic' : 'font-sans'
  const department = getDepartmentBySlug(departmentSlug)

  const deptName = department
    ? (i18n.language === 'ar' ? department.nameAr : department.name)
    : departmentSlug

  return (
    <>
      <Helmet>
        <title>{t('page.departmentTitle', { department: deptName })}</title>
      </Helmet>
      <div className="min-h-screen max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold text-white mb-2 ${fontFamily}`}>
            {t('page.departmentTitle', { department: deptName })}
          </h1>
          <p className={`text-white/50 ${fontFamily}`}>
            {t('page.departmentSubtitle', { department: deptName })}
          </p>
        </div>
        <SubjectGrid departmentSlug={departmentSlug} />
      </div>
    </>
  )
}
