import React from 'react'

const Box = (props) => {
  return <div className='box'>
    <h1>{props.title}</h1>
    <img className='item-img' src="https://static.wixstatic.com/media/ab8fe4_cfc78a82bef7455498aee3a095f7e615~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ab8fe4_cfc78a82bef7455498aee3a095f7e615~mv2.jpg" alt="" />
    <h2>Win</h2>
  </div> 
}

export default Box
