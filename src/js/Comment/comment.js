import firebase from 'firebase/compat/app'
import 'firebase/compat/analytics'
import 'firebase/compat/database'

const comment = (container) => 
{
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCuLhSioGM1s1TP4PPhifhpDZdMG0HmrFg",
        authDomain: "comment1-8c7a6.firebaseapp.com",
        databaseURL: "https://comment1-8c7a6-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comment1-8c7a6",
        storageBucket: "comment1-8c7a6.appspot.com",
        messagingSenderId: "285625961512",
        appId: "1:285625961512:web:e38c3a6e7112a29b4f791d",
        measurementId: "G-FC3JG2HDHQ"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    
    // rootRef is the whole firebase realtime database
    const rootRef = firebase.database().ref()

    // commentsRef is just the comments data in the database
    const commentsRef = rootRef.child(`comment1`)

    //list for click or submit button
    const submitButton = container.querySelector(`#btnSubmitComment`)

    // adding event listener to submit button to push the comment
    submitButton.addEventListener(`click`, (evt) => 
    {
        // avoid getting null on radio buttons
        if(document.querySelectorAll(`input[name="attend"]:checked`).length > 0)
        {
            // replace line breaks in comment with br tags
            const newComment = container.querySelector(`#txComment`).value.replace(/\n/g, "<br>")
            // define a new, keyed post
            const newPostRef = commentsRef.push()
            // full the new keyed post with data
            newPostRef.set(
            {
                name: container.querySelector(`#tbName`).value.trim(), // getting the name
                comment: newComment.trim(), // getting comment
                attendance: container.querySelector(`input[name="attend"]:checked`).value, // getting comment
                frompage: location.pathname, // getting page location
                when: firebase.database.ServerValue.TIMESTAMP // getting timestamp
            }) 
            // refresh comment
            setTimeout(() => {refreshComment()}, 200)
        }
        else{}
    })

    // refresh comment
    const refreshComment = () =>
    {
        container.querySelector(`#tbName`).value = ""
        container.querySelector(`#txComment`).value = ""
        container.querySelector(`#pastcomments`).innerHTML = null
        container.querySelectorAll(`input[name="attend"]`).forEach((radio) => 
        {
            radio.checked = false
        })
        showPastComment()
    }

    const showPastComment = () => 
    {
        // target element for showing past comment
        const commentsList = container.querySelector(`#pastcomments`)

        // get comment whose frompage equals this page's pathname
        const commentsRef = firebase.database().ref(`comment1/`).orderByChild(`frompage`).equalTo(location.pathname)
        
        commentsRef.once(`value`, (snapshot) => 
        {
            // get the object for one snapshot
            snapshot.forEach((itemSnapshot) => 
            {
                const itemData = itemSnapshot.val()
                const comment = itemData.comment
                const name = itemData.name
                const attend = itemData.attendance
                const when = new Date(itemData.when).toLocaleDateString(`id-id`)
                
                commentsList.innerHTML += `
                    <li>
                        ${comment}
                        <br><br>
                        <span><span class="comment-name">${name}</span> - <span class="comment-attend">${attend}</span> - <span>(${when})</span></span> 
                    </li>
                `
            })
        })
    }
    showPastComment()
}

export default comment