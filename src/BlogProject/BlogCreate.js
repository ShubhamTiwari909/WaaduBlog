import { v4 as uuidv4 } from 'uuid';
import { React, useState, useRef } from 'react';
import './Waaducss.css'

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
        <form className="w-purple-claymorphism w-full max-w-xs lg:max-w-md md:max-w-sm flex flex-col py-5 px-8 " action="">
          <label className="text-gray-700 font-bold py-2" htmlFor="">Title</label>
          <input className="text-gray-700 shadow border-2 border-purple-300 rounded focus:outline-none focus:shadow-outline py-1 px-3 mb-3 w-darkmode-hover"
            type="text" placeholder="Title" value={title} onChange={handleTitle} />
          <label className="text-gray-700 font-bold py-2" htmlFor="">Description</label>
          <textarea className="text-gray-700 border-2 border-purple-300 shadow roundedmb-3 py-1 px-3 focus:outline-none focus:shadow-outline w-darkmode-hover"
            placeholder="Description" value={description} onChange={handleDescription}></textarea>
          <label className="text-gray-700 font-bold py-2" htmlFor="">Image</label>
          <input className="text-gray-700 border-2 border-purple-300 shadow rounded  focus:outline-none focus:shadow-outline py-1 px-3 mb-3 w-darkmode-hover"
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


      <div data-aos="fade-right">
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
                <button className="w-bg-hotpink w-text-ice w-p-x-3 w-p-y-2 w-border-radius-3 w-shadow-medium" onClick={() => handleRemove(item.id)}>Delete</button>
              </div>

            </div>


          ))}

        </ul>

      </div>
    </div>

  );
}

export default BlogCreate