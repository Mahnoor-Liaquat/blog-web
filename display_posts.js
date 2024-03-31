const database = firebase.database().ref();

const allBlogs = document.getElementById("all-blogs");

database.on("child_added", addBlog);

function addBlog(rowData) {
    const blogObject = rowData.val();

    console.log(blogObject);

    let blogDiv = makeSingleBlogHTML(blogObject.TITLE, blogObject.USERNAME, blogObject.BODY);

    allBlogs.appendChild(blogDiv);
}

function makeSingleBlogHTML(titleTxt, usernameTxt, blogTxt) {
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("single-blog");

    let titleDisplay = document.createElement("p");
    titleDisplay.classList.add("single-blog-title");
    titleDisplay.innerHTML = titleTxt + " by " + usernameTxt;
    parentDiv.appendChild(titleDisplay);

    // create box for message text
    let blogDisplay = document.createElement("p");
    blogDisplay.innerHTML = blogTxt;
    parentDiv.appendChild(blogDisplay);

    return parentDiv;
}