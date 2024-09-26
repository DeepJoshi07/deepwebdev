let h1 = document.querySelector("h1");
function changecolor(data){
    return new Promise((resoved,rejected) => {
        setTimeout(() => {
            h1.style.color = data;
            resoved("color has changed");
            },2000)
       }
    );}

    function changeStyle(data){
        return Promise((resoved,rejected) => {
            setTimeout(() => {
            h1.style.fontFamily = data;
            resoved("finished");
        }, 3000)}
    );
       
    }

    function add(data){
        return new Promise((resolved,rejected) => {
            setTimeout(() => {
                h1.textContent = data;
            },3000)
        })
    }
    add("Hello")
    .then(
        changecolor("red")
    )
    .catch(
        console.log("error")
    )
    async function printhello(data){
        try{
            await changecolor("red")
            await changecolor("blue")
        }
        catch{

        }
        
    }