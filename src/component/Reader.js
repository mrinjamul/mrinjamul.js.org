import React, {Component} from 'react';
import Message from './Message';

import './Reader.css';

class Reader extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            message: "",
            id: "",
            visitors: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:8080/viewers/")
            .catch(err=>console.log(err))
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    visitors: res
                });
                console.log(res);
            });
        
}


    render() {
        var visitors = this.state.visitors;
		var myvisitors=visitors.map((m,index) => (<Message key={m.id} name={m.name} email={m.email} message={m.message} index={m.id} />));

        return(
            <div>
                {myvisitors}
            </div>
        );
    }
}

export default Reader;