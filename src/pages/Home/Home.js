import React from 'react';

import { ReactComponent as SearchIcon } from '../../images/layout1/icon-search.svg';
import { ReactComponent as ArrowLeftIcon } from '../../images/layout1/icon-arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../images/layout1/icon-arrow-right.svg';
import PostResult from '../../components/PostResult/PostResult';
import ImageResult from '../../components/ImageResult/ImageResult';
import MaximizedImage from '../../components/MaximizedImage/MaximizedImage';
import Footer from '../../components/Footer/Footer';

import NavMenu from '../../components/Menu/NavMenu';



import './Home.css';



export default class Home extends React.Component {




  state = {
    searchedString: 'natureza',
    twitterImages: null,
    twitterPosts: null,

    //clickedImageTweetID: '',
    clickedImageProps: null,
    maximizedImageDisplay: 'none',

    carouselPointer: 0
  }



  componentDidMount () {
    this.getTwitterPosts();
    this.getTwitterImages();
  }


  getTwitterImages = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://cors.bridged.cc/https://api.twitter.com/2/tweets/search/recent?query= ${this.state.searchedString} has:hashtags -is:retweet -is:quote has:images&max_results=10&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url,url&media.fields=type,url,width,height`, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({twitterImages:result});
      })
      .catch(error => console.log('error on getting twitter images ', error));

  }

  getTwitterPosts = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://cors.bridged.cc/https://api.twitter.com/2/tweets/search/recent?query= ${this.state.searchedString} has:hashtags -is:retweet -is:quote -has:links&max_results=10&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url,url&media.fields=type,url,width,height`, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({twitterPosts:result});
      })
      .catch(error => console.log('error on getting twitter posts ', error));
  }

  // get user data from posts requests by id
  getUserPostData(userId) {
    let foundUser = null;

    this.state.twitterPosts.includes.users.forEach(user => {
      if (userId === user.id){
        foundUser = user;
      };
    });

    return foundUser
  };

  // get user data from images requests by id
  getUserImageData(userId) {
    let foundUser = null;

    this.state.twitterImages.includes.users.forEach(user => {
      if (userId === user.id){
        foundUser = user;
      };
    });

    return foundUser
  };

  // get media data from images requests by media keys
  getMediaData(mediaKey) {
    let foundMedia = null;

    this.state.twitterImages.includes.media.forEach(media => {
      if (mediaKey === media.media_key){
        foundMedia = media;
      };
    });

    return foundMedia
  };

  maximizeClickedImage = (clickedImageProps) => {
    
    console.log(clickedImageProps)
    // sets the props states of the image to be maximized
    this.setState({clickedImageProps:clickedImageProps})

    // sets maximized component style state visible
    this.setState({maximizedImageDisplay: 'flex'})
  }

  hideClickedImage = () => {
    this.setState({maximizedImageDisplay: 'none'})
  }

  // this will passively update the state of the carousel based on scroll event calls
  handleCarouselSideScroll = (event) => {
    let element = event.target;
    
    // check if view is at the start of the side scroll
    if ( element.scrollLeft === 0) {
      this.setState({carouselPointer: 0})
    } else

    // check if view is somewhere between the start and end of the side scroll
    if ((element.scrollLeft >= 0) && ( element.scrollLeft + element.clientWidth < element.scrollWidth )){
      this.setState({carouselPointer: 1})
    } else

    // check if view is at the end of the side scroll
    if (element.scrollWidth - element.scrollLeft === element.clientWidth) {
      this.setState({carouselPointer: 2})
    }
  }

  // this is what will actually control the state of the carousel through scroll event actions
  clickScrollDot = (ScrollDotIndex) => {
    let carouselElement = document.querySelector('.home-content .carousel-section');
    
    if (ScrollDotIndex === 0) {
      console.log('aaa')
      carouselElement.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
    } else

    if (ScrollDotIndex === 1) {
      carouselElement.scrollTo({
        left: (carouselElement.scrollWidth/2)-(carouselElement.clientWidth/2),
        behavior: 'smooth'
        });
    } else

    if (ScrollDotIndex === 2) {
      carouselElement.scrollTo({
        left: carouselElement.scrollWidth,
        behavior: 'smooth'
      });
    };
  };

  // this function is based on the 'clickScrollDot' function, gives it's functionality to the arrow buttons 
  carouselArrowClick = (toNextIndex) => {
    if (this.state.carouselPointer === 0 && toNextIndex === -1) {
      this.clickScrollDot(2)
    } else

    if (this.state.carouselPointer === 2 && toNextIndex === 1) {
      this.clickScrollDot(0)

    } else {
      this.clickScrollDot(this.state.carouselPointer + toNextIndex)
    } 
  };







  render() {
    let user;
    let media;
    

    return (
      <div className="home-content">
        <div className="home-header">
          <div className="home-nav" >
            <NavMenu />
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


          <div className="carousel-section-wrapper">
            <div className="carousel-section" onScroll={this.handleCarouselSideScroll} >
              {
              this.state.twitterImages !== null ?  
              Object.entries(this.state.twitterImages.data).map(([index, post]) => {
                user = this.getUserImageData(post.author_id);
                media = this.getMediaData(post.attachments.media_keys[0])
                return (
                  <ImageResult key={'ImageResult-' + index} maximizeClickedImage={this.maximizeClickedImage} imageSrc={media.url} atUsername={user.username} postId={post.id} avatarSrc={user.profile_image_url} name={user.name} postParagraph={post.text}></ImageResult>
                );                         
              })
              : ''
              }
              {/* <ImageResult imageSrc={'https://picsum.photos/id/234/160/228'} atUsername="@twitterusername" ></ImageResult>
              <ImageResult imageSrc={'https://picsum.photos/id/233/160/228'} atUsername="@twitterusername" ></ImageResult>
              <ImageResult imageSrc={'https://picsum.photos/id/232/160/228'} atUsername="@twitterusername" ></ImageResult>
              <ImageResult imageSrc={'https://picsum.photos/id/231/160/228'} atUsername="@twitterusername" ></ImageResult>
              <ImageResult imageSrc={'https://picsum.photos/id/230/160/228'} atUsername="@twitterusername" ></ImageResult>
              <ImageResult imageSrc={'https://picsum.photos/id/229/160/228'} atUsername="@twitterusername" ></ImageResult>
              <ImageResult imageSrc={'https://picsum.photos/id/228/160/228'} atUsername="@twitterusername" ></ImageResult>
              <ImageResult imageSrc={'https://picsum.photos/id/227/160/228'} atUsername="@twitterusername" ></ImageResult>
              <ImageResult imageSrc={'https://picsum.photos/id/223/160/228'} atUsername="@twitterusername" ></ImageResult>
              <ImageResult imageSrc={'https://picsum.photos/id/225/160/228'} atUsername="@twitterusername" ></ImageResult>           */}
            </div>


            <div className="carousel-arrows-wrapper arrow-wrapper-left" onClick={() => this.carouselArrowClick(-1)}>
              <ArrowLeftIcon className="carousel-arrows carousel-left-arrow" />
            </div>
            

            <div className="carousel-arrows-wrapper arrow-wrapper-right" onClick={() => this.carouselArrowClick(1)}>
              <ArrowRightIcon className="carousel-arrows carousel-right-arrow" />
            </div >

            <div className="three-dots-wrapper">
              <div className="scroll-dot" style={{backgroundColor: this.state.carouselPointer === 0 ? '#3634F7' : ''}} onClick={() => this.clickScrollDot(0)} ></div>
              <div className="scroll-dot" style={{backgroundColor: this.state.carouselPointer === 1 ? '#3634F7' : ''}} onClick={() => this.clickScrollDot(1)} ></div>
              <div className="scroll-dot" style={{backgroundColor: this.state.carouselPointer === 2 ? '#3634F7' : ''}} onClick={() => this.clickScrollDot(2)} ></div>
            </div>
          </div>

          <div className="posts-section-wrapper">
            <div className="posts-section">
              {
              this.state.twitterPosts !== null ?  
              Object.entries(this.state.twitterPosts.data).map(([index, post]) => {
                // rule to avoid printing odd indexes
                if ( index % 2 !== 0 ){
                  return false
                }
                user = this.getUserPostData(post.author_id);
                return (
                  <PostResult key={'PostResult-even-' + index} avatarSrc={user.profile_image_url} name={user.name} attwitterusername={user.username} postParagraph={post.text} postId={post.id}></PostResult>
                );
              })
              : ''
              }
              {/* <PostResult avatarSrc={'https://picsum.photos/id/237/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
              <PostResult avatarSrc={'https://picsum.photos/id/238/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'} seeMorelink={''} ></PostResult>
              <PostResult avatarSrc={'https://picsum.photos/id/239/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'} seeMorelink={''} ></PostResult>
              <PostResult avatarSrc={'https://picsum.photos/id/240/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'RT @username Lorem ipsum dolor sit amet, consetetur...'} seeMorelink={''} ></PostResult>
              <PostResult avatarSrc={'https://picsum.photos/id/241/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...'} seeMorelink={''} ></PostResult> */}
            </div>

            <div className="posts-section">
            {
              this.state.twitterPosts !== null ?  
              Object.entries(this.state.twitterPosts.data).map(([index, post]) => {
                // rule to avoid printing even indexes
                if ( index % 2 === 0 ){
                  return false
                }
                user = this.getUserPostData(post.author_id);
                return (
                  <PostResult key={'PostResult-odd-' + index} avatarSrc={user.profile_image_url} name={user.name} attwitterusername={user.username} postParagraph={post.text} postId={post.id}></PostResult>
                );
              })
              : ''
              }
              {/* <PostResult avatarSrc={'https://picsum.photos/id/242/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
              <PostResult avatarSrc={'https://picsum.photos/id/243/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'RT @username Lorem ipsum dolor sit amet, consetetur...'} seeMorelink={''} ></PostResult>
              <PostResult avatarSrc={'https://picsum.photos/id/244/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
              <PostResult avatarSrc={'https://picsum.photos/id/247/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...'} seeMorelink={''} ></PostResult>
              <PostResult avatarSrc={'https://picsum.photos/id/248/82/82'} userName={'UserName'} attwitterusername={'@twitterusername'} postParagraph={'RT @username Lorem ipsum dolor sit amet, consetetur...'} seeMorelink={''} ></PostResult> */}
            </div>
          </div>


        </div>
        <MaximizedImage hideClickedImage={this.hideClickedImage} maximizedImageDisplay={this.state.maximizedImageDisplay} clickedImageProps={this.state.clickedImageProps} ></MaximizedImage>
        <Footer></Footer>
      </div>
    );
  };
};
