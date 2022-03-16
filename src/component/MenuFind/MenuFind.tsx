import './MenuFind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {

	useState

} from "react";
import { categories } from "../../data/data";

import Product from '../Product/Product';
function MemuFind() {
	const [list, setlist] = useState(categories);
	const filterMenu = (item_p: any) => {
	      if(item_p ==="ALL"){
			setlist(categories)
		  }else{
			const uptadetItem = categories.filter((curElenm) => {
				return item_p == curElenm.loai
			});
			setlist(uptadetItem)
		  }
	}
	return (
		<div>
			<div>
				<p className="title-p">Sản Phẩm Mới & Bán Chạy Nhất</p>
				<p className='content-p'>Consequat magna massa vel Thoughtisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
				<div className='menu_find'>
					<button className="item-buton" onClick={() => filterMenu("ALL")}>ALL</button>
					<button className="item-buton" onClick={() => filterMenu("women")}>WOMEN'S</button>
					<button className="item-buton" onClick={() => filterMenu("ACCESSORIES")}>ACCESSORIES</button>
					<button className="item-buton" onClick={() => filterMenu("men")}>MEN'S</button>
				</div>
			</div>
			<div className='sp_moi'>
				<div className="row">
					{
						list.map((item) => (
							<Product
								img={item.img}
								title={item.title}
								tien={item.tien}
								khuyenmai={item.khuyenmai}
								giam={item.giam}
							/>

						))
					}

				</div>

			</div>




		</div>

	);
}

export default MemuFind;
