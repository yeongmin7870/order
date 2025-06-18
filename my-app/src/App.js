import './App.css';
import React from 'react';


const menuTypes = ['신메뉴', '추천메뉴', '커피', '디카페인'];

// 검색박스
const SearchBox = () => {
  return(
<div class="container-input">
  <input type="text" placeholder="Search" name="text" class="input"/>
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

const Card = () => {
  return (
<div class="card"></div>
  );
}


const BottomNavigation = () => {
  return (

<div class="button-container">
  <button class="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      stroke-width="0"
      fill="currentColor"
      stroke="currentColor"
      class="icon"
    >
      <path
        d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
      ></path>
    </svg>
  </button>
  <button class="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      aria-hidden="true"
      viewBox="0 0 24 24"
      stroke-width="2"
      fill="none"
      stroke="currentColor"
      class="icon"
    >
      <path
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
  </button>
  <button class="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      stroke-width="0"
      fill="currentColor"
      stroke="currentColor"
      class="icon"
    >
      <path
        d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
      ></path>
    </svg>
  </button>

  <button class="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      stroke-linejoin="round"
      stroke-linecap="round"
      viewBox="0 0 24 24"
      stroke-width="2"
      fill="none"
      stroke="currentColor"
      class="icon"
    >
      <circle r="1" cy="21" cx="9"></circle>
      <circle r="1" cy="21" cx="20"></circle>
      <path
        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      ></path>
    </svg>
  </button>
</div>


  );
}



function App() {

  return (
    <div className="App">          
      <SearchBox />
      <TopNavigation items={menuTypes} />
      <Card />
      
      <hr/>
      <BottomNavigation/>
    </div>
  );
}




export default App;
