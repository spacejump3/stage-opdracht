import './Header.css';

// assets
import logo from '../../assets/blue-current-logo-blue-v-2.png';
import poweredBy from '../../assets/powered-by.png';

function Header() {
	return (
		<header>
			<img src={poweredBy} alt='Blue Current logo' />
			<img src={logo} alt='Blue Current logo' />
		</header>
	);
}

export default Header;
