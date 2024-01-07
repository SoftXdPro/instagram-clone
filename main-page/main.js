

const randomMessages = ["Is Tavisha at home?", "How's Shaurya? :(", "You know i met someone today...", "I am missing youu.."]





// const toggleMode = () => {
//     let r = document.querySelector(':root')

//     if (document.querySelector('.mode-switch').checked === true) {
//         r.style.setProperty('--dark', 'white')
//         r.style.setProperty('--light', 'dark')
//     } else {
//         r.style.setProperty('--dark', 'black')
//         r.style.setProperty('--light', 'white')

//     }
// }

// document.querySelector('.mode-switch').addEventListener("click", toggleMode)
document.getElementById('logout').addEventListener("click", () => {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.setItem('loggerID', '0')
    location.replace("../index.html")
})
document.getElementById('logoutt').addEventListener("click", () => {
    localStorage.setItem('isLoggedIn', 'false')
    localStorage.setItem('loggerID', '0')
    location.replace("../index.html")
})
const checkLoad = (check) => {
    if (check) {
        document.getElementsByClassName('loadgif')[0].style.display = ''
    } else {
        document.getElementsByClassName('loadgif')[0].style.display = 'none'

    }
}

const [navSearchList, navExplore, navHome, navMessages, navProfile, navNotifs, navMore] = [
    document.getElementsByClassName('nav-search')[0],
    document.getElementsByClassName('nav-explore')[0],
    document.getElementsByClassName('nav-home')[0],
    document.getElementsByClassName('nav-messages')[0],
    document.getElementsByClassName('nav-profile')[0],
    document.getElementsByClassName('nav-notifs')[0],
    document.getElementsByClassName('nav-more')[0]

]

var defaultStories = [
    'https://fastly.picsum.photos/id/703/100/100.jpg?hmac=93LFIXhN_2VurvaqsPaQskz3f1sgRvJjCfOQNIdwi7Q',
    'https://fastly.picsum.photos/id/433/100/100.jpg?hmac=i3aoO2PKOIii_FBppev48qpaUKeOi9AYPrqi7NlvYf0',
    'https://fastly.picsum.photos/id/276/100/100.jpg?hmac=UaT7sojlOY8hIbIHpc9DEwjr3VSLkqfFGG-imYhlolw',
    'https://fastly.picsum.photos/id/9/100/100.jpg?hmac=j4HaWQjj0BsF20TljcF2uvl1OgX_Q-cOjq8MhE4QofA',
    'https://fastly.picsum.photos/id/687/100/100.jpg?hmac=TqwVgHO5lx681MXgF0vDEqGm27B9IAFphza8gM81Oqk',
    'https://fastly.picsum.photos/id/254/100/100.jpg?hmac=UgdPVpMMNMTCR1a-e15SCy42pDx1T98jj0D9XXIb3vI',
    'https://fastly.picsum.photos/id/943/100/100.jpg?hmac=zGRQIVyyLfDf2-A_Ctwbp4ovL8JvResxmgQ9m1BRStM',
    'https://fastly.picsum.photos/id/222/100/100.jpg?hmac=7abBYo9GkNE7IqObnFcZld2W9zpSrSu_ay-NFWUkygY',
    'https://fastly.picsum.photos/id/884/100/100.jpg?hmac=HMwxDNALxMBZgAa1RBpR_sK2iwXb4d7PpowbCgRIrGM',
    'https://fastly.picsum.photos/id/740/100/100.jpg?hmac=_KZ9LCdWtJF3LODhIG8xdc-DjyZGmX1wcuuaI8lMznY'
]

var defaultBios = ["Nature is beautiful.... :)", "DM me", "Boreddd kinda", "Enjoying this year...", "Hurryyyy im happy..."]
var usernames = [
    "bombmaster",
    "hey_newman",
    "iloveyou_somuch",
    "nature_beauty",
    "bomb_master",
    "hey_man",
    "ilove_somuch",
    "beauty_queen",
    "iloveyou",
    "nature_love",
]

