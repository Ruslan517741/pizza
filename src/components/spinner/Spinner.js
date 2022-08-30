import spinner from "../../resources/img/spinner.gif";

const Spinner = () => {
    return (
        <div className="spinner" role="status">
            <img src={spinner} alt="spinner" className="spinner" style={{width:'500px', margin: '0 auto', background: 'none', display: 'block'}}/>
        </div>
    )
}

export default Spinner;