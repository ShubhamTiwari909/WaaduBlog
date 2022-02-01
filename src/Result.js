import React,{useState} from 'react'
import {v4 as uuidv4 } from 'uuid';
import {Form,FormGroup,Label,Input,Col,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {AiOutlineArrowUp} from 'react-icons/ai';

const initialList = [
    
    {
        id:'a',
        Name:'shubham',
        Rollno:'19120033',
        HTML:100,
        CSS:90,
        JAVASCRIPT:85,
        REACT:80,
      },
      {
        id:'b',
        Name:'Akshay',
        Rollno:'19120005',
        HTML:90,
        CSS:90,
        JAVASCRIPT:80,
        REACT:70,
      },

  ];
function Result() {
    const [list, setList] = useState(initialList);
    const [Name, setName] = useState('');
    const [Rollno, setRollNo] = useState();
    const [HTML, setHTML] = useState();
    const [CSS, setCSS] = useState();
    const [JAVASCRIPT, setJAVASCRIPT] = useState();
    const [REACT, setREACT] = useState();
    const [Sort, setSort] = useState("");

    function isSortByName(){
       setSort("name");
    }

    function isSortByRollno(){
        setSort("rollno");
     }

     function isSortByHtml(){
        setSort("html");
     }

     function isSortByCss(){
        setSort("css");
     }
     function isSortByJavascript(){
        setSort("javascript");
     }
     function isSortByReact(){
        setSort("react");
     }


    function handleName(event)
    {
        setName(event.target.value);
    }
    function handleRollno(event)
    {
        setRollNo(event.target.value);
    }
    function handleHTML(event)
    {
        setHTML(event.target.value);
    }
    function handleCSS(event)
    {
        setCSS(event.target.value);
    }
    function handleJAVASCRIPT(event)
    {
        setJAVASCRIPT(event.target.value);
    }
    function handleREACT(event)
    {
        setREACT(event.target.value);
    }

    function handleAdd()
    {
      if(Name === "" || Rollno === "" || HTML === "" || CSS === "" || JAVASCRIPT ==="" || REACT ===""
      || HTML > 100 || HTML < 0 || CSS > 100 || CSS < 0 || JAVASCRIPT > 100 || JAVASCRIPT < 0 || REACT > 100 || REACT < 0)
      {
      alert("Please Enter the Full and valid information!!");
      }
      else
      {
      const newList = list.concat({Name,Rollno,HTML,CSS,JAVASCRIPT,REACT,id:uuidv4()});
  
      setList(newList);
      setName('');
      setRollNo('');
      setHTML('');
      setCSS('');
      setJAVASCRIPT('');
      setREACT('');
      
      }
      
    }


    function add(){
        let totalPrice = list.reduce(function (accumulator, item) {
            return parseInt(accumulator) + parseInt(item.HTML);
          }, 0);
        console.log(totalPrice)
    }



    return (
        
        <div style={{display:"grid",margin:"0 3rem"}}>
             <Form style={{display:"grid",justifyContent:"center",gridTemplateColumns:"repeat(3,1fr)"}}>

             <FormGroup >
                <Label sm="12" style={{float:"left"}}>Name <span style={{color:"red"}}>*</span></Label>
                <Col sm={12}>
                    <Input type="text" value={Name} onChange={handleName} class="form-control" placeholder="Title" aria-describedby="helpId"/>
                </Col>
            </FormGroup>

            <FormGroup >
                <Label sm="12" style={{float:"left"}}>Rollno <span style={{color:"red"}}>*</span></Label>
                <Col sm={12}>
                    <Input type="text" value={Rollno} onChange={handleRollno} class="form-control" placeholder="Title" aria-describedby="helpId"/>
                </Col>
            </FormGroup>

            <FormGroup >
                <Label sm="12" style={{float:"left"}}>Html <span style={{color:"red"}}>*</span></Label>
                <Col sm={12}>
                    <Input type="text" value={HTML} onChange={handleHTML} class="form-control" placeholder="Title" aria-describedby="helpId"/>
                </Col>
            </FormGroup>

            <FormGroup >
                <Label sm="12" style={{float:"left"}}>CSS <span style={{color:"red"}}>*</span></Label>
                <Col sm={12}>
                    <Input type="text" value={CSS} onChange={handleCSS} class="form-control" placeholder="Title" aria-describedby="helpId"/>
                </Col>
            </FormGroup>

            <FormGroup >
                <Label sm="12" style={{float:"left"}}>JAVASCRIPT <span style={{color:"red"}}>*</span></Label>
                <Col sm={12}>
                    <Input type="text" value={JAVASCRIPT} onChange={handleJAVASCRIPT} class="form-control" placeholder="Title" aria-describedby="helpId"/>
                </Col>
            </FormGroup>

            <FormGroup >
                <Label sm="12" style={{float:"left"}}>REACT <span style={{color:"red"}}>*</span></Label>
                <Col sm={12}>
                    <Input type="text" value={REACT} onChange={handleREACT} class="form-control" placeholder="Title" aria-describedby="helpId"/>
                </Col>
            </FormGroup>

            </Form>


            <Form>
                <FormGroup>
                    <div className="text-center">
                        <Button type="button" className="btn btn-primary" onClick={handleAdd}>
                            Add 
                        </Button>
                    </div>
                </FormGroup>
            </Form>


            <div className="my-5">
                <ul className="nav" style={{display:"inline"}}>
                    <div className="my-5" class="Student-data">
                        <li className="nav-item text-center" > 
                            Name <button onClick={isSortByName}><AiOutlineArrowUp  /></button>
                        </li>
                        <li className="nav-item text-center" > 
                            Roll no <button onClick={isSortByRollno}><AiOutlineArrowUp  /></button>
                        </li>
                        <li className="nav-item text-center" > 
                            HTML <button onClick={isSortByHtml}><AiOutlineArrowUp  /></button>
                        </li>
                        <li className="nav-item text-center" > 
                            CSS <button onClick={isSortByCss}><AiOutlineArrowUp  /></button>
                        </li>
                        <li className="nav-item text-center" > 
                            JAVASCRIPT <button onClick={isSortByJavascript}><AiOutlineArrowUp  /></button>
                        </li>
                        <li className="nav-item text-center" > 
                            REACT <button onClick={isSortByReact}><AiOutlineArrowUp  /></button>
                        </li>  
                        <li className="nav-item text-center" > 
                            Total
                        </li>
                    </div>
                </ul>
            <ul className="nav" style={{display:"inline"}}>
            {list.filter((item) => {
                if(Name === ""){
                    return item
                }
                else if(item.Name.toLowerCase().includes(Name.toLowerCase())){
                    return item
                }
            }).sort((a, b) => {
                if(Sort === "name"){
                    let fa = a.Name.toLowerCase();
                    let fb = b.Name.toLowerCase();
            
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                }
                else if(Sort === "rollno"){
                    let fa =parseInt(a.Rollno);
                    let fb =parseInt(b.Rollno);
            
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                }

                else if(Sort === "html"){
                    let fa = a.HTML
                    let fb = b.HTML
            
                    if (fa > fb) {
                        return -1;
                    }
                    if (fa < fb) {
                        return 1;
                    }
                    return 0;
                }
                else if(Sort === "css"){
                    let fa = a.CSS
                    let fb = b.CSS
            
                    if (fa > fb) {
                        return -1;
                    }
                    if (fa < fb) {
                        return 1;
                    }
                    return 0;
                }
                else if(Sort === "javascript"){
                    let fa = a.JAVASCRIPT
                    let fb = b.JAVASCRIPT
            
                    if (fa > fb) {
                        return -1;
                    }
                    if (fa < fb) {
                        return 1;
                    }
                    return 0;
                }
                else{
                    let fa = a.REACT
                    let fb = b.REACT

                    if (fa > fb) {
                        return -1;
                    }
                    if (fa < fb) {
                        return 1;
                    }
                    return 0;
                }         
                
            }
            )
            .map((item) => (
              <div className="my-5" key={item.id} class="Student-data">
                <li className="nav-item text-center" key={item.id}> {item.Name}</li>
                <li className="nav-item text-center" key={item.id}> {item.Rollno}</li>
                <li className="nav-item text-center" key={item.id}>{item.HTML}</li>
                <li className="nav-item text-center" key={item.id}> {item.CSS}</li>
                <li className="nav-item text-center" key={item.id}> {item.JAVASCRIPT}</li>
                <li className="nav-item text-center" key={item.id}> {item.REACT}</li>
                <li className="nav-item text-center" key={item.id}>{parseInt(item.HTML) + parseInt(item.CSS)+
                parseInt(item.JAVASCRIPT) + parseInt(item.REACT)}</li>
              </div>
            ))
            }
            </ul>
            </div>

        </div>
    )
}

export default Result;
