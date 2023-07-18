import {getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp',()=>{

    test('getHeroeByID debe de retornar un heroe por ID',()=>{
        const id = 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual({id: 1,name : 'Batman',owner:'DC'})
        
    
    });
    test('getHeroeById debe de retornar undefined si no existe',()=>{
        const id = 100;
        const hero = getHeroeById(id);

        // toBeFalsy es una funcion que define como undefined
        expect( hero ).toBeFalsy();
        
    });
    test('getHeroesByOwner DC',()=>{
        
        let dcHeroes = getHeroesByOwner('DC');
        
        expect(dcHeroes.length).toEqual(3); 
        expect(dcHeroes).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        
        expect(dcHeroes).toEqual(dcHeroes.filter((dcHeroes) => dcHeroes.owner === 'DC')); 
    });
    test('getHeroesByOwner Marvel',()=>{
        
        let marvelHeroes = getHeroesByOwner('Marvel');

        expect(marvelHeroes.length).toEqual(2); 
    
    });

})