import Header from '../components/Header.tsx'
import { Link } from 'react-router-dom'

function Questions() {
  return (
    <>
      <Header title="Questions You May Have" backgroundImage="/header-mountain-background.jpg" />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>What will this mean for my future?</h4>
            <p className="mb-0">
              I usually feel very stressed when I think about my future because there are so many
              different ways my life could go. I think that I worry about it more than I need to.
              I am going to make the best decisions I can in the situation I am in and I am confident
              that whatever it looks like it will be great!
            </p>

            <br /><br />
            <h4>Did I choose to be gay?</h4>
            <p className="mb-0">
              I definitely did not choose this! After so many years of trying to make the feelings
              go away I learned that the only thing I could choose was to love myself for who I am.
              Since I have been able to do that I feel so much happier and confident.
            </p>
            <br /><br />

            <h4>How can you be an ally to LGBTQ people?</h4>
            <p className="mb-0">
              I get that it can be uncomfortable for people who aren't familiar with LGBTQ
              topics/experiences to step into this space. I think that discomfort or fear comes from
              not understanding the experience. I've seen so many people have a huge change of heart
              once they hear someone's journey and experiences. I think the most impactful thing people
              can do is to <i>clearly</i> and <i>strongly</i> show love to LGBTQ people. So many LGBTQ
              individuals live in fear that their friends or family might not love them if they knew,
              or don't approve of, who they are.
            </p>
            <p className="mb-0">
              This fear paralyzed me for so many years and even got in the way of developing
              relationships with people I care about. Please just love love love. Don't worry so much
              about the choices others make, try to see them as God sees them and love like He does.
              My greatest allies are my family and my close friends who have made it very clear that
              they accept and love me completely, no matter what.
            </p>
            <br /><br />

            <h4>Why am I coming out?</h4>
            <p className="mb-0">
              There are a few reasons why, but here are the main ones. I want to live a more authentic
              life and not hide anymore. I am in a much healthier place now that I am doing that. I also
              want to help others who are in a similar situation. And I also have felt prompted by God
              to tell people that I am gay and to love who I am.
            </p>
            <br />
          </div>

          <div className="col-lg-6">
            <h4>Does this mean I am leaving the church?</h4>
            <p className="mb-0">
              I am going to be completely honest with this one… I don't know. I feel like I deserve
              to be happy and comfortable with myself. Sometimes the church causes me anxiety and pain
              that makes it hard for me to be happy and comfortable with who I am. That makes me want
              to not be a part of the church. However, the church has done good for me too. I am grateful
              that through the church I have been able to develop such a close and special relationship
              with my Heavenly Parents and Jesus Christ. It's tough when both sides of it are so strong
              - the good and the bad. It's a complex thing to figure out so I am making this decision
              slowly and with lots of thought and prayer.
            </p>
            <br /><br />

            <h4>How does it all fit in with the Plan of Salvation?</h4>
            <p className="mb-0">
              I really wish I had the answer to this question. It is super hard to be working towards
              an eternity when I have no idea what it will be like for me. While the church puts so much
              emphasis on heterosexual marriages and how that is the only way couples can live with God
              again, I feel like I am excluded because I don't want to be with a woman. It hurts and
              makes me confused.
            </p>
            <p className="mb-0">
              Something that I <i>do</i> know is that my Heavenly Parents have a plan for me. I'm not
              sure what it is yet, but I know that They are watching over me. I really like the 9th
              article of faith:
            </p>
            <p className="mb-0">
              "We believe all that God has revealed, all that He does now reveal, and we believe that
              He will yet reveal many great and important things pertaining to the Kingdom of God."
            </p>
            <p className="mb-0">
              I believe that there is so much more truth out there that we just don't know about yet.
              But I hope that if we begin asking the right questions and God wants us to know more that
              He will give more to us. We desperately need more truth, especially regarding LGBTQ
              individuals and where we fit in the plan.
            </p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <hr className="my-4" />
          <p className="mb-0 text-center" style={{ fontStyle: 'italic' }}>
            I am very open about my experience so message me if you have any additional questions.
          </p>
          <p className="mb-0 text-center" style={{ fontStyle: 'italic' }}>
            Please check out these <Link to="/learnmore" style={{ fontWeight: 'bold' }}>resources</Link> that have helped me.
          </p>
        </div>
      </div>
    </>
  )
}

export default Questions
