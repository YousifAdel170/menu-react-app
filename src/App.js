import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import CardItemList from "./components/CardItemList";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);
  const [language, setLanguage] = useState("ar"); // Default is Arabic

  const all = language === "ar" ? "الكل" : "All";

  // function responsible to filter the items
  const fiterByCategory = (category) => {
    if (category === all) {
      setItemsData(items);
      return;
    } else {
      const filteredItems = items.filter((item) => {
        if (language === "ar") {
          return item.ar.category === category;
        } else {
          return item.en.category === category;
        }
      });
      setItemsData(filteredItems);
    }
  };

  // toggle the language (ar/en)
  const toggleLanguage = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.lang === "ar") {
      htmlElement.lang = "en";
      htmlElement.dir = "ltr";
    } else {
      htmlElement.lang = "ar";
      htmlElement.dir = "rtl";
    }
    setLanguage((lang) => (lang === "ar" ? "en" : "ar"));
  };

  // array to save all unique categories that saved into the data.js

  const allCategories = [
    all,
    ...new Set(
      items.map((item) => {
        if (language === "ar") {
          return item.ar.category;
        } else {
          return item.en.category;
        }
      })
    ),
  ];

  // function to handle the search
  const searchByCategory = (word) => {
    if (word !== "") {
      if (language === "ar") {
        const searchedItems = items.filter((item) => item.ar.title === word);
        setItemsData(searchedItems);
      } else {
        const searchedItems = items.filter((item) => item.en.title === word);
        setItemsData(searchedItems);
      }
    }
  };

  return (
    <div className="color-body font">
      <NavBar
        searchByCategoryProp={searchByCategory}
        toggleLanguageProp={toggleLanguage}
        languageProp={language}
      />
      <Container>
        <Header languageProp={language} />
        <Category
          languageProp={language}
          filteredFunctionProp={fiterByCategory}
          allCategoriesProp={allCategories}
        />
        <CardItemList itemDataProp={itemsData} languageProp={language} />;
      </Container>
    </div>
  );
}

export default App;
