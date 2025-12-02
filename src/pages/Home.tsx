import Header from '../components/Header.tsx'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header title="Learning To Love" isMainHeader={true} />

      <section className="py-2">
        <div className="container my-3">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>Hello! I am Spencer.</h2>
              <p className="mb-0">
                Many of you know already, but I wanted to share with the rest of you that I am gay 🏳️‍🌈
                I've known since I was around 13 years old, but until recently I have felt like a mistake
                and didn't want to tell anybody. I know Christ loves me and that I am this way for a reason.
              </p>
              <br />
              <img src="/home-spencer-photo.jpg" style={{ width: '100%' }} alt="Spencer" />
              <br />
              <br />
              <p className="mb-0">
                I have always been so afraid of this part of myself, but now I view it as something
                special and beautiful.
              </p>
              <p className="mb-0">
                I wanted to make an easy way to share my story with people so I built this website.
                I hope that more love and understanding will spread through the community as me and
                many others share their experiences.
              </p>
              <p className="mb-0">
                Read my story <Link to="/story" style={{ fontWeight: 'bold' }}>here</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
