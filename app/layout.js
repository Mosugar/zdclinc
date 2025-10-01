import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({ 
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  title: 'ZR Dental Clinic - عيادة الأسنان في القنيطرة | Kénitra',
  description: 'عيادة ZR Dental - أفضل عيادة أسنان متعددة التخصصات في القنيطرة. نفتح 7/7 لإضاءة ابتسامتك. 07 70 22 22 36',
  keywords: 'عيادة أسنان, القنيطرة, Kénitra, زراعة الأسنان, تقويم الأسنان, تبييض الأسنان, ZR Dental',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}