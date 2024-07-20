//Todo: Initialize the Async Function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Define the API URL
    const dataContainer = document.getElementById("api-data"); // Select the Data Container Element

    //Todo: Fetch Data Using try-catch
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = '' // Clear the Loading Message
            //Todo: Create and Append User List
        const userList = document.createElement('ul'); // 
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        //Todo: Error handling
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);