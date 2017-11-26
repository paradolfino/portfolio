
class Front extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('#header').addClass('animated fadeInDown');
    $('#footer').addClass('animated fadeInUp');
    $('#navigation').addClass('animated fadeInLeft');
    $('#desc').addClass('animated fadeInRightBig');
    let loadIn = setTimeout(()=>{
      $('#name').css('visibility','visible');
      $('#name').textillate();
    },500);
    
  }
  render() {
    return (
      <div id="front" className="page">
        
        <div className="pageElement"> 
          <h1 id='name'>Viktharien Volander</h1>
          <h2 id='desc'>React Developer</h2>
          <h4>Front-End or Fullstack (MERN)</h4>
          <p>I like making things that look cool and help you do something too.</p>
        </div>
      </div>
    );
  }
}

export default Front;
