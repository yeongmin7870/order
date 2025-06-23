import './App.css';
import React, {useState} from 'react';
import Order from './page/Order';
import Basket from './page/Basket';
import OptionMenu from './page/OptionMenu';

const menuTypes = ['신메뉴', '추천메뉴', '커피', '디카페인', '티', '에이드', '스무디', '주스'];
const menuItems = {
  '신메뉴': [
    { id: 1, title: '크림라떼', price: '4,500' },
    { id: 2, title: '아인슈페너', price: '4,800' }
  ],
  '추천메뉴': [
    { id: 3, title: '바닐라라떼', price: '4,200' },
    { id: 4, title: '콜드브루', price: '4,000' }
  ],
  '커피': [
    { id: 5, title: '아메리카노', price: '3,500' },
    { id: 6, title: '카페라떼', price: '4,000' },
    { id: 7, title: '카푸치노', price: '4,300' },
    { id: 8, title: '에스프레소', price: '3,000' }
  ],
  '디카페인': [
    { id: 9, title: '디카페인 아메리카노', price: '3,800' },
    { id: 10, title: '디카페인 라떼', price: '4,300' }
  ],
  '티': [
    { id: 11, title: '캐모마일 티', price: '3,500' },
    { id: 12, title: '얼그레이 티', price: '3,500' },
    { id: 13, title: '히비스커스 티', price: '3,700' }
  ],
  '에이드': [
    { id: 14, title: '청포도 에이드', price: '4,500' },
    { id: 15, title: '자몽 에이드', price: '4,500' },
    { id: 16, title: '레몬 에이드', price: '4,500' }
  ],
  '스무디': [
    { id: 17, title: '딸기 스무디', price: '5,000' },
    { id: 18, title: '망고 스무디', price: '5,200' }
  ],
  '주스': [
    { id: 19, title: '오렌지주스', price: '5,000' },
    { id: 20, title: '자몽주스', price: '5,500' },
    { id: 21, title: '사과주스', price: '5,000' }
  ]
};


//네비게이션
const TopNavigation = ({items, onMenuClick
        , selectedState, setSelectedState

}) => {


  return (
<div class="nav">
  <div class="container">
    { 
      selectedState === '주문화면' ? (
        <>
            {
               items.map((item, index) => (  
             <div key={index} className="btn"  onClick={() => onMenuClick(item) }>{item}</div>
              ))  

            }        
        </>
      ): selectedState === '장바구니화면' ? (
        <>
         <div className="btn"  onClick={() => setSelectedState("주문화면") }>뒤로가기</div>
        </>
      ) : selectedState === '주문상세화면' ? (
        <>
         <div className="btn"  onClick={() => setSelectedState("주문화면") }>뒤로가기</div>
        </>
      ) : null
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

const BottomNavigation = ({selectedState, setSelectedState
                          ,setSelectedBasket, item}
                          ,count) => {
  return (

<div class="button-container">
       {selectedState === "주문화면" ? (
          <>
             <button onClick={() => {setSelectedState("장바구니화면")}}>장바구니</button>
          </>
       ) : selectedState === '장바구니화면' ? (
          <>
            <button onClick={() => { window.location.href = 'orderPage.html'; }}>결제하기</button>
          </>
        ) : selectedState === '주문상세화면' ? (
          <>
            <button onClick={() => {
              setSelectedState("장바구니화면")
              setSelectedBasket(prev =>({
                ...prev,
                [item.id]: {
                  title: item.title,
                  price: item.price,
                  count: count // 기본 수량 1로 설정
                }

              }));
            }}>장바구니에 담기</button>
          </>
       ): null}
         
</div>
  );
}

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

function App() {
  const appState = ['주문화면', '주문상세화면' ,'장바구니화면', '결제화면']

  const [selectedMenu, setSelectedMenu] = useState('신메뉴');
  const [selectedState, setSelectedState] = useState(appState[0]);

  
  const [selectedBasket, setSelectedBasket] = useState({});
  
  const [selectedItem, setSelectedItem] = useState(null);
  
  const [count, setCount] = useState(1); // 초기 수량 1로 설정

  return (
    <div className="App">
      {selectedState === '주문화면' ? (
          <>
           <TopNavigation items={menuTypes} onMenuClick={setSelectedMenu}
                          selectedState={selectedState} setSelectedState={setSelectedState}
           />
           <SearchBox />     
           <Order menuItems={menuItems} selectedMenu={selectedMenu} 
                  setSelectedState={setSelectedState} 
                  setSelectedItem={setSelectedItem}
                  />
          </>                     
        ): selectedState === '장바구니화면' ? (
          <>
           <TopNavigation items={menuTypes} onMenuClick={setSelectedMenu}
                          selectedState={selectedState} setSelectedState={setSelectedState}
           />  
           <Basket menuItems={menuItems} selectedBasket={selectedBasket} setSelectedBasket={setSelectedBasket}                  
           />
          </>                     

        ): selectedState === '주문상세화면' ? (
          <>
           <TopNavigation items={menuTypes} onMenuClick={setSelectedMenu}
                          selectedState={selectedState} setSelectedState={setSelectedState}
           />  
           <OptionMenu menuItems={menuItems} selectedItem={selectedItem} count={count} setCount={setCount}/>
          </>                     
        ) : null}
        <BottomNavigation selectedState={selectedState} setSelectedState={setSelectedState}
                          setSelectedBasket={setSelectedBasket} item={selectedItem}
                          count={count}
       />
    </div>
  )
  
}

export default App;
