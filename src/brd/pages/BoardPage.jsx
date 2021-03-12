

import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles (()=>({
        image: {height:40, width:40}
}))
import React, { useState, Fragment,useEffect } from 'react'
import axios from 'axios';

export const BoardPage = () =>{
    const [board, setBoard] = useState([])
    const URL = '/board/all'
   useEffect(()=>{
     axios.get(URL, )
     .then((response) => {
       alert('restful success')
       setBoard(response.data)
     })
     .catch((error) => {
       alert('실패')
       throw error;
     })
     
   },[])
    return (<> 
        <ul>
          {board.map(i => (
            <il
              key = {i.brdNo}
              >
                {i.brdWrtDate}
            </il>
          ))}
          </ul></>)
}

export default BoardPage