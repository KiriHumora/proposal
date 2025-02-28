const bear = document.querySelector('.bear');
const text = document.querySelector('.text');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const buttons = document.querySelector('.buttons');

yesButton.addEventListener('click', () => {
  bear.classList.add('hidden'); // Hide the bear
  text.classList.add('hidden'); // Hide the original text
  response.classList.remove('hidden'); // Show the new response
  buttons.classList.add('hidden'); // Hide the buttons
});

noButton.addEventListener('click', () => {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
  noButton.textContent = [
    'ပြန်မချစ်ဘူးလား', 
    'ပြန်ချစ်လိုက်ပါ', 
    'နှိပ်မရဘူးလေ', 
    'ငြင်းတဲ့ခလုတ်က error တက်နေတာ', 
    'ဟော လက်မလျော့သေးဘူးလား', 
    'ချစ်တာပါဆို'
  ][Math.floor(Math.random() * 6)];
});
