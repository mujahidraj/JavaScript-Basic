function random_array() {
    for (let i = 0; i < 10; i++) {
        let array = [];
        for (let j = 0; j <= 6; j++) {
            let element = Math.round(Math.random() * (6));
            array.push(element);
        }
        console.log(array)
    }
}

console.log(random_array())