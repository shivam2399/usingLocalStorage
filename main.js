

function saveToLocalStorage(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    let user = {
        name,
        email,
    };
    axios.post("https://crudcrud.com/api/a00b49181a5a4afeb35e2afe7e292cec/appointmentData", user)
       .then(response => {
        showNewUserOnScreen(response.data);
         console.log(response)
       })
       .catch(err => {
         console.log(err)
       })
    // localStorage.setItem(email, JSON.stringify(user));
    // showNewUserOnScreen(user);
}

document.addEventListener('DOMContentLoaded', () => {
    axios.get("https://crudcrud.com/api/a00b49181a5a4afeb35e2afe7e292cec/appointmentData")
        .then((response) => {
            console.log(response);
            for(var i = 0; i < response.data.length; i++) {
                showNewUserOnScreen(response.data[i]);
            }
        })
        .catch((err) => {
            console.log(err)
        })


})


function showNewUserOnScreen(user) {

    document.getElementById('email').value = '';
    document.getElementById('name').value = '';

    

    let parentNode = document.getElementById('listOfUsers');
    let childHTML = `<li id=$(user._id)> ${user.name} - ${user.email} 
                            <button onclick=deleteUser('${user._id}')> Delete </button>
                            <button onclick=editUser('${user._id}','${user.name}','${user/email}')> Edit</button>
                        </li>`;
    
    parentNode.innerHTML += childHTML;
}

function editUser(userID) {
    document.getElementById('email').value = email;
    document.getElementById('name').value = name;

    deleteUser(email);
}

function deleteUser(userID) {
    axios.delete(`https://crudcrud.com/api/a00b49181a5a4afeb35e2afe7e292cec/appointmentData/${userID}`)
        .then((response) => {
            removeUserFromScreen(userID)
            console.log(response);
        })
        .catch((err) => {
            console.log(err)
        })
    // localStorage.removeItem(email);
    
    removeUserFromScreen(userID);
}

function removeUserFromScreen(userID){
    let parentNode = document.getElementById('listOfUsers');
    let childNodeToBeDeleted = document.getElementById(email);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
    
    
}




