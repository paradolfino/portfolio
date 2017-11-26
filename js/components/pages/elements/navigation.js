class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(val) {
    setTimeout(()=>{
      this.props.onClick(val.toString());
    },250);
  }
  
  componentDidMount() {
    //I chose to use jquery to handle clicks instead of the standard react method BECAUSE my buttons use transitions that seem to work inconsistently using pure react. The jquery catches all cases (90% of the time) of different user click locations.
    $('.btn').click((e)=>{
      //console.log(e.target.id + ' div face');
      this.handleClick(e.target.id);
    });
    $('.btn button').click((e)=>{
      //console.log(e.target.id + ' button face');
      this.handleClick(e.target.id);
    });
    $('.btn i').click((e)=>{
      //console.log(e.target.id + ' i face');
      this.handleClick(e.target.id);
    });
  }
  
  render() {
    return (
    <div id='navigation'>
        <div id='Front' className='btn'><button id='Front'><i id='Front' className="fa fa-home fa-2x" aria-hidden="true"></i></button></div>
        <div id='Projects' className='btn'><button id='Projects'><i id='Projects' className="fa fa-desktop fa-2x" aria-hidden="true"></i></button></div>
        <div id='Skills'className='btn'><button id='Skills'><i id='Skills' className="fa fa-list fa-2x" aria-hidden="true"></i></button></div>
        <div id='Contact'className='btn'><button id='Contact'><i id='Contact' className="fa fa-envelope-o fa-2x" aria-hidden="true"></i></button></div>
    </div>
    );
  }
}

export default Navigation;