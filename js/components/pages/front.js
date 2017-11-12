
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
          <p id='desc'>React Front-End Developer</p>
          
        </div>
      </div>
    );
  }
}

export default Front;
