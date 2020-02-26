
const btn_width = 200;
const btn_height = 40;

function drawMenu() {

    button = createButton('Bubble Sort');
    button.size(btn_width, btn_height);
    button.position(10, (btn_height + 10) * 1);
    button.mousePressed(() => setSort('Bubble Sort'));

    button = createButton('Quicksort');
    button.size(btn_width, btn_height);
    button.position(10, (btn_height + 10) * 2);
    button.mousePressed(() => {
        document.getElementById("quickSort").style.display = "block";
        setSort('Quick Sort');
        document.getElementById("quickSort").contentWindow.location.reload();
    });


    button = createButton('Merge Sort');
    button.size(btn_width, btn_height);
    button.position(10, (btn_height + 10) * 3);
    button.mousePressed(() => setSort('Merge Sort'));

    button = createButton('Insertion Sort');
    button.size(btn_width, btn_height);
    button.position(10, (btn_height + 10) * 4);
    button.mousePressed(() => setSort('Insertion Sort'));

    button = createButton('Selection Sort');
    button.size(btn_width, btn_height);
    button.position(10, (btn_height + 10) * 5);
    button.mousePressed(() => setSort('Selection Sort'));

    button = createButton('Bucket Sort');
    button.size(btn_width, btn_height);
    button.position(10, (btn_height + 10) * 6);
    button.mousePressed(() => setSort('Bucket Sort'));

    button = createButton('Library Sort');
    button.size(btn_width, btn_height);
    button.position(10, (btn_height + 10) * 7);
    button.mousePressed(() => setSort('Library Sort'));

    button = createButton('Counting Sort');
    button.size(btn_width, btn_height);
    button.position(10, (btn_height + 10) * 8);
    button.mousePressed(() => setSort('Counting Sort'));

    button = createButton('Bogosort');
    button.size(btn_width, btn_height);
    button.position(10, (btn_height + 10) * 9);
    button.mousePressed(() => setSort('Bogosort'));

}