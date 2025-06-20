import './App.css';
import React, {useState} from 'react';


const menuTypes = ['신메뉴', '추천메뉴', '커피', '디카페인', '티', '에이드', '스무디', '주스', '베이커리', '샌드위치', '도시락', '케이크', '아이스크림', '기타'];

// 검색박스
const SearchBox = () => {
  return(
<div class="container-input">
  <input id='searchBox' type="text" placeholder="Search" name="text" class="input"/>
  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
  </svg>
</div>


  );
}

//네비게이션
const TopNavigation = ({items}) => {
  return (
<div class="nav">
  <div class="container">
    { items.map((item, index) => (  
       <div key={index} class="btn">{item}</div>
    ))
    }
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 60"
      height="60"
      width="400"
      overflow="visible"
      class="outline"
    >
      <rect
        stroke-width="5"
        fill="transparent"
        height="60"
        width="400"
        y="0"
        x="0"
        pathLength="100"
        class="rect"
      ></rect>
    </svg>
  </div>
</div>

 


  );
}

const Card = ({imageId, title, price}) => {

  const [count, setCount] = useState(1); // 초기 수량 1로 설정

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
</div>
  );
}


const BottomNavigation = () => {
  return (

<div class="button-container">
          <button onClick={() => { window.location.href = 'orderPage.html'; }}>주문하기</button>
</div>
  );
}



function App() {

  return (
    <div className="App">          
      <SearchBox />
      <TopNavigation items={menuTypes} />
      
      <div className='card-list'>
        {menuTypes.map((item, index) => (
          <Card key={index} imageId = {index} title={item} price={'32,000'} />
        ))}
      </div>
      
      
      <hr/>
      <BottomNavigation/>
    </div>
  );
}




export default App;
