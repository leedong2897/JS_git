/*
참조: https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html
  

  [호이스팅]
    : 선언문이 유효 범위의 상단으로 끌어 올리는 행위를 의미한다. 
      
        (호이스팅에서 알아야할 개념)
         - var 변수 호이스팅 적용 문제
         - 함수 선언식 호이스팅 적용 되지 않는 문제 
      
      --> 이렇게 수정) 선언되 변수가 전역 범위 함수 범위따라 호이

      1. var 변수 호이스팅  


       // 변수
  /*
이러한 현상을, Hoisting 이라고 부른다.
변수 또한 Hoisting 된다.
예를 들어서, 다음과 같은 코드를 실행한다면,  
*/
console.log(number);

/*
ReferenceError: number is not defined. 란 오류가 발생한다. 

그렇지만 다음과 같은 코드는 
*/
console.log(number);
var number = 2;

/*
undefined가 출력된다.
자바스크립트 엔진이 위 코드를 해석 할 때는 다음과 같이 받아들이게 된다.
*/
var number;
console.log(number);
number = 2;

/*
반면, const 와 let 은 hoisting 이 발생하지 않고(정확히 말하면  호이스팅은 되지만 
변수생성과정이 달라서 일시적인 사각지대(TDZ)가 생성되어 초기화전엔 액세스할수 없다는 
레퍼런스 에러를 표시), 에러가 발생하게 된다. 
Codesandbox 에서는 자바스크립트가 Babel 이라는 도구에 의하여 const 와 let 이 
var 로 변환되기 때문에 오류가 발생하지 않는다. Chrome 개발자 도구의 콘솔에서 
다음 코드를 실행해보자!.
*/
// 2. 함수 호이스팅

// [ 함수 표현식 ]
a('짱구');
var a = function (name) {
  console.log("I love " + name);
}

a('철수')

//================================================//

// [ 함수 선언식 ]
b('신짱구');

function b(name) {
  console.log("I love " + name);
}
b('김철수')
/*
  - > 함수 표현식에서는 선언한 것(var a;)이 먼저 최상단('var a;')으로 끌어올려지고 
      할당 내용은 그대로이기 때문에(선언한 변수 a가 함수라는 값으로 정의되지 않은 상태, 
      즉 undefined 값이므로) 'a is not a function'이란 에러가 발생한다. 
      다음으로 함수 선언식에서는 이러한 호이스팅이 적용되지 않아서 함수를 정의하지
      않았는데도 불구하고 출력되는 것을 확인할 수 있다.

      함수를 생성하는 방식에는 1. 함수표현식(변수에 함수를 담는 방법) 
      2. 함수선언식('function a(){}')이 있는데 이런 문제(호이스팅)는 변수에 함수를 
      담는 함수 표현식에만 적용이 되고 함수 선언식에는 적용이 되지 않는다. 
      이러한 문제로 자바스크립트 Guru로 알려진 더글라스 그락포드는 함수 생성에
      있어서 그의 저서 '더글라스 크락포드의 자바스크립트 핵심 가이드'에서 '함수
      표현식'만을 사용할 것을 권하고 있다. 

*/

/*

    1. var 변수 호이스팅
        : var는 호이스팅 되는 문제가 있다. 

        console.log(value); //undefined가
        var value = 12;

        -> 변수를 생성하기 전에 출력하는 형태이다. 존재하지 않는
           변수를 출력했는데 전혀 문제가 없다. 이것이 가능한 이유는
           호이스팅으로 인해 변수의 선언부(var value;)가 출력문 위로
           끌어올려졌기에 가능해진거다.  따라서 어떠한 값도 넣어 주지 않는
           상태이므로 undefined가 출력이 된다. 

           따라서 let, const를 사용하는 것이 좋다.




     2. 함수 선언식 호이스팅
         : function func () {} 이와같은 형태로 만든 함수가 함수 선언식인데
           이렇게 만든 함수 선언식은 호이스팅이 적용되지 않는다.

         myFunction();

        function myFunction() {
        console.log('hello world!');
        }  

        -> 함수를 생성하기 전에 출력하는 형태이다. 아직 존재하지 않는 함수를
           실행(호출)했는데 전혀 문제가 되지 않는다. 이것은 자바스크립트 엔진
           이 코드를 해석하는 과정에서 함수 생성 부분을 먼저 찾아보고 그 다음 
           출력하기 때문이다. 쉽게 말해 아래처럼 함수 생성한 부분이 끌어올려져
           서 실행이 가능했던 거다.   
           
           function myFunction() {
           console.log('hello world!');
           }

           함수 선언식으로 사용하면 이러한 호이스팅이 발생하므로 주의해서
           사용해야 하며, 되도록 함수 표현식을 사용하는 것이 좋다. 
     
*/

// var 변수 호이스팅
console.log(num);
var num = 12;
console.log(num);



// 함수 선언식 호이스팅

myFunction();

function myFunction() {
  console.log('hello world!');
}

/*
위 코드에서는 myFunction 함수를 선언하기 전에, myFunction() 을 호출해주었다. 
함수가 아직 선언되지 않았음에도 불구하고 코드는 정상적으로 작동하게 된다.

이게 잘 작동하는 이유는, 자바스크립트 엔진이 위 코드를 해석하는 과정에서, 
다음과 같이 받아들어지기 때문이다.
*/

function myFunction() {
  console.log('hello world!');
}

myFunction();



function fn() {
  console.log(a);
  let a = 2;
}
fn();

/*
Hoisting 은 자바스크립트 엔진이 갖고 있는 성질이며, Hoisting을 일부러 할 필요는 없지만, 
방지하는 것이 좋다. 왜냐하면 Hoisting이 발생하는 코드는 이해하기 어렵기 때문에 유지보수도 
힘들어지고 의도치 않는 결과물이 나타나기 쉽기 때문이다.

Hoisting 을 방지하기 위해서, 함수의 경우 꼭 선언 후에 호출을 하도록 주의를 하고, var 대신 
const, let 을 위주로 사용한다. 추가적으로, 나중에 자바스크립트 개발을 본격적으로 하게 될 때에는
ESLint 라는것을 사용하여 Hoisting이 발생하는 코드는 에디터상에서 쉽게 발견해낼 수있다.
*/