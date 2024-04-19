// 구현

// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. Intersectionobserver를 사용해서 모든 섹션들을 관찰해야 한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여주는 섹션;

// 다수의 섹션이 동시에 보여진다면 . 가장 첫번째 섹션을 선택
// 마지막 contant 모두 보여질때 섹션을 선택


// 각각의 화면에 보여주는 섹션들을 배열로 선택후 
const sectionIds = ['#home','#about','#skills','#work','#testmonials','#contant'];
// 가져올 섹션을 map  id 추출해서 변수에 지정한다
const sections = sectionIds.map(id => document.querySelector(id));

// console.log(sectionIds);
// console.log(sections);

// 태그중에 href="#home" 등 6가지를 가져오게 한다
const naveItems = sectionIds.map( id => document.querySelector(`[href="${id}"]`));

// 현재 보여주는 섹션을 확인
const visibleSections = sectionIds.map( () => false);
// console.log(naveItems);

//첫번째 섹션은 선택되어 있음
let activeNavItem = naveItems[0];


const options = {
    rootMargin:'-20% 0px 0px 0px',
    threshold:[0,0.98],
};
const observer = new IntersectionObserver ( obseverCallback , options);

//관철자 설정
sections.forEach( section => observer.observe(section));

// 콜백 함수
function obseverCallback(entries){

     let selectLastOne;

     entries.forEach( entry => {

         const index = sectionIds.indexOf(`#${entry.target.id}`);

         
         visibleSections[index] = entry.isIntersecting;
         
        //  console.log(index);
        //  console.log(entry.target);
        //  console.log(entry.isIntersecting);
        //  console.log(entry.intersectionRatio);


        // 마지막 섹션은 아래 3개 만족할경우 true 아닐경우 false 처리됨
        selectLastOne = index === sectionIds.length - 1
         && entry.isIntersecting 
         && entry.intersectionRatio >= 0.95
     });

    //  console.log(visibleSections);
    //  console.log(selectLastOne);


     const navIndex = selectLastOne ? sectionIds.length - 1 : findFristIntersection(visibleSections);
    //  console.log( sectionIds[navIndex]);
     selectNavItem(navIndex);
    //  const navItem
};


function findFristIntersection(intersections) {
    const index = intersections.indexOf(true);
    return index >=0 ? index : 0
}

  // 메뉴 활성화 
function selectNavItem(index){
    const navItem = naveItems[index];
    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active')
};