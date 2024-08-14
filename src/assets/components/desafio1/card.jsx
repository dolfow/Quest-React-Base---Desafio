import PropTypes from'prop-types';
import React from "react"
import './card.css';

const Card = ({title, text}) =>{
    return(
        <div className='card'>
            <h3 style={styleTitle}>{title}</h3>
            <p style={styleTexto}>{text}</p>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired
  }

  const styleTitle = {
    color: 'orange',
    textTransform: 'uppercase'
}

  const styleTexto = {
    color: 'Black',
    textTransform: 'uppercase'
}




export default Card;


