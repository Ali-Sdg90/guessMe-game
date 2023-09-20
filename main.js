const wordHolder = document.querySelector(".wordHolder");
const failedLetters = document.querySelector(".failedLetters");
const restartBtn = document.querySelector(".restartBtn");
const keyboardBtns = document.querySelectorAll("keyboard button");
const wordToFind = document.querySelector(".wordToFind");
const endGameScreen = document.querySelector(".endGame");
const names = [
    "ریحانه",
    "نیلوفر",
    "نازنین",
    "کیمیا",
    "شهرزاد",
    "فرناز",
    "مهرناز",
    "مژگان",
    "معصومه",
    "رومینا",
    "گلچهره",
    "دلاویز",
    "سمانه",
    "پریناز",
    "بهنوش",
    "سپیده",
    "سعیده",
    "سمیرا",
    "گلشیفته",
    "گلناز",
    "بارانا",
    "علیرضا",
    "رادوین",
    "ارشیا",
    "امیرعلی",
    "سامیار",
    "عرفان",
    "ماکان",
    "سیروان",
    "زانیار",
    "ابوالفضل",
    "ارسلان",
    "بهزاد",
    "سامان",
    "شاهین",
    "کیارش",
    "حمیدرضا",
    "کیکاوس",
    "کوروش",
    "کاوه",
];

let mistakeCounter = 0;
let correctCounter = 0;

let ArrayToFind = [];
let selectedName = "";

const endGame = (txt) => {
    endGameScreen.querySelector(".endGame-message").textContent = txt;

    endGameScreen.style.display = "flex";
    setTimeout(() => {
        endGameScreen.style.opacity = "1";
    }, 500);
};

const btnFunc = (key) => {
    console.log(key.textContent);

    if (ArrayToFind.includes(key.textContent)) {
        console.log("yes");

        for (let i = 0; i < ArrayToFind.length; i++) {
            if (key.textContent === ArrayToFind[i]) {
                document.querySelectorAll(".wordToFind div")[i].textContent =
                    ArrayToFind[i];
            }
        }

        correctCounter++;
    } else {
        document.querySelectorAll(".failedLetters div")[
            mistakeCounter++
        ].textContent = key.textContent;
    }

    key.disabled = true;

    // lose
    if (mistakeCounter >= ArrayToFind.length) {
        endGame(
            `متاسفانه با وجود تلاش خوبت نتونستی کلمه درست رو حدس بزنی. کلمه درست "${selectedName}" بود.`
        );
    }
    // win
    if (correctCounter === ArrayToFind.length) {
        endGame(
            `دمت گرم گل کاشتی ، زدی به هدف، حدس زدن "${selectedName}" کار سختی بود ولی از پسش براومدی.`
        );
    }
};

const randomNumber = Math.floor(Math.random() * names.length);

// console.log(names[randomNumber],names[randomNumber].length);

selectedName = names[randomNumber];
console.log(selectedName);

// little help ;)
document.querySelectorAll(".wordBox")[0].title = selectedName;
document.querySelectorAll(".wordBox")[1].title = selectedName;

for (let i = 0; i < selectedName.length; i++) {
    ArrayToFind.push(selectedName.charAt(i));

    const nameDiv = document.createElement("div");
    // nameDiv.textContent = selectedName.charAt(i);
    nameDiv.textContent = "-";
    // console.log(nameDiv);
    wordToFind.appendChild(nameDiv);

    const letterDiv = document.createElement("div");
    letterDiv.textContent = "-";
    failedLetters.appendChild(letterDiv);
}

document.querySelector(".restartBtn").addEventListener("click", () => {
    setTimeout(() => {
        location.reload();
    }, 300);
});
