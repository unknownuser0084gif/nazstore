
export default function useTimer() {

       const timerFunction = (totalSeconds, refEleme, doneCallback = null) => {
              if (!refEleme.current) return 0;
              let second = ""
              let minute = ""
              let time = totalSeconds
              let interval = setInterval(() => {
                     time -= 1;
                     second = time % 60;
                     minute = Math.floor(time / 60);
                     if (time <= 0) {
                            if (doneCallback) doneCallback();
                            clearInterval(interval);
                     }
                     refEleme.current.textContent = `${String(minute).padStart(2, 0)}:${String(second).padStart(2, 0)}`
              }, 1000)
       }

       return timerFunction
}
