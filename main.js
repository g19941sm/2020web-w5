const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let storyText2 = '気温は華氏40度で外は寒かった。  :insertx: は出かけた。  :inserty: に着いた。:insertz:体重110ポンドの:insertx:は驚いたが、 Bobは驚かなかった。:inserty: ではよくあることだった。';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertX2 = ['スヌーピー','ミッキーマウス','サンタクロース'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertY2 = ['千駄ヶ谷','ディズニーランド','津田塾大学'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
let insertZ2 = ['雪が降っていた。','混雑していた。','雨が降っていた。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let newStory2 = storyText2;

  let xItem = randomValueFromArray(insertX);
  let x2Item = randomValueFromArray(insertX2);
  let yItem = randomValueFromArray(insertY);
  let y2Item = randomValueFromArray(insertY2);
  let zItem = randomValueFromArray(insertZ);
  let z2Item = randomValueFromArray(insertZ2);

  newStory = newStory.replace(':insertx:',xItem);
  newStory2 = newStory2.replace(':insertx:',x2Item);
  newStory = newStory.replace(':inserty:',yItem);
  newStory2 = newStory2.replace(':inserty:',y2Item);
  newStory = newStory.replace(':insertz:',zItem);
  newStory2 = newStory2.replace(':insertz:',z2Item);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
    newStory2 = newStory2.replace('Bob',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(110*0.453592) + 'kg';
    const temperature =  '摂氏'+Math.round((40-32) * 5 / 9) + '度';
    newStory2 = newStory2.replace('華氏40度',temperature);
    newStory2 = newStory2.replace('110ポンド',weight);
  }

  story.textContent = newStory;
  story.textContent = newStory2;
  story.style.visibility = 'visible';
}
