const select1 = document.getElementById("select1")
const select2 = document.getElementById("select2")
let input = document.getElementsByName('input1')

 let amount = input.value
 let option1 = select1.options[0]
 let option2 = select2.options[0]


 fetchDataSelected1()
fetchDataSelected2()


let button = document.getElementById("button")
button.addEventListener("click", function Convert(option1,option2,amount){
    const Key = '3dfa795c8b42c020a04827bb'
    const API =` https://v6.exchangerate-api.com/v6/${Key}/pair/${option1}/${option2}/${amount}`

    fetch(API)
    .then(response => response.json())
    .then((data)  => {
      
         console.log(data.conversion_result)
      })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
})

const API = 'https://v6.exchangerate-api.com/v6/${Key}/pair/EUR/GBP/AMOUNT'

function fetchDataSelected1(){

    const Key = '3dfa795c8b42c020a04827bb'
    const apiUrl = `https://v6.exchangerate-api.com/v6/${Key}/codes`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => data.supported_codes.forEach(element => {
        let option = document.createElement('option')
        option.value = element
        option.innerHTML = element
        select1.appendChild(option)
       

      })
        )
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }

    function fetchDataSelected2(){

        const Key = '3dfa795c8b42c020a04827bb'
        const apiUrl = `https://v6.exchangerate-api.com/v6/${Key}/codes`;
        
        fetch(apiUrl)
          .then(response => response.json())
          .then((data) => data.supported_codes.forEach(element => {
            let option = document.createElement('option')
            option.value = element
            option.innerHTML = element
            select2.appendChild(option)
           
    
          })
            )
          .catch(error => {
            console.error('Error fetching data:', error);
          });
        }

