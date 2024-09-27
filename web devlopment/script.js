// let h1 = document.querySelector("h1");
// function changecolor(data){
//     return new Promise((resoved,rejected) => {
//         setTimeout(() => {
//             h1.style.color = data;
//             resoved("color has changed");
//             },2000)
//        }
//     );}

//     function changeStyle(data){
//         return Promise((resoved,rejected) => {
//             setTimeout(() => {
//             h1.style.fontFamily = data;
//             resoved("finished");
//         }, 3000)}
//     );
       
//     }

//     function add(data){
//         return new Promise((resolved,rejected) => {
//             setTimeout(() => {
//                 h1.textContent = data;
//             },3000)
//         })
//     }
//     add("Hello")
//     .then(
//         changecolor("red")
//     )
//     .catch(
//         console.log("error")
//     )
//     async function printhello(data){
//         try{
//             await changecolor("red")
//             await changecolor("blue")
//         }
//         catch{

//         }
        
//     }
let url = "https://catfact.ninja/fact";

fetch(url).then((response) => {
    console.log(response);
    return response.json();
})
.then((data) => {
    console.log(data.fact);
})
.catch((err) => {
    console.log(err);
})

let url2 = "https://catfact.ninja/fact";
let btn = document.querySelector("button");

btn.addEventListener("click", async () =>{
    let fact = await getfact(url2);
    let p = document.querySelector("p");
    p.innerText = fact;
})


async function getfact(url){
    try{
        // let res = await axios.get(url);
        let res = await fetch(url);
        let data = await res.json(fetch);
        // return res.data.fact;
        return data.fact;
    }
    catch(e){
        console.log(e);
    }
}

// try{
//    let res = await axios.get(url);
//    return res.data.fact;
// }