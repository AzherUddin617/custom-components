import { CSSProperties } from 'react';
import classes from './Sidebar.module.css'

interface Props {
    className?: string;
    style?: CSSProperties;
}

const Sidebar = ({
    className,
    style,
}: Props) => {
    const classNames = [classes.Sidebar, className];
    
    return (
        <div className={classNames.join(' ')} style={style}>
            Sidebar
        </div>
    )
}

export default Sidebar