// no error

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

