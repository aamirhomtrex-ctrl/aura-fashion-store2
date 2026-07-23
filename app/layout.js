export const metadata = {
  title: 'Aura Fashion Store',
  description: 'Premium Women Streetwear',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
