module.exports = function toReadable(number) {
    const units = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const dozens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const ones = (num) => units[num];
    const twos = (num) => {
        if (num < 20) return ones(num);
        if (num % 10 === 0) return dozens[Math.trunc(num / 10)];
        return `${dozens[Math.trunc(num / 10)]} ${ones(num % 10)}`;
    };

    const threes = (num) => {
        if (num % 100 === 0) return `${ones(num / 100)} hundred`;
        return `${ones(Math.trunc(num / 100))} hundred ${twos(num % 100)}`;
    };

    if (number < 20) return ones(number);
    if (number >= 20 && number < 100) return twos(number);
    if (number >= 100) return threes(number);
};
