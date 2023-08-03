import { renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/";
import { act } from "react-dom/test-utils";

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
        expect(counter).toBe(100);
    });

    test('El increment debe sumar 1 al iniValue', () => {
        const { result } = renderHook(() => useCounter(iniValue));
        const { counter, increment } = result.current;

        act(() => {
            increment();//
        })


        //expect(counter).toBe(iniValue + 1); El counter se crea como variable al desestructurar con el valor en ese momento 10, no se entera del increment
        expect(result.current.counter).toBe(iniValue + 1)

    });

    test('El decrement debe restar correctamente al valor actual', () => {
        const { result } = renderHook(() => useCounter(iniValue));
        const { counter, decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(iniValue - 3);

    });

    test('El reset debe mantener el current en el valor incial', () => {
        //const { result: { current: { counter, reset } } } = renderHook(() => { useCounter(iniValue) })
        const { result } = renderHook(() => useCounter(iniValue));
        const { counter, increment, reset } = result.current;
        act(() => {
            increment(20);
            reset();
        })

        expect(result.current.counter).toBe(iniValue);

}
);

});