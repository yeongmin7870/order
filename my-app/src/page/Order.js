import '../App.css';
import React, {useState} from 'react';





const Card = ({imageId, title, price, onClickCard}) => {

  return (
<div class="card" onClick={onClickCard} style={{cursor: 'pointer'}}>
    <div class="card-image">
      <img src={`https://picsum.photos/200/300?random=${imageId}`} alt="상품 이미지" />
    </div>
  <div class="card-content">
    <p id="title">{title}</p>
    <p id="price">{price}</p>
  </div>
</div>
  );
}



function Order({menuItems, selectedMenu, setSelectedState
    , setSelectedItem}) {  

  return (
    <div>                    
      <div className='card-list'>
        {menuItems[selectedMenu]
        .map((item, index) => (
          <Card key={item.id} imageId={item.id} title={item.title} price={item.price}
                onClickCard={() => { 
                     setSelectedItem(item);                
                     setSelectedState('주문상세화면')                    
                }}
          />
        ))}
      </div>
    
    </div>
  );
}

export default Order;