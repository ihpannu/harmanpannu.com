import { links } from "../common"
import Layout from "../components/Layout"
const Links = links.map((link) => (
  <a key={link.name} className="mx-2 my-1 p-6">
    <i className={link.icon}></i>
  </a>
))

const IndexPage = () => (
  <Layout title="Home | Harman Pannu">
    <section>
      <h1 className="mb-2">Harman Pannu</h1>
      <h4 className="mb-2">
        Full Stack / Front-End Developer 🚀 @
        <a
          className="text-primary-600 mx-1"
          href="https://www.freshconsulting.com/team/harmanpannu/"
        >
          Fresh Consulting
        </a>
      </h4>
      <footer className="mb-2 flex">{Links}</footer>
    </section>
  </Layout>
)

export default IndexPage
