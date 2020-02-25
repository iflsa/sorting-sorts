export default class sortInDiv {
  constructor(numbers, div) {

    new p5(function (p5) {
      let values = [];
      let w = numbers;
      let states = [];
      let timer = Date.now();
      let timeEnded;
      p5.setup = function () {
        p5.createCanvas(800, 250);
        values = new Array(p5.floor(p5.width / w));
        for (let i = 0; i < values.length; i++) {
          values[i] = p5.random(p5.height);
          states[i] = -1;
        }
        quickSort(values, 0, values.length - 1);
      }

      async function quickSort(arr, start, end) {
        if (start >= end) {
          return;
        }
        let index = await partition(arr, start, end);
        states[index] = -1;

        await Promise.all([
          quickSort(arr, start, index - 1),
          quickSort(arr, index + 1, end)
        ]);
      }

      async function partition(arr, start, end) {
        for (let i = start; i < end; i++) {
          states[i] = 1;
        }

        let pivotValue = arr[end];
        let pivotIndex = start;
        states[pivotIndex] = 0;
        for (let i = start; i < end; i++) {
          if (arr[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            states[pivotIndex] = -1;
            pivotIndex++;
            states[pivotIndex] = 0;
          }
        }
        await swap(arr, pivotIndex, end);

        for (let i = start; i < end; i++) {
          if (i != pivotIndex) {
            states[i] = -1;
            timeEnded = Date.now()
          }
        }

        return pivotIndex;
      }

      p5.draw = function () {
        p5.background(0);

        for (let i = 0; i < values.length; i++) {
          p5.noStroke();
          if (states[i] == 0) {
            p5.fill('#E0777D');
          } else if (states[i] == 1) {
            p5.fill('#FF0000');
          } else {
            p5.fill(255);
          }
          p5.rect(i * w, p5.height - values[i], w, values[i]);
        }
        p5.text("Numbers: " + p5.floor(p5.width / w), 100, 11)
        p5.text("Time: " + (timeEnded - timer) + " ms", 0, 11)
      }

      async function swap(arr, a, b) {
        await sleep(0);
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
      }

      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    }, div);
  }
}