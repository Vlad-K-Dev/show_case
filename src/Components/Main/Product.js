import React from "react";
import PropTypes from 'prop-types';
import ProductPreview from "./Product_preview";

function Products(props) {
    console.log( props.data)
    return (

        <ul className="products" >
            {/*{    props.data.map((item,index) =>{*/}
            {/*        return <ProductPreview*/}
            {/*            item={item}*/}
            {/*            key={item.id}*/}
            {/*            index={index}*/}
            {/*        />*/}
            {/*    })*/}
            {/*}*/}

        </ul>
    )
}

Products.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Products;