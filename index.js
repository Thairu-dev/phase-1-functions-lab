// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const headquaters = 42;
    if (blocks > 42) {
        return blocks - headquaters;
    }else {
        return headquaters-blocks;
    }
}

function distanceFromHqInFeet(blocks) {
        const headquaters = 42;
        if(blocks > 42){
            return (blocks - headquaters) * 264;
        }
        else if (blocks < 42) {
            return (headquaters - blocks) * 264;
        }
}

function distanceTravelledInFeet(start,destination) {
    if (start<destination){
        return (destination-start)*264;
    }
    else{
        return (start-destination)*264;
    }
}

function calculatesFarePrice(start, destination) {
        let feet = distanceTravelledInFeet(start, destination)
        if (feet < 400){
            return 0;
        }
        else if (feet>400 && feet<=2000){
            return (feet-400)*0.02;
        }else if (feet>2000 && feet<=2500){
            return 25;
        }else if (feet>2500){
            return "cannot travel that far"
        }

    }