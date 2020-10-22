/* 
 * [0,1,0,0,0,0,2,0,3]
 * batting average = .333
 * slugging % = .667
 */

document.write("Baseball statistics program<br><br>");

let atBats =[0,1,0,0,0,0,2,0,3];
let hits = 0;
for (index = 0; index < atBats.length; index++) {
    if (atBats[index] > 0) {
        hits++;
    }
}
let battingAverage = hits / atBats.length;

let singles = 0, doubles = 0, triples = 0, homers = 0;
for (index = 0; index < atBats.length; index++) {
    if (atBats[index] === 1) {
        singles++;
    }
    if (atBats[index] === 2) {
        doubles++;
    }
    if (atBats[index] === 3) {
        triples++;
    }
    if (atBats[index] === 4) {
        homers++;
    }
}
let sluggingPct = (singles + 2*doubles + 3*triples + 4*homers)/atBats.length;

document.write("Batting average = " + battingAverage.toFixed(3));
document.write("Slugging pet = " + sluggingPct.toFixed(3));