

var t = Date.now();
var t1 = 0;
var t2 = 0;
var t3 = 0;

function shell_sort() {
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
    
	v10 = shellSort(v10);
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
	v100 = shellSort(v100);
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
	v1000 = shellSort(v1000);
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

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


function shellSort(arr) {
    var change = arr.length / 2;
    while (change > 0) {
        for (i = change; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];
    
            while (j >= change && arr[j-change] > temp) {
                arr[j] = arr[j-change];
                j = j - change;
            }
    
            arr[j] = temp;
        }
    
        if (change == 2) {
            change = 1;
        } else {
            change = parseInt(change*5 / 11);
        }
    }
  return arr;
}