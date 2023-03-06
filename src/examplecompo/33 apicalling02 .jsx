const GithubUsers = ({users}) => {
    return (
        <div>
            <h2 className="text-center text-danger bg-#EF5350 bg-opacity-75">API Calling</h2>
            <div className="container mt-5 " >
                <div className="row text-center bg-light">
                    
                {

                        users.map((anycurElem) => {
                        
                            const { avatar_url, id, login, type } = anycurElem;
                        return (
                              <div className="col-10 col-md-4 mt-5 bg-success p-3" key={id}>
                      <div className="card p-2">
                                <div className="d-flex align-items-center ">
                                        <div className="image"> <img src={ avatar_url } className="rounded" width="155" /> </div>
                                    <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{login}  </h4>
                                            <span className="text-left">{type }</span>
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                        </div>
                                      
                                    </div>
                             </div>
                          </div>
                    </div>
                        )
                })        

                }
                    
                </div>
            </div>
        </div>
    )
}

export default GithubUsers
