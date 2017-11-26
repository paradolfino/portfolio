class Projects extends React.Component {
  componentDidMount() {
    $('#projects').addClass('animated fadeInRightBig');
  }
  render() {
    return (
      <div id="projects" className="page">
        
        <div>
          <h1>Recent Projects</h1>
          <div className='thumbnail-container'>
            <a href='https://reactionfactory.herokuapp.com/' target='_blank'><img src='../../5.png'/></a>
          </div>
          <div className='thumbnail-container'>
            <a href='https://codepen.io/viktharien/project/live/7aebd9ba9775e47faaed6e0dab78d776/DkYVvm/' target='_blank'><img src='../../4.png'/></a>
          </div>
          <div className='thumbnail-container'>
            <a href='https://codepen.io/viktharien/project/live/d90acf0c5b13523e2cc1708e66f3f2f6/ZRNBOd/' target='_blank'><img src='http://res.cloudinary.com/viktharien/image/upload/v1509718850/1_z0tiao.png'/></a>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Projects;
