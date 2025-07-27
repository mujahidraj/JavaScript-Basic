const s = 'LXXXIX';
let output = 0;

for (let i = s.length - 1; i >= 0; i--) {
  if (s.toLowerCase()[i] === 'i') {
    if (s.toLowerCase()[i + 1] === 'v' || s.toLowerCase()[i + 1] === 'x') {
      output -= 1;

    } else {
      output += 1;
    }

  } else if (s.toLowerCase()[i] === 'v') {
    output += 5;

  } else if (s.toLowerCase()[i] === 'x') {
    if (s.toLowerCase()[i + 1] === 'l' || s.toLowerCase()[i + 1] === 'c') {
      output -= 10;

    } else {
      output += 10;
    }

  } else if (s.toLowerCase()[i] === 'l') {
    output += 50;

  } else if (s.toLowerCase()[i] === 'c') {
    if (s.toLowerCase()[i + 1] === 'd' || s.toLowerCase()[i + 1] === 'm') {
      output -= 100;

    } else {
      output += 100;
    }

  } else if (s.toLowerCase()[i] === 'd') {
    output += 500;

  } else if (s.toLowerCase()[i] === 'm') {
    output += 1000;

  } else {
    console.log('Base is not a valid roman number.');
  }
}

console.log(output);