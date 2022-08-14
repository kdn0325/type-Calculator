/**
 * Calculator Brain;
 * Input: ---> [UserInput , UserInput , ...]
 * Generate ---> {state}
 */

export enum InputType {
    Numberical,
    Operation,
}

export enum OperationType {
    Add,
    Subtract,
    Equals,
}

export type CalcInput = 
| {type:InputType.Numberical, value:number} 
| {type:InputType.Operation, operation:OperationType}; 


export type CalcState = {
    displayValue: number;
}

const getState = (inputs:Array<CalcInput>):CalcState =>{
    return {displayValue: 0};
}

const Calc = {
    getState,
}


export default Calc;