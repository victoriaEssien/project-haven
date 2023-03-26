
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import reasonImgOne from "../assets/reasons-img-one.png"
import reasonImgTwo from "../assets/reasons-img-two.png"
import reasonImgThree from "../assets/reasons-img-three.png"
import reasonImgFour from "../assets/reasons-img-four.png"

function ReasonsSection() {
  return (
    <section className="features-section" id="features">
      <h2 className="features-header">We make finding project topics easier than ever</h2>
        <Row className="reasons-row">
            <Col className="reasons-col">
                <h3 className="reasons-subheading">Search our database for ideas</h3>
                <p className="reasons-text">Rather than searching multiple sources on the internet. Search in a single place simply by searching for topic name, category and/or level of difficulty, browse through the results and choose the topic that you can handle best🙃</p>
            </Col>

            <Col md={6}>
                <img src={reasonImgOne} alt="The search page of project haven's dashboard" className="welcome-img"/>
            </Col>
        </Row>

        <Row className="reasons-row">
            <Col className="reasons-col">
                <h3 className="reasons-subheading">Save topics you like</h3>
                <p className="reasons-text"> Easily keep track of topics you are interested in by clicking on the save icon on each project. This way, you can easily browse and search through your saved topics, which can help you find topics you are interested in more quickly. </p>
            </Col>

            <Col md={6}>
            <img src={reasonImgTwo} alt="The saved topics page of the project haven dashboard" className="welcome-img"/>
            </Col>
        </Row>

        <Row className="reasons-row">
            <Col className="reasons-col">
                <h3 className="reasons-subheading">Contribute to our database</h3>
                <p className="reasons-text">Flex your open source skills and help us make our library bigger and more comprehensive by contributing topics to our database. Share your own ideas and help ensure that we always stay up-to-date.</p>
            </Col>

            <Col md={6}>
                <img src={reasonImgThree} alt="" className="welcome-img"/>
            </Col>
        </Row>

        <Row className="reasons-row">
            <Col className="reasons-col">
                <h3 className="reasons-subheading">Effective support for our users</h3>
                <p className="reasons-text">Reach out to us from the app regarding any issues you faced. Simply send us a message describing what issue you're facing while using our platform. This helps us to stay on top of any bugs or glitches and address them quickly. <br /> <br />
                You can also provide feedback about the app and tell us what you would like to see improved. This helps us make sure the app is as user-friendly and helpful as possible.
                </p>
            </Col>

            <Col md={6}>
            <img src={reasonImgFour} alt="" className="welcome-img"/>
            </Col>
        </Row>

    </section>
  )
}

export default ReasonsSection