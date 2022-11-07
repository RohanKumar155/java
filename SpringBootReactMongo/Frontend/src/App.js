import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { Card, CardTitle, Container, Col, Row } from 'reactstrap'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './components/Menu';
import AllBlogs from './components/AllBlog'
import AddBlog from './components/AddBlog'
import UpdateBlog from './components/UpdateBlog'

function App() {
  return (
    <div className="App">
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <ToastContainer position="top-center"/>
      <CardTitle className="display-2">
        YoStuff Blogger
      </CardTitle>
      <Router>
          <Container>
            <Row>
              <Col>
                  <Menu/>
              </Col>
            </Row>
            <Row>
              <Col>
                  <Route path="/" component={AllBlogs} exact/>
                  <Route path="/add" component={AddBlog} exact/>
                  <Route path="/update" component={UpdateBlog} exact/>
              </Col>
            </Row>
          </Container>
      </Router>
      </Card>
      
    </div>
  );
}

export default App;
