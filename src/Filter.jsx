import React from "react";

let Filter=(props)=> {
   
    return (<>
    <div class="col-3 mt-2">
    <ul class="list-group">
        
    <li onClick={
        ()=>{ props.handleFilter("All Genre");} }
        class={ `list-group-item ${
            props.selectedFilter=="All Genre"?"active":""}`
     }>All Genre </li>
    
    {
    props.gendata.map((el)=>{
      return(
          <li key={el._id} onClick = {()=>{
              props.handleFilter(el.name);
          }} class={`list-group-item ${props.selectedFilter==el.name?"active":""}`}>{el.name}</li>
      );
    })

    }
    
    </ul>
    </div>
    </>);

   
}
export default Filter;