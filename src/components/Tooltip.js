import './Tooltip.css';

const Tooltip = ({ children, content }) => {
    return (
        <div className="container">
            <div>{ children }</div>
            <div>{ content }</div>
        </div>
    )
}

export default Tooltip;
