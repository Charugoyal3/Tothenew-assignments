// q1
let arr = [3,62,234,7,23,74,23,76,92];

let filterArr = () => {
    let newarr = arr.filter((x) => {
        return x > 70;
    })
    return newarr;
}

document.getElementById("box1").innerHTML = 'Filtered Array is: ' + `[${filterArr()}]`;

// q2
let lis = document.querySelectorAll("li");
let li_arr = Array.from(lis);
let flex_arr = li_arr.filter((x) => {
    return x.innerHTML.startsWith("Flexbox");
})
console.log(flex_arr)
let data_time = flex_arr.map((x) => {
    return x.getAttribute('data-time');
})
console.log(data_time);
data_time = data_time.map((x) => {
    return x.split(":");
})
console.log(data_time);
let totalseconds = 0;
data_time = data_time.map((x) => {
    x[0] = parseInt(x[0]) * 60;
    x[1] = parseInt(x[1]);
    totalseconds += x[0] + x[1];
    return x;
})
console.log(data_time);
console.log(totalseconds)
document.getElementById('box2').innerHTML += totalseconds;

// q3
const song = { 
    name: 'Dying to live', 
    artist: 'Tupac', 
    featuring: 'Biggie Smalls' 
};

document.getElementById('box3').innerHTML = `<div class="song"><p>${song.name} -- ${song.artist} (Featuring ${song.featuring})</p></div>`;

// q4
const user = { 
    firstName: 'Sahil', 
    lastName: 'Dua', 
    Address: { 
        Line1: 'address line 1', 
        Line2: 'address line 2', 
        State: 'Delhi', 
        Pin: 110085,
        Country: 'India', 
        City: 'New Delhi' 
    }, 
    phoneNo: 9999999999
}

let {
    firstName,
    lastName,
    Address: {
        Line1,
        Line2,
        State,
        Pin,
        Country,
        City
    },
    phoneNo
} = user;

document.getElementById('box4').innerHTML = `Full Address of the user is: ${Line1}, ${Line2}, ${City}, ${State}, ${Pin}, ${Country} `;