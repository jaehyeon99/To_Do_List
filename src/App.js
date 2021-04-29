import './App.css';
import React, { useState } from 'react';
import { Jumbotron, Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Clock from './Components/Clock';
import Todo from './Components/Todo';



function App() {

  let [name, addname] = useState('Guest');
  let [name2, addname2] = useState('');
  let [login, logout] = useState(true);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">To Do</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
        </Nav>
        <Form inline>
          {
            login === true ?
              <FormControl onChange={(e) => {
                addname2(e.target.value)
              }} type="text" placeholder="이름을 입력하세요" className="mr-sm-2" />
              :
              null
          }

          {
            login === true ?
              <Button onClick={() => {
                addname(name2);

                logout(false);
              }} variant="outline-info">확인</Button>
              :
              <h5 className="loginname">{name}님 환영합니다.</h5>
          }
        </Form>
      </Navbar>
      <Jumbotron className="door" fluid>
        <Container>
          <h3>👋{name}님 환영합니다.👋</h3>
          <p> <Clock /></p>
        </Container>
      </Jumbotron>
      <Todo className="todolist" />
    </div>
  );
}

export default App;
