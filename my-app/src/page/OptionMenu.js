import '../App.css';
import React, {useState} from 'react';

const Card = ({imageId, title, price,count, setCount}) => {

  

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 1) setCount(count - 1); // 최소 수량 1로 제한
  };
  return (
<div className="card">
    <div className="card-image">
      <img src={`https://picsum.photos/200/300?random=${imageId}`} alt="상품 이미지" />
    </div>
  <div className="card-content">
    <p id="title">{title}</p>
    <p id="price">{price}</p>
  </div>
   <div className="item-count">
       
      <button id="btn-minus" onClick={decrease}>-</button>  
      <p id="count" >{count}</p>
      <button id="btn-plus" onClick={increase}>+</button>  
   </div>    
</div>
  );
}

function OptionMenu({menuItems, selectedItem,count ,setCount}) {  
  return (
    <div>                    
      <div className='card-list'>
        {Object.values(menuItems)
          .flat() // 모든 메뉴 아이템을 평탄화
          .filter(item => item.id === selectedItem.id)
          .map(item => (
            <Card
              key={item.id}
              imageId={item.id}
              title={item.title}
              price={item.price}
              count={count}
              setCount={setCount}
            />
          ))}
      </div>
    </div>
  );
}


export default OptionMenu;
