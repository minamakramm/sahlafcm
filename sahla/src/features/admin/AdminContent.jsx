import { useTranslation } from 'react-i18next'

export default function AdminContent() {
  const { t } = useTranslation('admin')

  return (
    <div className="animate-slide-up">
      <h1 className="text-2xl font-bold text-white mb-2">{t('content.title')}</h1>
      <p className="text-white/50 mb-8">{t('content.subtitle')}</p>

      <div className="glass-card p-6 space-y-6">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">📁 Static Content Architecture</h2>
          <div className="text-sm text-white/60 space-y-2">
            <p>All educational content (lectures, exams) lives in <code className="text-accent-400 bg-glass-200 px-1.5 py-0.5 rounded">src/data/</code> as JavaScript modules.</p>
            <p>To add or edit content, modify the data files directly and redeploy.</p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">📝 Adding a New Subject</h2>
          <ol className="text-sm text-white/60 space-y-1 list-decimal list-inside">
            <li>Create a new folder under <code className="text-accent-400 bg-glass-200 px-1.5 py-0.5 rounded">src/data/subjects/[department]/</code></li>
            <li>Add an <code className="text-accent-400 bg-glass-200 px-1.5 py-0.5 rounded">index.js</code> with the subject metadata</li>
            <li>Add lecture files following the template structure</li>
            <li>Optionally add an <code className="text-accent-400 bg-glass-200 px-1.5 py-0.5 rounded">exam.js</code> for the practice exam</li>
            <li>Update the department's <code className="text-accent-400 bg-glass-200 px-1.5 py-0.5 rounded">SUBJECT_INDEX</code></li>
          </ol>
        </section>
      </div>
    </div>
  )
}
