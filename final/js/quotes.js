const quotes = [
    {
        quote: "대충 검은 바탕에 아무말이나 써갈귀면 있어 보인다.",
        author: "전 웹툰작가 침착맨",
    },
    {
        quote: "어제와 같은 삶은 살고 내일 다른 삶이 기대하기를 바라는 사람은 정신병자이다.",
        author: "아이슈타인",
    },
    {
        quote: "격언은 결코 새로운 이야기는 아니지만 항상 위안을 준다.",
        author: "귀스타브 플로베르",
    },
    {
        quote: "진인사대천명",
        author: "고사성어",
    },
    {
        quote: "사람은 오로지 가슴으로만 올바로 볼 수 있다. 본질적인 것은 눈에 보이지 않는다",
        author: "생땍쥐페리",
    },
    {
        quote: "승리하면 조금 배울 수 있고 패배하면 모든 것을 배울 수 있다.",
        author: "메튜슨",
    },
    {
        quote: "배움이 없는 자유는 언제나 위험하며 자유가 없는 배움은 언제나 헛된 일이다",
        author: "케네디",
    },
    {
        quote: "예의는 남과 화목함을 으뜸으로 삼는다 ",
        author: "논어",
    },
    {
        quote: "군자가 예절이 없으면 역적이 되고, 소인이 예절이 없으면 도적이 된다",
        author: "명심보감",
    },
    {
        quote: "군자보구십년불만",
        author: "고사성어",
    },
    {
        quote: 'I never dreamed about success, I worked for it',
        author: 'Estee Lauder'
    },
    {
        quote: 'Do not try to be original, just try to be good.',
        author: 'Paul Rand'
    },
    {
        quote: 'Do not be afraid to give up the good to go for the great',
        author: 'John D. Rockefeller'
    },
    {
        quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
        author: 'Martin Luther King Jr.'
    },
    {
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author: 'Thomas Edison'
    },
    {
        quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
        author: 'REid Hoffman'
    },
    {
        quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
        author: 'Tim O Reilly'
    },
    {
        quote: 'Some people dream of success, while other people get up every morning and make it happen',
        author: 'Wayne Huizenga'
    },
    {
        quote: 'The only thing worse than starting something and falling.. is not starting something',
        author: 'SEth Godin'
    },
    {
        quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
        author: 'Jim Rohn'
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


// console.log(quotes[Math.round(Math.random() * 10)]);
const todaysQuote = quotes[Math.round(Math.random() * quotes.length)];
// console.log(todaysQuote);
// console.log(quote);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;