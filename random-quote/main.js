"use strict";

const changeBgColor = document.querySelectorAll(".change-bg-color"); // 背景色を変更するために使用する
const quoteContent = document.getElementById("quote-content"); // 引用文と著者・発言者名のフェードインに使用する
const text = document.getElementById("text"); // 引用文を変更するために使用する
const author = document.getElementById("author"); // 著者・発言者名を変更するために使用する
const tweetQuote = document.getElementById("tweet-quote"); // Twitterへのリンクを変更するために使用する
const newQuote = document.getElementById("new-quote"); // ボタン操作のために使用する

// 引用文（および著者・発言者名など）のデータ
const quoteArr = [
  {
    author: "Socrates",
    text: "To do is to be.", // 自分が成りたいものになるよう行動せよ。
    color: "#493759", // 深紫
  },
  {
    author: "Theodore Roosevelt",
    text: "Do what you can, with what you have, where you are.", // あなたにできることをしなさい。今あるもので、今いる場所で。
    color: "#8f8667", // 利休色
  },
  {
    author: "Benjamin Franklin",
    text: "If you love life, don't waste time, for time is what life is made up of.", // 時間を浪費してはいけない。人生は時間の積み重ねなのだから。
    color: "#2b2b2b", // 蝋色
  },
  {
    author: "Mohandas Karamchand Gandhi",
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", // 明日死ぬと思って生きなさい、永遠に生きると思って学びなさい。
    color: "#762f07", // 栗色
  },
  {
    author: "Albert Einstein",
    text: "Learn from yesterday, live for today, hope for tomorrow.", // 過去から学び、今日のために生き、明日への希望とする。
    color: "#ec6800", // 人参色
  },
  {
    author: "Peter Ferdinand Drucker",
    text: "Build on your own strength.", // 強みの上に築け。
    color: "#769164", // 老竹色
  },
  {
    author: "Michael Jeffrey Jordan",
    text: "Step by step. I can't see any other way of accomplishing anything.", // ステップ・バイ・ステップ。どんなことでも、何かを達成する場合にとるべき方法はただひとつ、一歩ずつ着実に立ち向かうことだ。これ以外に方法はない。
    color: "#c85554", // 銀朱
  },
  {
    author: "Bob Dylan",
    text: "Boy, go and follow your heart And you'll be fine at the end of the line.", // 心のままに行け。最後はきっとうまく行くはずだから。
    color: "#17184b", // 鉄紺
  },
  {
    author: "Tina Seelig",
    text: "Failures are also a sign that you have taken on challenges that expand your skills.", // 失敗は、その人がスキルを広げる挑戦をした証。
    color: "#3f312b", // 赤墨
  },
  {
    author: "Pele",
    text: "Everything is practice.", // すべては練習のなかにある。
    color: "#f8b500", // 山吹色
  },
];

// コンテンツを変更する関数
const randomQuote = () => {
  const random = Math.floor(Math.random() * quoteArr.length); // quoteArrからランダムに取得するための値

  // 内容の変更
  text.textContent = quoteArr[random].text; // 引用文を変更
  author.textContent = quoteArr[random].author; // 著者・発言者名を変更

  // 文字色に関わる変更
  text.style.color = quoteArr[random].color; // 引用文の文字色を変更
  author.style.color = quoteArr[random].color; // 著者・発言者名の文字色を変更
  text.classList.add("color-anime"); // 引用文の文字色変更時にアニメを加える
  author.classList.add("color-anime"); // 著者・発言者名の文字色変更時にアニメを加える

  // 引用文と著者・発言者名のフェードインアニメ
  quoteContent.animate(
    // キーフレーム
    [
      { opacity: 0 },
      { opacity: 1 }
    ],
    {
      duration: 2500, // アニメ開始から終了までの時間（ミリ秒）
      fill: 'forwards' // アニメ完了後に最初の状態に戻さない
    }
  );

  // 背景色に関わる変更
  [...changeBgColor].map(val => {
    val.style.backgroundColor = quoteArr[random].color; // 背景色を変更
    val.classList.add("bg-color-anime"); // 背景色変更時にアニメを加える
  })

  // Twitterへのリンクに関わる変更
  const twitterURLBase = "https://twitter.com/intent/tweet?hashtags=quotes&related=dummyAccount&text=";
  tweetQuote.setAttribute("href", `${twitterURLBase}"${quoteArr[random].text}" ${quoteArr[random].author}`);

};

// 初回実行
randomQuote();

// クリックされたら、コンテンツの変更を実行
newQuote.addEventListener("click", () => randomQuote());
