import Header from '../components/Header.tsx'

function LearnMore() {
  return (
    <>
      <Header title="Resources to Learn More About LGBTQ Experiences" backgroundImage="/header-mountain-background.jpg" />

      <br /><br />

      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="post-preview">
              <a href="https://alloutintheopen.org" target="_blank" rel="noopener noreferrer">
                <h2 className="post-title">#1 All Out In the Open</h2>
                <h3 className="post-subtitle">A podcast by Ben Schilaty and Charlie Bird</h3>
              </a>
              <p>They both have great books too:</p>
              <div className="col">
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-3">
                    <img src="/learnmore-ben-book.jpg" width="100%" alt="Ben's Book" />
                  </div>
                  <div className="col-3">
                    <img src="/learnmore-charlie-book1.jpg" width="100%" alt="Charlie's Book 1" />
                  </div>
                  <div className="col-3">
                    <img src="/learnmore-charlie-book2.jpg" width="100%" alt="Charlie's Book 2" />
                  </div>
                  <div className="col-1"></div>
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <div className="post-preview">
              <a href="https://www.liftandlove.org/" target="_blank" rel="noopener noreferrer">
                <h2 className="post-title">#2 Lift & Love</h2>
                <h3 className="post-subtitle">
                  A great podcast and other resources made by two LDS moms with gay sons
                </h3>
              </a>
            </div>

            <hr className="my-4" />

            <div className="post-preview">
              <a href="https://www.listenlearnandlove.org/" target="_blank" rel="noopener noreferrer">
                <h2 className="post-title">#3 Listen, Learn & Love</h2>
                <h3 className="post-subtitle">
                  A podcast and book by Richard (Papa) Ostler who was a former LDS Bishop
                </h3>
              </a>
            </div>

            <hr className="my-4" />

            <div className="post-preview">
              <a href="https://www.churchofjesuschrist.org/topics/gay?lang=eng" target="_blank" rel="noopener noreferrer">
                <h2 className="post-title">#4 The Church of Jesus Christ of Latter-day Saints</h2>
                <h3 className="post-subtitle">
                  There is a lot of great advice about how to love others on this site
                </h3>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default LearnMore
