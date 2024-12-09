import { useState } from "react";
import { Container, Navbar, Nav, Form, Row, Col } from "react-bootstrap";

const NavBar = ({ searchByCategoryProp, toggleLanguageProp, languageProp }) => {
  const [word, setWord] = useState("");
  const searchByCategoryFunction = () => {
    searchByCategoryProp(word);
    setWord("");
  };

  const toggleLanguageFunction = () => {
    toggleLanguageProp();
  };
  return (
    <Row>
      <Col sm="12">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">
              {languageProp === "ar" ? (
                <div className="brand-color">مطعم جديد</div>
              ) : (
                <div className="brand-color"> New Restaurant</div>
              )}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                {languageProp === "ar" ? (
                  <Form.Control
                    type="text"
                    placeholder="ابحث"
                    className="mx-2"
                    aria-label="Search"
                    onChange={(e) => setWord(e.target.value)}
                    value={word}
                  />
                ) : (
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mx-2"
                    aria-label="Search"
                    onChange={(e) => setWord(e.target.value)}
                    value={word}
                  />
                )}
                <button
                  onClick={(e) => {
                    searchByCategoryFunction(word);
                    e.preventDefault();
                  }}
                  className="btn-search px-4"
                  variant="outline-success"
                >
                  {" "}
                  {languageProp === "ar" ? "بحث" : "Search"}
                </button>
                <button
                  onClick={(e) => {
                    toggleLanguageFunction();
                    e.preventDefault();
                  }}
                  className="btn-search px-4 mx-2"
                >
                  {languageProp === "ar" ? "English" : "العربية"}
                </button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  );
};

export default NavBar;
