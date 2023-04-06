
import Email from "../assets/email.webp";

function EmailVerification() {
  return (
    <div className="email-div">
      <img src={Email} className="email-pic" alt="envelope illustration" />
      <h3 className="email-header">Verify your email address</h3>
      <p className="email-subheader">To confirm your email address, <span className="email-stress">please click on the link</span> in the email we sent you</p>
    </div>
  )
}

export default EmailVerification