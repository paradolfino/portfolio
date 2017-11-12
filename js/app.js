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
    //bindings
    this.pageHandler = this.pageHandler.bind(this);
  }

  componentDidMount() {
    console.log("app mounted");
    setTimeout(() => {
      winHeight = $(window).height();
      let heightAdjusted = winHeight - winHeight / 9;
      console.log(winHeight);
      $("body").css("height", heightAdjusted);
      console.log($("body").css("height"));
      $(".page").css("height", heightAdjusted - 100);
    }, 100);

    //analytics
    let clientID;
    let clientConnects = $.ajax({
      url: "https://glestbukken.firebaseio.com/analytics.json",
      type: "POST",
      data: JSON.stringify({ signal: "connect" }),
      dataType: "json",
      contentType: "application/json",
      success(responseText) {
        clientID = responseText;
        localStorage.setItem("clientID", clientID);
      },
      error(jqXHR, status, errorThrown) {
        //
      }
    });

    //disconnect client
    $(window).on('beforeunload',()=> {
      $.ajax({
        type: "PUT", 
        data: JSON.stringify({signal:'disconnect'}), 
        dataType: "json", 
        contentType: 'application/json',
        url: "https://glestbukken.firebaseio.com/analytics/"+clientID+".json",
        success(response) {
          console.log('!');
        }
      });
    });
  }

  componentDidUpdate() {
    console.log("app updated");
  }

  pageHandler(tpage) {
    console.log("pagehandler");
    this.setState({ page: tpage });
  }

  render() {
    let Page = this.pages[this.state.page];
    console.log(Page);
    return (
      <div id="wrapper">
        <Header />
        <div id="middle">
          <Navigation onClick={this.pageHandler} />
          <Page />
        </div>
        <Footer onClick={this.pageHandler} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
