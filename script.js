const fortunes=[
    "大吉　素敵な出会いがあるかも！",
    "吉"　焦らず行動するといいことがある！,
    "中吉　少し勇気を出すと良いことが起きる",
    "小吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう"
    "大凶　相手に盲目になりすぎているかも"
];

const button = document.getElementById("omikuji-bt")
const result = document.getElementById("result")

button.addEventListener("click",function(){
    const randomNumber = Math.floor(Math.random()*fortunes.length);

    result.textContent = fortunes[(randomNumber)];
});