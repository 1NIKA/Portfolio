let toggleBtn = document.getElementById('toggleBtn');
let navbarLinks = document.getElementById('links');

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}

 
function isValid() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let submit = document.getElementById('submit');

    let myEmail = 'nika@gmail.com'; 
    let myPassword = 'test123';
    
    if (email === "" || password === "") {
        alert("გთხოვთ შეავსოთ ყველა ველი");
    }
    else {
        if (email === myEmail && password === myPassword) {
            window.location = './main.html';
        }
        else {
            alert("მეილი ან პაროლი არასწორია");
        }
    }
}


// next & previous example - fetch
// let totalPages;

function getPhotos(){
    fetch('https://reqres.in/api/users?page=1', {
        method: 'GET'
    })
    .then(function(response){
        if(response.status !== 200){
            throw 'error';
        }
        return response.json();
    })
    .then(function(responseData){
        document.getElementById('ajaxBased').innerHTML = ' ';

        let frag = document.createDocumentFragment();
        responseData.data.forEach(item => { 
            let h3 = document.createElement('h3');
            h3.textContent = item.first_name + ' ' + item.last_name;
            document.getElementById('ajaxBased').appendChild(h3);
        });

    })
    .catch(function(error){
        console.log(error);
    });
}

getPhotos();


// function getUsers() {
//     fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-05-28&sortBy=publishedAt&apiKey=b55247fabe63437e95cec00a84b13d2f', {
//         method: 'GET'
//     })
//     .then(function(response){
//         if(response.status !== 200){
//             throw 'error';
//         }
//         return response.json();
//     })
//     .then(function(responseData){
//         let frag = document.createDocumentFragment();
        
//         responseData.data.forEach(item => {
//             console.log(item.title);
//             let h3 = document.createElement('h3');
//             h3.textContent = item.title;
//             frag.appendChild(h3);
//         });
//         document.getElementById('ajaxBased').innerHTML = ' ';
//         document.getElementById('ajaxBased').appendChild(frag);

//     })
//     .catch(function(error){
//         console.log(error);
//     });
// }

// getUsers();