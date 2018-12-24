export const quickMaths = {
    cumulativeHyperGeometricDistribution: (popSize: number, successSize: number, numOfTries: number, numOfSuccess: number): number => {
        if (numOfSuccess = 0) {
            return 0;
        } else {
            return quickMaths.hyperGeometricDistribution(popSize, successSize, numOfTries, numOfSuccess) +
            (quickMaths.hyperGeometricDistribution(popSize, successSize, numOfTries, (numOfSuccess - 1)));
        }
    },
    hyperGeometricDistribution: (popSize: number, successSize: number, numOfTries: number, numOfSuccess: number) => {
        const popMinusSuccess = popSize - successSize;
        const triesMinusSuccess = numOfTries - numOfSuccess;

        return (quickMaths.binomialCoefficient(successSize, numOfSuccess) *
        quickMaths.binomialCoefficient(popMinusSuccess, triesMinusSuccess)) /
        quickMaths.binomialCoefficient(popSize, numOfTries);
    },
    binomialCoefficient: (num1: number, num2: number) => {
        return (quickMaths.permuation(num1, num2) / quickMaths.factorial(num2));
    },
    permuation: (num1: number, num2: number): number => {

        return quickMaths.factorial(num1) / quickMaths.factorial(num1 - num2);
    },
    factorial: (num: number): number => {

        if (num <= 0) {
            return 1;
        } else {
            return num * (quickMaths.factorial(num - 1));
        }
    }
};
