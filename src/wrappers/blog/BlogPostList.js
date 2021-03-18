import { Link, Route, Router } from "react-router-dom";
import React, { useState, Fragment,useEffect } from 'react'
import axios from 'axios';
import styled, { createGlobalStyle } from "styled-components";
const BlogPostList = ({ history }) => {
  const [board, setBoard] = useState([])
  const URL = '/board/all'
  
 useEffect(()=>{
   axios.get(URL, )
   .then(({data}) => {
     setBoard(data)
    
    
   })
   .catch((error) => {
     alert('실패')
     throw error;
   })
   
 },[])

  return (
    <>
    <Fragment>
      {board.map((b, index) => (
      <div className="col-lg-4 col-md-6 col-sm-12" key={b.brdNo}>
        <div className="blog-wrap-2 mb-30">
          <div className="blog-img-2">
            <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
              <img
                src={process.env.PUBLIC_URL + "/assets/img/blog/blog-9.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-content-2">
            <div className="blog-meta-2">
              <ul>
                <li>{b.brdWrtDate}</li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                     <i className="fa fa-comments-o" />
                  </Link>
                </li>
              </ul>
            </div>
            <h4>
              <Link to="/blog-details-standard" >
              {b.brdTitle}

              </Link>
            </h4>
            <p>
          {b.brdContent}
            </p>
            <div className="blog-share-comment">
              <div className="blog-btn-2">
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  read more
                </Link>
              </div>
              <div className="blog-share">
                <span>share :</span>
                <div className="share-social">
                  <ul>
                    <li>
                      <a className="facebook" href="//facebook.com">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="//twitter.com">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="//instagram.com">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
          </div>
          
          </div>
       
      ))}
    </Fragment>
    
   <a href="#"><Link to= '/blog-detail'>글 작성하기</Link></a>
    </>
  );
};

export default BlogPostList;
