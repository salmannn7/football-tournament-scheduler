
const login = (email, password) => {
    return fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    .then((response) => {
        if(response.status === 200){
            return response.json();
        } else if(response.status === 400) {
            throw "bad request"
        } else {
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        localStorage.setItem("user_id", resJson.user_id);
        localStorage.setItem("session_token", resJson.session_token)
        return resJson
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

const logout = () => {
    return fetch("http://localhost:3000/logout",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.getItem("session_token")
        }
    })
    .then((response) => {
        if(response.status === 200){
            localStorage.removeItem("user_id");
            localStorage.removeItem("session_token")
        } else if(response.status === 401) {
            throw "not logged in"
        } else {
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

/*
const create = (firstname, lastname, email, password) => {
    return fetch("http://localhost:3000/users",

    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "first_name": firstname,
            "last_name": lastname,
            "email": email,
            "password": password
        })
    })
    .then((response) => {
        if(response.status === 201){
            return response.json();
        } else if(response.status === 400) {
            throw "bad request"
        } else {
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}
*/

export const usersService = {
    login,
    logout,
    //create,
}
