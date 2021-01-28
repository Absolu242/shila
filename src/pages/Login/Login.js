import React, { useState } from "react"
import SEO from "../../components/SEO/SEO"
import Layout from "../../components/Layout/Layout"
import { Link, useHistory } from "react-router-dom"
import "./Login.css"
import { login } from "../../actions/userAction"
import { useDispatch } from "react-redux"

export default function Login() {
  const [email, setEmail] = useState("demo@email.com")
  const [password, setPassword] = useState("123456")

  const dispatch = useDispatch()
  // const [msg, setMsg] = useState("")
  // const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      await dispatch(login(email, password))
      // setMsg("Account Sucessfully login")

      history.goBack()
    } catch {
      // setError("Failed to create an account")
    }
    setLoading(false)
  }

  return (
    <>
      <SEO title="Shila || login page" />
      <Layout>
        <div className="login container flex text-center">
          <div className="login-content">
            <div className="login-logo">
              <h1>SHILA</h1>
              <p>Click to button to Demo login</p>
            </div>
            <form onSubmit={handleSubmit} className="form">
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
                    Demo Log in
                  </button>
                )}
              </div>
              <p>
                Don't have an account ? <Link to="/signup">Sign up</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}
