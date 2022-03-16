import './Nav.css';
import logo from '../../image/logo.png';
import React, {
	useRef,
	useState,
	useEffect,
	MouseEventHandler,
	VideoHTMLAttributes,
} from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { makeStyles } from '@mui/styles';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
	root: {
		"& .MuiAutocomplete-inputRoot": {
			borderTopRightRadius: "24px",
			height: "45px",
			borderBottomRightRadius: "24px"
		},
		"& .MuiSvgIcon-root": {
			display: "none"
		},
	},

});


function Nav() {
	const [errorMessage, setErrorMessage] = useState<string | undefined>();
	const top100Films = [
		{ label: 'The Shawshank Redemption', year: 1994 },
		{ label: 'The Godfather', year: 1972 },
		{ label: 'The Godfather: Part II', year: 1974 },
		{ label: 'The Dark Knight', year: 2008 },
		{ label: '12 Angry Men', year: 1957 },
		{ label: "Schindler's List", year: 1993 },
		{ label: 'Pulp Fiction', year: 1994 },
		{
			label: 'The Lord of the Rings: The Return of the King',
			year: 2003,
		},
		{ label: 'The Good, the Bad and the Ugly', year: 1966 },
		{ label: 'Fight Club', year: 1999 },
		{
			label: 'The Lord of the Rings: The Fellowship of the Ring',
			year: 2001,
		},
		{
			label: 'Star Wars: Episode V - The Empire Strikes Back',
			year: 1980,
		},
		{ label: 'Forrest Gump', year: 1994 },
		{ label: 'Inception', year: 2010 },
		{
			label: 'The Lord of the Rings: The Two Towers',
			year: 2002,
		},
		{ label: "One Flew Over the Cuckoo's Nest", year: 1975 },
		{ label: 'Goodfellas', year: 1990 },
		{ label: 'The Matrix', year: 1999 },
		{ label: 'Seven Samurai', year: 1954 },
		{
			label: 'Star Wars: Episode IV - A New Hope',
			year: 1977,
		},
		{ label: 'City of God', year: 2002 },
		{ label: 'Se7en', year: 1995 },
		{ label: 'The Silence of the Lambs', year: 1991 },
		{ label: "It's a Wonderful Life", year: 1946 },
		{ label: 'Life Is Beautiful', year: 1997 },
		{ label: 'The Usual Suspects', year: 1995 },
		{ label: 'Léon: The Professional', year: 1994 },
		{ label: 'Spirited Away', year: 2001 },
		{ label: 'Saving Private Ryan', year: 1998 },
		{ label: 'Once Upon a Time in the West', year: 1968 },
		{ label: 'American History X', year: 1998 },
		{ label: 'Interstellar', year: 2014 },
		{ label: 'Casablanca', year: 1942 },
		{ label: 'City Lights', year: 1931 },
		{ label: 'Psycho', year: 1960 },
		{ label: 'The Green Mile', year: 1999 },
		{ label: 'The Intouchables', year: 2011 },
		{ label: 'Modern Times', year: 1936 },
		{ label: 'Raiders of the Lost Ark', year: 1981 },
		{ label: 'Rear Window', year: 1954 },
		{ label: 'The Pianist', year: 2002 },
		{ label: 'The Departed', year: 1999 },
		{ label: 'Terminator 2: Judgment Day', year: 2009 },
		{ label: 'Back to the Future', year: 2006 },
		{ label: 'Whiplash', year: 2099 },
		{ label: 'Gladiator', year: 2006 },
		{ label: 'Memento', year: 2006 },
		{ label: 'The Prestige', year: 2006 },
		{ label: 'The Lion King', year: 1999 },
		{ label: 'Apocalypse Now', year: 1999 },
		{ label: 'Alien', year: 1999 },
		{ label: 'Sunset Boulevard', year: 1999 },
		{
			label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
			year: 1999,
		},
		{ label: 'The Great Dictator', year: 2000 },
		{ label: 'Cinema Paradiso', year: 1999 },
		{ label: 'The Lives of Others', year: 1999 },
		{ label: 'Grave of the Fireflies', year: 1999 },
		{ label: 'Paths of Glory', year: 2000 },
		{ label: 'Django Unchained', year: 2000 },
		{ label: 'The Shining', year: 2000 },
		{ label: 'WALL·E', year: 2000 },
		{ label: 'American Beauty', year: 2000 },
		{ label: 'The Dark Knight Rises', year: 1999 },
		{ label: 'Princess Mononoke', year: 2000 },
		{ label: 'Aliens', year: 1999 },
		{ label: 'Oldboy', year: 2000 },
		{ label: 'Once Upon a Time in America', year: 1984 },
		{ label: 'Witness for the Prosecution', year: 1957 },
		{ label: 'Das Boot', year: 1981 },
		{ label: 'Citizen Kane', year: 1941 },
		{ label: 'North by Northwest', year: 1959 },
		{ label: 'Vertigo', year: 1958 },
		{
			label: 'Star Wars: Episode VI - Return of the Jedi',
			year: 1983,
		},
		{ label: 'Reservoir Dogs', year: 1992 },
		{ label: 'Braveheart', year: 1995 },
		{ label: 'M', year: 1931 },
		{ label: 'Requiem for a Dream', year: 2000 },
		{ label: 'Amélie', year: 2001 },
		{ label: 'A Clockwork Orange', year: 1999 },
		{ label: 'Like Stars on Earth', year: 2007 },
		{ label: 'Taxi Driver', year: 1976 },
		{ label: 'Lawrence of Arabia', year: 1962 },
		{ label: 'Double Indemnity', year: 1944 },
		{
			label: 'Eternal Sunshine of the Spotless Mind',
			year: 2004,
		},
		{ label: 'Amadeus', year: 1984 },
		{ label: 'To Kill a Mockingbird', year: 1962 },
		{ label: 'Toy Story 3', year: 2010 },
		{ label: 'Logan', year: 2017 },
		{ label: 'Full Metal Jacket', year: 1987 },
		{ label: 'Dangal', year: 2016 },
		{ label: 'The Sting', year: 1973 },
		{ label: '2001: A Space Odyssey', year: 1968 },
		{ label: "Singin' in the Rain", year: 1952 },
		{ label: 'Toy Story', year: 1995 },
		{ label: 'Bicycle Thieves', year: 1948 },
		{ label: 'The Kid', year: 1921 },
		{ label: 'Inglourious Basterds', year: 2009 },
		{ label: 'Snatch', year: 2000 },
		{ label: '3 Idiots', year: 2009 },
		{ label: 'Monty Python and the Holy Grail', year: 1975 },


	];
	const classes = useStyles();
	return (
		<div>
			<input type="checkbox" id="menu_moblie"/>

			<nav>
				<div className="Nav-top">
					<label htmlFor='menu_moblie' className="bar">
						<span className="fa fa-bars" id="bars"></span>
					</label>
					<div className="icon"><img src={logo} alt="" /></div>
					<div className="nav_find">
						<div className="nav_title">
							<i style={{ fontWeight: "510" }} className="fa-solid fa-magnifying-glass"> <span>Search</span></i>
						</div>
						<div className="Nav_InputFind">
							<Autocomplete
								className={classes.root}
								disablePortal
								id="combo-box-demo"
								options={top100Films}
								sx={{ width: "100%" }}
								noOptionsText={'Không có kết quả phù hợp'}
								renderInput={(params) => (
									<TextField
										{...params} InputProps={{ ...params.InputProps, disableUnderline: true }} placeholder={"Nhập Tên Sản Phẩm... "} variant="standard" />
								)}
							/>
						</div>

					</div>
					<div className="nav-cart-login">
						<div>
							<a href="#">
								Đăng Nhập
							</a>
						</div>
						<div>
                            <a className="cart" href="#">
								<i className="fa fa-shopping-cart"></i>
							    <span>+9</span>
							</a>
							
							
						</div>
					</div>
				</div>
				<div className="Nav-bottom">
					<div className="mennu_mobile">
					     <div className="logo">
						    <img src={logo} alt="" />
						 </div>
						<div className="edit">
						<label htmlFor='menu_moblie'>
						  <span className="fa fa-times" id="times"></span>
					</label>
					     	
						</div>
						 
				   </div>
					<div className="menu-doc">
					<ol className="menu">
						<li><Link to="/trangchu">Trang Chủ </Link></li>
						<li><Link to="/gioithieu">Giới Thiệu</Link></li>
						<li>
						<input type="checkbox" name="" id="nam"/>	
						<a href="#">
						    <label htmlFor="nam" className="icon-menusub">
				               Thời Trang Nam
					     	<span className="fa-solid fa-plus" id="cong"></span>
							 <span className="fa-solid fa-minus" id="tru"></span>
					     </label>
						 </a>
						 <ol className="menu_sub menu_nam">
								<li><Link to="/Mens/giaynam">Giày Nam</Link></li>
								<li><a href="#">Áo Nam</a></li>
								<li><a href="#">Quần Nam</a></li>
								<li> <a href="#">Quần Thể Thao Nam</a> </li>
							</ol>
						</li>
						<li>
						<input type="checkbox" name="" id="nu"/>	
						<a href="#">
						    <label htmlFor="nu" className="icon-menusub">
						     Thời Trang Nữ &nbsp;
					     	<span className="fa-solid fa-plus" id="cong"></span>
							 <span className="fa-solid fa-minus" id="tru"></span>
					     </label>
						 </a>
							<ol className="menu_sub">
								<li><a href="#">Giày Nữ </a></li>
								<li><a href="#">Áo Nữ </a></li>
								<li><a href="#">Quần Nữ</a></li>
								<li> <a href="#">Quần Thể Thao Nữ </a> </li>
							</ol>
						</li>
						<li><Link to="/lienhe">Trang Chủ </Link></li>
					</ol>	
					</div>
				</div>



			</nav>
		</div>
	);
}

export default Nav;
