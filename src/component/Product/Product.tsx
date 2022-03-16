import './Product.css';
import React, {
	useRef,
	useState,
	useEffect,
	MouseEventHandler,
	VideoHTMLAttributes,
} from "react";
import { ProductType } from '../../Types/Index';


function Product({title,tien,giam,khuyenmai,img,witbh}:ProductType) {
	
	return (
	    <div className={`product  ${witbh}`}>
			<div className = {`"product-item" `}>
                    <div className = "product-img">
                        <div className = "product-img-slider">
                            <img src = {img}/>
                            <img src = {img}/>
                        </div>
                        <button className={`${khuyenmai ? "display-b":"display-n"}`} type = "button">${khuyenmai}</button>
                    </div>
                    <div className = "product-info">
                        <span className = "product-name">{title}</span>
                        <span className = "product-price">&pound; {tien}</span>
						<span className ={`product-prices ${giam ? "display-b":"display-n"}`}>&pound; {giam}</span>
                        <div className = "product-icons">
                            <span>
                                <i className = "fa fa-shopping-cart"></i>
                            </span>
                            <span>
                                <i className = "fa fa-heart"></i>
                            </span>
                            <span>
                                <i className = "fa fa-eye"></i>
                            </span>
                        </div>
                    </div>
                </div>
		</div>
	
	);
}

export default Product;
