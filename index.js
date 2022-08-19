const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const section = document.getElementById("section")
let clicks = [false, false, false]

load()

const btnLikes0 = document.getElementById("likes-btn0")
const btnLikes1 = document.getElementById("likes-btn1")
const btnLikes2 = document.getElementById("likes-btn2")
const likesP0 = document.getElementById("likes0")
const likesP1 = document.getElementById("likes1")
const likesP2 = document.getElementById("likes2")
const postImg0 = document.getElementById("post-img0")
const postImg1 = document.getElementById("post-img1")
const postImg2 = document.getElementById("post-img2")

let btns = [btnLikes0, btnLikes1, btnLikes2]
let likesP = [likesP0, likesP1, likesP2]

function load(){
    let string = ""
    for(let i = 0; i < posts.length; i++)
    {
        let img = ""
        let numLikes = 0
        if(localStorage.getItem(i)){            
            img = "images/icon-liked.png"
            clicks[i] = true
            numLikes = localStorage.getItem(i)
        }
        else{
            img = "images/icon-heart.png"
            clicks[i] = false
            numLikes = posts[i].likes
        }
        string += ` 
        <div class="user-info-div">
            <img class="avatar-img" src=${posts[i].avatar}>
            <div>
                <p class="user-info-p username">${posts[i].name}</p>
                <p class="user-info-p location">${posts[i].location}</p>
            </div>
        </div>
        <img id="post-img${i}" class="post-img" src=${posts[i].post}>
        <div class="icon-div">
            <button id="likes-btn${i}">
                <img id="icon-heart" src=${img}>
            </button>
            <button>
                <img src="images/icon-comment.png">
            </button>
            <button>
                <img src="images/icon-dm.png">
            <button>
        </div>
        <p id="likes${i}" class="likes-p"> ${numLikes} likes</p>
        <p><span class="likes-p">${posts[i].username}</span> ${posts[i].comment}</p>        
    `
    }
    section.innerHTML = string
}

btnLikes0.addEventListener("click", function(){
    changeLikes(0)
})

btnLikes1.addEventListener("click", function(){
    changeLikes(1)
})

btnLikes2.addEventListener("click", function(){
    changeLikes(2)
})

postImg0.addEventListener("click", function(){
   changeLikes(0) 
})

postImg1.addEventListener("click", function(){
   changeLikes(1) 
})

postImg2.addEventListener("click", function(){
   changeLikes(2) 
})

function changeLikes(value){
    clicks[value] = !clicks[value]
    if(clicks[value]){
        likesP[value].innerHTML = `${posts[value].likes + 1} likes`
        btns[value].innerHTML = `<img id="icon-heart" src="images/icon-liked.png">`
        localStorage.setItem(value, JSON.stringify(posts[value].likes + 1))
    }
    else{
        likesP[value].innerHTML = `${posts[value].likes} likes`
        btns[value].innerHTML = `<img id="icon-heart" src="images/icon-heart.png">`
        localStorage.removeItem(value)
    }    
}