import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
function List() {
    const counter = useSelector((state) => state)
   

  



    const [mainTitle, setMaintitle] = useState()
    const [subTitle, setSubtitle] = useState()




  

  
    return (
        <>
            <Card subTitle={subTitle} mainTitle={mainTitle} formAraay={counter} setSubtitle={setSubtitle} setMaintitle={setMaintitle} />
        </>
    )
}

export default List