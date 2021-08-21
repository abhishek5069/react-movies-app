let Pagination=(props)=>{
  console.log(props.totalpage);

  let arr=[];
  for(let i=1;i<=props.totalpage;i++){
    arr.push(i);
  }
  
 return(
     <>
     <ul class="pagination mt-3">
       {arr.map((el)=>{
         return(
          <li onClick={(e)=>{props.selectPage(el)}} class={`page-item ${props.currPage===el?"active":""}`}><a class="page-link" href="#">{el}</a></li>
         );
       })}
     </ul>
     </>
 );
};
export default Pagination; 