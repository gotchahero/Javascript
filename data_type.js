// no error
{

let nam = prompt('이름을 입력해주세요.', 100);
alert(`반가워 ${nam}!`); 
//result = prompt(title, [default]);
let message = "hello";
message = 123456;

let n = 123;
n = 12.345;

i = Infinity; // 무한대를 뜻함
_i = -Infinity; // 음의 무한대
Na_n = NaN; // 이런 숫자들을 특수 숫자라고 한다.

alert(1 / 0); // 무한대로 나옴(zero division error가 아니다?)

alert( Infinity ); //무한대로

alert( "Non number" / 2); // 결과값은 NaN, 문자열을 숫자로 나누면 에러

alert("non number" / 2 + 5); // 역시 NaN, 이런 케이스는 왠만해선 다 NaN으로 나온다.

let name_field_checked = true; //네, namefiled가 확인되었습니다.ㄴ
let name_age_filed_checked = false;//아니요, age field를 확인하지 않았습니다.
let name = "hello";
let is_greater = 4 > 1;

alert(is_greater); // true(비교 결과 "yes")

let age = null; // 다른 언어의 null과는 다르다
//일반적인 null은 존재하지 않은 객초에 대한 참조나 널포인터로 사용
//하지만 JS에선 존재하지 않는(nothing)값 비어있는(empty)값으로 나타낸다
//+알수없는값(unknown)

typeof age;

typeof n;

alert( `hello ${name}` );
}