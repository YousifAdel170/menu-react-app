import React from "react";
import { Card, Row, Col } from "react-bootstrap";
// import Zoom from "react-reveal/Zoom";

const CardItemList = ({ itemDataProp, languageProp }) => {
  return (
    <Row>
      {/* <Zoom> */}
      {itemDataProp.length ? (
        itemDataProp.map((item, index) => {
          return (
            <Col key={index} sm="12" className="mb-3 ">
              {" "}
              <Card
                className="flex-row d-flex flex-wrap"
                style={{ backgroundColor: "#f8f8f8" }}
              >
                <Card.Img
                  className="img-item"
                  variant="top"
                  src={item.imgUrl}
                />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between flex-wrap">
                    {languageProp === "ar" ? (
                      <>
                        {" "}
                        <span className="item-title"> {item.ar.title}</span>
                        <span className="item-price">
                          {item.ar.price}{" "}
                        </span>{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <span className="item-title"> {item.en.title}</span>
                        <span className="item-price">{item.en.price} </span>
                      </>
                    )}
                  </Card.Title>
                  <Card.Text className="py-2">
                    {languageProp === "ar" ? (
                      <span className="item-description">
                        {item.ar.description}
                      </span>
                    ) : (
                      <span className="item-description">
                        {item.en.description}
                      </span>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3 className="text-center">
          {" "}
          {languageProp === "ar"
            ? "لا يوجد حاليا وجبات"
            : "There is no meals now"}
        </h3>
      )}
      {/* </Zoom> */}
    </Row>
  );
};

export default CardItemList;
