// Google Analyticsの測定ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

// ページビューのトラッキング
export const pageview = (url: string) => {
  if (typeof window.gtag === 'undefined') return
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// イベントのトラッキング
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (typeof window.gtag === 'undefined') return
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// 型定義
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: {
        page_path?: string
        event_category?: string
        event_label?: string
        value?: number
      }
    ) => void
    dataLayer: any[]
  }
}
