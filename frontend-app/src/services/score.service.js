
const getAll = (id) => {
    return fetch("http://localhost:3000/tournaments/" + id + "/scores")
    .then((response) => {
        if(response.status === 200){
            return response.json();
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

const getOne = (id) => {
    return fetch("http://localhost:3000/scores/" + id)
    .then((response) => {
        if(response.status === 200){
            return response.json();
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

const create = (id, score, team_name) => {
    return fetch("http://localhost:3000/tournaments/" + id + "/scores", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        "score": score,
        "team_name": team_name
    })
    })
    .then((response) => {
        if(response.status === 201){
            return response.json();
        } else if(response.status === 400){
            throw "bad request"
        } else if(response.status === 401){
            throw "unauthorised"
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
const edit = (id, title, author, article_text) => {
    return fetch("http://localhost:3333/articles/" + id, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        "title": title,
        "author": author,
        "article_text": article_text
    })
    })
    .then((response) => {
        if(response.status === 200){
            return "Article edited"
        } else if(response.status === 400){
            throw "bad request"
        } else if(response.status === 401){
            throw "unauthorised"
        } else if(response.status === 404){
            throw "not found"
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

const deleteArticle = (id) => {
    return fetch("http://localhost:3333/articles/" + id, {
    method: "DELETE",
    })
    .then((response) => {
        if(response.status === 200){
            return "Article Removed"
        } else if(response.status === 401){
            throw "unauthorised"
        } else if(response.status === 404){
            throw "not found"
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

export const scoreService = {
    getAll,
    getOne,
    create,
    //deleteArticle,
    //edit,
}
