



import Button from '@mui/material/Button';

import "./app.css"

export default function ButtonUsage() {

  return( 
        
    <div> 
    <div class="form-check"> 
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> 
      <label class="form-check-label" for="flexCheckDefault"> Default checkbox </label> 
    </div> 

    <div class="form-check form-switch"> 
      <input class="form-check-input" type="checkbox"id="flexSwitchCheckDefault"/> 
      <label class="form-check-label" for="flexSwitchCheckDefault"> Default switch checkbox input </label> 
    </div> 
  
        <table class="table caption-top">
            <caption>Front-end Courses</caption>
            <thead class="table-dark">
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Course</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>

            <tbody>
            <tr>

                    <th scope="row">1</th>
                    <td >
                        <p  className='p-1 bg-primary text-info'>

                            some text
                            </p>
                          </td>
                    <td>
                        <span className='p-1  text-success '>$</span> 29
                    
                    </td></tr>
            <tr><th scope="row">2</th><td>CSS- Basics</td><td>$25</td></tr>
            <tr><th scope="row">3</th><td>JS- Basics</td>  <td>$35</td></tr>
            <tr><th scope="row">4</th>  <td>JS- Basics</td>  <td>$35</td></tr>

            </tbody>

    
        </table>


        <div class="form-group">
            <label>Example Range input</label><br/>             
            <input type="range"class="form-control-range"/>
        </div>
            
        
    <label class="input-group-text-1 bg-primary "> Datalist </label> 
      
    <input class="form-control " list="GFGOptions"  placeholder='select Option'/>
    <datalist id="GFGOptions"> 
          <option value="apple"/> 
          <option value="orange"/> 
          <option value="onion"/> 
          <option value="potato"/> 
    </datalist> 

    
    <div className='container text-center'>
            <strong > list_below</strong>
        <select className='form-select' aria-label='GFG Select'>
            <option value="GFG1">HTML</option>
            <option value="GFG2">python</option>
            <option value="GFG3">CSS</option>
        </select>
        <br/><br/>

    <select class="form-select" aria-label="GFG Disabled Select" disabled> 
            <option>Select an Option</option> 
            <option value="GFG1">HTML</option> 
            <option value="GFG2">CSS</option> 
            <option value="GFG3">JavaScript</option> 
            <option value="GFG4" selected>Bootstrap</option> 
        </select> 
    </div>

    <input type='range' class='fomr-range w-50' min='0' max='10' step='5' ></input>
{/*   
     <div className='input-group mb-5'>
        <label class="input-group-text" for="file"> Resume </label> 
            
        <input type='file'  class='form-control' id='file' placeholder='type_here'  />
        <label className="text2" for='file'>Upload</label>
    </div> */}


    <div className='container text-center'>
    <label className='text-danger ' for='selectLabel ' ><strong>choose your language</strong></label>
                <div className='container text-center' >
                    <select className='form-select pt-3' id='floatingSelectMenu'>
                        <option selected>click here to choose</option>
                        <option value='java'>java</option>
                        <option value='C++'>C++</option>
                        <option value='python' >python</option>
                        <option value='golang'>golang</option>
                    </select>
                </div>                
    </div>

    <br/>










      </div>
    )

}



{/* // function Button({children}) { */}
{/* 
//     return (
  
//         <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
  
//           {children}
  
//         </button>
  
//     );
  
//   }
  
//   export default Button; */}



    {/* <div class="d-flex gap-2 justify-content-center py-5">
    <button class="btn btn-primary rounded-pill px-3" type="button">Primary</button>
    <button class="btn btn-secondary rounded-pill px-3" type="button">Secondary</button>
    <button class="btn btn-success rounded-pill px-3" type="button">Success</button>
    <button class="btn btn-danger rounded-pill px-3" type="button">Danger</button>
    <button class="btn btn-warning rounded-pill px-3" type="button">Warning</button>
    <button class="btn btn-info rounded-pill px-3" type="button">Info</button>
    <button class="btn btn-light rounded-pill px-3" type="button">Light</button>
    <button class="btn btn-dark rounded-pill px-3" type="button">Dark</button>
    <button class="btn btn-link rounded-pill px-3" type="button">Link</button> </div> */}
