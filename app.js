console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
     if (age < 16) {
        console.log(belowSixteen);
    } else if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log("That's not an age!");
    }
}

checkAge("Jim", 37);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whereAt (x, y) {
    if (x === 0 && y === 0){
        console.log("Point of origin");
    } else if (x === 0){
        console.log("Y - axis");
    } else if (y === 0){
        console.log("X - axis");
    } else if (x > 0 && y > 0){
        console.log("Quadrant 1");
    } else if (x > 0 && y < 0){
        console.log("Quadrant 4");
    } else if (x < 0 && y > 0){
        console.log("Quadrant 2");
    } else if (x < 0 && y < 0){
        console.log("Quadrant 3");
    }
}

whereAt(4, -9);
whereAt(-6, 7);
whereAt(-8, -9);
whereAt(4, 2);
whereAt(0, -2);
whereAt(4, 0);
whereAt(0, 0);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c) {
    if (a + b <= c || b + c <= a || a + c <= b){
        return "invalid triangle";
    } else if (a <= 0 || b <= 0 || c <= 0){
        return "invalid triangle";
// equilateral = three congruent sides
    } else if (a == b && b == c){
        return "equilateral";
// scalene = no congruent sides
    } else if (a != b && b != c && a != c){
        return "scalene";
// invalid triangle
    } else {
// isosceles = two congruent sides + one unique side
        return "isosceles";
    }
}

console.log(triangle(4, 4, 2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUsage(planLimit, currentDay, usageSoFar){
    const totalDays = 30;
    const daysRemaining = totalDays - currentDay;
    const avgUsage = usageSoFar / currentDay;
    const perfAvgUsage = planLimit / totalDays;
    const overUnder = perfAvgUsage - avgUsage;
    const projUsage = avgUsage * totalDays;
    const fixedAverage = dataRemaining / daysRemaining;

    let message = `${currentDay} day{s) used, ${daysRemaining} days remaining\nAverage daily use: ${avgUsage} GB/day\n`;

    if (overUnder > 0){
        // more data to use
        message += `You are under your average daily use (${perfAvgUsage} GB/day, continuing this low usage, you'll have ${dataOverLimit} GB unused.\nTo maximize your data plan, use ${fixedAverage} GB/day.`;
    } else if (overUnder < 0){
        // too much
        message += `You are EXCEEDING your daily use (${perfAvgUsage} GB/day),\ncontinuing this high usage, you'll exceed your data plan by ${dataOverLimit} GB.\nTo stay below your data plan, use no more than ${fixedAverage} GB/day.`;
    } else {
        // on track - perfect usage\
        message += `You are right on the perfect daily usage. Keep up the good work!`;
    }

    return message;
}

console.log(dataUsage(100, 15, 56));