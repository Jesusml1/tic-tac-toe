let sample_1 = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 0, 0],
];

let sample_2 = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

let sample_3 = [
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1],
];

let sample_4 = [
  [1, 1, 1],
  [0, 0, 0],
  [0, 0, 0],
];

let sample_5 = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0],
];

let sample_6 = [
  [0, 0, 0],
  [0, 0, 0],
  [1, 1, 1],
];

let sample_7 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

let sample_8 = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 0],
];

let sample_0 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];



const check = (sample) => {
  if (sample[0][0] === 1 && sample[1][0] === 1 && sample[2][0] === 1) {
    return {
      "wining position": true,
      "type": "1th column",
    };
  } else if (sample[0][1] === 1 && sample[1][1] === 1 && sample[2][1] === 1) {
    return {
      "wining position": true,
      "type": "2th column",
    };
  } else if (sample[0][2] === 1 && sample[1][2] === 1 && sample[2][2] === 1) {
    return {
      "wining position": true,
      "type": "3th column",
    };
  } else if (sample[0][0] === 1 && sample[0][1] === 1 && sample[0][2] === 1) {
    return {
      "wining position": true,
      "type": "1th row",
    };
  } else if (sample[1][0] === 1 && sample[1][1] === 1 && sample[1][2] === 1) {
    return {
      "wining position": true,
      "type": "2th row",
    };
  } else if (sample[2][0] === 1 && sample[2][1] === 1 && sample[2][2] === 1) {
    return {
      "wining position": true,
      "type": "3th row",
    };
  } else if (sample[0][0] === 1 && sample[1][1] === 1 && sample[2][2] === 1) {
    return {
      "wining position": true,
      "type": "left-right diagonal",
    };
  } else if (sample[0][2] === 1 && sample[1][1] === 1 && sample[2][0] === 1) {
    return {
      "wining position": true,
      "type": "right-left diagonal",
    };
  } else {
    return {
      "wining position": false,
      "type": null,
    };
  }
};

const result = check(sample_1);
console.log(check(sample_1));
console.log(check(sample_2));
console.log(check(sample_3));
console.log(check(sample_4));
console.log(check(sample_5));
console.log(check(sample_6));
console.log(check(sample_7));
console.log(check(sample_8));
console.log(check(sample_0));
