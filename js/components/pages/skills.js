class Skills extends React.Component {
  componentDidMount() {
    $('#skills').addClass('animated fadeInUpBig');
  }
  render(){
    return (
    <div id='skills' className='page'>
        <div>
          <h1>Skills</h1>
          <h3>Let's keep this nice and simple. This is what I do:</h3>
          <div>
            <p>React.js : Redux</p>
            <p>Node.js : Express</p>
            <p>NoSQL : Google Firebase : MongoDB : Mongoose</p>
            <p>JavaScript ES6 : TypeScript : jQuery</p>
            <p>SCSS : CSS3 : Flexbox : Grid</p>
            <p>HTML5 : JSX : Bootstrap</p>
            <p>C# : Python 2</p>
          </div>
        </div>
    </div>
    );
  }
}

export default Skills;