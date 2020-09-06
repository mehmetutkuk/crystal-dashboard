import React, { Component } from 'react';

export const Product = ({Url,ProductName}) =>{

    return (
      <div className="img-container">
          <table>
              <tr>
                  <td>
                    <img className="container-img" src={Url} alt={ProductName} />
                  </td>
              </tr>
              <tr>
                <td><p>{ProductName}</p></td>
            </tr>
          </table>
            
      </div>
    );
  }
