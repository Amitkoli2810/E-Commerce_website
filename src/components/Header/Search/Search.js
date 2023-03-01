import React from 'react'
import { MdClose } from 'react-icons/md'
import './Search.scss'
import prod from '../../../assets/products/earbuds-prod-1.webp'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import { useState } from 'react'
const Search = ({setShowSearch }) => {
  const [query,setQuery] = useState('')
  const navigate = useNavigate()
  const onChange=(event)=>{
    setQuery(event.target.value)
  }
  let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)

  if(!query.length){
    data = null;
  }

  return (
    <div className='search-modal'>
        <div className="form-field">
          <input type='text' autoFocus placeholder='Search For Products' value={query} onChange={onChange} />
          <MdClose onClick={()=>setShowSearch(false)}/>
        </div>
        <div className="search-result-content">
          <div className="search-results">
            {data?.data?.map(item =>(<div className="search-result-item" onClick={()=>{
              navigate('/product/'+item.id)
              setShowSearch(false)
            }}>
              <div key={item.id} className="img-container"> 
                <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt=''/>
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="name">{item.attributes.desc}</span>
             </div>
            </div>))}
          </div>
        </div>
        
    </div>
  )
}

export default Search