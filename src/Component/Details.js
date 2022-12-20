import React,{useState} from "react";
const Details=()=>{
    const [currentUser, setCurrentUser]= useState([])
    const [usersData,setUsersData] = useState([
        {
            name: "",
            email: "",
            contact: "",
            url:"",
        }
    ])
    function Changehandle(e){
        setUsersData({...usersData,[e.target.name]:e.target.value})
    }
    let Name=usersData.name;
    let Email=usersData.email;
    let Contact=usersData.contact;
    let URL = usersData.url;
    function HandleNew(e){
        e.preventDefault();
        setCurrentUser([...currentUser,{Name,Email,Contact,URL}])
        setUsersData({name:"",email:"",contact:"",url:""})
    }
    const HandleDelete=(ind)=>{
        const setCurrentUser1=[...currentUser];
        setCurrentUser1.splice(ind,1)
        setCurrentUser(setCurrentUser1)
    }
    return(
        <div>
        <div className="Wrapper">
            <h1>Card Creator</h1>
            </div>
            <div className="box">
            <div className="content">
            <form>
                <div className="field1">
                <label>Please Enter your name</label><br/></div>

                <div className="box1">
                <input type="text" name="name" value={Name} onChange={Changehandle}></input><br/></div>

                <div className="field1">
                <label>Please Enter your email</label><br/></div>

                <div className="box2">
                <input type="email" name="email" value={Email} onChange={Changehandle}></input><br/></div>

                <div className="field1">
                <label>Please Enter your Contact Number</label><br/></div>

            <div className="box2">  
                <input type="tel" name="contact" value={Contact} onChange={Changehandle}></input><br/></div>

               <div className="field1">
                <label>Paste your profile picture URL</label><br/></div>

                <div className="box3">  
                <input type="url" name="url" value={URL} onChange={Changehandle}></input><br/></div> 

                <button onClick={HandleNew}>Create Card</button>
            </form></div>
            </div>
            {
                currentUser.map((info,ind)=>{
                    return(
                        <div className="Card">
                            <div className="Header">
                                <div key={ind}>
                                <center>
                                    <div className="Img">
                                        <img src={info.URL} alt="new"/>
                                    </div></center>
                                    <p>Name:{info.Name}</p>
                                    <p>Email:{info.Email}</p>
                                    <p>Contact:{info.Contact}</p>
                                </div>
                                <button onClick={HandleDelete}>Delete</button>
                                </div>
                            </div>
                    )
                })
            }
        </div>
    )
}
export default Details