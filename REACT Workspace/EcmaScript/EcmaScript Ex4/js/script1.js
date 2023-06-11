let students = [
    {rollno:103, studname:'Smith', unit1:{Eng:84, Math:39, Sci:85}, unit2:{Eng:49, Math:81, Sci:94}},
    {rollno:245, studname:'Yash', unit1:{Eng:42, Math:72, Sci:63}, unit2:{Eng:43, Math:53, Sci:24}},
    {rollno:554, studname:'Nitin', unit1:{Eng:53, Math:52, Sci:53}, unit2:{Eng:64, Math:64, Sci:53}},
    {rollno:562, studname:'Peter', unit1:{Eng:65, Math:64, Sci:53}, unit2:{Eng:52, Math:72, Sci:64}},
    {rollno:235, studname:'Dinesh', unit1:{Eng:76, Math:42, Sci:63}, unit2:{Eng:63, Math:72, Sci:74}},
];

//Q1. Define function to print Students Name, Total of unit1 test and Unit2 test exam

let calculateTotal = (data) => {
    let response = [];

    for(var item of data)
    {
        let sum1 = item.unit1.Eng + item.unit1.Math + item.unit1.Sci;
        let sum2 = item.unit2.Eng + item.unit2.Math + item.unit2.Sci;

        response.push({'rollno':item.rollno, 'studentname':item.studname, 'unit1-total':sum1, 'unit2-total':sum2})
    }

    return response;
}

let ans1 = calculateTotal(students);
console.log(ans1);


//Q2. Define function to print Students Rollno, Name and Scored Percentage in unit1 and in unit2

let showPercentage = (data) => {
    let totalscore = calculateTotal(data);
    let response = [];

    for(var item of totalscore)
    {
        let pert1 = item["unit1-total"]/3;
        let pert2 = item["unit2-total"]/3;

        response.push({'rollno':item.rollno, 'studentname':item.studentname, 'unit1-pert':pert1, 'unit2-pert':pert2});
    }

    return response;
}

let ans2 = showPercentage(students);
console.log(ans2);


//Q3. Define function to check and print student details who scored max in Eglish subject for both unit exams

let findMax = (info, testseries, subname) => {
    let max = 0;
    let pos = 0;

    for(let i=0;i<info.length;i++)
    {
        if(info[i][testseries][subname]> max)
        {
            max = info[i][testseries][subname];
            pos = i;
        }
    }
    return pos;
}

let findMaxBySubject = (data) => {
    let response = {
        "unit1":data[findMax(data, "unit1", "Eng")],
        "unit2":data[findMax(data, "unit2", "Eng")]    
    };

    return response;
}

let ans3 = findMaxBySubject(students);
console.log(ans3);

//Q4. Define function and print who scored higher percentage in unit1 and in unit2

let findMaxPert = (data, testseries) => {
    let max = 0;
    let pos = 0;
    for(let i=0;i<data.length;i++)
    {
        if(data[i][testseries] > max)
        {
            max = data[i][testseries];
            pos = i;
        }
    }

    return pos;
}

let findByHigherPercentage = (data) => {
    let scoredpercentage = showPercentage(data);
    let response = {
        "unit1":scoredpercentage[findMaxPert(scoredpercentage, "unit1-pert")], 
        "unit2":scoredpercentage[findMaxPert(scoredpercentage, "unit2-pert")]
    }

    return response;
}

let ans4 = findByHigherPercentage(students);
console.log(ans4);

//Q5. Define function to print Student Details in ascending order by rollno

let ans5 = students.sort(function(a, b){return a.rollno - b.rollno});
console.log(ans5);



