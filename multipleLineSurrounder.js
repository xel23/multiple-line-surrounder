function surroundLines(lines) {
    if (!lines || lines === '') {
        return '';
    }

    let result = '';
    lines.split('\n').forEach(line => {
        result += `'${line}'\n`;
    });

    return result;
}

const inputData = document.getElementById('input');
const outputTextarea = document.getElementById('output');
inputData.addEventListener('keyup', () => {
    console.log(inputData.value);
    const data = inputData.value;
    outputTextarea.innerHTML = surroundLines(data);
});
