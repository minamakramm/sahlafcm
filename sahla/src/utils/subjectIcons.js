import { 
  Code, 
  Database, 
  Brain, 
  Network, 
  Lightbulb, 
  BookOpen, 
  Cpu, 
  Globe, 
  Settings,
  HelpCircle,
  Activity,
  Zap,
  Shield,
  Search,
  MessageSquare
} from 'lucide-react'

const iconMap = {
  'Code': Code,
  'Database': Database,
  'Brain': Brain,
  'Network': Network,
  'Lightbulb': Lightbulb,
  'BookOpen': BookOpen,
  'Cpu': Cpu,
  'Globe': Globe,
  'Settings': Settings,
  'Activity': Activity,
  'Zap': Zap,
  'Shield': Shield,
  'Search': Search,
  'MessageSquare': MessageSquare
}

/**
 * Returns a Lucide icon component based on the icon name string.
 * @param {string} iconName - The name of the icon (e.g., 'Code', 'Database')
 * @returns {React.ComponentType} - A React component for the icon
 */
export const getSubjectIcon = (iconName) => {
  return iconMap[iconName] || HelpCircle
}
