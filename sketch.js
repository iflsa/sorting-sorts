let context = "Menu";
let done = false;


var hpx;
var wpx;


var v10 = Array(10);
var v100 = Array(100);
var v1000 = Array(1000);



function setup() {
    createCanvas(windowWidth, windowHeight);

    hpx = 0.01 * windowHeight;
    wpx = 0.01 * windowWidth;
    background(0);
    textAlign(CENTER, CENTER);
    strokeWeight(0);
    drawMenu()
}

function draw() {
    background(0);

    textSize(32);
    fill('#420690');
    text('Sorting Sorts', 110, 30);
    text(context, (50 * wpx) + 110, 30);

    textSize(20);
    fill('#ffffff');
    if (context == 'Menu')
        drawCredits();
    else if (context == 'Bubble Sort')
        bubble_sort();
    else if (context == 'Quicksort')
        quicksort();
    else if (context == 'Merge Sort') {
        text("Best: n log n,     Average: n log n,     Worst: n log n,     Memory: n", (50 * wpx) + 110, 60)

    } else if (context == 'Insertion Sort') {
        text("Best: n,     Average: n^2,     Worst: n^2,     Memory: 1", (50 * wpx) + 110, 60)

    } else if (context == 'Selection Sort') {
        text("Best: n^2,     Average: n^2,     Worst: n^2,     Memory: 1", (50 * wpx) + 110, 60)

    } else if (context == 'Bucket Sort') {
        text("Best: -,     Average: n + r,     Worst: n + r,     Memory: n + r", (50 * wpx) + 110, 60)

    } else if (context == 'Library Sort') {
        text("Best: n,     Average: n log n,     Worst: n^2,     Memory: n", (50 * wpx) + 110, 60)

    } else if (context == 'Counting Sort') {
        text("Best: -,     Average: n + r,     Worst: n + r,     Memory: n + r", (50 * wpx) + 110, 60)

    } else if (context == 'Bogosort') {
        text("Best: n,     Average: n * n!,     Worst: ∞,     Memory: 1", (50 * wpx) + 110, 60)

    }
}




function setSort(stri) {
    context = stri;
    done = false;
    v10 = [...values10];
    v100 = [...values100];
    v1000 = [...values1000];

    bubble_sort_reset();
}

function drawCredits() {
    fill(255, 255, 255, 255);
    text("Created by:\nMiłosz Ratajczyk\nMichał Pomirski\nEryk Rakowski\nGrzegorz Ucal", (50 * wpx) + 110, (50 * hpx) + 30);
}
