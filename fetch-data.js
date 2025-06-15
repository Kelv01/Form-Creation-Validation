async function fetchUserData(callback) {
   
        const  apiUrl = 'https://jsonplaceholder.typicode.com/users';

        const dataContainer = document.getElementById("api-data");

    try {    
        
        const response = await fetch(apiUrl);

        const users = await response.json();
 
        dataContainer.innerHTML = '';// clear the loading message

        const userList = document.createElement("ul");

        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);

        });
        dataContainer.appendChild(userList);
        
    } catch (error) {
        dataContainer.textContent = "failed to load user data";
        console.error("fetch error:", error);
    }
    

}
document.addEventListener("DOMContentLoaded",fetchUserData);
