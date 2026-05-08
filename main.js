'use strict';

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const message = document.getElementById('message');

  const fortunes = [
    { result: '大大大大吉', message: '今日は最強の日！✨' },
    { result: '大吉', message: 'いいことありそう😊' },
    { result: '中吉', message: '焦らずいこう◎' },
    { result: '凶', message: '今日はゆっくり休もう🍵' },
    { result: '小吉', message: '小さな幸せ見つかるかも🌸' },
    { result: '末吉', message: 'のんびりが吉☁️' }
  ];

  btn.addEventListener('click', () => {
    result.classList.remove('lucky');


    const n = Math.floor(Math.random() * fortunes.length);

    result.textContent = fortunes[n].result;
    message.textContent = fortunes[n].message;

    if (
      fortunes[n].result === '大吉' ||
      fortunes[n].result === '大大大大吉'
    ) {
      result.classList.add('lucky');
    }

    if (fortunes[n].result === '大大大大吉') {
      confetti({
        particleCount: 300,
        spread: 360,
        startVelocity: 50,
        ticks: 200,
        origin: { x: 0.5, y: 0.5 }
      });
    }
  });

  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  document.getElementById('date').textContent =
    `${year}年${month}月${day}日`;
}