const $button = document.querySelector('button'); 
const $result = document.getElementById('notice');
const $input = document.getElementById('input');

const ageCalculatefunction = function(){
      
    const $value = document.getElementById('input').value;

    if ($value <= 0.6) {
        $result.innerHTML = '사람 나이로는 9세 입니다.';
    } else if ($value == 1) {
        $result.innerHTML = '사람 나이로는 15세 입니다.';
    } else if ($value == 2) {
        $result.innerHTML = '사람 나이로는 15세 입니다.';
    } else if ($value >= 3) {
        const plus = 24;
        let age, morethan;
        Math.floor(age = $value - 2);
        morethan = age * 4 + plus;
        $result.innerHTML = `사람 나이로는 ${morethan}세 입니다.`;
    } else {
        $result.innerHTML = "숫자만 입력해주십시오."
    }
}

const enterkey = function enterkey() { 
    if (window.event.keyCode == 13) { 
        // 엔터키가 눌렸을 때
        ageCalculatefunction(); 

    } 
}

$button.onclick = ageCalculatefunction;

$input.onkeypress = enterkey;

