import React from 'react';


import { ReactComponent as SearchIcon } from '../../images/layout1/icon-search.svg';
import PostResult from '../../components/PostResult/PostResult';
import ImageResult from '../../components/ImageResult/ImageResult';
import Footer from '../../components/Footer/Footer';



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
            <ImageResult imageSrc={'https://picsum.photos/id/234/160/228'} atUsername="@twitterusername" ></ImageResult>
            <ImageResult imageSrc={'https://picsum.photos/id/233/160/228'} atUsername="@twitterusername" ></ImageResult>
            <ImageResult imageSrc={'https://picsum.photos/id/232/160/228'} atUsername="@twitterusername" ></ImageResult>
            <ImageResult imageSrc={'https://picsum.photos/id/231/160/228'} atUsername="@twitterusername" ></ImageResult>
            <ImageResult imageSrc={'https://picsum.photos/id/230/160/228'} atUsername="@twitterusername" ></ImageResult>
            <ImageResult imageSrc={'https://picsum.photos/id/229/160/228'} atUsername="@twitterusername" ></ImageResult>
            <ImageResult imageSrc={'https://picsum.photos/id/228/160/228'} atUsername="@twitterusername" ></ImageResult>
            <ImageResult imageSrc={'https://picsum.photos/id/227/160/228'} atUsername="@twitterusername" ></ImageResult>
            <ImageResult imageSrc={'https://picsum.photos/id/223/160/228'} atUsername="@twitterusername" ></ImageResult>
            <ImageResult imageSrc={'https://picsum.photos/id/225/160/228'} atUsername="@twitterusername" ></ImageResult>
            
          </div>




          <div className="posts-section">
            <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/238/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/239/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/240/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/241/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/242/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/243/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/244/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/247/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
            <PostResult avatarSrc={'https://picsum.photos/id/248/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
          </div>

        </div>

        <Footer></Footer>
      </div>
    );
  };
};
