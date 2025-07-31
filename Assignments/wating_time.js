function waitingTime(array, serialNumber) {
    if (!Array.isArray(array) || typeof serialNumber !== 'number' || serialNumber <= 0) {
        return "Invalid Input";
    }

    if (array.length === 0) {
        return 0; 
    }

    const sum = array.reduce((acc, time) => acc + time, 0);
    const average = Math.round(sum / array.length);

    const peopleAheadTotal = serialNumber - 1;
    const peopleRemaining = peopleAheadTotal - array.length;

    const waitingTime = peopleRemaining > 0 ? peopleRemaining * average : 0;

    return waitingTime;
}

let serials = [ 3, 5, 7, 11, 6 ];

let serialNumber = 10;

console.log(waitingTime(serials,serialNumber))