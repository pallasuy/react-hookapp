import { fireEvent, render, renderHook } from "@testing-library/react";
import { useForm } from '../../hooks/';
import { act } from "react-dom/test-utils";

const initialForm = { name: 'Gabriel', email: 'gpallas@react.com' }

describe('Pruebas en nuestro useForm', () => {



    test('Debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });


    test('Debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan';
        //Montar el hook
        //llamar onInputChange() con act, event..
        //expecet, result.current.formState.name === newValue

        const { result } = renderHook(() => useForm(initialForm));
        const { formState, onInputChange, onResetForm } = result.current;

        act(() => {
            //const target = { 'name', newValue };
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

    });

    test('Debe realizar el reset del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { onResetForm, onInputChange } = result.current;
        act(() => {
            onInputChange({ target: { name: 'name', value: 'Pedro' } });
            onResetForm();
        });
        expect(result.current.formState.name).toBe(initialForm.name);



    });

})