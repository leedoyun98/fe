import React, { useState, Fragment,useEffect } from 'react'
import { Link } from "react-router-dom";
import {makeStyles} from '@material-ui/styles'
import axios from 'axios'
const useStyles = makeStyles (()=>({
        image: {height:40, width:40}
}))	



const BlogWrt = () => {
  const [brdTitle, setBrdTitle] = useState('')
  const [brdContent, setBrdContent] = useState('')
  const [brdWrtDate, setBrdWrtDate] = useState('')
  const [brdRank, setBrdRank] = useState('')
  const [brdImg, setBrdImg] = useState('')
  const [brdLike, setBrdLike] = useState('')
  const [brdNikcname, setBrdNikcname] = useState('')
  
  const wrt = () => {
  axios.post("http://localhost:8080/board/save",{
    brdTitle,brdContent,brdWrtDate,brdRank,brdImg,brdLike,brdNikcname
  })
  .then(resp => {
    alert('글쓰기 성공')
  })
  .catch(err => {
    alert('글쓰기 실패')
  })
  }
  return (<>
    <Fragment>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/blog-5.jpg"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>22 April, 2018</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
    <form>
         <td ><h3><input type="text" id ="title" placeholder="글 제목 입력"   onChange = { e => {setBrdTitle(`${e.target.value}`)}}/></h3></td>
          <div type></div>
          <td ><textarea rows="55" cols="250" id="content" placeholder="글 내용 입력"  onChange = { e => {setBrdContent(`${e.target.value}`)}}
          ><p>
          </p>
       </textarea></td></form>
        </div>
      </div>
      <div className="dec-img-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/blog-details.jpg"
                }
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="dec-img mb-50">
              <img
                alt=""
                src={
                  process.env.PUBLIC_URL + "/assets/img/blog/blog-details-2.jpg"
                }
              />
            </div>
            <button type="submit" onClick= {wrt}>글 작성 완료</button>
          </div>
        </div>
     
      </div>
      <div className="tag-share">
        <div className="dec-tag">
          <ul>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                lifestyle ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                interior ,
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/blog-standard"}>
                outdoor
              </Link>
            </li>
          </ul>
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
      <div className="next-previous-post">
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          {" "}
          <i className="fa fa-angle-left" /> prev post
        </Link>
        <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
          next post <i className="fa fa-angle-right" />
        </Link>
      </div>
    </Fragment>
    </>
  );
};

export default BlogWrt;