var explorePageOn = false
// Changes in the properties when focused
const navSearch = () => {

    if (innerWidth <= 750) {
        manageExplorePage()
        return;
    }
    item = document.getElementById("search")
    item.style.display = "flex"
    let navLabels = document.getElementsByClassName("nav-labels")
    // document.getElementById("nav-bar").style.width = '80px'

    for (i = 0; i < navLabels.length; i++) {
        navLabels[i].style.display = "none"

    }
    // Object.assign(document.getElementById('profile'), {
    //     display: 'flex',
    //     padding: "0",
    //     margin: "0 0 0 10px"
    // })

    replaceTitleWithLogo()

}

const manageNavMore = (event) => {
    if (event.target.classList.contains('p-set')) {
        if (innerWidth > 750) {
            console.log("jnljolj")
            return
        }

    }
    if (!(event.target.classList.contains('nav-more') || event.target.parentElement.classList.contains('nav-more'))) {
        return;
    }
    if (document.querySelector('.nav-more-options').style.display === "flex") {
        document.querySelector('.nav-more-options').style.display = "none"
    } else {
        document.querySelector('.nav-more-options').style.display = "flex"
    }
}

navMore.addEventListener("click", manageNavMore)
document.querySelectorAll('.p-set')[0].addEventListener("click", manageNavMore)
document.querySelectorAll('.p-set')[1].addEventListener("click", manageNavMore)

