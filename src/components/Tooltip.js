import { useState, useRef, useEffect } from 'react'
import './Tooltip.css';

const Tooltip = ({ children, content, location }) => {
    const tooltipEl = useRef();
    const [ show, setShow ] = useState( false );

    const clickOutside = (e) => {
        if (!tooltipEl.current.contains(e.target)) setShow(false);
      };

    useEffect( () => {
        document.addEventListener('click', clickOutside );
        return () => {
            document.removeEventListener('click', clickOutside );
        }
    }, []);

    return (
        <div className="container" ref={tooltipEl}>
            <div
                onClick={() => setShow( !show )}
                >
                { children }
            </div>
            {show && <div className={location}>{ content }</div>}
        </div>
    )
}

export default Tooltip;
