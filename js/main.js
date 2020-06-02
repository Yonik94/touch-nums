'use strict'
var gNums = getNums(16);
var LastClickedNum = 0;
var gInterstopWatch;

function init(marginLeft) {
    renderBoard(gNums.length, marginLeft);
    clearInterval(gInterstopWatch);
    resetTheStopWatch();
    LastClickedNum = 0;
    var elWinTxt = document.querySelector('.WinningText');
    elWinTxt.innerText = '';
}
// function resetTheShowOfStop
function clickOnLevel(num, px) {
    gNums = getNums(num);
    init(px);
}
function renderBoard(num, marginLeft) {
    const length = Math.sqrt(num);
    // change the var to strHtml.
    var tableBodyToHtml = '<tBody>';
    var tableInHtml = document.querySelector('table');
    var copyNums = gNums.slice();
    for (var i = 0; i < length; i++) {
        tableBodyToHtml += '<tr>';
        for (var j = 0; j < length; j++) {
            var num = getRandomNumFromNums(copyNums);
            tableBodyToHtml += `<td style="border: 2px solid black; width: 50px;
            height: 50px;" onclick="cellClicked(this)">${num}</td>`;
        }
        tableBodyToHtml += '</tr>';
    }
    tableBodyToHtml += '</tBody>';
    tableInHtml.innerHTML = tableBodyToHtml;
}
function ShowStopWatchInHtml() {
    var stopWatch = document.querySelector('.stopWatch')
    stopWatch.innerHTML = `${gDisplayMinutes}:${gSeconds}:${gMiliSeconds}`
}
function cellClicked(clickedNum) {
    var cellText = +clickedNum.innerText
    if (cellText === LastClickedNum + 1) {
        LastClickedNum = cellText;
        clickedNum.style.background = 'brown'
    }
    if (LastClickedNum === 1) {
        gInterstopWatch = setInterval(stopWatch, 10)
    }
    if (LastClickedNum === gNums.length) {
        clearInterval(gInterstopWatch)
        // clearInterval(gInterShowWatchId)
        var winningTextContainer = document.querySelector('.WinningText')
        winningTextContainer.innerText = 'Amazing! You finished all the board! let\'s try the next level...'
    }
}
