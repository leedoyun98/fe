import React, { useState, Fragment,useEffect } from 'react'
import { Link, Route, Router } from "react-router-dom";
import {makeStyles} from '@material-ui/styles'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import  { useHistory} from 'react-router'
const useStyles = makeStyles (()=>({
        image: {height:40, width:40}
}))

export const BlogPostDetail = () => {
const [board, setBoard] = useState([])
const URL =  `/board/opt/`+localStorage.getItem('brdNo')
alert(localStorage.getItem('brdNo'))
const history = useHistory()
  const [brdTitle, setBrdTitle] = useState('')
  const [brdContent, setBrdContent] = useState('')
  const [brdWrtDate, setBrdWrtDate] = useState('')
  const [brdRank, setBrdRank] = useState('')
  const [brdImg, setBrdImg] = useState('')
  const [brdLike, setBrdLike] = useState('')
  const [brdNikcname, setBrdNikcname] = useState('')

  const { register,handleSubmit} = useForm() 

  const wrt = () => {
  axios.post("http://localhost:8080/board/save",{
    brdTitle,brdContent,brdWrtDate,brdRank,brdImg,brdLike,brdNikcname
  })
  .then(resp => {
    alert('글쓰기 성공')
    history.push('/blog-list')
  })
  .catch(err => {
    alert('글쓰기 실패')
  })
  }

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
    <Fragment>
    <div>
      <div>
        {
          board ? (
            <>
              <div>
                <label>번호: </label>
                <label>{board.brdNo}</label>
              </div>
              <div>
                <label>작성날짜: </label>
                <label>{board.brdWrtDate}</label>
              </div>
              <div >
                <label>제목: </label>
                <label>{board.brdTitle}</label>
              </div>
              
              <div >
                <label>내용: </label>
                <div>
                  {board.brdContent}
                </div>
              </div>
            </>
          ) : '해당 게시글을 찾을 수 없습니다.'
        }
        </div>
        {/* <form>
         <td ><h3><input type="text" id ="title" placeholder="글 제목 입력"   onChange = { e => {setBrdTitle(`${e.target.value}`)}}/></h3></td>
          <div type></div>
          <td ><textarea rows="55" cols="250" id="content" placeholder="글 내용 입력"  onChange = { e => {setBrdContent(`${e.target.value}`)}}
          ><p>
          </p>
       </textarea></td></form> */}
       <a href="#"><Link to="/blog-update">글 수정하기</Link></a>
        </div>
        </Fragment>

    
  );
};

export default BlogPostDetail;
