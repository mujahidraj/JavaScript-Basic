function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    for (let i = 0; i < name.length; i++) {
        if (name[i] >= '0' && name[i] <= '9') {
            return true;
        }
    }
    return false;
}

let names = "mujahid";

console.log(checkDigitsInName(names))
