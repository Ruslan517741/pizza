import error404 from '../../resources/img/error404.jpg';

const ErrorMessage = () => {
    return (
        <img style={{display: 'block', width: '500px', height: '500px', objectFit:'contain', margin: '0 auto'}} src={error404} alt="Error"/>
    )
}

export default ErrorMessage;