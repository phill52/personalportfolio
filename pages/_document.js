import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <title>Phillip Anerine | Full Stack Developer </title>
        <meta name="description" content="Hello, I'm Phillip Anerine, currently a Computer Science major at
        Stevens Institute of Technology, and aspiring full stack developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.svg" />
        <script type="module" src='https://sitring.eric.si/webring.js?id=phill52' id="webringjs"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
