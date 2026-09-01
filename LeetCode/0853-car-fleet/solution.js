/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = position.map((pos, i) => [pos, speed[i]]);
    cars.sort((a, b) => b[0] - a[0]);
    let fleets = 0;
    let fleetTime = 0;

    for(const [pos, spd] of cars){
        const time =  (target - pos) / spd;
        if(time > fleetTime){
          fleets++;
          fleetTime = time;
        }
    }
    
    return fleets;
    
};