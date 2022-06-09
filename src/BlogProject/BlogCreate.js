import { v4 as uuidv4 } from 'uuid';
import { React, useState, useRef } from 'react';

const initialList = [];

const BlogCreate = () => {


  const [list, setList] = useState(initialList);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [colortext, setColortext] = useState("black");
  const [darkBackground, setDarkBackground] = useState("white");


  var blog_body = {
    backgroundColor: darkBackground,
    color: colortext
  }

  function HandleTheme() {
    if (darkBackground === "white" && colortext === "black") {
      setDarkBackground("black");
      setColortext("white");
    }
    else {
      setDarkBackground("white");
      setColortext("black");
    }
  }



  function handleTitle(event) {
    setTitle(event.target.value);
  }


  function handleDescription(event) {
    setDescription(event.target.value);
  }


  function handleAdd() {
    if (title === "" || description === "") {
      alert("Please Enter the title and description!");
    }
    else {
      const newList = list.concat({ title, description, image, result, id: uuidv4() });

      setList(newList);
      setTitle('');
      setDescription('');

    }

  }

  function handleRemove(id) {
    const filterList = list.filter((item) => item.id !== id);
    setList(filterList);
  }


  //adding image logic copied!!
  const [image, setImage] = useState("");
  const imageRef = useRef(null);

  function useDisplayImage() {
    const [result, setResult] = useState("");

    function uploader(e) {
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
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <form className="w-full max-w-xs lg:max-w-md md:max-w-sm bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg" action="">
          <label className="text-gray-700 font-bold py-2" htmlFor="">Title</label>
          <input className="text-gray-700 shadow border-2 border-purple-300 rounded focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
            type="text" placeholder="Title" value={title} onChange={handleTitle} />
          <label className="text-gray-700 font-bold py-2" htmlFor="">Description</label>
          <textarea className="text-gray-700 border-2 border-purple-300 shadow roundedmb-3 py-1 px-3 focus:outline-none focus:shadow-outline"
            placeholder="Description" value={description} onChange={handleDescription}></textarea>
          <label className="text-gray-700 font-bold py-2" htmlFor="">Image</label>
          <input className="text-gray-700 border-2 border-purple-300 shadow rounded  focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              uploader(e);
            }} />
          <div className="flex justify-center my-4">
            <div className="">
              <button type="button" className="w-p-left-3 w-p-right-3 w-p-top-1 w-p-bottom-1 w-border-radius-3 w-m-top-4 w-m-right-2
               w-shadow-medium w-border-solid w-border-width-1 w-border-purple w-text-orchid w-darkmode-hover" onClick={handleAdd}>Add </button>
            </div>
          </div>
        </form>
      </div>


      <div className="display-box w-m-top-10" data-aos="fade-right">
        <ul className="nav justify-content-center display-box-blogs">
          {list.map((item) => (
            <div key={item.id}>
              <div className="individual-blog w-shadow-medium" style={blog_body}>
                <div className="blog-body">
                  <li className="nav-item text-center blog-title w-m-top-7" key={item.id}>{item.title}
                    <span>
                      <div>
                        <button className="btn border border-primary ml-3 mr-3 mt-3" onClick={HandleTheme} style={blog_body}>Change Theme</button>
                      </div>
                    </span>
                  </li>

                  <div className="w-grid w-place-content-center w-m-top-3 w-m-bottom-3">

                    {result && <img ref={imageRef} src={item.result} className="w-border-solid w-border-width-1 w-border-purple w-border-radius-3"
                      alt="This is a main cover of the blog" />}

                  </div>

                  <div className="nav-item text-center blog-content" key={item.id}>
                    {item.description}
                  </div>

                </div>

              </div>
              <div className="text-center delete-btn">
                <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>Delete</button>
                {/* <button className="btn"  key={item.id}><i class="fa fa-thumbs-up" aria-hidden="true" style={{color:"blue"}}></i></button>
                  <button className="btn"  key={item.id}><i class="fa fa-thumbs-down" aria-hidden="true" style={{color:"red"}}></i></button> */}
              </div>

            </div>


          ))}

        </ul>

      </div>
    </div>

  );
}

export default BlogCreate