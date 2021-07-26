import s from './Paginator.module.css';
import { useState } from 'react';

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }


  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionNumber = portionNumber * portionSize


  return (
    <div className={s.paginator}>
      {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>}

      {pages
        .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
        .map(p => {
          return <div className={s.pageNumber} >
            <span className={currentPage === p ? s.selectedPage : s.noSelectedPage} key={p}
              onClick={(e) => { currentPage !== p && onPageChanged(p) }}>{p}</span>
          </div>
        })}

      {portionNumber < portionCount && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>}
    </div>
  )
}

export default Paginator