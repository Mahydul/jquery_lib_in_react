import React , {Component} from 'react';

class Ninja extends Component {
    async componentDidMount(){
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        }
    render(){
        //console.log(this.props);
            const {params} = this.props;
             const ninja_list = params.map(value => {
                return(
                <div className="lsl">
                    <div>Name: {value.name}</div>
                    <div>Age: {value.age}</div>
                    <div>Eye: {value.eye}</div>
                </div>
                )
            }
            )
        return (
            <div className="ninja-list">
                {ninja_list}
            
            </div>
        )
    }
}

export default Ninja;