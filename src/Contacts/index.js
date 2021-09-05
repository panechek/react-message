import {useSelector, } from 'react-redux';
import Button from '@material-ui/core/Button';


const Contacts = () => {
    const {messagesArray} = useSelector(state => state.chat)
    
    

    return (<div> 
        <Button variant="contained" color="secondary" > Add +1 </Button>
        <div>Last message Sent: {messagesArray.map((o, i) => <div key={i}>{o.trimmedMessage}</div> )}</div>
        </div>
    )
}

export default Contacts