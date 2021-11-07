import React from 'react'
import styled from 'styled-components'
const S = styled.div`
width: 110px;
height: 110px;
border-radius: 50%;
background-color: #4e6cff;
opacity: .7;
position: absolute;
top: -60px;
left: -60px;
z-index: -1;
animation:  S 25s linear alternate infinite;
@keyframes S {
to{
    transform : translate(100vw , 90vh)
}}
`
const C = styled.div`
width: 110px;
height: 110px;
border-radius: 50%;
background-color: #ff97af;
opacity: .7;
position: absolute;
top: 200px;
left: -100px;
z-index: -1;
animation:  c 25s linear alternate infinite;
@keyframes c {
to{
    transform : translate(100vw , -50vh)
}}
`

function Animateds() {
    return (
        <div>
            <S/>
            <C/>
        </div>
    )
}

export default Animateds
