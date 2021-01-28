import React, { useState } from "react"
import { Link } from "react-router-dom"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import "../Login/Login.css"
import { register } from "../../actions/userAction"
import { useDispatch } from "react-redux"
export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [name, setName] = useState("")

  const [msg, setMsg] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      await dispatch(register(name, email, password))
      setMsg("Account Sucessfully Registered")
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }

  return (
    <>
      <SEO title="Shila ||Sign up page" />
      <Layout>
        <div className="login container flex text-center">
          <div className="login-content">
            <div className="login-logo">
              <h1>SHILA</h1>
              <p>{msg === "" || error === "" ? "register for an account" : msg || error}</p>
            </div>
            <form onSubmit={handleSubmit} className="form">
              <div className="form-input">
                <input type="text" name="name" autoComplete="true" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name here" required />
              </div>
              <div className="form-input">
                <input type="email" name="email" autoComplete="true" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email here" required />
              </div>
              <div className="form-input">
                <input type="password" name="password" autoComplete="false" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password here" />
              </div>

              <div className="form-input ">
                {loading === true ? (
                  <p className="text-center">loading...</p>
                ) : (
                  <button className="btn btn-black" type="submit">
                    Sign up
                  </button>
                )}
              </div>
              <p>
                Already have an account ? <Link to="/login">Log in</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}
