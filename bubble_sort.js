

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

function bubble_sort() {
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
    if (i < v10.length) {
        for (let j = 0; j < v10.length - i - 1; j++) {
            let a = v10[j];
            let b = v10[j + 1];
            if (a > b) {
                swap(v10, j, j + 1);
            }
        }
    } else {

        if (t1 == 0)
            t1 = Date.now() - t;
        textSize(32);
        fill('#420690');
        text("Done in " + t1 + " ms", (75 * wpx) + 110, 175)
        textSize(20);
        fill("#fffff");

    }
    i++;

    text("100 numbers:", (50 * wpx) + 110, 230);
    //Temp rect
    // rect(250, 240, tw, th);
    vw = tw / 100;

    v100.forEach((v, id) => {
        rect(250 + (vw * id), 340 - v, vw + 1, 1 * v);
    })
    if (i2 < v100.length) {
        for (let j2 = 0; j2 < v100.length - i2 - 1; j2++) {
            let a = v100[j2];
            let b = v100[j2 + 1];
            if (a > b) {
                swap(v100, j2, j2 + 1);
            }
        }
    } else {

        if (t2 == 0)
            t2 = Date.now() - t;
        textSize(32);
        fill('#420690');
        text("Done in " + t2 + " ms", (75 * wpx) + 110, 315)
        textSize(20);
        fill("#fffff");

    }
    i2++;

    text("1000 numbers:", (50 * wpx) + 110, 370);
    //Temp rect
    // rect(250, 380, tw, th);
    vw = tw / 1000;
    v1000.forEach((v, id) => {

        rect(250 + (vw * id), 480 - (0.1 * v), vw + 1, 0.1 * v);
    })
    if (i3 < v1000.length) {
        for (let j3 = 0; j3 < v1000.length - i3 - 1; j3++) {
            let a = v1000[j3];
            let b = v1000[j3 + 1];
            if (a > b) {
                swap(v1000, j3, j3 + 1);
            }
        }
    } else {

        if (t3 == 0)
            t3 = Date.now() - t;
        textSize(32);
        fill('#420690');
        text("Done in " + t3 + " ms", (75 * wpx) + 110, 452)
        textSize(20);
        fill("#fffff");

    }
    i3++;
}
function bubble_sort_reset() {
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