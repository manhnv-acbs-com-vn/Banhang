import "./Men.css";
import { mau } from "../../data/data";
import React, { useState, useEffect } from 'react';
import Product from './../../component/Product/Product';

import { ProductType } from '../../Types/Index';

import { ao } from "../../data/data";
import { size } from "../../data/data";
import { color } from "@mui/system";






function Men() {
  const [checked, setChecked] = useState<string[]>([])
  const [spicy,setSpicy] = useState(false);
  const [list,setList] = useState(ao);
  const [click,setclick] = useState(false);
  const [IDcolor, setIDColor] = useState<string[]>([])
  const [IDsize, setIDSize] = useState<string[]>([])

 
  console.log(IDsize)

  
  const [manh,setManh] = useState({
     color:["color"],
     size:["size"]
     

  })

 
  
  console.log(click)
 
  const checkboxAll = (e :any) =>{
  let  checdedall = e.target.checked
  console.log(checked)
  if(!!checdedall){
   
      setSpicy(false)
  }
  else{
     setSpicy(true)
  }
      
  }
  
console.log(checked)
  const  checkboxColor = (e: any) => {
    setChecked(pre =>  {
      const ischeck = checked.includes(e)
      if (!ischeck) {  
     
        return [...pre, e]
      } else {
       
        return  checked.filter(item => item !== e)
      }
        
    })

  }
  const  checkboxsize = (e: any) => {
    setChecked(pre =>  {
      const ischeck = checked.includes(e)
      if (!ischeck) {  
     
        return [...pre, e]
      } else {
       list.map(item => item)
        return  checked.filter(item => item !== e)
      }

    })


  }
     useEffect(() => {
      list.map((item) =>checked.map(check => check==item.size && setIDSize(e =>[...e,item.id])))
      list.map((item) =>checked.map(check => check==item.color && setIDSize(e =>[...e,item.id])))
    
    
    },[checked]);



 


 

  return (
    <div className="Frames">
      <div className="link">
        <div>
        
          <div className="row">
            <div className="left">
              <div className="chon">
                <p>Size</p>

              </div>
              <div className="group-checkbox">
                <div>

                  <label className="checkbox">
                    <input  
              
                      type="checkbox" onChange={(e) => checkboxAll(e)} />
                    <span>ALL</span>
                  </label>

                </div>

                {size.map((item) => (
                  <div>

                    <label className="checkbox">
                      <input type="checkbox"
                        checked={checked.includes(item.size)}
                        onChange={() => checkboxsize(item.size)}
                        value={item.size}
                      />
                      <span>{item.size}</span>
                    </label>

                  </div>


                ))}


              </div>
              <div className="chon">
                <p>Color</p>

              </div>
              <div className="group-checkbox">
                <div>

                  <label className="checkbox">
                    <input  
              
                      type="checkbox" onChange={(e) => checkboxAll(e)} />
                    <span>ALL</span>
                  </label>

                </div>

                {mau.map((item) => (
                  <div>

                    <label className="checkbox">
                      <input type="checkbox"
                        checked={checked.includes(item.color)}
                        onChange={() => checkboxColor(item.color)}
                        value={item.color}
                      />
                      <span>{item.color}</span>
                    </label>

                  </div>


                ))}


              </div>
            </div>
            
            <div className="right">
                    <div className="row">
                    { list.map((item) =>checked.map(check => ((check==item.size) || (check==item.color)) &&
                      <Product
                           img={item.img}
                            title={item.title}
                            tien={item.tien}
                           khuyenmai={item.khuyenmai}
                           giam={item.giam}
                        />
                       
                // :checked.map(check => (check==item.size) ?     
                //     <Product
                //     img={item.img}
                //     title={item.title}
                //     tien={item.tien}
                //     khuyenmai={item.khuyenmai}
                //     giam={item.giam}
                //   /> :checked.map(check =>(check==item.color) ?
                //    <Product
                //   img={item.img}
                //   title={item.title}
                //   tien={item.tien}
                //   khuyenmai={item.khuyenmai}
                //   giam={item.giam}
                // /> :null
                //      ))
                     ))
                   } 
              
                    </div>
             


            </div>

          </div>

        </div>
      </div>


    </div>
  );
}

export default Men;  