const navNotif = async () => {

    let item = document.getElementById("notif")
    if (item.style.display === 'flex') {
        return;
    }

    item.style.display = "flex"
    if (innerWidth <= 750) {
        document.querySelector('.heading').style.display = 'none'
        document.querySelector('#nav-title').style.display = 'none'
        document.querySelector('.nav-notifs').style.display = 'none'
        document.querySelector('.nav-create').style.display = 'none'

    }
    if (item.innerHTML.length > 20) {
        if (innerWidth <= 750) {
            return
        }
        let navLabels = document.getElementsByClassName("nav-labels")

        for (i = 0; i < navLabels.length; i++) {
            navLabels[i].style.display = "none"

        }
        replaceTitleWithLogo()


        return
    }
    if (innerWidth > 750) {
        let navLabels = document.getElementsByClassName("nav-labels")

        for (i = 0; i < navLabels.length; i++) {
            navLabels[i].style.display = "none"

        }
        replaceTitleWithLogo()
    }
    checkLoad(true)
    let heading = document.createElement('div')

    heading.setAttribute("data-notif", "true")
    heading.innerHTML = "<h2 data-notif='true'> Notifications </h2>"
    item.append(heading)

    let todaySection = document.createElement('div')
    todaySection.setAttribute("data-notif", "true")
    todaySection.setAttribute("class", "notif-today")

    let todayHeading = document.createElement('h3')
    todayHeading.setAttribute("data-notif", "true")
    todayHeading.innerHTML = 'Today'
    todaySection.append(todayHeading)
    item.append(todaySection)

    for (let i = 0; i < 3; i++) {
        let name = (await (await fetch('https://randomuser.me/api/0.8/?results=1')).json()).results[0].user

        let newNotif = document.createElement('div')
        newNotif.setAttribute("data-notif", "true")
        newNotif.setAttribute("class", "notif-card")

        let img = document.createElement('img')
        img.setAttribute("data-notif", "true")
        img.setAttribute("src", `${name.picture.medium}`)
        let userAction = document.createElement('div')

        userAction.innerHTML = `<span style="font-weight: bold;data-notif='true'">${name.username}</span> ${["started following you. ", "liked your comment"][Math.floor(Math.random() * 2)]}<span style="color:#969696;" class="time-text" data-notif="true" > ${Math.floor(Math.random() * 22) + 1}h</span>`
        newNotif.append(img)
        newNotif.append(userAction)
        todaySection.append(newNotif)
    }
    let yesterdaySection = document.createElement('div')
    yesterdaySection.setAttribute("data-notif", "true")
    yesterdaySection.setAttribute("class", "notif-today")
    let yesterdayHeading = document.createElement('h3')
    yesterdayHeading.setAttribute("data-notif", "true")
    yesterdayHeading.innerHTML = 'This week'
    yesterdaySection.append(yesterdayHeading)
    item.append(yesterdaySection)

    for (let i = 0; i < 5; i++) {
        let name = (await (await fetch('https://randomuser.me/api/0.8/?results=1')).json()).results[0].user

        let newNotif = document.createElement('div')
        newNotif.setAttribute("data-notif", "true")
        newNotif.setAttribute("class", "notif-card")

        let img = document.createElement('img')
        img.setAttribute("data-notif", "true")
        img.setAttribute("src", `${name.picture.medium}`)
        let userAction = document.createElement('div')

        userAction.innerHTML = `<span style="font-weight: bold;data-notif='true'">${name.username}</span> ${["started following you. ", "liked your comment"][Math.floor(Math.random() * 2)]}<span style="color:#969696;" class="time-text" data-notif="true" > ${Math.floor(Math.random() * 6) + 1}d</span>`
        newNotif.append(img)
        newNotif.append(userAction)
        yesterdaySection.append(newNotif)
    }
    checkLoad(false)
    if (innerWidth <= 750) {

        return
    }
    // document.getElementById("nav-bar").style.width = '80px'

    // Object.assign(document.getElementById('profile'), {
    //     display: 'flex',
    //     padding: "0",
    //     margin: "0 0 0 10px"
    // })


}
navNotifs.addEventListener("click", navNotif)
// Changes to default when focus out
const defaultProperties = (event) => {
    if (document.querySelector(".nav-more-options").style.display === 'flex' && !event.target.hasAttribute('data-more')) {
        document.querySelector(".nav-more-options").style.display = 'none'
    }

    if (event.target.parentElement.classList.contains('profile-post-buttons') || event.target.classList.contains('profile-post-buttons') && !event.target.classList.contains('active-profile-button') && !event.target.hasAttribute('data-more')) {


        console.log(event.target)
        document.querySelector('.active-profile-button').classList.remove('active-profile-button')

        if (event.target.parentElement.classList.contains('profile-post-buttons')) {

            event.target.parentElement.classList.toggle('active-profile-button')
        } else {
            event.target.classList.toggle('active-profile-button')

        }

    }

    if (document.getElementById("notif").style.display === 'flex' && !(event.target.hasAttribute("data-notif")) && !event.target.hasAttribute('data-more')) {
        document.getElementById("notif").style.display = 'none'
        if (event.target.hasAttribute('data-search')) {
            return
        }
        console.log("sdfds")



        document.getElementById("nav-title").style.display = ''
        document.getElementsByClassName('insta')[0].style.display = ''
        document.getElementsByClassName('heading')[0].style.margin = ''

        let navLabels = document.getElementsByClassName("nav-labels")
        // document.getElementById("nav-bar").style.width = ''

        for (i = 0; i < navLabels.length; i++) {
            navLabels[i].style.display = ""

        }
        if (event.target.hasAttribute('data-chat')) {
            return
        }
        document.querySelector('.heading').style.display = ''
        document.querySelector('#nav-title').style.display = ''
        document.querySelector('.nav-notifs').style.display = ''
        document.querySelector('.nav-create').style.display = ''


    }

    // If search navbar was clicked
    if (document.getElementById("search").style.display === 'flex' && !event.target.hasAttribute('data-more') && !(event.target.hasAttribute("data-search") && !(event.target.hasAttribute("data-chat")))) {
        document.getElementById("search").style.display = 'none'
        if (event.target.hasAttribute('data-notif')) {
            return
        }
        let navLabels = document.getElementsByClassName("nav-labels")
        document.getElementById("nav-bar").style.width = ''
        console.log("search")


        for (i = 0; i < navLabels.length; i++) {
            navLabels[i].style.display = ""

        }
        document.getElementById("nav-title").style.display = ''
        document.getElementsByClassName('insta')[0].style.display = ''
        document.getElementsByClassName('heading')[0].style.margin = ''


    }
    if (document.getElementsByClassName('explore-page')[0].style.display === 'flex' && !event.target.hasAttribute('data-more') && !(event.target.hasAttribute("data-search")) && !(event.target.hasAttribute("data-explore"))) {
        if (innerWidth > 750 && event.target.hasAttribute("data-notif")) {
            return
        }
        console.log("explore")
        explorePageOn = false
        document.getElementsByClassName('explore-page')[0].style.display = 'none'
        document.getElementsByClassName('explore-page')[0].innerHTML = ""
        setTimeout(() => {
            document.getElementsByClassName('explore-page')[0].innerHTML = ""
        }, 1000)
        if (innerWidth <= 750 && event.target.hasAttribute("data-chat")) {
            return
        }
        if (innerWidth <= 750 && event.target.hasAttribute("data-profile")) {
            return
        }
        document.querySelector('.heading').style.display = ''
        document.querySelector('#nav-title').style.display = ''
        document.querySelector('.nav-notifs').style.display = ''
        document.querySelector('.nav-create').style.display = ''
        // console.log(document.getElementsByClassName('explore-page')[0].innerHTML)

    }
    if (document.getElementsByClassName('home-page')[0].style.display === 'flex' && !event.target.hasAttribute('data-more') && !(event.target.hasAttribute('data-home'))) {
        if (innerWidth > 750 && event.target.hasAttribute("data-notif")) {
            return
        }

        if (innerWidth > 750 && event.target.hasAttribute("data-search")) {
            return
        }
        document.getElementsByClassName('home-page')[0].style.display = 'none'
        document.querySelector('.story-section').innerHTML = ""
        document.querySelector('.posts-section').innerHTML = "<div class='load-more-posts'>...</div>"
        console.log("HOME")
    }
    if (document.getElementsByClassName('profile-page')[0].style.display === 'flex' && !event.target.hasAttribute('data-more') && !(event.target.hasAttribute('data-profile'))) {
        if (innerWidth > 750 && event.target.hasAttribute("data-notif")) {
            return
        }

        if (innerWidth > 750 && event.target.hasAttribute("data-search")) {
            return
        }

        console.log("profile")

        document.getElementsByClassName('profile-page')[0].style.display = 'none'
        if (innerWidth <= 750 && event.target.hasAttribute("data-chat")) {
            return
        }
        if (innerWidth <= 750 && event.target.hasAttribute("data-search")) {
            return
        }
        document.querySelector('#nav-title').style.display = ''
        document.querySelector('.nav-notifs').style.display = ''
        document.querySelector('.heading').style.display = ''

        document.querySelector('.nav-create').style.display = ''
    }
    if (document.querySelector('.chat-page').style.display === 'flex' && !event.target.hasAttribute('data-more') && !(event.target.hasAttribute("data-search")) && !(event.target.hasAttribute("data-chat"))) {
        if (innerWidth > 750 && event.target.hasAttribute("data-notif")) {
            return
        }
        document.querySelector('.chat-page').style.display = 'none'

        console.log("chat")

        document.querySelector('.heading').style.display = ''
        document.querySelector('#nav-title').style.display = ''
        document.querySelector('.nav-notifs').style.display = ''
        document.querySelector('.nav-create').style.display = ''
        // document.querySelector('.main-chats').style.display = 'none'
        // document.querySelector('.send-messages-box').style.display = 'none'
    }
}


