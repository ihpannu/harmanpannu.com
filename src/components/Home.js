import React from "react"
import Footer from './Footer'
import Header from '../components/Header/Header'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="main-section">
        <h1 className="name spin">Harman Pannu</h1>
        <h4>Software Engineer @
        <a className="companyname" href="https://www.freshconsulting.com/team/harmanpannu/">
            fresh</a>
        </h4>
        <h5>Side Project
        <a className="focialname" href="https://focial.app">
            focial</a></h5>
      </section>
      <Footer />
    </div>
  )
}

export default Home

