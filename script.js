// define variables
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
let initialPlant = 20;
let initialArea = 0.8;
let n = 4 ; //number of weeks
console.log("The area of the garden is: " + area + " square meters");



// Number of plants after n weeks:
 let totalPlant = initialPlant * Math.pow(2, n-1);
console.log(`Total Plants after ${n} week(s) is ${totalPlant} Plants`);

// Making decision on Plants:
let currentArea = totalPlant *initialArea;
console.log(`Current Area after ${n} week(s) is ${currentArea} square meters`);
if (currentArea > area * 0.8) {
    console.log("Pruned")
}else if (currentArea > (area * 0.5) && currentArea <= (area * 0.8)){
    console.log("Monitored")
}else{
    console.log("Planted")
}

// Part 2: Thinking Bigger
let newPlant = 100;
// Total Area after 10 weeks
let totalArea = newPlant * Math.pow(2, 9) * initialArea;

let initialAreaFor100Plants = totalArea * 100 / 80 // 80% of total area

let newRadius = Math.sqrt(initialAreaFor100Plants / PI);
console.log(`The new radius is ${newRadius} meters`);
