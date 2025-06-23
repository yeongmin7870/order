import '../App.css';
import React, {useState} from 'react';


const Card = ({imageId, title, price, _count, onClickBasketItem}) => {

  const [count, setCount] = useState(_count); // 초기 수량 1로 설정

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 1) setCount(count - 1); // 최소 수량 1로 제한
};
  return (
<div class="card">
    <div class="card-image">
      <img src={`https://picsum.photos/200/300?random=${imageId}`} alt="상품 이미지" />
    </div>
  <div class="card-content">
    <p id="title">{title}</p>
    <p id="price">{price}</p>
  </div>
   <div class="item-count">
       
      <button id="btn-minus" onClick={decrease}>-</button>  
      <p id="count" >{count}</p>
      <button id="btn-plus" onClick={increase}>+</button>  
   </div>    
   <div class ="delete-button">
      <button id="btn-delete" onClick={() => onClickBasketItem()}>X</button>
    </div>
</div>
  );
}

const deleteItem = ({setSelectedBasket, id}) => {
    return () => {
        setSelectedBasket(prev => prev.filter(itemId => itemId !== id));
    };
}


function Basket({menuItems, selectedBasket, setSelectedBasket}) {  
   
  return (
    <div>                    
      <div className='card-list'>
        {Object.values(menuItems)
        .flat() // 모든 메뉴 아이템을 평탄화
        .filter(item => selectedBasket[item.id])
        .map((item) => (            
          <Card key={item.id} imageId={item.id}
                title={item.title} price={item.price}
                _count={selectedBasket[item.id].count}
                onClickBasketItem={deleteItem({setSelectedBasket, id: item.id})}
          />
        ))}
      </div>
    
    </div>
  );
}

export default Basket;