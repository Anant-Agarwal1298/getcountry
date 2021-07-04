// console.log('anant');

let countries = [];
let box11=document.getElementById('box');
function abc()
{
    console.log('button pressed');

    const xhr=new XMLHttpRequest;

    // for open
    xhr.open('GET',' https://restcountries.eu/rest/v2/all',true);

    // while progressing
    xhr.onprogress = function(){
        console.log('on progress');
    }

    // while onloading
    xhr.onload = function(){
        const obj=JSON.parse(this.responseText);
        countries=JSON.parse(this.responseText);
        console.log(obj);
        appendata(obj);
        
    }
        //for sending the request
    xhr.send();
}

function appendata(obj)
    {
        let str="";
        let str1="";
        for( let key in obj)
        {
            str1 = `<div class="box1 row my-2">
                <div class="col-xl-4 py-2 ">
                    <img class="img-fluid border border-dark " src=${obj[key].flag} alt="">
                </div>
                <div class="col-xl-8 mx-auto my-auto">
                    <div class="row font-weight-bold"><div class="col-xl-8"><h5>${obj[key].name}</h5></div></div>
                    <div class="row "><div class="col-xl-8"><h7>Currency : ${obj[key].currencies[0].name}</h7></div></div>
                    <div class="row "><div class="col-xl-12"><h7>Capital : ${obj[key].capital}</h7></div></div>
                    <div class="row">
                        <div class="col-xl-12 d-flex ">
                            <div class="row"><div class="col-xl-6"><a href="https://www.google.co.in/maps/place/${obj[key].name}/" target="_blank"><button type="button" class="btn btn-outline-primary  mr-2">Show Map</button></a></div></div>
                            <div class="row"><div class="col-xl-6"><a href="details.html" target="_blank"><button type="button" onclick="abc1(this.value)" value="${obj[key].alpha3Code}"class="btn btn-outline-primary ">Details</button></a></div></div>
                        </div>
                    </div>
                </div>
                </div>
            `; 
            str +=str1;
        }
        box11.innerHTML=str;
    }

function search(){
    let input=document.getElementById('search1').value.toUpperCase();
    console.log(input);
    let resultdata=countries.filter((country)=>{
        return country.name.toUpperCase().startsWith(input);
    });
    console.log(resultdata);
    appendata(resultdata);
    
}

function abc1(countrycode){
    // let alphacode=countrycode;
//   console.log(tab)
  window.localStorage.setItem('country', countrycode);

    
    
}






// 








