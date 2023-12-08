import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './redux/createSlice'

function Card({ formAraay, mainTitle, subTitle, setSubtitle, setMaintitle }) {
    const dispatch = useDispatch()
    const handleClick=()=>{
        dispatch(increment({ title:mainTitle,children:[]}))
    }
  return (
    <div>
          <div style={{ margin: '30px' }}>
              <select class="form-control form-control-sm"
                 >

                  {formAraay.map((item) => {
                      return (
                          <option onChange={(e) => {
                              console.log(e, 'event')
                              setSubtitle(e.target.value)
                          }} >{item.title}</option>
                      )
                  })}

              </select>

              <div class="row">
                  <div class="col">
                      <input type="text" className="form-control" placeholder="Title" onChange={(e) => {
                          setMaintitle(e.target.value)
                      }} />
                  </div>
                 

              </div>
              <button className='btn-primary' onClick={handleClick}>Add to Form</button>

              <div className="card">
                  {formAraay.map((list) => {

                      return (
                          <div className="card-body">
                              {list.title}
                              <span style={{marginRight: '90px'}}> SubTitle : {list.children[0]?.title}</span>
                          </div>
                      )
                  })}

              </div>
          </div>
    </div>
  )
}

export default Card