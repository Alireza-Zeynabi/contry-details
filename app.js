const
    searchBtn = document.querySelector('.searchBtn'),
    input = document.querySelector('.contryInput'),
    showContryInfo = document.querySelector('.contryInfo')


searchBtn.addEventListener('click', showInfo)




function showInfo() {
let inputVal = input.value
   

if (inputVal.length == 0) {

    return alert('error')
    
}

    
    let url = `https://restcountries.com/v3.1/name/${inputVal}?fullText=true`

    fetch(url)
        .then((response) => response.json())
        .then((contryData) => {
            console.log(contryData)
            console.log(contryData[0])
            console.log(contryData[0].capital[0])
            console.log(contryData[0].flags.svg)
            console.log(contryData[0].name.common)
            console.log(contryData[0].continents)
            console.log(contryData[0].languages.fas)

            showContryInfo.innerHTML = `
            <img class = 'flag' src="${contryData[0].flags.svg}" alt="">
            
            
            <div class="text-info">
            <h3>${contryData[0].name.common}</h3>
            <span>capital :${contryData[0].capital[0]}</span>
            <span>continents : ${contryData[0].continents}</span>
            <span> languages:${contryData[0].languages.fas}</span>
            <span></span>
            
        </div>
            `
           
        })

        
        showContryInfo.style.display = 'block'

}