const replaceTitleWithLogo = () => {
    document.getElementById("nav-title").style.display = 'none'

    document.getElementsByClassName('insta')[0].style.display = 'flex'
    document.getElementsByClassName('heading')[0].style.margin = '30px 0px 45px 15px'


}

navSearchList.addEventListener("click", navSearch)

document.querySelector('.story-section').addEventListener("drag", (event) => {
    let s = document.querySelector('.story-section')
    s.scroll(10, 0)
})

const manageHomePage = async () => {
    checkLoad(true)
    let homePage = document.querySelector('.home-page')

    document.getElementsByClassName('home-page')[0].style.display = 'flex'
    let storySection = document.querySelector('.story-section')
    let postSection = document.querySelector('.posts-section')
    let loadMore = document.querySelector('.load-more-posts')

    for (let i = 0; i < defaultStories.length; i++) {

        let ele = document.createElement('img')
        let label = document.createElement('label')
        let story = document.createElement('div')
        story.setAttribute('data-home', "true")
        story.setAttribute('class', 'story-story')
        label.setAttribute("data-home", "true")
        label.innerHTML = `${usernames[i].slice(0, 6)}...`
        ele.src = defaultStories[i]
        ele.setAttribute("data-home", 'true')
        story.append(ele)
        story.append(label)
        storySection.prepend(story)
    }

    // Post section
    for (let i = 0; i < 5; i++) {

        let post = document.createElement('div')
        post.setAttribute("class", "post")
        post.setAttribute("data-home", "true")
        let img = document.createElement('img')
        img.setAttribute('data-home', "true")
        img.setAttribute('class', 'post-img')
        let dp = await fetch(`https://picsum.photos/400`)
        let name = (await (await fetch('https://randomuser.me/api/0.8/?results=1')).json()).results[0].user
        let dpResponse = await dp
        let dpUrl = dpResponse.url
        let imgUrl = (name.picture.large)
        img.setAttribute('src', `${imgUrl}`)
        let username = name.username
        let firstRow = document.createElement('div')
        firstRow.setAttribute("data-home", "true")
        firstRow.setAttribute("class", "first-row")
        firstRow.innerHTML = `<span class="dp-text" data-home="true"><img src="${dpUrl}" width="40px" data-home="true"></span><span class="username-text" data-home="true">${username}</span>  <span style="color:#969696;font-weight:bold;" class="time-text" data-home="true" >&#8226; ${Math.floor(Math.random() * 7) + 1}d  &#8226;</span> <span data-home="true" class="follow-text">Follow</span>`

        let buttonsRow = document.createElement('div')
        buttonsRow.setAttribute('data-home', 'true')
        buttonsRow.setAttribute('class', 'buttons-row')
        buttonsRow.innerHTML = `<i data-home="true" style="font-size: 25px;" class="fa-regular fa-heart"></i> <i style="font-size: 25px;" data-home='true' class="fa-regular fa-comment"></i> <i style="font-size: 25px;" data-home="true" class="fa-solid fa-share"></i><i style="float:right;font-size: 25px" data-home="true" class="fa-regular fa-bookmark"></i>`

        let likesRow = document.createElement('div')

        likesRow.setAttribute('data-home', 'true')
        likesRow.setAttribute('style', 'font-weight:bold;')
        likesRow.innerHTML = `${(Math.floor(Math.random() * 100000) + 1).toLocaleString('en-US')} likes`

        let description = document.createElement('div')
        description.setAttribute('data-home', 'true')
        description.setAttribute('style', 'margin:2% 0 2% 0;')
        description.innerHTML = `<b data-home='true'>${username}</b> ${defaultBios[Math.floor(Math.random() * defaultBios.length)]}`

        let totalComments = document.createElement('div')
        totalComments.setAttribute('data-home', 'true')
        totalComments.setAttribute('class', 'total-comment')
        totalComments.innerHTML = `View all ${Math.floor(Math.random() * 1000) + 1} comments`


        let commentInput = document.createElement('input')
        commentInput.setAttribute('type', 'text')
        commentInput.setAttribute('class', 'comment')
        commentInput.setAttribute('data-home', 'true')
        commentInput.setAttribute('placeholder', 'Add a comment')



        post.append(firstRow);
        post.append(img)
        post.append(buttonsRow)
        post.append(likesRow)
        post.append(description)
        post.append(totalComments)
        post.append(commentInput)
        checkLoad(false)
        loadMore.before(post)
    }
    loadMore.style.display = 'initial'


}


