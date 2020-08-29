import React,{useState} from "react";
import PropTypes from 'prop-types';
import ProductPreview from "./Product_preview";

const style = {
    ul: {
        display:'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    }

}
function Products(props) {
    const [value, setState] = useState();

    console.log(value)
    function filterData (item){
        // genre
        // grade
        return item.subject === 'Алгебра'
    }
    let filtration = props.courses.filter(filterData)
    // console.log(filtration)




    return (
        <ul className="products" style={style.ul}>
            {   props.courses.map((item,index) =>{
                    return <ProductPreview
                        item={item}
                        key={item.courseId}
                        index={index}
                    />
                })
            }
        </ul>
    )
}

Products.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Products;