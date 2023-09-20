let wordHolder = document.getElementById("wordHolder");
let usedLetterHolder = document.getElementById("usedLettersBox");
let resultPage = document.getElementById("resultPage");
let restartBtn = document.getElementById("restartBtn");
let keyboardBtn = document.getElementsByClassName('alphabet');
let mistakeCounter = 0;
let words = ["ریحانه","نیلوفر","نازنین","کیمیا","شهرزاد","فرناز","مهرناز","مژگان","معصومه","رومینا","گلچهره","دلاویز","سمانه","پریناز","بهنوش","سپیده","سعیده","سمیرا","گلشیفته","گلناز","بارانا","علیرضا","رادوین","ارشیا","امیرعلی","سامیار","عرفان","ماکان","سیروان","زانیار","ابوالفضل","ارسلان","بهزاد","سامان","شاهین","کیارش","حمیدرضا","کیکاوس","کوروش","کاوه"]
let wordToFind = "";
