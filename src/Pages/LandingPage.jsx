

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HeroSection from "../Sections/HeroSection"
import WelcomeSection from "../Sections/WelcomeSection"
import ReasonsSection from "../Sections/ReasonsSection"
import ContactSection from "../Sections/ContactSection"
import FooterSection from "../Sections/FooterSection"
import ComingSoon from "./ComingSoon"

function LandingPage() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={
            <>
              <HeroSection />
              <WelcomeSection />
              <ReasonsSection />
              <ContactSection />
              <FooterSection />
            </>
          }>
          </Route>
          <Route path="/coming" element={<ComingSoon />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default LandingPage