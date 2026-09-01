/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // pair cars with their position
    const cars = position.map((pos, i) => [pos, speed[i]]);
    //sort cars from closets to furthest from target
    cars.sort((a, b) => b[0] - a[0]);
    let fleets = 0;
    let fleetTime = 0;

    for(const [pos, spd] of cars){
        // Time required for car to reach target
        const time =  (target - pos) / spd;
        // When time to reach target is longer than fleetTime
        // The car cannot catch the fleet ahead
        // Add to fleet
        // update fleetTime
        if(time > fleetTime){
          fleets++;
          fleetTime = time;
        }
    }
    // return the number of fleets
    return fleets;
    
};