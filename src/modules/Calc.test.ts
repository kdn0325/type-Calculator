import Calc, { CalcInput, InputType, OperationType } from './Calc';

test('derive state' , () => {
    const inputs: Array<CalcInput> = [
        {type: InputType.Numberical, value: 1 },
        {type: InputType.Numberical, value: 2 },
        {type: InputType.Operation, operation: OperationType.Add},
        {type: InputType.Numberical, value: 3 },
        {type: InputType.Operation, operation: OperationType.Equals},
    ]
    const state = Calc.getState(inputs);

    expect(state.displayValue).toEqual(15)
})