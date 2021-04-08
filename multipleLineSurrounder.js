function surroundLines(lines, ending = '', quoteType = "'") {
    if (!lines || lines === '') {
        return '';
    }

    let result = '';
    lines.split('\n').forEach(line => {
        result += `${quoteType}${line}${quoteType}${ending}\n`;
    });

    return result;
}

const inputData = document.getElementById('input');
const ending = document.getElementById('ending');
const quote = document.getElementById('quote');
const outputTextarea = document.getElementById('output');

const inputs = [inputData, ending, quote];
inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        outputTextarea.innerHTML = surroundLines(inputData.value, ending.value, quote.value);
    });
});
