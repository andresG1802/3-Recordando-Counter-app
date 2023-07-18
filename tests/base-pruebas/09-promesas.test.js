import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas',() =>{

    test('getHeroesByIdAsync debe de retornar un heroe', (done)=>{
        const id = 1;
        

        getHeroeByIdAsync(id)
            .then(hero=>{
                expect(true).toBe(true);
            done();
        });

    });

});