import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY = 'videoplayer-current-time';

// код ліби
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// відстежуємо подію 'timeupdate' - оновлення часу відтворення.
const onPlay = function (data) {
  const currentTime = data.seconds;
  // Зберігаємо час відтворення у локальне сховище.
  localStorage.setItem(KEY, currentTime);
  console.log('currentTime', currentTime);
};
// Отримуємо збережений час
const saveTime = localStorage.getItem(KEY);
if (saveTime) {
  // Відновлення відтворення зі збереженої позиції після перезавантаження сторінки.
  player.setCurrentTime(saveTime);
}

player.on('timeupdate', throttle(onPlay, 1000));
