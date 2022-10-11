import { CSSProperties, ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import classes from './Layout.module.css'

interface Props {
	className?: string;
	style?: CSSProperties;
	children: ReactNode;
}

const Layout = ({
	className,
	style,
	children,
}: Props) => {
	const classNames = [classes.Layout, className];

	return (
		<div className={classNames.join(' ')} style={style}>
			<Header />
			<main>
				<div className={classes.left}>
					<Sidebar />
				</div>

				<div className={classes.right}>
					{children}
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default Layout