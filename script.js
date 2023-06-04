
//Codigo Api/Ajax

const HTMLResponse = document.querySelector("#app");
const templateUL = document.getElementsByClassName(`ulNos`);

console.log("antes de la llamada")
$.ajax({ method: "GET", url: "http://jsonplaceholder.typicode.com/users" })
    .done(function (users) {
        //Mostrar por consola la respuesta de la API
        console.log(users)

        //Mostrar respuesta de API en un componente HTML
        //document.getElementById("response").innerHTML = users;

        //Mostrar respuesta de API en un componente HTML recorriendo cada usuario
        for(let i=0; i<4;i++){
            let user = users[i];
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`${user.address.suite}`)
            );
            let elem2 = document.createElement("li");
            elem2.appendChild(
                document.createTextNode(`${user.email.toLowerCase()}`)
            );
            templateUL[i].appendChild(elem);
            templateUL[i].appendChild(elem2);


        }
        
        /*users.forEach((users) => {
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`Nombre: ${users.name}, Email: ${users.email}`)
            );
            templateUL.appendChild(elem);
        });
        HTMLResponse.appendChild(templateUL);*/

    }
    )
