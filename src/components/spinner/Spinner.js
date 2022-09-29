import spinner from "../../resources/img/spinner.gif";
import './spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner" role="status">
            <img src={spinner} alt="spinner" className="spinner" />
        </div>
    )
}

export default Spinner;