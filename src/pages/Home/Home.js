import React from 'react';


import { ReactComponent as SearchIcon } from '../../images/layout1/icon-search.svg';
import PostResult from '../../components/PostResult/PostResult';



import './Home.css';



export default class Home extends React.Component {

  render() {
    

    return (
      
      <div className="home-content">

        <div className="home-header">
          <div className="home-nav" >
          </div>

          <div className="home-title-input-wrapper">
            <div className="home-header-title">
              <h1>Encontre hashtags de maneira fácil</h1>
              <h3>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</h3>
            </div>

            <div className="home-input-wrapper">
              <SearchIcon className="search-icon" />
              <form>
                <input placeholder="Buscar..."></input>
              </form>
            </div>
          </div>

        </div>


        <div className="home-results">


          <div className="results-title">
            <h2>Exibindo os 10 resultados mais recentes para #<span>natureza</span></h2>
          </div>



          <div className="carousel-section">
            <div>texto</div>
            {/* https://picsum.photos/id/237/160/228 */}
          </div>



          <div className="posts-section">



            <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
          </div>

        </div>
      </div>
    );
  };
};
