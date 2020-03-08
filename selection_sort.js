

var t = Date.now();
var t1 = 0;
var t2 = 0;
var t3 = 0;
var i = 0;
var j = 0;

function selection_sort() {
    text("Best: n,     Average: n^2,     Worst: n^2,     Memory: 1", (50 * wpx) + 110, 60);

    fill("#fffff");
    let tw = windowWidth - 290;
    let th = 100;




    text("10 numbers:", (50 * wpx) + 110, 90);

    // rect(250, 100, tw, th);
    let vw = tw / 10;
    v10.forEach((v, id) => {

        rect(250 + (vw * id), 100 + (10 * (10 - v)), vw + 1, 10 * v);
    })
    
	v10 = selectionSort(v10);
        if (t1 == 0)
            t1 = Date.now() - t;
        textSize(32);
        fill('#420690');
        text("Done in " + t1 + " ms", (75 * wpx) + 110, 175)
        textSize(20);
        fill("#fffff");



    text("100 numbers:", (50 * wpx) + 110, 230);
    //Temp rect
    // rect(250, 240, tw, th);
    vw = tw / 100;

    v100.forEach((v, id) => {
        rect(250 + (vw * id), 340 - v, vw + 1, 1 * v);
    })
	v100 = selectionSort(v100);
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
	v1000 = selectionSort(v1000);
        if (t3 == 0)
            t3 = Date.now() - t;
        textSize(32);
        fill('#420690');
        text("Done in " + t3 + " ms", (75 * wpx) + 110, 452)
        textSize(20);
        fill("#fffff");

}
function shell_sort_reset() {
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
}

function selectionSort(array){
  for(i = 0; i < array.length; i++){
    //set min to the current iteration of i
    var min = i;
    for(j = i+1; j < array.length; j++){
      if(array[j] < array[min]){
       min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
};