const addPost = async (numPosts = 5) => {
    let postSection = document.querySelector('.posts-section')
    let loadMore = document.querySelector('.load-more-posts')

    loadMore.style.display = 'none'
    checkLoad(true)

    for (let i = 0; i < numPosts; i++) {

        let post = document.createElement('div')
        post.setAttribute("class", "post")
        post.setAttribute("data-home", "true")
        let img = document.createElement('img')
        img.setAttribute('data-home', "true")
        img.setAttribute('class', 'post-img')
        let dp = await fetch(`https://picsum.photos/400`)
        let name = (await (await fetch('https://randomuser.me/api/0.8/?results=1')).json()).results[0].user
        let dpResponse = await dp
        let dpUrl = dpResponse.url
        let imgUrl = (name.picture.large)
        img.setAttribute('src', `${imgUrl}`)
        let username = name.username
        let firstRow = document.createElement('div')
        firstRow.setAttribute("data-home", "true")
        firstRow.setAttribute("class", "first-row")
        firstRow.innerHTML = `<span class="dp-text" data-home="true"><img src="${dpUrl}" width="40px" data-home="true"></span><span class="username-text" data-home="true">${username}</span>  <span style="color:#969696;font-weight:bold;" class="time-text" data-home="true" >&#8226; ${Math.floor(Math.random() * 7) + 1}d  &#8226;</span> <span data-home="true" class="follow-text">Follow</span>`

        let buttonsRow = document.createElement('div')
        buttonsRow.setAttribute('data-home', 'true')
        buttonsRow.setAttribute('class', 'buttons-row')
        buttonsRow.innerHTML = `<i data-home="true" style="font-size: 25px;" class="fa-regular fa-heart"></i> <i style="font-size: 25px;" data-home='true' class="fa-regular fa-comment"></i> <i style="font-size: 25px;" data-home="true" class="fa-solid fa-share"></i><i style="float:right;font-size: 25px" data-home="true" class="fa-regular fa-bookmark"></i>`

        let likesRow = document.createElement('div')
        likesRow.setAttribute('data-home', 'true')
        likesRow.setAttribute('style', 'font-weight: bold;')
        likesRow.innerHTML = `${(Math.floor(Math.random() * 100000) + 1).toLocaleString('en-US')} likes`

        let description = document.createElement('div')
        description.setAttribute('data-home', 'true')
        description.setAttribute('style', 'margin:2% 0 2% 0;')
        description.innerHTML = `<b>${username}</b> ${defaultBios[Math.floor(Math.random() * defaultBios.length)]}`

        let totalComments = document.createElement('div')
        totalComments.setAttribute('data-home', 'true')
        totalComments.setAttribute('class', 'total-comment')
        totalComments.innerHTML = `View all ${Math.floor(Math.random() * 1000) + 1} comments`


        let commentInput = document.createElement('input')
        commentInput.setAttribute('type', 'text')
        commentInput.setAttribute('class', 'comment')
        commentInput.setAttribute('data-home', 'true')
        commentInput.setAttribute('placeholder', 'Add a comment')



        post.append(firstRow);
        post.append(img)
        post.append(buttonsRow)
        post.append(likesRow)
        post.append(description)
        post.append(totalComments)
        post.append(commentInput)
        loadMore.before(post)
    }
    loadMore.style.display = 'initial'
    checkLoad(false)

}
const observer = new IntersectionObserver((entries, observer) => {
    // Loop through the entries
    for (const entry of entries) {
        // Check if the entry is intersecting the viewport
        if (entry.isIntersecting) {
            // Load more content
            console.log("SDfds")
            addPost();
        }
    }
});

