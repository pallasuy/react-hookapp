import { renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/";

describe('Pruebas en el useCounter', () => {

    const iniValue = 10;

    test('Debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter(iniValue));
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(iniValue);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));


    });

    test('El valor del counter debe ser 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(100);
    

    });

});