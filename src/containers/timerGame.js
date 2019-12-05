'use strict';

function timerGame(callback){
    console.log("ready....Go!");
    setTimeout(()=> {
        console.log("Time's up -- stop!!");
        callback && callback();
    }, 1000);
}

module.exports = timerGame;