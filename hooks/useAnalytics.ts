import { event } from '../lib/gtag'

type EventProps = {
  action: string
  category: string
  label: string
  value?: number
}

export const useAnalytics = () => {
  const trackEvent = ({ action, category, label, value }: EventProps) => {
    event({
      action,
      category,
      label,
      value,
    })
  }

  return { trackEvent }
} 