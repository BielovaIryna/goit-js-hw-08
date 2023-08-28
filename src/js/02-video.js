
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe'); const player = new Player(iframe);
const LS_KEY = "videoplayer-current-time"
const onPlay = (data) => {
    localStorage.setItem(LS_KEY, data.seconds)
}
const throttleOnPlay = throttle(onPlay, 1000)
player.on("timeupdate", throttleOnPlay)

 player.setCurrentTime(localStorage.getItem(LS_KEY)).then(function (seconds) {
    // seconds = the actual time that the player seeked to
 }).catch(function (error) {
     switch (error.name) {
         case 'RangeError':
                   break;

         default:
            
            break;
    }
});
