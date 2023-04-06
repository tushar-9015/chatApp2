import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='search'/>
      </div>
      <div className='userChat'>
        <img src='https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        <div className='userChatInfo'>
            <span>yoyo</span>
        </div>
      </div>
    </div>
  )
}

export default Search
