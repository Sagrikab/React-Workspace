players = [
    { playerCode: 1031, playerName: "Smith", innings: 120, totalRuns: 1400, grade: 'India-A' },
    { playerCode: 1010, playerName: "Peter", innings: 110, totalRuns: 1600, grade: 'UK-A' },
    { playerCode: 1836, playerName: "Nitin", innings: 119, totalRuns: 1250, grade: 'India-B' },
    { playerCode: 1841, playerName: "Kang", innings: 170, totalRuns: 1100, grade: 'Austrellia-A' },
    { playerCode: 9931, playerName: "John", innings: 111, totalRuns: 1730, grade: 'Austrellia-B' },
    { playerCode: 8481, playerName: "Smith", innings: 109, totalRuns: 1450, grade: 'India-C' }
];


//Q1. define arrow function to print gradewise count of players

let gradecount = (count) => {
    var res = []
    for (let i of count) {
        let grade1 = i.grade
        res.push(grade1);
    }
    return res;
}
// let ans = gradecount(players);
// console.log(ans);

// console.log(ans.map(ans => ans.length));


//Q2. define function to print name of players in ascending orderss

let ans2=players.sort(function(a,b){
    if (a.playerName<b.playerName){
        return -1;
    }
    if (a.playerName>b.playerName){
        return 0;
    }
})
console.log(ans2);

//Q3. define function to print player-name who scored max runs and player-name who scored min runs


let findMaxRuns = (data, testseries) => {
    let max = 0;
    let pos = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i][testseries] > max) {
            max = data[i][testseries];
            pos = i;
        }
    }

    return pos;
}
let findMinRuns = (data, testseries) => {
    let min = Number.MAX_VALUE;
    let pos = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i][testseries] < min) {
            min = data[i][testseries];
            pos = i;
        }
    }

    return pos;
}

let findByMaxAndMinRuns = (data) => {
    let response = {
        "Maximum Runs": data[findMaxRuns(data, "totalRuns")],
        "Minimum Runs": data[findMinRuns(data, "totalRuns")]
    }

    return response;
}

let ans5 = findByMaxAndMinRuns(players);
console.log(ans5);


//Q4. define function to filter players whose innings are between 111 and 130

let filterPlayer = (data) => {
    let response = [];
    for (var i of data) {
        if (i.innings > 111 && i.innings < 130) {

            response.push({ 'playerCode': i.playerCode, 'playerName': i.playerName, 'innings': i.innings, 'totalRuns': i.totalRuns, 'grade': i.grade });
        }

        else
            continue;
    }
    return response
}

let ans3 = filterPlayer(players);

console.log(ans3);

//Q5. define arrow function to create array which collects players whose grades are from 'india'

let gradecount2 = () => {
    count = 0;
    let a = gradecount("count");

    if (a == "India-A" || a == "India-B") {
        count++;
    }
    return count;
}
let ans4 = gradecount2();
console.log(ans4);



//Q6. define function to find duplicates by name of player.