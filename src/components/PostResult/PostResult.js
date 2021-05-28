import React from 'react';


//style
import './PostResult.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div className="post-item">
            <figure className="post-avatar">
                <img src={props.avatarSrc} alt={"Foto do Usuário do Twitter"} />
            </figure>

            <div className="post-text-content">

            <div className="username">
                <h4 className="name">{props.name}</h4>
                <h5 className="atusername">@{props.attwitterusername}</h5>
            </div>

            <p className="post-paragraph">{props.postParagraph}</p>


            <a target="_blank" rel="noreferrer" href={`https://twitter.com/user/status/${props.postId}`} className="seemore-link">Ver mais no Twitter</a>

            </div>
        </div>

    );
};