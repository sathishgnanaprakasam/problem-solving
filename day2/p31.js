let [rows, cols] = [3, 5];

for (let row = 1; row <= rows; row++) {
    let line = [];

    for (let col = 1; col <= cols; col++) {
        if (row === 1 || row === rows || col === 1 || col === cols) {
            line.push('*');
        } else {
            line.push(' ');
        }
    }

    console.log(line.join(' '));
}