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
import { useNavigate } from 'react-router-dom';

import { ao } from "../../data/data";
import Search from '../../pages/Search/ Search';
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
	const [search, setSearch] = useState("");
	const [manh ,setManh] = useState("manh")
let hitory = useNavigate()
	const onChange = (e : any) =>{
		
		const {id, value} = e.target;
		console.log(value.length)
	    if(e.keyCode ==13){
			if(value.length!==0){
				hitory(`${search}`)
	         setSearch(value)	     
    		}
			}

   }
   
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
						
						 <input type="text" onKeyUp={onChange} /> 
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
						<li><Link to="/">Trang Chủ </Link></li>
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
							<li><Link to="/women/giaynu"> Giày Nữ </Link></li>	
							<li><Link to="/women/quannu"> Quần Nữ</Link></li>
								
								<li> <a href="#">Quần Thể Thao Nữ </a> </li>
							</ol>
						</li>
					
					</ol>	
					</div>
				</div>



			</nav>
			  
			     
		</div>
		

	);
}

export default Nav;
