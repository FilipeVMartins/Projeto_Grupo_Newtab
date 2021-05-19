import React from 'react';


//style
import './ImageResult.css';

export default (props) => {
    return (
        <div className="image-item">
            <figure>
                <img className='image-result' src={props.imageSrc} alt={"Imagem postada no Twitter"} />
                <figcaption>Postado por:<br /><strong>{props.atUsername}</strong> </figcaption>
            </figure>
        </div>

    );
};