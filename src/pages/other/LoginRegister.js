import PropTypes from "prop-types"
import MetaTags from "react-meta-tags"
import { Link } from "react-router-dom"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import LayoutOne from "../../layouts/LayoutOne"
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb"
import React, { useState, Fragment,useEffect } from 'react'
import axios from 'axios'
import {TextField} from '@material-ui/core'
const LoginRegister = ({ location }) => {
  const { pathname } = location
  const [usrName, setUsrName] = useState('')
  const [usrEmail, setUsrEmail] = useState('')
  const [usrPwd, setUsrPwd] = useState('')
  const [usrAges, setUsrAges] = useState('')
  const [usrCity, setUsrCity] = useState('')
  const [usrGender, setUsrGender] = useState('')
  const [usrPhone, setUsrPhone] = useState('')
  const [usrAddr, setUsrAddr] = useState('')
  const [usrNickname, setUsrNickname] = useState('')
  const API_URL = "http://localhost:8080/user/login"

//  const authHeader = () => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user && user.accessToken) {
//       return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
//       // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
//     } else {
//       return {};
//     }
//   }

  const register = () => {
   
    axios.post("http://localhost:8080/usr/save",{
      usrEmail,usrName,usrPwd,usrAges,usrCity,usrGender,usrPhone,usrAddr,usrNickname
    })
    .then(resp => {
      alert('회원가입 성공, 로그인 해 주세요')
    })
    .catch(err => {
      alert('회원가입 실패')
    })
  }

  const login = e => {
    e.preventDefault()
    axios.post("http://localhost:8080/usr/login", {usrEmail,usrPwd})
      .then(resp => {
        alert('로그인 성공')
        if (resp.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(resp.data))
          return resp.data
        }

        
      }).catch(err => {
        alert('로그인 실패')
      })
  }

 const logout = () => {
    localStorage.removeItem("user")
  }

 const register1 = ( usrEmail, usrPwd) =>{
    return axios.post(API_URL + "signup", {
      usrEmail,
      usrPwd
    })
  }

const  getCurrentUser = ()=> {
    return JSON.parse(localStorage.getItem('user'))
  }
 

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Login</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                            <input
                                type="text"
                                name="usrEmail"
                                placeholder="usrEmail"
                                id="usrEmail"
                                onChange = { e => {setUsrEmail(`${e.target.value}`)}}
                              />
                              <input
                                type="usrPwd"
                                name="usrPwd"
                                placeholder="usrPwd"
                                id="usrPwd"
                                onChange = { e => {setUsrPwd(`${e.target.value}`)}}
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                  <button type="submit" onClick= {login}>Login</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="text"
                                name="usrEmail"
                                placeholder="usrEmail"
                                id="usrEmail"
                                onChange = { e => {setUsrEmail(`${e.target.value}`) }}
                              />
                              <input
                                type="usrPwd"
                                name="usrPwd"
                                placeholder="usrPwd"
                                id="usrPwd"
                                onChange = { e => {setUsrPwd(`${e.target.value}`) }}
                                
                              />
                              <input
                                name="usrName"
                                placeholder="usrName"
                                type="usrName" 
                                id="usrName"
                                onChange = { e => {setUsrName(`${e.target.value}`) }}
                                
                              />
                              <div className="button-box">
                              <button type="submit" onClick= {register}>Sign Up</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  )
}

LoginRegister.propTypes = {
  location: PropTypes.object
}

export default LoginRegister
