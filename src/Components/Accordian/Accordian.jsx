import React, { useState } from 'react';
import data from './data';
import './Accordian.css';

const Accordian = () => {

  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  return (
    <div className='wrapper'>
      <div className="accordian">
        {
          data && data.length > 0 ? 
          data.map(dataItem => <div className='item'>
            <div onClick={() => handleSingleSelection(dataItem.id)} className="title" key={dataItem.id}>
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {
              selected === dataItem.id ? <div className='content'>{dataItem.answer}</div> : null
            }
          </div>)
          : <div>No data found</div>
        }
      </div>
    </div>
  )
}

export default Accordian