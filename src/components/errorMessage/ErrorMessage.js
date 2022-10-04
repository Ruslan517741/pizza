import error404 from '../../resources/img/error404.jpg';
import './errorMessage.scss';

const ErrorMessage = () => {
    return (
        <img className='error404' /* style={{display: 'block', width: '500px', height: '500px', objectFit:'contain', margin: '0 auto'}} */ src={error404} alt="Error"/>
    )
}

export default ErrorMessage;