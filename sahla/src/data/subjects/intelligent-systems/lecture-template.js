/**
 * LECTURE TEMPLATE
 * ================
 * This file documents the standard structure for every lecture data file.
 * Copy this template when creating new lectures.
 *
 * File naming convention:
 *   src/data/subjects/intelligent-systems/{subjectSlug}/lecture-{NN}.js
 *
 * Each lecture MUST export a named constant `LECTURE` with the shape below.
 */

export const LECTURE = {
  // ── Identity ──────────────────────────────────────────────────────
  subjectId: 'artificial-intelligence', // matches subject slug
  number: 1,                            // 1-indexed lecture number
  title: 'Introduction to AI',
  titleAr: 'مقدمة في الذكاء الاصطناعي',

  // ── TAB 1 — Explanation ───────────────────────────────────────────
  // Array of content blocks rendered sequentially.
  // Supported block types: 'text' | 'code' | 'image' | 'diagram' | 'pdf' | 'video'
  explanation: [
    {
      type: 'text',
      content: {
        body: `<h2>What is AI?</h2>
<p>Artificial Intelligence is the simulation of human intelligence processes
by computer systems. These processes include learning, reasoning, and
self-correction.</p>`,
        bodyAr: `<h2>ما هو الذكاء الاصطناعي؟</h2>
<p>الذكاء الاصطناعي هو محاكاة عمليات الذكاء البشري بواسطة أنظمة الحاسوب.
تشمل هذه العمليات التعلم والاستدلال والتصحيح الذاتي.</p>`,
      },
    },
    {
      type: 'code',
      content: {
        language: 'python',
        code: `def greet():\n    return "Hello from AI"`,
        caption: 'A simple Python example',
        captionAr: 'مثال بسيط بلغة بايثون',
      },
    },
    {
      type: 'image',
      content: {
        src: '/assets/lectures/ai/lecture-01/diagram.svg',
        alt: 'AI taxonomy diagram',
        altAr: 'مخطط تصنيف الذكاء الاصطناعي',
        caption: 'Types of AI systems',
        captionAr: 'أنواع أنظمة الذكاء الاصطناعي',
      },
    },
    {
      type: 'diagram',
      content: {
        diagramType: 'mermaid', // 'mermaid' | 'svg-inline'
        code: `graph TD
  A[AI] --> B[Narrow AI]
  A --> C[General AI]
  A --> D[Super AI]`,
        caption: 'AI classification',
        captionAr: 'تصنيف الذكاء الاصطناعي',
      },
    },
    {
      type: 'pdf',
      content: {
        src: '/assets/lectures/ai/lecture-01/slides.pdf',
        title: 'Lecture Slides',
        titleAr: 'شرائح المحاضرة',
      },
    },
    {
      type: 'video',
      content: {
        src: 'https://www.youtube.com/embed/example',
        platform: 'youtube', // 'youtube' | 'local'
        title: 'Introduction to AI — Video Lecture',
        titleAr: 'مقدمة في الذكاء الاصطناعي — فيديو المحاضرة',
      },
    },
  ],

  // ── TAB 2 — Summary ──────────────────────────────────────────────
  // Bullet-point summary in both languages.
  summary: {
    points: [
      'AI simulates human intelligence in machines.',
      'Four types: reactive, limited memory, theory of mind, self-aware.',
      'Applications include NLP, computer vision, and robotics.',
    ],
    pointsAr: [
      'الذكاء الاصطناعي يحاكي الذكاء البشري في الآلات.',
      'أربعة أنواع: تفاعلية، ذاكرة محدودة، نظرية العقل، إدراك ذاتي.',
      'التطبيقات تشمل معالجة اللغة، رؤية الحاسوب، والروبوتات.',
    ],
  },

  // ── TAB 3 — MCQ Practice ─────────────────────────────────────────
  // Array of multiple-choice questions. Exactly one answer has isCorrect: true.
  mcq: [
    {
      id: 'ai-l1-q1',
      question: 'What does the Turing Test measure?',
      questionAr: 'ماذا يقيس اختبار تورينج؟',
      difficulty: 'easy', // 'easy' | 'medium' | 'hard'
      answers: [
        { id: 'a', text: 'Processing speed',                        isCorrect: false },
        { id: 'b', text: 'Ability to exhibit intelligent behavior',  isCorrect: true  },
        { id: 'c', text: 'Memory capacity',                         isCorrect: false },
        { id: 'd', text: 'Energy efficiency',                       isCorrect: false },
      ],
    },
    {
      id: 'ai-l1-q2',
      question: 'Which of these is NOT a type of AI?',
      questionAr: 'أي من التالي ليس نوعاً من الذكاء الاصطناعي؟',
      difficulty: 'medium',
      answers: [
        { id: 'a', text: 'Reactive Machines',  isCorrect: false },
        { id: 'b', text: 'Limited Memory',     isCorrect: false },
        { id: 'c', text: 'Quantum AI',         isCorrect: true  },
        { id: 'd', text: 'Self-aware AI',      isCorrect: false },
      ],
    },
  ],

  // ── TAB 4 — Written Questions ────────────────────────────────────
  // Open-ended questions with model answers for self-assessment.
  written: [
    {
      id: 'ai-l1-w1',
      question: 'Explain the difference between Narrow AI and General AI.',
      questionAr: 'اشرح الفرق بين الذكاء الاصطناعي الضيق والعام.',
      modelAnswer: 'Narrow AI handles one specific task (e.g. Siri). General AI (theoretical) would handle any intellectual task a human can.',
      modelAnswerAr: 'الذكاء الاصطناعي الضيق يؤدي مهمة واحدة محددة (مثل سيري). العام (نظري) يؤدي أي مهمة فكرية يمكن للإنسان أداؤها.',
    },
    {
      id: 'ai-l1-w2',
      question: 'List three real-world applications of Artificial Intelligence.',
      questionAr: 'اذكر ثلاثة تطبيقات واقعية للذكاء الاصطناعي.',
      modelAnswer: '1) Virtual assistants (Alexa, Siri), 2) Self-driving cars (Tesla Autopilot), 3) Medical diagnosis (AI radiology).',
      modelAnswerAr: '1) المساعدات الافتراضية (أليكسا، سيري)، 2) السيارات ذاتية القيادة (تيسلا)، 3) التشخيص الطبي (الأشعة بالذكاء الاصطناعي).',
    },
  ],
}