observer.observe(document.querySelector('.load-more-posts'))
// document.querySelector('.posts-section').addEventListener('scroll', addPost)

const nextStory = () => {
    document.querySelector(".story-section").scrollBy(200, 0)
}
const backStory = () => {
    document.querySelector(".story-section").scrollBy(-200, 0)
}

// manageHomePage()
navHome.addEventListener("click", manageHomePage)
const manageExplorePage = async () => {

    let explorePage = document.getElementsByClassName('explore-page')[0]
    explorePage.style.display = 'flex'
    document.querySelector(".loader").style.display = 'flex'
    if (innerWidth <= 750) {
        document.querySelector('.heading').style.display = 'none'
        document.querySelector('#nav-title').style.display = 'none'
        document.querySelector('.nav-notifs').style.display = 'none'
        document.querySelector('.nav-create').style.display = 'none'
        let searchBox = document.createElement('input')
        searchBox.setAttribute("type", "search")
        searchBox.setAttribute("data-explore", "true")
        searchBox.setAttribute("placeholder", "Search")
        searchBox.setAttribute("id", "explore-Search")
        searchBox.style.width = "98%"
        searchBox.style.height = "9vw"
        searchBox.style.top = "0%"
        searchBox.style.margin = "1%";
        searchBox.style.backgroundColor = "black";
        searchBox.style.border = "1px solid white";
        searchBox.style.borderRadius = "7px";
        searchBox.style.textIndent = "19px";
        searchBox.style.fontDize = "16px";
        explorePage.append(searchBox)
    }
    explorePageOn = true


    let list = document.createElement('li')
    list.setAttribute("data-explore", "true")
    explorePage.append(list)
    for (i = 0; i < 30 && explorePageOn; i++) {
        let p = await fetch(`https://picsum.photos/400`)
        let response = await p
        let ele = document.createElement('img')
        if (i % 3 != 0) {
            ele.src = response.url
            ele.setAttribute("data-explore", 'true')
            list.append(ele)
        } else {
            list = document.createElement('li')
            list.setAttribute("data-explore", "true")
            explorePage.append(list)

            ele.src = response.url
            ele.setAttribute("data-explore", 'true')
            list.append(ele)
        }
        document.querySelector(".loader").style.display = 'none'


    }
}

