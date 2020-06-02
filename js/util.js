'use strict'
//Global variables:
// this is the setting of stopwatch
// This is the variables of the time   of the stopwatch
var gMiliSeconds = 0
var gSeconds = 0
var gMinutes = 0

// This is the variables of the display time in the stopwatch:
var gDispalyMiliSeconds = 0
var gDispalySeconds = 0
var gDisplayMinutes = 0

function getNums(num) {
    var nums = []
    for (var i = 0; i < num; i++) {
        nums.push(i + 1)
    }
    return nums
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomNumFromNums(nums) {
    var randomNum = getRandomIntInclusive(0, nums.length - 1)
    var num = nums.splice(randomNum, 1)
    return num[0]
}
function stopWatch() {
    gMiliSeconds++
    if (gMiliSeconds / 100 === 1) {
        gMiliSeconds = 0;
        gSeconds++;
    }
    if (gSeconds / 60 === 1) {
        gSeconds = 0;
        gMinutes++;
    }
    if (gMiliSeconds < 100) {
        gDispalyMiliSeconds = "00" + gMiliSeconds;
    } else {
        gDispalyMiliSeconds = gMiliSeconds;
    }
    if (gSeconds < 10) {
        gDispalySeconds = "0" + gSeconds;
    } else {
        gDispalySeconds = gSeconds;
    }
    if (gMinutes < 10) {
        gDisplayMinutes = "0" + gMinutes;
    } else {
        gDisplayMinutes = gMinutes;
    }
    ShowStopWatchInHtml()
}
function resetTheStopWatch() {
    gMiliSeconds = 0
    gSeconds = 0
    gMinutes = 0
    gDispalyMiliSeconds = 0
    gDispalySeconds = 0
    gDisplayMinutes = 0
    ShowStopWatchInHtml()
}