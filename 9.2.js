//Erstellen Sie ein JavaScript, dass die Primzahlen der folgenden
// 13-stelligen Dezimalzahl 7008514751431 bestimmt und die Zeit zur
// Berechnung dieses Faktorisierungsproblemes misst. Erhöhen Sie die
// Anzahl der Dezimalstellen und vergleichen Sie die Rechenzeiten.

const number = 7008514751431;

function factorize(x) {
    let initialNumber = x;
    let startTime = performance.now();
    let factors = [];
    let i = 2;
    while (i <= Math.sqrt(x)) {
        if (x % i === 0) {
            factors.push(i);
            x /= i;
        } else {
            i++;
        }
    }
    if (x > 1) {
        factors.push(x); // Include the last prime factor
    }
    let endTime = performance.now();
    let totalTime = endTime - startTime;
    return {"number": initialNumber, "time": totalTime, "factors": factors};

}

function printFactors(factorObj) {
    console.log(factorObj["number"] + " has as factors: " + factorObj["factors"] + " and function took: " + factorObj["time"] + "ms");
}

function calculateAverage(numIterations, inputNumber) {
    let total = 0;
    for (let i = 0; i < numIterations; i++) {
        let result = factorize(inputNumber);
        total += result.time;
    }
    return total / numIterations;
}

const numIterations = 100; // Number of iterations for each calculation
const numbersToFactorize = [number, number * 10, number * 11 * 13*111,21];

numbersToFactorize.forEach((num) => {
    let averageTime = calculateAverage(numIterations, num);
    console.log(`Average time to factorize ${num} after ${numIterations} iterations: ${averageTime.toFixed(4)} ms`);
});
//Ergebnisse: komischerweise 7008514751431 längere Laufzeit als das 10-Fache
//Average time to factorize 7008514751431 after 100 iterations: 0.6496 ms
// Average time to factorize 70085147514310 after 100 iterations: 0.5114 ms
// Average time to factorize 111246154649464260 after 100 iterations: 15.5334 ms
// Average time to factorize 21 after 100 iterations: 0.0009 ms