
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useEffect, useState } from "react"
import { HeroSection, WelcomeSection, ReasonsSection, ContactSection, FooterSection, SignUpPage, LoginPage, HomePage, SearchPage, SavedTopicsPage, ContributePage, DetailsPage, AllTopics, ContactPage } from './index'

function LandingPage() {

  const [token, setToken] = useState(false)

  if(token) {
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  },[])

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
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage setToken={setToken}/>} />
          {/* <Route path="/coming" element={<ComingSoon />}></Route> */}
          {token?<Route path="/homepage" element={<HomePage token={token}/>} />:""}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/saved-topics" element={<SavedTopicsPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/:id" element={<DetailsPage />} />
          <Route path="/all" element={<AllTopics />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default LandingPage