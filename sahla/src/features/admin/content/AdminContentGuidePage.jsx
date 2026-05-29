import React from 'react'

export default function AdminContentGuidePage() {
  return (
    <div className="flex flex-col gap-8 animate-slide-up max-w-3xl">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white">Content Guide</h1>
        <p className="text-white/60">Learn how to add and manage strict static content manually.</p>
      </div>

      <div className="glass-tier-1 p-8 rounded-3xl flex flex-col gap-6">
        <h2 className="text-xl font-bold text-white mb-2">How to Add Content</h2>
        
        <div className="flex flex-col gap-4 text-white/80 leading-relaxed">
          <div className="glass-tier-2 p-4 rounded-2xl">
            <h3 className="font-bold text-[#a5b4fc] mb-1">1. Add a Lecture</h3>
            <p>To add a new lecture, create a file named <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">lecture-&#123;N&#125;.js</code> internally inside the subject's corresponding department directory. For instance: <code>src/data/subjects/&#123;dept&#125;/&#123;subject&#125;/lecture-&#123;N&#125;.js</code>.</p>
          </div>

          <div className="glass-tier-2 p-4 rounded-2xl">
             <h3 className="font-bold text-[#a5b4fc] mb-1">2. Copy the Template</h3>
             <p>Follow the standard static object exported template strictly found in <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">lecture-template.js</code>.</p>
          </div>

          <div className="glass-tier-2 p-4 rounded-2xl">
             <h3 className="font-bold text-[#a5b4fc] mb-1">3. Update the Index</h3>
             <p>Remember to update the <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">lectureCount</code> locally in the corresponding subject object exported mapping so the UI navigation correctly counts the final number.</p>
          </div>

          <div className="glass-tier-2 p-4 rounded-2xl">
             <h3 className="font-bold text-[#a5b4fc] mb-1">4. Add Exam Questions</h3>
             <p>To add exam questions, edit the static <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm">exam.js</code> mapped configuration under the parent subject directory directly.</p>
          </div>

          <div className="glass-tier-2 p-4 rounded-2xl">
             <h3 className="font-bold text-[#a5b4fc] mb-1">5. Deploy</h3>
             <p>Once your content files are locally verified, Git commit your code. Push straight to <code>main</code>, and the Vercel branch auto-deployment will trigger securely mapping everything automatically.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
