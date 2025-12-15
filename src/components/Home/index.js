import {Component} from 'react'
import {IoIosClose, IoMdSearch} from 'react-icons/io'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ReactLoader from '../ReactLoader'
import Failure from '../Failure'
import VideoItem from '../VideoItem'

import {
  HomeContainer,
  HomeContent,
  VideoContent,
  Banner,
  InputContainer,
  Input,
  SearchButton,
  VideoList,
  BannerContent,
  BannerImg,
  BannerTitle,
  GetButton,
  NoVideos,
  NoVideoImg,
  Heading,
  Description,
  RetryButton,
  Button,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    search: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    bannerVisible: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  getHomeVideos = async () => {
    const {search} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const homeApiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    try {
      const response = await fetch(homeApiUrl, options)
      const data = await response.json()
      if (response.ok) {
        const formattedData = data.videos.map(video => ({
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
          },
          id: video.id,
          publishedAt: video.published_at,
          thumbnailUrl: video.thumbnail_url,
          title: video.title,
          viewCount: video.view_count,
        }))
        const homeVideosList = data.total > 0 ? formattedData : []
        this.setState({
          videosList: homeVideosList,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  onClickRetry = () => {
    this.getHomeVideos()
  }

  onClickSearchButton = () => {
    this.getHomeVideos()
  }

  renderLoader = () => <ReactLoader />

  renderFailureView = () => <Failure retryApi={this.onClickRetry} />

  renderNoVideosView = () => (
    <NoVideos>
      <NoVideoImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <Heading>No search results found</Heading>
      <Description>Try different key words or remove search filter</Description>
      <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
    </NoVideos>
  )

  renderVideosList = () => {
    const {videosList} = this.state
    if (videosList.length > 0) {
      return (
        <VideoList>
          {videosList.map(video => (
            <VideoItem key={video.id} video={video} />
          ))}
        </VideoList>
      )
    }
    return this.renderNoVideosView()
  }

  renderHomePage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderVideosList()
      default:
        return null
    }
  }

  onClickBannerClose = () => {
    this.setState(prevState => ({bannerVisible: !prevState.bannerVisible}))
  }

  render() {
    const {search, bannerVisible} = this.state

    return (
      <HomeContainer data-testid="home">
        <Header />
        <HomeContent>
          <Sidebar />
          <VideoContent>
            {bannerVisible && (
              <Banner data-testid="banner">
                <BannerContent>
                  <BannerImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <BannerTitle>
                    Buy Nxt Watch Premium prepaid plans with UPI{' '}
                  </BannerTitle>
                  <GetButton>GET IT NOW</GetButton>
                </BannerContent>
                <Button
                  type="button"
                  data-testid="close"
                  onClick={this.onClickBannerClose}
                >
                  <IoIosClose size={35} />
                </Button>
              </Banner>
            )}
            <InputContainer>
              <Input
                type="search"
                placeholder="Search"
                value={search}
                onChange={this.onChangeSearch}
              />
              <SearchButton
                type="button"
                onClick={this.onClickSearchButton}
                data-testid="searchButton"
              >
                <IoMdSearch size={25} />
              </SearchButton>
            </InputContainer>
            {this.renderHomePage()}
          </VideoContent>
        </HomeContent>
      </HomeContainer>
    )
  }
}

export default Home
