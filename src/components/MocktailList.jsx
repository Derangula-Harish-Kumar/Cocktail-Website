import React from 'react'
import { cocktailLists } from '../../constants'

const MocktailList = () => {
  return (
    <div>
      <div className='my-10'>
        <h1 className='text-2xl'>Most Popular cocoktails:</h1>

        <ul>
          {/* <a href="">
            <div>cocktail</div>
            <p>AU | Bottle</p>
          </a> */}
           {
            cocktailLists.map(({name, country, detail, price})=>(
              <a href="#" className='flex justify-between items-center my-5 mx-1'>
                <div className='my-1'>
                  <h5 className='text-xl text-amber-200'>{name}</h5>
                  <p>{country} | {detail}</p>
                </div>

                <span className='text-xl' >{price}</span>
              </a>
            ))
           }
        </ul>
      </div>
    

      <div className='my-10'>
        <h1 className='text-2xl'>Most Popular cocoktails:</h1>

        <ul>
          {/* <a href="">
            <div>cocktail</div>
            <p>AU | Bottle</p>
          </a> */}
           {
            cocktailLists.map(({name, country, detail, price})=>(
              <a href="#" className='flex justify-between items-center my-5 mx-1'>
                <div className='my-1'>
                  <h5 key={name} className='text-xl text-amber-200'>{name}</h5>
                  <p>{country} | {detail}</p>
                </div>

                <span className='text-xl' >{price}</span>
              </a>
            ))
           }
        </ul>
      </div>
    </div>
  )
}

export default MocktailList
