import React from 'react';


//style
import './ImageResult.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div className="image-item">
            <figure>
                <img className='image-result' src={props.imageSrc} alt={"Imagem postada no Twitter"} onClick={ () => props.maximizeClickedImage(props)} />
                <figcaption>Postado por:<br /><a className="post-link" target="_blank" rel="noreferrer" href={`https://twitter.com/user/status/${props.postId}`}><strong>@{props.atUsername}</strong></a></figcaption>
            </figure>
        </div>
    );
};