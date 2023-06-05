import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";



describe('Pruebas en 07-deses-arr',()=>{

    test('debe de retornar un string y un numero',()=>{
        const [letters,numbers] = retornaArreglo();
        
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        //typeof es para saber el tipo de dato de la variable
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));

    });
});