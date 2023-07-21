import PropTypes from 'prop-types';


export const FirstApp = ({ title, subTitle, name }) => {
    
    // console.log(props);
    // if(!title)
    // {
    //     throw new Error('EL title no existe');
    // }
    return(
        <>
            {/* El atributo de testid sirve para identificar el atributo en las pruebas */}
            <h1 data-testid="test-title">{ title }</h1>
            {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>  
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}
//Si tu pones un atributo aca saldra en redux devtools pero no en el DOM
FirstApp.defaultProps = {
    title:'No hay titulo',
    subTitle:'No hay subtitulo',
}