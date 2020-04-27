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
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"
        integrity="sha256-KzZiKy0DWYsnwMF+X1DvQngQ2/FxF7MF3Ff72XcpuPs="
        crossOrigin="anonymous"
      ></script>
    </Head>
    <main className="w-screen h-screen flex items-center justify-center px-6">
      {children}
    </main>
  </div>
)

export default Layout
