let Search = (props) => {
    return (
        <>
            <p>Showing {props.total} movies from the database</p>
            <button type="button" class="btn btn-">New</button>

            <div class="row mt-3">
                <div class="col-4">
                    <div class="input-group input-group-sm mb-3">
                        <input type="text" placeholder="Search" class="form-control" value={props.search}
                        onChange={(e)=>{
                            props.updateSearch(e.currentTarget.value)
                        }}  />         
                    </div>
                </div>
            </div>
        </>

    );
};
export default Search;