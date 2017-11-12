class Skills extends React.Component {
  componentDidMount() {
    $('#skills').addClass('animated fadeInUpBig');
  }
  render(){
    return (
    <div id='skills' className='page'>
        <div>
          <h1>Skills</h1>
          <p>I have some skills, I have some tools, and I have some ways of doing things. I'm not the Einstein of Front-End Development, but then again, Einstein wasn't a Front-End Developer. Let's just say that I'm a learner and I learn by making things.</p>
          <ul><strong>Front-End</strong>
            <li>React.js : It's modular, fast loading with that virtual DOM thang, yo!</li>
            <li>jQuery : I use it in conjunction with React to have better control over animations and event handling.</li>
            <li>JavaScript : ES6 (and ES7 for the API async functions)</li>
            <li>SCSS : I use it mainly to make my CSS dryer and also variables!</li>
            <li>CSS3 : I like plain old CSS, but CSS3 introduced Grid. I love Grid.</li>
            <li>Bootstrap : Ask me more about Bootstrap. I know how to use it.</li>
            <li>HTML5 : Also JSX because of React.</li>
          </ul>
        </div>
    </div>
    );
  }
}

export default Skills;