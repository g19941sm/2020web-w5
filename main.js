const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

let storyText2 = '気温は摂氏-1度で外は寒かった。:insertx:は出かけた。 :inserty:に着いた時。 :insertz:体重50kgの :insertx:は驚いたが、私は驚かなかった。:inserty:ではよくあることだった';
let insertX2 = ['サンタクロース','ミッキーマウス','スヌーピー'];
let insertY2 = ['津田塾大学','ディズニーランド','千駄ヶ谷'];
let insertZ2 = ['混雑していた。','雪が降っていた。','風が強かった。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let newStory2 = storyText2;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  
  let xItem2 = randomValueFromArray(insertX2);
  let yItem2 = randomValueFromArray(insertY2);
  let zItem2 = randomValueFromArray(insertZ2);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  
  newStory2 = newStory2.replace(':insertx:',xItem2);
  newStory2 = newStory2.replace(':insertx:',xItem2);
  newStory2 = newStory2.replace(':inserty:',yItem2);
  newStory2 = newStory2.replace(':inserty:',yItem2);
  newStory2 = newStory2.replace(':insertz:',zItem2);

  if(document.getElementById("us").checked && customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
    story.textContent = newStory;
  }

  if(document.getElementById("日本").checked && customName.value !== '') {
    const name = customName.value;
    newStory2 = newStory2.replace('私',name);
    story.textContent = newStory2;
  }

  story.style.visibility = 'visible';
}
