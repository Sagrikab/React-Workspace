players = [
    {playerCode:1031, playerName:"Smith", innings:120, totalRuns:1400, grade:'India-A'},
    {playerCode:1010, playerName:"Peter", innings:110, totalRuns:1600, grade:'UK-A'},
    {playerCode:1836, playerName:"Nitin", innings:119, totalRuns:1250, grade:'India-B'},
    {playerCode:1841, playerName:"Kang", innings:170, totalRuns:1100, grade:'Austrellia-A'},
    {playerCode:9931, playerName:"John", innings:111, totalRuns:1730, grade:'Austrellia-B'},
    {playerCode:8481, playerName:"Smith", innings:109, totalRuns:1450, grade:'India-C'}
];
//Q1. define arrow function to print gradewise count of players
let ans1 = {
    "A":players.filter(item=>item.grade.split("-")[1]=="A").length,
    "B":players.filter(item=>item.grade.split("-")[1]=="B").length,
    "C":players.filter(item=>item.grade.split("-")[1]=="C").length
};
console.log(ans1);
//Q2. define function to print name of players in ascending orders
let ans2 = players.map(item=>item.playerName).sort();
console.log(ans2);
//Q3. define function to print player-name who scored max runs and player-name who scored min runs
let ans3 = players.sort((a, b) => a.totalRuns - b.totalRuns);
console.log(ans3[0]);
console.log(ans3[ans3.length-1])
//Q4. define function to filter players whose innings are between 111 and 130
let ans4 = players.filter(item => item.innings >=111 && item.innings <=130)
console.log(ans4);
//Q5. define arrow function to create array which collects players whose grades are from 'india'

let ans5={
    "India":players.filter(item=>item.grade.split("-")[0]=="India")
}
console.log(ans5);

//Q6. define function to find duplicates by name of player.
// let ans6=Array.from(new Set(players.map(item=>item.playerName)))
// let res={};
// for(var item of ans6){
// res[item]=players.filter(pl=>pl.playerName==item).length;
// }
// console.log(res);

let unique=[...new Set(players.map(p=>p.playerName))];
console.log(unique);