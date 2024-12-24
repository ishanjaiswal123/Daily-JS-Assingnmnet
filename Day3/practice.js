// Task 2 line no 51
// TASK 1 LINE NO 80

// ---> Callback Function

const create = (a , b , callback) => {
    console.log(`The sum is ${a + b} `);
    setTimeout(() => {
        callback("ishan");
    }, 1000)
    console.log("completed");
}

function callback(name){
    console.log(`my name is ${name}`);
}

create(3, 5,callback);

// ---> Promises, then , catch , chaining

const promise = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve(console.log("Promise Resolved"));
    }
    else{
        reject(console.log("Promise Rejected"));
    }
});

promise
    .then((data) => console.log(data))
    .then(console.log("Performing Chaining"))
    .catch((err) => console.log("Error is : " + err));

// ---> Working out with Times and Delays

const delay = () => {
    setInterval(()=> {
        console.log("it gonna hit in every 1 sec");
    },1000); 
}

delay();

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// delay(2000).then(() => console.log("Resolved after 2 seconds"));


// ---> Task 2

async function fetchData() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        const container = document.getElementById("image-container");
        data.forEach(element => {
            const img = document.createElement("img");
            const title = document.createElement("p");
            const id = document.createElement("h1");
            title.textContent = element.title;
            img.src = element.image;
            id.textContent = element.id;
            container.appendChild(id);
            container.appendChild(title);
            container.appendChild(img);
            
            
        });

    } catch (error) {
        console.error(error);
    }
}

fetchData();

// ---> Task 1  Simulate an API call with setTimeout using promises

function simulateApiCall(apiUrl) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        }, 2000);
    });
}

simulateApiCall("https://fakestoreapi.com/products")
    .then(data => console.log(data))
    .catch(error => console.error(error));