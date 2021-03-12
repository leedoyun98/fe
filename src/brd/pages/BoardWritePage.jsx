import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

const brdWriteService = x => {
    $(`#home-btn`).click( e => { location.href=`${x}/move/cmm/index` }) 
    $(`#brd-list-btn`).click(e => { location.href=`${x}/move/brd/BoardListPage` })
    $(`#write-done-btn`).click( e => {
        e.preventDefault()
        $.ajax({
            url: `${x}/boards/write`,
            type: 'POST',
            data: JSON.stringify({
                 title: $('#title').val(),
                 content: $('#content').val()
            }),
            dataType:'json',
            contentType:'application/json',
            success: d => {
                if(d.message === 'SUCCESS'){
                    alert(`게시글 작성 완료 !`)
                     location.href =`${x}/move/brd/BoardListPage`
                }else{
                    alert('게시글 작성 실패 ! 다시 시도해 주세요.')
                }
            },
            error: e => {
                alert('게시글 작성 에러')
            }
        })
    })
}

export const BoardWritePage = () => {
    return (<>
    <h1>게시글 작성</h1>
    <form>
        <table id="tab" >
            <tr>
                <th style="width: 20%">제목</th>
                <td style="width: 80%"><input type="text" id ="title" placeholder="글 제목 입력" style="width:98%; height:100%;"/></td>
            </tr>
            <tr>
                <th>내용</th>
                <td><textarea rows="15" cols="65" id="content" placeholder="글 내용 입력" style="width:98%;"></textarea></td>
            </tr>
        </table>
    </form>
    <div style="text-align: center; padding-top: 30px;">			
        <button id="write-done-btn">등록하기</button>
        <button id="brd-list-btn">뒤로가기</button>
        <button id="home-btn">HOME</button>
    </div>
    </>)
}