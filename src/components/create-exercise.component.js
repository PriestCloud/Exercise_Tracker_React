import React, { Component } from 'react';

export default class CreateExercise extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.setState = {
            username:"",
            description:'',
            duration:0,
            date: new Date(),
            users: []
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
                <h3> Create New Exercise </h3>
                    









            </div> 
        )
    }
} 