import React from "react";

const SignupSection = () => {
  return (
    <section className="signupSection ">
      <h4>Sign up and get exclusive special deals</h4>
      <form>
        <input type="email" className="emailInput" />
        <button className="signUpBtn">Sign Up</button>
      </form>
    </section>
  );
};

export default SignupSection;
