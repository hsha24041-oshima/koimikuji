const fortunes=[
    "大吉　素敵な出会いがあるかも！",
    "吉　焦らず行動するといいことがある！",
    "中吉　少し勇気を出すと良いことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう",
    "大凶　相手に盲目になりすぎているかも"
];

const button = document.getElementById("omikuji-bt");
const result = document.getElementById("result");
const advice = document.getElementById("advice");
button.addEventListener("click",function(){
    const randomNumber = Math.floor(Math.random()*fortunes.length);
    const resultText = fortunes[(randomNumber)]

    result.textContent = fortunes[(randomNumber)];
    
    if (resultText.includes("大吉")) {
        result.style.color ="red";
        advice.textContent = "今日は積極的に行動しよう！";
    }else if (resultText.includes("大凶")){
        result.style.color ="blue";
         advice.textContent = "家で大人しく過ごそう";
    }else (resultText.includes("中吉")){
        result.style.color ="black";
         advice.textContent ="自分から話しかけてみよう！"
    }
});