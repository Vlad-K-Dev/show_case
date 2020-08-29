import React, {useState} from 'react';

const style = {
    li:{
        float: 'left',
        boxSizing: 'border-box',
        overflow: 'hidden',
        display: 'block',
        margin: '0 15px 55px',
        width: '170px',
        minHeight: '260px',
        border: 'solid 1px #b5b5b5',
        borderRadius: '10px',
        background: '#fff',
    },
    'product-imageWrap':{
        position: 'relative',
        overflow: 'hidden',
        height: '134px',
        background: '#ddd',
    },
    'product-description':{
        padding: '10px 16px'
    },
    div:{

    },
    img:{

    },
    button:{
        marginBottom: '0',
        fontSize: '12px',
        fontWeight: '600',
        color: '#00c1ff',
    },
    a:{
        padding: '.4em .1em',
        borderRadius: '6px',
        background: '#00c1ff'
    }
}

function ProductPreview(props){
    const [valueButton, setValueButton] = useState(true)
    function changePrice(event){
        event.preventDefault();
            setValueButton()
    }
    return (
        <li className="product__item" key={props.item.courseHash} style={style.li}>
        <div className="product-imageWrap" style={style["product-imageWrap"]}>
            <img className="product__image" src="" alt=""/>
        </div>
        <div className="product-description" style={style["product-description"]}>
            <p className="product-title">{props.item.title}</p>
            <p className="product-grade">{typeof props.item.grade} классы</p>
            <p className="sci-genre">{props.item.genre}</p>
            <p style={style.button} onClick={changePrice}>
                <a href="" style={style.a}>{props.item.price}</a>
            </p>
        </div>
        </li>
    )
}


export default ProductPreview;