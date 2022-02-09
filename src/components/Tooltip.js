import { useState } from 'react'
import './Tooltip.css';

const Tooltip = ({ children, content }) => {
    const [ show, setShow ] = useState( false );

    return (
        <div className="container">
            <div>{ children }</div>
            {show && <div>{ content }</div>}
        </div>
    )
}

export default Tooltip;
