import { Row, Col } from "react-bootstrap";
// import Roll from "react-reveal/Roll";

const Category = ({
  filteredFunctionProp,
  allCategoriesProp,
  languageProp,
}) => {
  const filterItems = (category) => {
    filteredFunctionProp(category);
  };
  return (
    <div>
      <Row className="my-2 mb-5">
        {/* <Roll left> */}
        <Col className="d-flex justify-content-center flex-wrap">
          {allCategoriesProp.length ? (
            allCategoriesProp.map((category, index) => {
              return (
                <button
                  key={index}
                  onClick={() => filterItems(category)}
                  style={{ border: "1px solid #b45b35" }}
                  className="btn m-2"
                >
                  {category}{" "}
                </button>
              );
            })
          ) : languageProp === "ar" ? (
            <h4> لا يوجد تصنفيات الان</h4>
          ) : (
            <h4>There is no meals right now</h4>
          )}
        </Col>
        {/* </Roll> */}
      </Row>
    </div>
  );
};

export default Category;
