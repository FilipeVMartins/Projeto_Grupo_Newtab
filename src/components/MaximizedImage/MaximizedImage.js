import React from 'react';

import { ReactComponent as CloseIcon } from '../../images/layout1/icon-close.svg';

//style
import './MaximizedImage.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    console.log(props)


    if (props.clickedImageProps){
        return (
            <div className="maximized-image" style={{display: props.maximizedImageDisplay, height: document.querySelector('body').clientHeight}}>
                <div className="screen-block" style={{height: document.querySelector('body').clientHeight}} onClick={() => props.hideClickedImage()} ></div>


                <div className="maximized-box">
                    <figure className="maximized-figure">
                        <img className='maximized-image-result' src={props.clickedImageProps.imageSrc} alt={"Imagem postada no Twitter"} />
                    </figure>

                    <div className="image-post-details">
                        <img src={props.clickedImageProps.avatarSrc} alt={"Imagem de avatar de um usuário do Twitter"} />

                        <div className="image-post-details-text">
                            <div className="username">
                                <h4 className="name">{props.clickedImageProps.name}</h4>
                                <h5 className="atusername">@{props.clickedImageProps.atUsername}</h5>
                            </div>
                            
                            <p className="post-paragraph">{props.clickedImageProps.postParagraph}</p>
                            <a target="_blank" rel="noreferrer" href={`https://twitter.com/user/status/${props.postId}`} className="seemore-link">Ver mais no Twitter</a>
                        </div>
                    </div>
                    <CloseIcon className="close-icon" onClick={() => props.hideClickedImage()}></CloseIcon>
                </div>
            </div>

        );
    } else {
        return (
            <></>
        )
    }
};