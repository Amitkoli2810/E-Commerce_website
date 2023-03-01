import React from 'react'
import Products from '../../Products/Products'
import useFetch from '../../../hooks/useFetch'


const RelatedProducts = ({productId,categoryId}) => {

  const {data} = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pageination[start]=0&pagination[limit]=4`)

  return (
    <div>
        <div className="realted-products">
            <Products headingText='Related Products' products={data}/>
        </div>
    </div>
  )
}

export default RelatedProducts