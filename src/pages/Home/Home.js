import React from 'react';

import { ReactComponent as SearchIcon } from '../../images/layout1/icon-search.svg';
import { ReactComponent as ArrowLeftIcon } from '../../images/layout1/icon-arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../images/layout1/icon-arrow-right.svg';
import PostResult from '../../components/PostResult/PostResult';
import ImageResult from '../../components/ImageResult/ImageResult';
import MaximizedImage from '../../components/MaximizedImage/MaximizedImage';
import Footer from '../../components/Footer/Footer';
import NavMenu from '../../components/Menu/NavMenu';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './Home.css';

export default class Home extends React.Component {

  state = {
    searchedString: '',
    twitterImages: null,
    twitterPosts: null,

    clickedImageProps: null,
    maximizedImageDisplay: 'none',

    searchDisplay: '',

    carouselPointer: 0
  }

  // function to fetch twitter data after search submit
  getTwitterImages = (searchedStringSanitized) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://cors.bridged.cc/https://api.twitter.com/2/tweets/search/recent?query=${searchedStringSanitized} has:hashtags -is:retweet -is:quote has:images&max_results=10&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url,url&media.fields=type,url,width,height`, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({twitterImages:result});
      })
      .catch(error => console.log('error on getting twitter images ', error));

  }

  // function to fetch twitter data after search submit
  getTwitterPosts = (searchedStringSanitized) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://cors.bridged.cc/https://api.twitter.com/2/tweets/search/recent?query= ${searchedStringSanitized} has:hashtags -is:retweet -is:quote -has:links&max_results=10&expansions=author_id,attachments.media_keys&user.fields=id,name,username,profile_image_url,url&media.fields=type,url,width,height`, requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({twitterPosts:result});
      })
      .catch(error => console.log('error on getting twitter posts ', error));
  }

  // get user data from posts requests by id, user = author of a specific post.
  getUserPostData(userId) {
    let foundUser = null;

    this.state.twitterPosts.includes.users.forEach(user => {
      if (userId === user.id){
        foundUser = user;
      };
    });

    return foundUser
  };

  // get user data from images requests by id, user = author of a specific post.
  getUserImageData(userId) {
    let foundUser = null;

    this.state.twitterImages.includes.users.forEach(user => {
      if (userId === user.id){
        foundUser = user;
      };
    });

    return foundUser
  };

  // get media data from images requests by media keys, media = registry in the include json with the image data (size, url, type etc)
  getMediaData(mediaKey) {
    let foundMedia = null;

    this.state.twitterImages.includes.media.forEach(media => {
      if (mediaKey === media.media_key){
        foundMedia = media;
      };
    });

    return foundMedia
  };

  // function to display the maximized image component and store the data of the clicked image to be used by the maximized component.
  maximizeClickedImage = (clickedImageProps) => {
    
    // sets the props states of the image to be maximized
    this.setState({clickedImageProps:clickedImageProps})

    // sets maximized component style state visible
    this.setState({maximizedImageDisplay: 'flex'})
  }

  // function to hide the maximized image component
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

  handleSubmit = (event) => {
    event.preventDefault();

    // validations
    if (this.state.searchedString.length === 0) {
      toast.error('O campo de busca não pode estar vazio!');
    } else
    if (this.state.searchedString.length > 140) {
      toast.error('Sua busca deve conter menos de 140 caracteres!');
    };

    // cleans characters that could interfere with the search
    let searchedStringSanitized = this.state.searchedString.replace(/[#%$@:-]/g,'');

    // builds the text to be displayed on search title and searchListing with the # character, to be saved on airtables.
    let searchDisplay = searchedStringSanitized.split(" ");
    searchDisplay = searchDisplay.map((hashtag) => {
      return ('#'+hashtag)
    })
    searchDisplay = searchDisplay.join(' ')
    this.setState({searchDisplay:searchDisplay})

    this.getTwitterImages(searchedStringSanitized);
    this.getTwitterPosts(searchedStringSanitized);
    this.saveSearches(searchDisplay);
  };

  checkResults() {
    // if there is at least one successful request response
    if (this.state.twitterImages) {
      // if there is at least one nested object that is not 'undefined'
      if ((typeof this.state.twitterImages.data !== 'undefined')){
        return true
      };
    }
    // if there is at least one successful request response
    if (this.state.twitterPosts) {
      // if there is at least one nested object that is not 'undefined'
      if ((typeof this.state.twitterPosts.data !== 'undefined')){
        return true
      };
    };
    // else
    return false;
  };

  formattedDate(d = new Date()) {
    return [d.getDate(), d.getMonth()+1, d.getFullYear()]
        // add zeros when n < than 10, return a new array
        .map(n => n < 10 ? `0${n}` : `${n}`)
        // join the pevious array into a string and return it
        .join('/');
  }

  formattedHour(d = new Date()) {
    return [d.getHours(), d.getMinutes()]
        // add zeros when n < than 10, return a new array
        .map(n => n < 10 ? `0${n}` : `${n}`)
        // join the pevious array into a string and return it
        .join(':');
  }

  saveSearches (searchedString) {

    let body = JSON.stringify({
        "records": [
            {
            "fields": {
                "Squad": "1",
                "Hashtag": searchedString,
                "Data": this.formattedDate(),
                "Hora": this.formattedHour()
                }
            }
        ]
    });

    fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas', {
        method: 'POST',
        headers: {
            authorization: 'Bearer key2CwkHb0CKumjuM',
            'content-type': 'application/json'
        },
        body: body
    });
};

  render() {
    let user;
    let media;

    return (
      <div className="home-content">
        <div className="home-header">

          <div className="home-nav" >
            <NavMenu headerHeightMobile={32.5} headerHeightDesktop={49.25}/>
          </div>

          <div className="home-title-input-wrapper">
            <div className="home-header-title">
              <h1>Encontre hashtags de maneira fácil</h1>
              <h3>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo</h3>
            </div>

            <div className="home-input-wrapper">
              <SearchIcon className="search-icon" />
              <form onSubmit={this.handleSubmit}>
                <input placeholder="Buscar..." value={this.state.searchedString} onChange={event => this.setState({searchedString: event.target.value})}></input>
              </form>
            </div>
          </div>

        </div>

        <div className="home-results" >

          <div className="results-title" style={{display: this.state.twitterImages || this.state.twitterPosts ? 'block' : 'none'}}>
            {this.checkResults() ? <h2>Exibindo os 10 resultados mais recentes para <span>{this.state.searchDisplay}</span></h2> : <h2>Não foram encontrados resultados para #<span>natureza</span></h2> }
          </div>

          <div className="carousel-section-wrapper" style={{display: this.state.twitterImages && (typeof this.state.twitterImages.data !== 'undefined') ? 'flex' : 'none'}}>
            <div className="carousel-section" onScroll={this.handleCarouselSideScroll} >
              {
              this.state.twitterImages !== null && (typeof this.state.twitterImages.data !== 'undefined') ?  
              Object.entries(this.state.twitterImages.data).map(([index, post]) => {
                user = this.getUserImageData(post.author_id);
                media = this.getMediaData(post.attachments.media_keys[0])
                return (
                  <ImageResult key={'ImageResult-' + index} maximizeClickedImage={this.maximizeClickedImage} imageSrc={media.url} atUsername={user.username} postId={post.id} avatarSrc={user.profile_image_url} name={user.name} postParagraph={post.text}></ImageResult>
                );                         
              })
              : ''
              }
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
              this.state.twitterPosts !== null && (typeof this.state.twitterPosts.data !== 'undefined') ?  
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
            </div>

            <div className="posts-section">
            {
              this.state.twitterPosts !== null && (typeof this.state.twitterPosts.data !== 'undefined') ?  
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
            </div>
          </div>

        </div>

        <MaximizedImage hideClickedImage={this.hideClickedImage} maximizedImageDisplay={this.state.maximizedImageDisplay} clickedImageProps={this.state.clickedImageProps} ></MaximizedImage>

        <div className="footer-wrapper" style={{marginTop: this.state.twitterImages && (typeof this.state.twitterImages.data !== 'undefined') ? '0rem' : '63vh'}}>
          <Footer></Footer>
        </div>
      </div>
    );
  };
};
