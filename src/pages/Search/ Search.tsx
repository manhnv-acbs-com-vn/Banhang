  import "./ Search.css";
  import { mau } from "../../data/data";
  import Product from '../../component/Product/Product';
  import { ProductListType } from '../../Types/Index';
  import { ao } from "../../data/data";
  import { size } from "../../data/data";
  import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import {
  
  Route,
  Link,
  useParams
} from "react-router-dom";


  function  Search() {
    const [checked, setChecked] = useState<string[]>([])
    const [checkedID, setCheckedID] = useState<string[]>([])
    const [spicy, setSpicy] = useState(false);
    const [list, setList] = useState(ao);
    const [listProduct, SetListProduct] = useState<ProductListType[]>([])
    const [listSearchProduct, SetListSeacrchProduct] = useState<ProductListType[]>([])
    const listp: ProductListType[] = []
    const SearchSp: ProductListType[] = []
    const [err0,SetErro] = useState("")
    // ReactPaginate list 
    const [pageNumber, setPageNumber] = useState(0);
    const search  = useParams();
  
    const usersPerPage = 8;
    const pagesVisited = pageNumber * usersPerPage;
    
     
   console.log(search.title)
    const displayUsers = list.slice(pagesVisited, pagesVisited + usersPerPage).map((item) => {
      return (
        <Product
          img={item.img}
          title={item.title}
          tien={item.tien}
          khuyenmai={item.khuyenmai}
          giam={item.giam}
        />
      );
    });
    const pageCount = Math.ceil(list.length / usersPerPage);
    const pageCounts = Math.ceil(listProduct.length / usersPerPage);

    const changePage = ({ selected }: any) => {
      setPageNumber(selected);
    };
    // ------------------------


    const displayUserss = listProduct.slice(pagesVisited, pagesVisited + usersPerPage).map((item) => {
      return (
        <Product
          img={item.img}
          title={item.title}
          tien={item.tien}
          khuyenmai={item.khuyenmai}
          giam={item.giam}
        />
      );
    });

    const changePages = ({ selected }: any) => {
      setPageNumber(selected);
    };

    const checkboxAll = (e: any) => {
      let checdedall = e.target.checked
      if (!!checdedall) {
        setSpicy(true)

      }
    

    }

    console.log(checked)
    const checkboxColor = (e: any) => {
      setChecked(pre => {
        const ischeck = checked.includes(e)
        if (!ischeck) {

          return [...pre, e]
        } else {

          return checked.filter(item => item !== e)
        }

      })

    }
    const checkboxsize = (e: any) => {
      setCheckedID(pre => {
        const ischeck = checkedID.includes(e)
        if (!ischeck) {

          return [...pre, e]
        } else {
          list.map(item => item)
          return checkedID.filter(item => item !== e)
        }

      })
    }

    useEffect(() => {
      if ((checked.length > 0) || (checkedID.length > 0) || (!!search.title)) {
   
        setSpicy(false)
        list.forEach(item => {
          if ((checked.includes(item.color)) || (checkedID.includes(item.size))) {
            if ((checked.includes(item.color)) && (checkedID.includes(item.size))) {
              const temp = list.filter(a => item.id.includes(a.id))
              console.log(temp)
              temp.map(item => listp.push(item))
            } else {
              const temp = ao.filter(a => item.id.includes(a.id))
              temp.map(item => listp.push(item))
            }

          }
          

        });
        SetListProduct(listp)
        console.log(listProduct)
      } else {
        setSpicy(true)
      }

    }, [checked, checkedID,search]);

    return (
      <div className="Frames">
        <div className="link">
          <div>

            <div className="row">
              <div className="left">
                <div className="group-checkbox">
                  <div>
                    <label className="checkbox" style={{ marginBottom: "11px" }}>
                      <input

                        type="checkbox" onChange={(e) => checkboxAll(e)} />
                      <span>ALL</span>
                    </label>
                  </div>
                </div>

                <div className="chon">


                  <p>Size</p>

                </div>
                <div className="group-checkbox">


                  {size.map((item) => (
                    <div>

                      <label className="checkbox">
                        <input type="checkbox"
                          checked={checkedID.includes(item.size)}
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
                  {spicy ?
                  <div className="row">
                    {displayUsers}
                    <ReactPaginate
                      previousLabel={"<<"}
                      nextLabel={">>"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </div>
                  :search ? <div className="row">
                    {displayUserss}
                    <ReactPaginate
                      previousLabel={"<<"}
                      nextLabel={">>"}
                      pageCount={pageCounts}
                      onPageChange={changePages}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </div>:
                  <div>
                      San Pham khong ton tai
                  </div>






                  }

                </div>



              </div>

            </div>

          </div>
        </div>


      </div>
    );
  }

  export default  Search;



