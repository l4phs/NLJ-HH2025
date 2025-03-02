
//calculates total health percentage
export default function HealthCalculations(steps: number, calories: number, sleep: number, exercise: number, destress: number) {
   //const totalHealthPercent = 100;  //100%
    //Breakdown of total health
    const stepsWorth = .20; // 20%
    const caloriesWorth = .15; //15%
    const sleepWorth = .25; //25%
    const exerciseWorth = .20; //20%
    const destressWorth = .20; //20%

    //Get total health score based on amount accomplished3
    return (((stepsWorth * steps) + (caloriesWorth * calories) + (sleepWorth * sleep)+ (exerciseWorth * exercise) + (destressWorth * destress))).toFixed(2); 

};
