let count = 0;
const limit = 100;
const countElement = document.getElementById("count");

function incrementCounter() {
  count++;
  countElement.innerHTML = count;
  if(count === limit) {
    clearInterval(counterInterval);
  }
}

const counterInterval = setInterval(incrementCounter, 1000);
