import { Row, Col } from "react-bootstrap";
const Header = ({ languageProp }) => {
  return (
    <div>
      <Row>
        <Col sm="12" className="justify-content-center text-center">
          <div className="title">
            {languageProp === "ar" ? "قائمة الطعام" : "Our Menu"}
          </div>
          <div className="justify-content-center d-flex">
            {" "}
            <p className="underline "></p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
