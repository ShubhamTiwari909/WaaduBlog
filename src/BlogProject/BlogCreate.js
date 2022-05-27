import {v4 as uuidv4 } from 'uuid';
import {React, useState,useRef } from 'react';
import image from './Body-bg.jpeg';




const initialList = [
  {
    id:'a',
    title:'Title',
    description:'This is Blog Body',
    like:false,
    dislike:false,
    image:image,
    result:"",
  }, 
 
];

// const CommentsList = [
//   {
//     id:'a',
//     commentInput:""
//   },
// ];


const BlogCreate = () => {


 const [list, setList] = useState(initialList);
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [colortext, setColortext] = useState("black");
 const [darkBackground, setDarkBackground] = useState("white");


 var blog_body={
  backgroundColor:darkBackground,
  color:colortext
 }

 function HandleTheme()
 {
   if(darkBackground === "white" && colortext ==="black")
   {
     setDarkBackground("black");
     setColortext("white");
   }
   else
   {
     setDarkBackground("white");
     setColortext("black");
   }
 }


 //comment styling and states
//  const [displaycomment, setDisplaycomment] = useState("none");
//  const [commentsList, setCommentsList] = useState(CommentsList);
//  const [commentInput, setCommentInput] = useState('');

//  const comments = {
//    color:"black",
//     display:displaycomment,
//     overflowY:"scroll",
//     scrollbarWidth: 'none',
//     width:"550px",
//     height:"200px",
//     padding:'1rem',
//     margin:'1rem auto',
//     borderRadius:"10px",
//     background: "#41295a",
//     background: "-webkit-linear-gradient(to right, #0f0c29, #302b63, #24243e)",
//     background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
//     flexDirection:"column",
//     justifyContent:"space-between"

//   }

//   const comment_section ={
//   float:"left",
//   padding:"0.5rem",
//   margin:"1rem",
//   width:"30rem",
//   height:"auto",
//   backgroundColor:"white",
//   borderRadius:"5px",
//   paddingBottom:"15px",
//   textAlign:'left',
//   display:"flex",
//   flexDirection:'column',
//   justifyContent:"space-between",
//   fontFamily: 'Franklin Gothic Medium,Arial Narrow,Arial, sans-serif'
//   }   


//   const comment_Input = {
//     justifyContent:"center",
//     marginTop:"1rem"
//   }



// /*Functions */
//   function handleComment()
//   {
//     if(displaycomment==="none")
//     {
//     setDisplaycomment("flex");
//     }
//     else{
//       setDisplaycomment("none");
//     }
//   }


//   function handleChange(e)
//   {
//   setCommentInput(e.target.value);
//   }


//   function handleAddComment()
//   {
//     const newCommentList = commentsList.concat({commentInput,id:uuidv4()});
//     setCommentsList(newCommentList);
//     setCommentInput('');
//   }


//   function handleRemoveComment(id)
//   {
//   const filterCommentList = commentsList.filter((items) =>items.id !== id);
//   setCommentsList(filterCommentList);
//   }


//   /*comment section end here*/


  function handleTitle(event)
  {
    setTitle(event.target.value);
  }


  function handleDescription(event)
  {
    setDescription(event.target.value);
  } 


  function handleAdd()
  {
    if(title === "" || description === "")
    {
    alert("Please Enter the title and description!");
    }
    else
    {
    const newList = list.concat({ title,description,image,result, id:uuidv4() });

    setList(newList);
    setTitle('');
    setDescription('');
    
    }
    
  }

  // function handleRemove(id)
  // {
  //   const filterList = list.filter((item) =>item.id !== id);
  //   setList(filterList);
  // }


//adding image logic copied!!
 const [image, setImage] = useState("");
 const imageRef = useRef(null);

 function useDisplayImage() {
   const [result, setResult] =useState("");

    function uploader(e) 
    {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

   return { result, uploader };
 }

 const { result, uploader } = useDisplayImage();


  return (
     <div>
        <div className="text-center m-5">
          <div className="input-boxes">

                <div class="form-group">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Title</span>
                    <input type="text" value={title} onChange={handleTitle} class="form-control" placeholder="Title" aria-describedby="helpId"></input>
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">Blog</span>
                  <textarea type="text" value={description} onChange={handleDescription} class="form-control" placeholder="Description" aria-describedby="helpId" />
                </div>
                
                <p className="float-left"><span class="input-group-text" id="basic-addon1">Image</span></p>

                <input
                  type="file"
                  className="form-control file-input"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    uploader(e);
                  }}
                />
    
                <button type="button" className="btn btn-outline-primary" onClick={handleAdd}>Add </button>

              </div>
        </div>
    </div>
      

     <div className="display-box" data-aos="fade-right">

          <ul className="nav justify-content-center display-box-blogs">
            {list.map((item) => (
              <div>
                <div className="individual-blog" style={blog_body}>
                  <div className="blog-body">
                    <li className="nav-item text-center blog-title" key={item.id}>{item.title} 
                      <span>
                      <div>
                        <button className="btn border border-primary ml-3 mr-3 mt-3" onClick={HandleTheme} style={blog_body}>Change Theme</button>
                        </div>
                      </span>
                    </li>
                
                    <div className="text-center mt-3">

                      {result && <img ref={imageRef} src={item.result} className="blogs-image" alt="" />}

                      {/*For uploading videos

                       {result && <video className="blogs-image" alt="" controls>
                        <source ref={imageRef} src={item.result} type="video/mp4"></source>
                        </video>} */}
                    </div>

                    <div className="nav-item text-center blog-content" key={item.id}>
                      {item.description}
                    </div>
                    
                </div>
               
              </div>  

          </div>

             
          ))}
        
        </ul>
    
     </div>
      </div>
  
  );
}

export default BlogCreate