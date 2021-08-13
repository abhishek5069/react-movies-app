let Filter=(props)=>{
    console.log(props.gendata);
    return (
        <div class="col-3 mt-2">
    <ul class="list-group">
  <li class="list-group-item">All Genre</li>
  {
      props.gendata.map((el)=>{
          return <li key={el._id} class="list-group-item">{el.name}</li>
      })
  }
  
   </ul>
</div>);
}
export default Filter;