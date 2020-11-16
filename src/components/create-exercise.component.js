import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.setState = {
            username:"Priest",
            description:'',
            duration:0,
            date: new Date(),
            users: ["Ade", "Scottt"]
        }
    }

        componentDidMount(){
            this.setState({
                users:['test user'],
                username:"test User"
            })
        }


        onChangeUsername(e){
            this.setState({
                username:e.target.value
            });
        }


        onChangeDescription(e){
            this.setState({
                description:e.target.value
            });
        }


        onChangeDuration(e){
            this.setState({
                duration:e.target.value
            });
        }


        onChangeDate(date){
            this.setState({
                date:date
            });
        }

        onSubmit(e){
            e.preventDefault();

            const exercise = {
                username:this.setState.username,
                description:this.setState.description,
                duration:this.setState.duration,
                date:this.setState.date
            }
            console.log(exercise);

            window.location("/");
        }



    render() {
        return (
            <div>
               { (this.state.username == "")?
                <h3> Create New Exercise </h3>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label> Username: </label>
                        <select ref = "userInput"
                            required
                            className = "form-control"
                            value = {this.state.username}
                            onChange = {this.state.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                    return <option>
                                        key = {user}
                                        value = {user} > {user} 
                                    </option>;
                                })

                            }
                        
                        </select>
                    </div>
                    <div className = "form-group"> 
                        <label> Description: </label>
                        <input type = "text"
                           required
                           className = "form-control"
                           value = {this.state.description}
                            onChange = {this.state.onChangeDescription}/>
                    </div>

                     <div className = "form-group"> 
                        <label> Duration (in minutes): </label>
                        <input type = "text"
                           className = "form-control"
                           value = {this.state.duration}
                           onChange = {this.state.onChangeDuration}/>
                    </div>

                     <div className = "form-group"> 
                        <label> Date: </label>
                        <div>
                            <DatePicker 
                            selected = {this.state.date}
                            onChange = {this.onChangeDate} /> 
                        </div>
                    </div>
                    

                </form>:
                <div>dfj </div>
                }
            </div> 
        )
    }
} 