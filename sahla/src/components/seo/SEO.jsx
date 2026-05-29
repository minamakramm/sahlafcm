import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

/**
 * SEO component for consistent meta tags across pages.
 *
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} [props.description] - Meta description
 * @param {string} [props.path] - Canonical path (e.g., '/subjects/ai')
 * @param {string} [props.image] - OG image URL
 * @param {boolean} [props.noIndex] - If true, adds noindex
 */
export function SEO({ title, description, path, image, noIndex = false }) {
  const { t } = useTranslation('common')
  const appName = t('app.name')
  const fullTitle = title ? `${title} — ${appName}` : appName
  const metaDescription = description || t('app.description')

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {path && <meta property="og:url" content={`https://sahla.app${path}`} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}
