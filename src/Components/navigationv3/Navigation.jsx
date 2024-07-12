import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

import strelka from "../../Assets/Svg/zaraHome.svg";
import search from "../../Assets/Svg/Search_light.svg";

import "./navigation.scss";

// Merged data structure
const data = {
  "Спальня": [
    { title: "ПОСТЕЛЬНОЕ БЕЛЬЕ", items: ["Смотреть все", "Основное постельное белье", "Пододеяльники", "Наволочки", "Пододеяльники", "Плоские простыни"] },
    { title: "НАПОЛНИТЕЛИ И ПРОТЕКТОРЫ", items: ["Беспринадды", "Квилты", "Бланкеты"] },
    { title: "ПОДШИПНИКИ", items: ["Бланкеты"] },
    { title: "МЕБЕЛЬ", items: ["Кровати", "Шкафы"] },
    { title: "РУГИ", items: ["Зеркало", "Циновки"] },
    { title: "ОСВЕЩЕНИЕ", items: ["Рассеянное освещение", "Отраженное освещение"] }
  ],
  "Одежда и обувь": [
    { title: "ОДЕЖДА", items: ["футболка", "пиджак", "брюки и кофта"] },
    { title: "ОБУВЬ", items: ["ЗАМШЕВЫЕ ТАПОЧКИ С ПРЯЖКАМИ", "КОЖАНЫЕ САБО", "АТЛАСНЫЕ БАЛЕТКИ С БАХРОМОЙ"] },
    { title: "КОЛЛЕКЦИЯ", items: ["БУТЫЛКА ИЗ ТЕРМОСТОЙКОГО СТЕКЛА", "СТЕЛЛАЖ НА КОЛЕСИКАХ", "КРУГЛАЯ КОРЗИНА С КРЫШКОЙ"] }
  ],
  "Жилая комната": [
    { title: "МЕБЕЛЬ", items: ["Кровати", "Шкафы"] },
    { title: "RUGS", items: ["ЗЕРКАЛА", "Циновки"] },
    { title: "ЛАМПЫ И ОСВЕЩЕНИЕ", items: ["КУРТИРЫ"] },
    { title: "CUSHIONS", items: ["НАПОЛНИТЕЛИ ДЛЯ ПОДУШЕК", "БЛАНКЕТЫ", "БАСКЕТЫ", "ЗЕРКАЛА", "ЛАМПЫ И ОСВЕЩЕНИЕ", "ВАЗЫ", "ФОТОРАМКИ", "ДВЕРНЫЕ НОЖКИ", "КОРОБКИ", "ПОДНОСЫ И ДЕРЖАТЕЛИ ДЛЯ МЕЛОЧЕЙ", "ДЕКОРАТИВНЫЕ АКСЕССУАРЫ", "СВЕЧИ"] }
  ],
  "Кухня": [
    { items: ["ПОСУДА И УТВАРЬ", "СОСУДЫ", "ЧАЙНЫЕ ПОЛОТЕНЦА, ФАРТУКИ И СУМКИ", "КУХОННЫЕ АКСЕССУАРЫ", "МЕБЕЛЬ", "КРЕСЛА", "ОСВЕЩЕНИЕ", "ХРАНЕНИЕ"] },
    { title: "СТИРКА И УБОРКА", items: ["ЩЕТКА ИЗ ДЕРЕВА И СИЛИКОНА", "СТОЙКА ДЛЯ СУШКИ ПОСУДЫ С ПОДДОНОМ", "ДВОЙНАЯ КОРЗИНА ДЛЯ ХРАНЕНИЯ", "МЕШОЧЕК СО СТРУЖКОЙ КЕДРА ДЛЯ ОБУВИ"] },
    { title: "СТОЛОВАЯ ПОСУДА", items: ["БОУЛЫ", "МУГИ"] },
    { title: "СТЕКЛЯННАЯ ПОСУДА", items: ["СТЕКЛЯННАЯ САЛАТНИЦА С КРОМКОЙ", "СТЕКЛЯННАЯ ТАРЕЛКА ДЛЯ ХЛЕБА", "НАБОР ИЗ 3 СТАКАНОВ ОВАЛЬНОЙ ФОРМЫ", "КРУЖКА ИЗ ТЕРМОСТОЙКОГО СТЕКЛА"] }
  ]
};

function Navigation() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (key) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [key]: !prevOpenSections[key],
    }));
  };

  const renderSections = (sections, category) => (
    <div className="category_container">
      {sections.map((section, index) => {
        const key = `${category}-${index}`;
        return (
          <div key={key}>
            <div
              onClick={() => toggleSection(key)}
              className="open"
              aria-expanded={!!openSections[key]}
            >
              <img
                src={strelka}
                alt=""
                className={openSections[key] ? "rotate" : ""}
              />
              <h1>{section.title}</h1>
            </div>
            <Collapse in={!!openSections[key]}>
              <div id="example-collapse-text">
                {section.items.map((item, idx) => (
                  <h2 key={idx}>{item}</h2>
                ))}
              </div>
            </Collapse>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="navigation">
      <div className="search_container">
        <img src={search} alt="" />
        <input type="text" placeholder="Что хотите найти?" />
      </div>
      <div className="categories">
        {Object.entries(data).map(([category, sections]) => (
          <div key={category}>
            <h1 className="title">{category}</h1>
            {renderSections(sections, category)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
