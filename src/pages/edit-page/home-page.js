
import React, {useState, useEffect } from 'react';
import renderField from '../../components/FormInputs/renderField';
import { Field,reduxForm } from 'redux-form';
import {GetProducts} from '../../api/product'
import {Product} from '../Components/Product'


export const ShopPage = () => {
    const [searchResults,setSearchResults] = useState([]);
    const [productsOnDisplay, setProductsOnDisplay] = useState([]);
    const onSearchFieldChanged = (e) =>{
        GetProducts().then((res)=>{
          if(res.data.dataList!=null){
            setSearchResults(res.data.dataList);
          }
        })
      }
      const setProductCategory = (product) => {
        if(!productsOnDisplay.some(el=> el.productId === product.productId)){
          setProductsOnDisplay([...productsOnDisplay,product]);
        }
        
      }
      useEffect(()=>{
        GetProducts().then((res)=>{
          if(res.data.dataList!=null){
            setProductsOnDisplay(res.data.dataList);
          }
        })
      },[])
    return (
      <div className="card">
    <div className="header">
      <h4>Top Section</h4>
    </div>
    <div className="content">
      <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-md-3">Search Products</label>
          <div className="col-md-9">
            <Field
              name="withHelp"
              type="text"
              onChange={onSearchFieldChanged}
              component={renderField}
              helpText="Search products by entering a name" />
          </div>
        </div>
        
        <div className="form-group">
        <label className="col-md-3">Search Results:</label>
          <div className="card-panel">
          <div onClick={() => setProductCategory({productId:6,productName:"Product"})}>
                  <Product ProductName={"Product"} Url="https://image.shutterstock.com/image-vector/vector-ring-600w-618689747.jpg" />
          </div>
            {
              searchResults && ( searchResults.map(product => {
                return (<div onClick={() => setProductCategory(product)}>
                  <Product ProductName={product.productName} Url="https://image.shutterstock.com/image-vector/vector-ring-600w-618689747.jpg" />
                  </div>)
              }))
            }
            {!searchResults && (
              <div className="col-lg-12"style={{textAlign:"center",verticalAlign:"middle"}}><a>Use search to list products here!</a></div>
            )}
          </div>
        </div>
        <button type="button" className="btn btn-rectangle btn-fill btn-wd btn-info" style={{float:"right"}}>
          <span className="btn-label">
          <i className="fa fa-save"></i>
          </span> Save
        </button>
        <br/>
        <div className="form-group">
        <label className="col-md-3">Products on display:</label>
          <div className="card-panel">
            {
            productsOnDisplay && ( productsOnDisplay.map(product => {
                return (<div onClick={() => setProductCategory(product)}>
                  <Product ProductName={product.productName} Url="https://image.shutterstock.com/image-vector/vector-ring-600w-618689747.jpg" />
                  </div>)
              }))
            }
            {!productsOnDisplay && (
              <div className="col-lg-12"style={{textAlign:"center",verticalAlign:"middle"}}><a>Use search to list products here!</a></div>
            )}
          </div>
        </div>

        </form>
    </div>
  </div>
  )
}

export default reduxForm({
    form: 'formElements'
  })(ShopPage);