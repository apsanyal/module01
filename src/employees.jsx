let person1 = 'Person 1'
let person2 = 'Person 2'
let person3 =  'Person 3'
let person4 = 'Person 4'
let person5 = 'Person 5'

const element = (
    <ul style = {{'color': 'blue', 'fontSize': '24px'}}>
        <li>{person1}</li>
        <li>{person2}</li>
        <li>{person3}</li>
        <li>{person4}</li> 
        <li>{person5}</li> 
    </ul>
)

ReactDOM.render(element, document.getElementById('content'))