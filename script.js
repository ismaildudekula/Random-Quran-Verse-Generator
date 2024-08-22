const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdelhaleem/";

const verse = document.querySelector("#verse");
const chapterNumber = document.querySelector("#chapterNumber");
const verseNumber = document.querySelector("#verseNumber");

let chapterNum = Math.floor(Math.random()*114) + 1;

async function getVerse(){
    let raw = await fetch(`${BASE_URL}${chapterNum}.json`);
    let jsonData = await raw.json();
    let verses = jsonData["chapter"].length;
    let verseNum = Math.floor(Math.random()*verses);
    verse.innerText = jsonData["chapter"][verseNum]["text"];
    chapterNumber.innerText = chapterNum;
    verseNumber.innerText = verseNum + 1;
}
getVerse();