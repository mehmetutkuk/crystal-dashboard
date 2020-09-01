
import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import Alert from 'sweetalert-react';
import renderField from '../../components/FormInputs/renderField';
import { Field,reduxForm } from 'redux-form';

const ShopPage = () => {
    
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="card card-plain">
            <div className="header">
              <h4 className="title">Top Slider Section</h4>
              <p className="category"><a>You can change the products in the top section here.</a></p>
            </div>
            <div>
                <div className="form-group">
                    <label className="control-label col-md-3">Search products</label>
                    <div className="col-md-9">
                            <Field
                            name="searchField"
                            type="text"
                            component={renderField}
                            helpText="Search products by name." />
                    </div>
                </div>
                <div className="content text-center"></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default reduxForm({
    form: 'formElements'
  })(ShopPage);