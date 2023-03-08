import axios from "axios";
import { Link } from "react-router-dom";
import { Component } from "react";
class Display extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    
    componentDidMount() {
        axios.get("http://localhost:8080/get")
          .then(response => {
            this.setState({data:response.data});
        })
    }   
    handleDelete(seatNo){
              axios.delete("http://localhost:8080/delete/"+(seatNo))
              var data=this.state.data.filter(data => data.seatNo !== seatNo);
            this.setState({data});
        }
        
            render() {
                return (
                    <div>
                         
                         <br></br>
                         <div className = "card p-5 row cardshadow3">
                                <table className = "table table-bordered">
                                        <tr>
                                            <th className='text-center'>MovieName</th>
                                            <th className='text-center'>seatNo</th>
                                            <th className='text-center'>phoneNumber</th>
                                            <th className='text-center'>emailId</th>
                                            <th className='text-center'>date</th>
                                        </tr>
                                
                                        {
                                            this.state.data.map((e) => 
                                                <tr>
                                                    <td>{e.movieName}</td>
                                                     <td >{e.seatNo} </td>
                                                     <td> {e.phoneNumber} </td>   
                                                     <td> {e.emailId}</td>
                                                     <td> {e.date}</td>
                                                     <button onClick={()=>{this.handleDelete(e.seatNo)}}>delete</button>
                                                     <Link to={"edit/"+e.seatNo}><button>edit</button></Link>
                                                </tr>
                                            )
                                        }
                                   
                                </table>
        
                         </div>
        
                    </div>
                )
            }    
}
export default Display