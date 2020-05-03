import { links } from "../common"
import Layout from "../components/Layout"
const Links = links.map((link) => (
  <a
    key={link.name}
    href={link.link}
    className="m-2 w-16 h-10 flex justify-center items-center p-2 text-2xl"
  >
    <i className={link.icon} aria-hidden="true"></i>
  </a>
))
const IndexPage = () => (
  <Layout title="Home | Harman Pannu">
    <section>
      <div className="flex flex-col sm:flex-row items-center justify-start mb-3 h-full w-full">
        <img
          className="h-40 sm:h-20 w-40 sm:w-20 object-cover rounded-full mr-3"
          src="/img/avatar.jpg"
          alt="avatar"
        />
        <h1>Harman Pannu</h1>
      </div>
      <h4 className="mb-3 text-center sm:text-left">
        👨🏻‍💻 Full Stack / Front-End Developer @
        <a
          className="mx-1 font-extrabold"
          href="https://www.freshconsulting.com/team/harmanpannu/"
        >
          Fresh
        </a>
      </h4>
      <footer className="mb-3 flex">{Links}</footer>
    </section>
  </Layout>
)

export default IndexPage

// <div
// className="w-20 h-20 bg-center bg-cover bg- ml-5 rounded-full"
// style={{ backgroundImage: 'url("/img/avatar.jpg")' }}
// ></div>
