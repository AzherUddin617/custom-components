import { CSSProperties } from 'react';
import classes from './Header.module.css'

interface Props {
	className?: string;
	style?: CSSProperties;
}

const Header = ({
	className,
	style,
}: Props) => {
	const classNames = [classes.Header, className];
	
	return (
		<div className={classNames.join(' ')} style={style}>
			Header
		</div>
	)
}

export default Header