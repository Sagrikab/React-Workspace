gadgets = [{
    'laptop': {
        'hp': '220GB SSD / 8GB RAM / I3 Intel',
        'lenovo': '1 TB HDD / 12 GB RAM / I5 Intel',
        'asus': '500 GB HDD / 250 GB SSD / 8 GB RAM / I7 Intel'
    },

    'smartwatch': {
        'aple': '13 Apps / 20 Hrs Standby / 40 Features',
        'samsung': '14 Apps / 13 Hrs Standby / 34 Features'
    },

    'camera': {
        'sony': '40X Zoom / 3 HrsStandby / 40 GB Storage',
        'cannon': '30X Zoom / 5 Hrs Standby / 50 GB Storage'
    }
}]

certifications = ['Amazon Solution Architects', 'Azure Cloud Developer', 'Google Cloud Developer']


colors = { 'red': '#FF0042', 'blue': '#FF8123', 'orange': '#FF7831', 'yellow': "#90FF23", 'pink': '#77FF22' }


//Q1.Write a function to add one more color and color - code in given array then return updated colors’s array from 
//functionSample Snippetlet addNewColor = (colorCode, colorName) => { }console.log(addNewColor("#FF0011", "voilet"));

let addNewColor = function (colorCode, colorName) {
    //     let arr2=[];
    // for(var i in colors){
    // console.log(colors[i]);
    // arr2.push(colorCode);
    // return arr2;
    var arr2 = [];
    colors.colorCode = colorCode;
    colors.colorName = colorName;
    arr2.push({ colors: colors });
    return arr2;
}


console.log(addNewColor("#FF0011", "violet"));


//Q2. Write a function to count number of products for each gadget and return from 
//functionSample Snippet

let countProducts = () => {
    let response = [];
    let temp = gadgets[0];

    for (let i in temp) {
        let count = 0;
        for (let j in temp[i]) {
            count++;
        }
        response[i] = count;
    }
    return response;

}

console.log("Answer Array = ", countProducts());


//Q3. Write a function to take any gadget name as argument and check that exist in array or not. Return "true" if exist otherwise return "false"

let searchGadget = (userGadgetName) => {
    let hasKey = gadgets[0].hasOwnProperty(userGadgetName);
    if (hasKey) {
        return true;
    } else {
        return false;
    }

}

console.log("searchGadget = " + searchGadget('laptop'));


// Q4. Write a function to take any gadget name as argument and delete from array. show updated array record return from function

let deleteGadget = (userGadgetName) => {
    let temp = gadgets[0];
    for (let i in temp) {
        if (i == userGadgetName)
            delete temp[i]
    }
    gadgets[0] = temp;
    return gadgets[0];
}

console.log("deletedArray:", deleteGadget("camera"));



// Q5. Write a function to prepare array containing product names of each gadget along with its configuration order by product names in each category

let prepareArray = () => {
    let sorted = [{}];
    for (const key2 in gadgets[0]) {
        let keys = Object.keys(gadgets[0][key2]).sort();
        sorted[0][key2] = [];
        for (const i in keys) {
            let temp = {}
            temp[keys[i]] = gadgets[0][key2][keys[i]]
            sorted[0][key2].push(temp)
        }
    }
    console.log(sorted)
}
prepareArray();


//Q6. Write a function to update Certifications in following formatSample Output: [{‘index’:0, ‘certification’: ‘AMAZONSolution Architects’}, {‘index’:1, ‘certification’: ‘AZURECloud Developer’}, {‘index’:2, ‘certification’: ‘GOOGLECloud Developer’}]

let updateCertification = (data) => {
    let response = [];
    let j = 0;
    for (var i of data) {
        var arr = i.split(" ");
        var res = arr[0].toUpperCase();
        response.push({ 'index': j, ' certification': res + " " + arr[1] + " " + arr[2] });
        j++;
    }
    return response;
}

let ans6 = updateCertification(certifications);
console.log(ans6);


// Q10. Define a function to filter laptops by name of processor
let filterByProcessorName = (userGadgetName) => {

    for (const key2 in gadgets[0]["laptop"]) {
        var conname = gadgets[0]["laptop"][key2].split(" / ").at(-1);
        if (userGadgetName == conname) {
            return key2;
        }


    }

}

console.log("delete gadget = " + filterByProcessorName("I5 Intel"));