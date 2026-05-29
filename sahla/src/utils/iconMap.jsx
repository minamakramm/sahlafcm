import React from 'react';
import { 
  ChevronRight, 
  Book, 
  GraduationCap, 
  Lightbulb, 
  Search, 
  Calculator, 
  Star, 
  Info, 
  AlertTriangle, 
  Notebook, 
  FlaskConical, 
  Microscope, 
  Home, 
  Edit, 
  MessageSquare, 
  Brain, 
  Ruler
} from 'lucide-react';

const iconMap = {
  '🔹': <ChevronRight className="inline-block w-[1.1em] h-[1.1em] text-accent-500 mr-2 transform -translate-y-[1px]" />,
  '📘': <Book className="inline-block w-[1.1em] h-[1.1em] text-accent-500 mr-2" />,
  '🎓': <GraduationCap className="inline-block w-[1.1em] h-[1.1em] text-accent-500 mr-2" />,
  '💡': <Lightbulb className="inline-block w-[1.1em] h-[1.1em] text-amber-500 mr-2" />,
  '🔍': <Search className="inline-block w-[1.1em] h-[1.1em] text-accent-500 mr-2" />,
  '🧮': <Calculator className="inline-block w-[1.1em] h-[1.1em] text-accent-400 mr-2" />,
  '⭐': <Star className="inline-block w-[1em] h-[1em] text-amber-400 mr-1" fill="currentColor" />,
  'ℹ️': <Info className="inline-block w-[1.1em] h-[1.1em] text-blue-500 mr-2" />,
  '⚠️': <AlertTriangle className="inline-block w-[1.1em] h-[1.1em] text-amber-500 mr-2" />,
  '📗': <Book className="inline-block w-[1.1em] h-[1.1em] text-emerald-500 mr-2" />,
  '📙': <Book className="inline-block w-[1.1em] h-[1.1em] text-orange-500 mr-2" />,
  '📕': <Book className="inline-block w-[1.1em] h-[1.1em] text-rose-500 mr-2" />,
  '📓': <Notebook className="inline-block w-[1.1em] h-[1.1em] text-accent-500 mr-2" />,
  '🧪': <FlaskConical className="inline-block w-[1.1em] h-[1.1em] text-accent-500 mr-2" />,
  '🔬': <Microscope className="inline-block w-[1.1em] h-[1.1em] text-accent-500 mr-2" />,
  '🏠': <Home className="inline-block w-[1.1em] h-[1.1em] text-accent-500 mr-2" />,
  '📝': <Edit className="inline-block w-[1.1em] h-[1.1em] text-accent-500 mr-2" />,
  '🗣️': <MessageSquare className="inline-block w-[1.1em] h-[1.1em] text-accent-300 mr-2" />,
  '🧠': <Brain className="inline-block w-[1.1em] h-[1.1em] text-rose-400 mr-2" />,
  '📐': <Ruler className="inline-block w-[1.1em] h-[1.1em] text-accent-500 mr-2" />,
};

/**
 * Utility to process text/HTML and replace common emojis with Lucide components
 * Note: This works for simple text. For HTML, we might need a different approach 
 * if we want to avoid dangerouslySetInnerHTML but the user's data contains HTML tags already.
 */
export const getIconForEmoji = (emoji) => iconMap[emoji] || emoji;

export const replaceEmojisWithHTML = (text) => {
  if (!text) return text;
  let newText = text;
  
  // Maps to FontAwesome for HTML strings since components can't be injected into innerHTML easily
  const faMap = {
    '🔹': '<i class="fa-solid fa-chevron-right text-accent-500 mr-2"></i>',
    '📘': '<i class="fa-solid fa-book text-accent-500 mr-2"></i>',
    '🎓': '<i class="fa-solid fa-graduation-cap text-accent-500 mr-2"></i>',
    '💡': '<i class="fa-solid fa-lightbulb text-amber-500 mr-2"></i>',
    '🔍': '<i class="fa-solid fa-magnifying-glass text-accent-500 mr-2"></i>',
    '🧮': '<i class="fa-solid fa-calculator text-accent-400 mr-2"></i>',
    '⭐': '<i class="fa-solid fa-star text-amber-400 mr-1"></i>',
    'ℹ️': '<i class="fa-solid fa-circle-info text-blue-500 mr-2"></i>',
    '⚠️': '<i class="fa-solid fa-triangle-exclamation text-amber-500 mr-2"></i>',
    '📗': '<i class="fa-solid fa-book text-emerald-500 mr-2"></i>',
    '📙': '<i class="fa-solid fa-book text-orange-500 mr-2"></i>',
    '📕': '<i class="fa-solid fa-book text-rose-500 mr-2"></i>',
    '📓': '<i class="fa-solid fa-note-sticky text-accent-500 mr-2"></i>',
    '🔬': '<i class="fa-solid fa-microscope text-accent-500 mr-2"></i>',
  };

  for (const [emoji, fa] of Object.entries(faMap)) {
     newText = newText.split(emoji).join(fa);
  }
  return newText;
};
