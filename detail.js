// console.log('anant');
// function abc11(countrycode)
// {
//     // console.log("button pressed");

//     console.log(countrycode);
//     const xhr=new XMLHttpRequest;
//     let countryinfo;

//     // for open
//     xhr.open('GET',`https://restcountries.eu/rest/v2/alpha/${countrycode}`,true);

//     // while progressing
//     xhr.onprogress = function(){
//         console.log('on progress');
//     }


//     // // while onloading
//     xhr.onload = function(){
//          countryinfo=JSON.parse(this.responseText);
//         // console.log(countryinfo);
//         showdata(countryinfo);
//     }
//     // let getinfo1=getinfo(countrycode);
//     // console.log(getinfo1);
//     // console.log(countryinfo);
//     function showdata(countryinfo1){

//         let detail11 = document.getElementById('detail');
//         console.log(countryinfo1);
//         console.log(detail11);
//     // for(let key in obj1)
//     // {
        
//     //     if(obj1[key].alpha3Code===countrycode)
//     //     {
//             let str11=`<div class="row mx-2 my-2 ">
//             <div class="col-xl-12">
//                 <div class="d-flex flex-column">
//                     <div class="row ml-2">
//                         <div class="col-xl-12"><h3 class=" font-weight-bold">${countryinfo1.name}</h3></div>
//                     </div>
                    
//                     <div class="row mx-2 my-2 ">
//                         <div class="col-xl-6 col-sm-12 col-md-12 col-lg-12 py-2 ">
//                             <img class="img-fluid border border-dark" src=${countryinfo1.flag} alt="">
//                         </div>
//                         <div class="col-xl-4 py-2">
//                             <div class="row mb-2"><div class="col-xl-12"><h7>Native Name: ${countryinfo1.nativeName}</h7></div></div>
//                             <div class="row mb-2"><div class="col-xl-12"><h7>Capital: ${countryinfo1.capital}</h7></div></div>
//                             <div class="row mb-2"><div class="col-xl-12"><h7>Population: ${countryinfo1.population}</h7></div></div>
//                             <div class="row mb-2"><div class="col-xl-12"><h7>Region: ${countryinfo1.region}</h7></div></div>
//                             <div class="row mb-2"><div class="col-xl-12"><h7>Sub-region: ${countryinfo1.subregion}</h7></div></div>
//                             <div class="row mb-2 "><div class="col-xl-12"><h7>Area: ${countryinfo1.area} Km<span class="align-text-bottom">2</span></h7></div></div>
//                             <div class="row mb-2"><div class="col-xl-12"><h7>Country Code: ${countryinfo1.callingCodes}</h7></div></div>
//                             <div class="row mb-2"><div class="col-xl-12"><h7>Languages: ${countryinfo1.languages.name}</h7></div></div>
//                             <div class="row mb-2"><div class="col-xl-12"><h7>Currencies: ${countryinfo1.currencies.name}</h7></div></div>
//                             <div class="row"><div class="col-xl-12"><h7>Timezones: ${countryinfo1.timezones}</h7></div></div>
//                         </div>
//                     </div>
                    
//                 </div>
//             </div>
//         </div>`;
//         detail11.innerHTML=str11;
//     //     break;
//     //     // console.log(str11);
//     //     }
//     // }
//     }
//     xhr.send();
// }

// // function getinfo(country3code) { 
// //     const xhr=new XMLHttpRequest;
// //     let countryinfo;

// //     // for open
// //     xhr.open('GET',`https://restcountries.eu/rest/v2/alpha/${country3code}`,true);

// //     // let url=`https://restcountries.eu/rest/v2/alpha/${country3code}`;


// //     // while progressing
// //     xhr.onprogress = function(){
// //         console.log('on progress');
// //     }


// //     // // while onloading
// //     xhr.onload = function(){
// //          countryinfo=JSON.parse(this.responseText);
// //         console.log(countryinfo);
// //     //     // if(countryinfo){
// //     //     //     return countryinfo;
// //     //     // }
        
// //     }    
// //     // // return countryinfo;
// //     xhr.send();
// //     // const response=await fetch(url);
// //     // console.log(response);
// //     // return response.json;
// //     // let cinfo=response.json;
// //     // console.log(cinfo);
// //     // return cinfo;
    
// // } 

// let detail11=document.getElementById('detail');

let detail111=document.getElementById('detail1');
let detail112=document.getElementById('detail2');
let flag1=document.getElementById('flags');
let getalphacode=window.localStorage.getItem('country');
console.log(getalphacode);

async function getdetails(url) { 
    
    const response = await fetch(url); 
    
    
    let detailinfo = await response.json(); 
    if (response) { 
        console.log('GetInfo query passed')
    } 
   
    countryinfo(detailinfo);
    showneighbourcontryFlags(detailinfo);
} 

const detailalphacode = `https://restcountries.eu/rest/v2/alpha/${getalphacode}`;
  getdetails(detailalphacode);

  
  function countryinfo(countryinfo1){
    let str1=`<div class="col-xl-12"><h3 class=" font-weight-bold">${countryinfo1.name}</h3></div>`;

let str2=`<div class="col-xl-6 col-sm-12 col-md-12 col-lg-12 py-2 ">
<img class="img-fluid border border-dark" src=${countryinfo1.flag} alt="">
</div>
<div class="col-xl-4 py-2">
    <div class="row mb-2"><div class="col-xl-12"><h7>Native Name: ${countryinfo1.nativeName}</h7></div></div>
    <div class="row mb-2"><div class="col-xl-12"><h7>Capital: ${countryinfo1.capital}</h7></div></div>
    <div class="row mb-2"><div class="col-xl-12"><h7>Population: ${countryinfo1.population}</h7></div></div>
    <div class="row mb-2"><div class="col-xl-12"><h7>Region: ${countryinfo1.region}</h7></div></div>
    <div class="row mb-2"><div class="col-xl-12"><h7>Sub-region: ${countryinfo1.subregion}</h7></div></div>
    <div class="row mb-2 "><div class="col-xl-12"><h7>Area: ${countryinfo1.area} Km<span class="align-text-bottom">2</span></h7></div></div>
    <div class="row mb-2"><div class="col-xl-12"><h7>Country Code: ${countryinfo1.callingCodes}</h7></div></div>
    <div class="row mb-2"><div class="col-xl-12"><h7>Languages: ${countryinfo1.languages[0].name}</h7></div></div>
    <div class="row mb-2"><div class="col-xl-12"><h7>Currencies: ${countryinfo1.currencies[0].name}</h7></div></div>
    <div class="row"><div class="col-xl-12"><h7>Timezones: ${countryinfo1.timezones}</h7></div></div>
    </div>`;


detail111.innerHTML=str1;
detail112.innerHTML=str2;
  }

function showneighbourcontryFlags(data){
    
    const countryFlags=[]
    for (let border in data.borders) {
        const flag = 'https://restcountries.eu/data/' + data.borders[border].toLowerCase() + '.svg'
        countryFlags.push(flag);
    }
    console.log(countryFlags, 'country flags')
    let tab = '';
    let f;
    for (f in countryFlags) {
        console.log(countryFlags[f])

        tab +=
            `<img class="col-xl-3 col-md-3 col-sm-12 mx-2 my-3" src="${countryFlags[f]}" alt="">
            `;
    }
    
    flag1.innerHTML=tab;

}