//Setting the base iteration
var a_index = 0;
var b_index = 0;


var i = 0;
var j = 0;
var i2 = 0;
var j2 = 0;
var i3 = 0;
var j3 = 0;
var t = Date.now();
var t1 = 0;
var t2 = 0;
var t3 = 0;
var rep = 0;
var rep_base = 2;
function merge_sort() {
    text("Best: n log n,     Average: n log n,     Worst: n log n,     Memory: 1", (50 * wpx) + 110, 60);

    fill("#fffff");
    let tw = windowWidth - 290;
    let th = 100;





    text("10 numbers:", (50 * wpx) + 110, 90);

    // rect(250, 100, tw, th);
    let vw = tw / 10;
    v10.forEach((v, id) => {

        rect(250 + (vw * id), 100 + (10 * (10 - v)), vw + 1, 10 * v);
    })
	
	
	v10 = mergeSort(v10);
	if(t1 == 0)
        t1 = Date.now() - t;
        textSize(32);
        fill('#420690');
		text("Done in " + t1 + " ms", (75 * wpx) + 110, 175)
        textSize(20);
        fill("#fffff");

	// First Case of sorting; in pairs

			// Getting the number of sub-group

    text("100 numbers:", (50 * wpx) + 110, 230);
    //Temp rect
    // rect(250, 240, tw, th);
    vw = tw / 100;

    v100.forEach((v, id) => {
        rect(250 + (vw * id), 340 - v, vw + 1, 1 * v);
    })
	v100 = mergeSort(v100);
	if (t2 == 0)
		t2 = Date.now() - t;
    textSize(32);
    fill('#420690');
    text("Done in " + t2 + " ms", (75 * wpx) + 110, 315)
    textSize(20);
    fill("#fffff");
	
	
	
    text("1000 numbers:", (50 * wpx) + 110, 370);
    //Temp rect
    // rect(250, 380, tw, th);
    vw = tw / 1000;
    v1000.forEach((v, id) => {

        rect(250 + (vw * id), 480 - (0.1 * v), vw + 1, 0.1 * v);
    })

	v1000 = mergeSort(v1000);
	if (t3 == 0)
        t3 = Date.now() - t;
    textSize(32);
    fill('#420690');
    text("Done in " + t3 + " ms", (75 * wpx) + 110, 452)
    textSize(20);
    fill("#fffff");
}

function merge_sort_reset() {
    i = 0;
    j = 0;
    i2 = 0;
    j2 = 0;
    i3 = 0;
    j3 = 0;
    t = Date.now();
    t1 = 0;
    t2 = 0;
    t3 = 0;
	rep = 0;
	rep_base = 2;
	a_index = 0;
    b_index = 0;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


function mergeSort (arr) {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2); 
  const left = arr.slice(0, middle); 
  const right = arr.slice(middle);

  return merging(
    mergeSort(left),
    mergeSort(right)
  );
}

function merging (left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}