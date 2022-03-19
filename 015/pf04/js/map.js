"use strict"
//global network
const light = document.querySelector('.light');
const network = document.querySelector('.global_network');
const map = network.querySelector('.map');
const allBtn = network.querySelector('.btn_list');

 
allBtn.addEventListener('click', (event)=>{
  event.target.classList.remove('on');
  const id = event.target.dataset.id;
  const area = document.querySelectorAll('.area'); 
  const globalList =document.querySelectorAll('.global_list');
  let lis_count = area[id].childElementCount; 
  let num =0;

//인덱스가 같다면 해당 나라의 해외지사 현황(파티클,프로젝트버블)띄우기
  for(let i=0; i<area.length; i++){
    if(id === area[i].dataset.id){
      area[i].classList.add('on');
      globalList[i].classList.remove('hidden');
      allBtn.children[i].classList.add('on');
  
    }else {
      area[i].classList.remove('on');
      globalList[i].classList.add('hidden'); 
      allBtn.children[i].classList.remove('on');
    }
  }
 // 시간차 파티클효과 
  setInterval(function(){
    const active_li =area[id].children;
    // console.log(active_li[0])

    if(active_li[num] && num<lis_count){
      active_li[num].classList.remove('hidden');
      num++;
    }
}, 100);

}); 
  
// 나라별 좌표
let asia = [ 
  {x: 571, y: 133},
  {x: 548, y: 185},
  {x: 521, y: 144},
  {x: 496, y: 122},
  {x: 496, y:70},
  {x: 432, y:82},
  {x: 524, y: 260},
  {x: 513, y: 173},
  {x: 438, y: 181},
  {x: 508, y: 242},
  {x: 495, y: 215},
  {x: 544, y: 168},
  {x: 508, y: 192},
];
let america = [   
  {x: 792, y: 135},
  {x: 848, y:77},
];
let middleEast = [ 
  {x: 376, y: 110},
  {x: 214, y: 145}, 
  {x: 276, y: 162}, 
  {x: 329, y: 128},  
  {x: 362, y: 181},   
  {x: 376, y: 174},   
  {x: 345, y: 150},   
  {x: 358, y: 163},   
  {x: 340, y: 173},   
];
let europe = [  
  {x: 242, y:94},
  {x: 317, y:65},
];
let oceania = [  
  {x: 613, y: 324},
  
];
//나라별 클래스할당하고 숨겨둠
let id= 0;
function addItem(array, cName, path) {
  const div = document.createElement('div');
  for (let i = 0; i < array.length; i++) {
    const fig = document.createElement('figure'); 
    fig.setAttribute('class', cName);
    fig.style.left = array[i].x/map.clientWidth * 100 + "%";
    fig.style.top =  array[i].y/map.clientHeight * 100 + "%";
    div.appendChild(fig);
  };
  div.setAttribute('class', `area `); 
  div.setAttribute('data-id', id); 
  map.appendChild(div);
  id++;
}

addItem(america, 'light ');
addItem(middleEast, 'light hidden');
addItem(asia, 'light hidden');
addItem(europe, 'light hidden');
addItem(oceania, 'light hidden');
document.querySelector('.map .area[data-id="0"]').classList.add('on');

//나라별 지사 프로젝트 버블 슬라이더
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,  
});

const global_swiper01 = new Swiper('.america .swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const global_swiper05 = new Swiper('.oceania .swiper', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
});