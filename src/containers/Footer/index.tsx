import { CSSProperties } from 'react';
import classes from './Footer.module.css'

interface Props {
    className?: string;
    style?: CSSProperties;
}

const Footer = ({
    className,
    style,
}: Props) => {
    const classNames = [classes.Footer, className];
    
    return (
        <div className={classNames.join(' ')} style={style}>
            Footer
        </div>
    )
}

export default Footer