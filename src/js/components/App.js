import React, { Component } from 'react';
import '../../css/App.css';
import { ProductCatalogEntry } from "./product_catalog/ProductCatalogEntry";
import { CatalogEntryView } from "../../../db/item-data.json";

class App extends Component {
  render() {
    const productDetails = CatalogEntryView[0];
    return (
      <div className="App">
        { productDetails && <ProductCatalogEntry productDetails={productDetails} /> }
      </div>
    );
  }
}

export default App;
