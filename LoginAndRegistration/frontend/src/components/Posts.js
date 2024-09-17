import React, { useEffect, useState } from 'react';
import "../assets/bootstrap/css/bootstrap.min.css";
import "../assets/bootstrap/css/bootstrap-grid.min.css";
import "../assets/bootstrap/css/bootstrap-reboot.min.css";
import "../assets/dropdown/css/style.css";
import "../assets/theme/css/style.css";
import "../assets/mobirise/css/mbr-additional.css?v=Wo4LBh";
import "../assets/mobirise/css/mbr-additional.css?v=Wo4LBh";


{/* Site made with Mobirise Website Builder v5.9.18, https://mobirise.com */}
function Posts() {

    {/* The IIE (2024) demonstrates how to fetch data from a database and map it. */}

    //1. Initializing state to store the posts
    //'posts' is the state variable, and 'setPosts' is the function to update it.
    //Starting with an empty array as the initial state.
    const [posts, setPosts] = useState([]);

    //2. useEffect hook runs after the component mounts and when the dependency array changes.
    useEffect(() => {
        //3. Defining an asynchronous function to fetch posts from the backend.
        async function GetPosts() {

            //4. Fetching data from the backend API.
            //The URL here is the actual backend endpoint to get posts.
            const response = await fetch(`https://localhost:3001/post/`);

            console.log(response);

            //5. Checking if the response is not okay (e.g., network error or 404 not found).
            if (!response.ok) {

                //6. If there’s an error, creates an error message using the status text from the response.
                const message = `An error occurred: ${response.statusText}`;
                
                //7. Displays the error message to the user.
                window.alert(message);

                //Exits the function early if there's an error.
                return; 
            }

            //8. Parsing the JSON data from the response.
            const posts = await response.json();
            
            //9. Updating the state with the fetched posts.
            setPosts(posts);
        };

        //10. Calling the async function to fetch posts.
        GetPosts();
    }, [posts.length]); //The dependency array includes 'posts.length' to run the effect when the length of posts changes.



    return (

<section data-bs-version="5.1" className="news05 cid-uoDmcXH9Pk" id="news05-6">
  
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12 mb-5 content-head">
        <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><br></br><strong>Posts</strong></h3>
        
      </div>
    </div>
    {posts.map(post => (
                    <div key={post.id} className="row justify-content-center item features-without-image mb-5">
                        <div className="col-12 col-lg-6">
                            <img className="w-100" src={`data:image/jpeg;base64,${post.image}`}/>
                        </div>
                        <div className="col-12 col-lg item-wrapper">
                            <h5 className="mbr-card-title mbr-fonts-style mt-3 mb-3 display-5">
                                <strong>{post.user}</strong>
                            </h5>
                            <p className="mbr-text mbr-fonts-style mt-0 mb-3 display-7">
                                {post.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
</section>

);
};

export default Posts;

/* REFERENCE LIST:
The IIE. 2024. LAB GUIDE 2024 [APDS7311 Learn]. The Independent Institute of Education: Unpublished.
*/
