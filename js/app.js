//pages
import Front from "./components/pages/front";
import Projects from "./components/pages/projects";
import Skills from "./components/pages/skills";
import Contact from "./components/pages/contact";

//elements
import Header from "./components/pages/elements/header";
import Footer from "./components/pages/elements/footer";
import Navigation from "./components/pages/elements/navigation"; //testing

let winHeight;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Front"
    };
    this.pages = {
      Front: Front,
      Projects: Projects,
      Skills: Skills,
      Contact: Contact
    };
    this.timestamp = new Date();
    this.time = {
      year: this.timestamp.getUTCFullYear(),
      month: this.timestamp.getMonth(),
      day: this.timestamp.getDay(),
      hour: this.timestamp.getHours(),
      min: this.timestamp.getMinutes(),
      locale: this.timestamp.toLocaleDateString()
    };
    //bindings
    this.pageHandler = this.pageHandler.bind(this);
    this.connectGlestBukken = this.connectGlestBukken.bind(this);
  }
  
  connectGlestBukken(ip) {
    //analytics
    let time = this.time;
    let timeString = `${time.hour}:${time.min}:${time.locale}`;
    let clientID;
    $.ajax({
      url: "https://glestbukken.firebaseio.com/analytics.json",
      type: "POST",
      data: JSON.stringify({ signal: {
        client: 'Portfolio',
        from: ip,
        at: timeString
      }}),
      dataType: "json",
      contentType: "application/json",
      success(responseText) {
        clientID = responseText.name;
        localStorage.setItem("clientID", clientID);
      },
      error(jqXHR, status, errorThrown) {
        console.log(jqXHR);
      }
    });
  }

  componentDidMount() {
    //console.log("app mounted");
    setTimeout(() => {
      winHeight = $(window).height();
      let heightAdjusted = winHeight - winHeight / 9;
      //console.log(winHeight);
      $("body").css("height", heightAdjusted);
      //console.log($("body").css("height"));
      $(".page").css("height", heightAdjusted - 100);
    }, 100);
    $.getJSON("//freegeoip.net/json/?callback=?", (data) => {
      let done = new Promise((resolve,reject)=>{
        resolve(this.connectGlestBukken(JSON.stringify(data.ip)));
        reject(console.log('Waiting for GlestBukken'));
      });
    });

    
    
  }
  
  

  componentDidUpdate() {
    //console.log("app updated");
  }

  pageHandler(tpage) {
    //console.log("pagehandler");
    this.setState({ page: tpage });
  }

  render() {
    let Page = this.pages[this.state.page];
    //console.log(Page);
    return (
      <div id="wrapper">
        <Header />
        <div id="middle">
          <Navigation onClick={this.pageHandler} />
          <Page time={[this.timestamp,this.time]}/>
        </div>
        <Footer onClick={this.pageHandler} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
