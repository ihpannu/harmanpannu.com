import Head from "next/head"
import * as React from "react"

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "Harman Pannu",
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
    </Head>
    <main className="w-screen h-screen flex items-center justify-center px-6">
      {children}
    </main>
  </div>
)

export default Layout
// <script src="https://use.fontawesome.com/04d2721948.js"></script>
