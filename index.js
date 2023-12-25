function fetchPosts() {
    fetch('https://mocki.io/v1/d5f8030d-7192-4bed-a089-7cbd8a27885f')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response error');
        }
        return response.json();
      })
      .then(json => {

        const divContainer = document.getElementsByClassName("post-wrapper")[0];

        for (var i in json){

          const postID = json[i + 1];
          const postBody = document.createElement("div"); // Post body (parent) to which we are adding child elements.
          postBody.classList.add("post");

          const postHeader = document.createElement("div");
          postHeader.classList.add("post-header");
          postBody.appendChild(postHeader); // Adding created div the the parent div.

          const postProfileImg = document.createElement("img");
          postProfileImg.src = json[i]['userProfilePicture'];
          postProfileImg.style.height = "40px";
          postProfileImg.style.width = "40px";
          postHeader.appendChild(postProfileImg);

          const postDate = document.createElement("p")
          postDate.classList.add("post-date")
          postHeader.appendChild(postDate)
          var postDateText = document.createTextNode(json[i]['createTime']) // Date text 
          postDate.appendChild(postDateText) // Append date text to the date element (p).

          const postPictureDiv = document.createElement("div")
          postPictureDiv.classList.add("post-content")
          postBody.appendChild(postPictureDiv)

          const postPicture = document.createElement("img")  // Create image element
          postPicture.src = json[i]['postPicture']; 
          postPicture.style.height = '350px'
          postPicture.style.width = '450px'
          postPictureDiv.appendChild(postPicture) // Append img element to parent div (post-content)

          const postContent = document.createElement("div");
          postContent.classList.add("post-description")
          const contentHeader = document.createElement("H1")
          const contentDescription = document.createElement("p")
          var contentHeaderText = document.createTextNode(json[i]['postHeader']) // Adding text to header
          var contentDescriptionText = document.createTextNode(json[i]['postContent']) // Adding text to description
          contentHeader.appendChild(contentHeaderText)
          contentDescription.appendChild(contentDescriptionText)
          postContent.appendChild(contentHeader)
          postContent.appendChild(contentDescription)
          postBody.appendChild(postContent)

          divContainer.appendChild(postBody); // Append the post body to the parent element (post-wrapper)
        }

      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

fetchPosts()