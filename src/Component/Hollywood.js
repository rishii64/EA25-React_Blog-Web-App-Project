import React, { useContext } from 'react'
import { bucket } from '../Store/StoreCompo';

export default function Hollywood() {
  const [data] = useContext(bucket)
  let dataFun1 = (item, index) => {
    if (index < 6) {
      return (
          <div  key={index} className='left'>
              <img src={item.img} alt='not found' />
              <div className='info'>
                <h3>{item.title}</h3>
                <p className='des'>{item.desc.slice(0,300)}....</p>
                <p className='ref'>Hollywood : 17-10-23</p>
              </div>
          </div>
      )
    }
  }
  let dataFun2 = (item, index) => {
    if (index === 6) {
      return (
          <div key={index} className='topPost'>
              <img id='topPost' src={item.img} alt='not found' />
              <div className='info'>
                <h3>{item.title}</h3>
                <p className='ref'>Hollywood : 17-10-23</p>
              </div>
          </div>
      )
    }
  }
  let dataFun3 = (item, index) => {
    if (index > 6) {
      return (
          <div  key={index} className='right'>
                <img id='rightImg' src={item.img} alt='not found' />
                <div className='info'>
                  <h3 className='r8Head'>{item.title}</h3>
                  <p className='ref'>Hollywood : 17-10-23</p>
                </div>
          </div>
      )
    }
  }
  return (
      <div className='main'>
        <div className='leftCont'>
          <h2 id='bolly'>Hollywood</h2>
          {data.filter((data) => data.cat === 'hollywood')
            .map(dataFun1)
          }
        </div>

        <div className='rightCont'>
          <h2>Top Posts</h2>
          {data.filter((data) => data.cat === 'hollywood')
            .map(dataFun2)}
          {data.filter((data) => data.cat === 'hollywood')
            .map(dataFun3)
          }
          <div className='addvert'>
            <h1>Advertisement</h1>
          </div>
        </div>
      </div>
  )
}
