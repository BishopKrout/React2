function unroll(squareArray) {
    const result = [];

    while (squareArray.length) {
        result.push(...squareArray.shift());

        for (const row of squareArray) {
            result.push(row.pop());
        }

        const lastRow = squareArray.pop();
        if (lastRow) {
            result.push(...lastRow.reverse());
        }

        for (const row of squareArray.reverse()) {
            result.push(row.shift());
        }

        squareArray.reverse();
    }
    return result;
}

module.exports = unroll;
