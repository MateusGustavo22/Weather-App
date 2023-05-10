import { useState } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const [backgroundImg, setBackgroundImg] = useState('url("/dia_limpo.png")')

  return (
    <Html lang="pt-BR">
      <Head />
      <body className={`bg-[${backgroundImg}]`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
