class Footer extends React.Component {
  
  render(){
    return (
    <div id='footer'>
        <div className='btn'><a href='https://www.linkedin.com/in/aaron-viktharien-volander-cil-b1120514a' target='_blank'><button value='Linkedin'><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></button></a></div>
        <div className='btn'><a href='https://github.com/viktharien' target='_blank'><button value='GitHub'><i className="fa fa-github fa-2x" aria-hidden="true"></i></button></a></div>
    </div>
    );
  }
}

export default Footer;