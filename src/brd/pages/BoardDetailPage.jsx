import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

const brdDetailService = x => {
    $(`#home-btn`).click( e => { location.href=`${x}/move/cmm/index` }) // index 페이지 아직 없음
    $(`#brd-list-btn`).click( e => { location.href=`${x}/move/brd/BoardListPage` })
    $.getJSON(`${x}/boards/${localStorage.getItem(`title`)}`, d => {
        $(`#boardNum`).text(d.boardNum)
        $(`#boardTitle`).text(d.title)
        $(`#boardContent`).text(d.content)
        $(`#writtenDate`).text(d.writtenDate)

        $('#update').click(e => { 
            $('#boardTitle').html('<input type ="text" style="width:98%; height:100%;" id="update-title" value="'+d.title+'"/>')
            $('#boardContent').html('<input type="text" id="update-content" style="width:98%; height: 300px" value="' +d.content + '"/>')
            $(`#update`).html('<div id="confirm">수정완료</div>')
            $(`#confirm`).click( e => {
                e.preventDefault()
                $.ajax({
                    url: `${x}/boards/update`,
                    type: `PUT`,
                    data: JSON.stringify({
                        boardNum: d.boardNum,
                        title: $(`#update-title`).val(),
                        content: $(`#update-content`).val(),
                    }),
                    dataType: `json`,
                    contentType: `application/json`,
                    success: d => {
                        if(d.message === 'SUCCESS') {
                            alert(`수정 성공 !`)
                            location.reload()
                        }else {
                            alert(`수정 실패 ! 다시 시도해 주세요.`)
                        }
                    },
                    error: e => { alert(`게시글 수정 에러`) }
                })
            })
        })
        $(`#delete`).click(e => {
            e.preventDefault()
            $.ajax({
                url: `${x}/boards/remove`,
                type: `DELETE`,
                data: JSON.stringify({
                    boardNum: d.boardNum
                }),
                dataType: `json`,
                contentType: `application/json`,
                success: d => {
                    if(d.message === `SUCCESS`) {
                        alert(`삭제 완료 !`)
                        location.href=`${x}/move/brd/BoardListPage`
                    }else {
                        alert(`삭제 실패 ! 다시 시도해 주세요.`)
                    }
                },
                error: e => { alert(`게시글 삭제 에러`) }
            })
        })
    })
}

export const BoardDetailPage = () => {
    return (<>
    <h1>게시글 보기</h1>
    <table id="tab">
        <thead>
            <tr class="table-active">
                <th style="width: 10%">No. <span id="boardNum"></span></th>
                <th style="width: 10%">제목</th>
                <td style="width: 40%"><span id="boardTitle"></span></td>
                <th style="width: 10%">작성시간</th>
                <td style="text-align: center"><span id="writtenDate"></span></td>   
            </tr>
        </thead>
        <tbody>
            <tr>
            <th colspan="2">내용</th>
            <td style="text-align: left; vertical-align: middle; height: 300px" colspan="3"><div id="boardContent"></div></td>
            </tr>
        </tbody>
    </table>
    </>)
}