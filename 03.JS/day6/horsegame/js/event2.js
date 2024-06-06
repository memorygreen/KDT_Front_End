//쌤풀이


let move = 0; //자:말의 위치 변수 선언

// STEP1. moveLeft 함수를 선언한다. 
    
    // STEP5. moveLeft 함수 안에 내용을 넣는다 
    //        5-1) id가 horse 인 말을 js로 가져온다.
    //        5-2) moveLeft 함수가 호출 될 때 마다, 그 말이 왼쪽으로 50px씩 이동
    //              단, 말은 배경을 벗어나지 않도록 한다. 

const moveLeft = ()=>{
    console.log('move left');
    if(move < 1200){
        move +=50
        document.getElementById('horse').style.right = move + "px";
    }
}



// STEP2. moveRight 함수를 선언한다. 
    // STEP6. moveRight 함수 안에 내용을 넣는다. 
    //        6-1) id가 horse 인 말을 js로 가져온다. 
    //        6-2) moveRight 함수가 호출 될 때 마다, 그 말이 오른쪽으로 50px씩 이동 
    //              단, 말은 배경을 벗어나지 않도록 한다. 

    const moveRight = ()=>{
        console.log('move right');

        if(move > 0){
            move -= 50;
            document.getElementById('horse').style.right = move + 'px';
        }
    }

// STEP3. 'btn' 이라는 클래스 이름을 가진 첫번째 버튼 (LEFT)을 누르면,
//          moveLeft 함수가 호출된다.
document.getElementsByClassName('btn left')[0].addEventListener('click', moveLeft);


// STEP4. 'btn' 이라는 클래스 이름을 가진 두번째 버튼 (RIGHT) 를 누르면,
//          moveRight 함수가 호출된다. 
document.getElementsByClassName('btn right')[0].addEventListener('click', moveRight);


// **힌트
// 1. 오른쪽과 왼쪽은 결국 하나의 축으로 이루어져있다. 
// 2. js 로만 해결하는게 헷갈린다면 css로 가서 이것저것 수정해보면서 
//      내가 수정해줘야할 스타일을 적용해 볼 것 
// 3. 익명함수 사용 X , 꼭 함수 선언해서 사용할 것 

const jump = () =>{
    console.log('jump f')
    document.getElementById('horse').animate([
        { bottom : '200px'},
        { bottom : '400px'},
        { bottom : '200px'}
    ], {
        duration : 20 //자:지속시간(0.7초)
    })
}


// +) 추가기능 1 : 키보드로 조작하기
document.getElementsByTagName('body')[0].addEventListener('keydown', (e)=>{
    console.log(e.key);
    if(e.key=== "ArrowLeft"){
        moveLeft();
    }else if(e.key === "ArrowRight"){
        moveRight();
    }else if (e.key === " "){
        jump();
    }
});



/* 
//자영풀이
// STEP1. moveLeft 함수를 선언한다. 
// STEP5. moveLeft 함수 안에 내용을 넣는다 
//        5-1) id가 horse 인 말을 js로 가져온다.
//        5-2) moveLeft 함수가 호출 될 때 마다, 그 말이 왼쪽으로 50px씩 이동
//              단, 말은 배경을 벗어나지 않도록 한다. 

let horse = document.getElementById('horse')

let div = document.getElementById('id');

let move_num=0; 
moveLeft = ()=>{
    
    console.log('move left');
    
    console.log('horse right : ' + horse.style.right);
    if(move_num<=1150){
        move_num = move_num+50;

    }
    horse.style.right = `${move_num}px`;

};



// STEP2. moveRight 함수를 선언한다. 
// STEP6. moveRight 함수 안에 내용을 넣는다. 
//        6-1) id가 horse 인 말을 js로 가져온다. 
//        6-2) moveRight 함수가 호출 될 때 마다, 그 말이 오른쪽으로 50px씩 이동 
//              단, 말은 배경을 벗어나지 않도록 한다. 

moveRight = ()=>{
    console.log('move right');
    if(move_num>0){
        move_num = move_num-50;
    }
    horse.style.right = `${move_num}px`;

}



// STEP3. 'btn' 이라는 클래스 이름을 가진 첫번째 버튼 (LEFT)을 누르면,
//          moveLeft 함수가 호출된다.
let btn_left = document.getElementsByClassName('btn left')[0];
btn_left.addEventListener('click', moveLeft);

// STEP4. 'btn' 이라는 클래스 이름을 가진 두번째 버튼 (RIGHT) 를 누르면,
//          moveRight 함수가 호출된다. 
let btn_right = document.getElementsByClassName('btn right')[0];
btn_right.addEventListener('click', moveRight);

// **힌트
// 1. 오른쪽과 왼쪽은 결국 하나의 축으로 이루어져있다. 
// 2. js 로만 해결하는게 헷갈린다면 css로 가서 이것저것 수정해보면서 
//      내가 수정해줘야할 스타일을 적용해 볼 것 
// 3. 익명함수 사용 X , 꼭 함수 선언해서 사용할 것 

*/