navExplore.addEventListener("click", manageExplorePage)

const manageChatPage = async () => {

    checkLoad(true)
    let mainChats = document.querySelector('.main-chats')
    let sendMessagesBox = document.querySelector('.send-messages-box')
    let chatPage = document.querySelector('.chat-page')
    if (chatPage.style.display === 'flex') {
        checkLoad(false)
        return;
    }
    if (innerWidth <= 750) {

        document.querySelector('.heading').style.display = 'none'
        document.querySelector('#nav-title').style.display = 'none'
        document.querySelector('.nav-notifs').style.display = 'none'
        document.querySelector('.nav-create').style.display = 'none'
    }
    chatPage.style.display = 'flex'
    if (mainChats.innerHTML.length > 50) {
        checkLoad(false)
        return;
    }
    // mainChats.style.display = ''
    // sendMessagesBox.style.display = ''


    let userHeading = document.createElement('div')
    userHeading.setAttribute("data-chat", "true")
    userHeading.setAttribute("class", "chatbox-heading")

    let user;
    if (localStorage.getItem('totalUsers')) {

        user = JSON.parse(localStorage.getItem("totalUsers")).users[localStorage.getItem('loggerID')]
        userHeading.innerHTML = `<span data-chat='true'>${user.username ? user.username : "User"}</span><i data-chat='true' class="fa-solid fa-angle-down"></i><i style='float:right;' data-chat='true' class="fa-regular fa-pen-to-square"></i>`
    } else {
        userHeading.innerHTML = `<span data-chat='true'> user_name </span><i data-chat='true' class="fa-solid fa-angle-down"></i><i style='float:right;' data-chat='true' class="fa-regular fa-pen-to-square"></i>`

    }

    let chatTitles = document.createElement('div')

    chatTitles.setAttribute('data-chat', 'true')
    chatTitles.setAttribute('class', 'chatbox-head')

    chatTitles.innerHTML = `<span data-chat='true' style='font-weight:bolder;'>Messages</span> <span data-chat='true' span style='color:#0095EE;float:right'>Request(2)</span>`


    let chatsBox = document.createElement('div')
    chatsBox.setAttribute('class', 'chatsBox')
    chatsBox.setAttribute('data-chat', 'true')

    mainChats.append(userHeading)
    mainChats.append(chatTitles)
    mainChats.append(chatsBox)
    for (let i = 0; i < 10; i++) {

        let chatUser = document.createElement('div')
        chatUser.setAttribute('data-chat', 'true')
        chatUser.setAttribute('class', 'chat-user')
        let chatUserData = (await (await fetch('https://randomuser.me/api/0.8/?results=1')).json()).results[0].user
        let dp = chatUserData.picture.medium

        let img = document.createElement('img')
        img.setAttribute('data-chat', 'true')
        img.setAttribute('src', `${dp}`)
        let userDisplayData = document.createElement('div')
        userDisplayData.setAttribute('data-chat', 'true')
        userDisplayData.setAttribute('class', 'user-display-data')
        userDisplayData.innerHTML = `<span style='margin-bottom:4px;' data-chat='true'>${(chatUserData.name.first).charAt(0).toUpperCase() + (chatUserData.name.first).slice(1)} ${(chatUserData.name.last).charAt(0).toUpperCase() + (chatUserData.name.last).slice(1)} </span><span data-chat='true'>${randomMessages[Math.floor(Math.random() * randomMessages.length)]} &#8226; ${(Math.floor(Math.random() * 5) + 1)} h &#8226;</span> `
        chatUser.append(img)
        chatUser.append(userDisplayData)
        chatsBox.append(chatUser)
    }
    checkLoad(false)



}

navMessages.addEventListener("click", manageChatPage)

const manageProfilePage = () => {
    const profilePage = document.querySelector('.profile-page')
    profilePage.style.display = 'flex'
    if (innerWidth <= 750) {

        document.querySelector('.heading').style.display = 'none'
        document.querySelector('#nav-title').style.display = 'none'
        document.querySelector('.nav-notifs').style.display = 'none'
        document.querySelector('.nav-create').style.display = 'none'
    }

}

navProfile.addEventListener("click", manageProfilePage)


document.body.addEventListener("click", defaultProperties)
