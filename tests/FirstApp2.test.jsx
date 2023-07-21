import{render,screen} from '@testing-library/react';
import { FirstApp } from "../src/FirstApp";

//Esta prueba mejoramos el codigo del test

describe('Pruebas en <FirstApp/>',()=>{
    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo'
    test('debe de hacer match con el snapshot',()=>{

        const { container } = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola, Soy Goku"',()=>{
        
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
        // screen.debug();


    });

    test('debe de mostrar el titulo en un h1',()=>{
        render(<FirstApp title={title} />);
        //El screen es parecido como sucede con el render puede llamar ala funciones 
        //Mas que todo en la linea de abajo buscas una entiqueta htm osea un heading que contenga el titulo

        expect(screen.getByRole('heading',{ level: 1}).innerHTML).toContain(title);
    });

    test('debe de mostrar el subtitulo enviado por props',()=>{
        render(
            <FirstApp
            title={ title }
            subTitle={subTitle}
            />
        );

        expect(screen.getAllByText(subTitle).length).toBe(2);

    });


});