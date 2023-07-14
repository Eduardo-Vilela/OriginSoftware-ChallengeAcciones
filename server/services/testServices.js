import fetch from "node-fetch"

export const getAllProducts = (req, res) => {
    fetch('https://api.twelvedata.com/stocks?source=docs&exchange=NYSE')
        .then((response) => response.json())
        .then((data) => res.json(data))
        .catch((e) => res.json({ error: "Failed" }))
}

export const getFindProduct = (req, res) => {
    fetch('https://dummyjson.com/products/' + req.params.id)
        .then((response) => response.json())
        .then((data) => res.json(data))
        .catch((e) => res.json({ error: "Failed" }))
}

export const updateProduct = (req, res) => {
    fetch('https://dummyjson.com/products/'+req.body.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: req.body.title
        })
    })
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((e) => res.json({ error: "Failed" }))
}

export const addPost = (req, res) => {
    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: req.body.title
        })
    })
        .then(response => response.json())
        .then((data) => res.json(data))
        .catch((e) => res.json({ error: "Failed" }))
}
