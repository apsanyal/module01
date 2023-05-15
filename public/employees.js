let person1 = 'Person 1';
let person2 = 'Person 2';
let person3 = 'Person 3';
let person4 = 'Person 4';
let person5 = 'Person 5';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, person1), /*#__PURE__*/React.createElement("li", null, person2), /*#__PURE__*/React.createElement("li", null, person3), /*#__PURE__*/React.createElement("li", null, person4), /*#__PURE__*/React.createElement("li", null, person5));
ReactDOM.render(element, document.getElementById('content'));