// define variables
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
let initialPlant = 20;
let initialArea = 0.8;
let n = 5; //number of weeks
console.log(area)



// Number of plants after n weeks:
 let totalPlant = initialPlant * Math.pow(2, n);
console.log(totalPlant);

// Making decision on Plants:
let currentArea = totalPlant *initialArea;
console.log(currentArea)
if (currentArea > area * 0.8) {
    console.log("Pruned")
}else if (currentArea > (area * 0.5) && currentArea < (area * 0.8)){
    console.log("Monitored")
}else{
    console.log("Planted")
}
