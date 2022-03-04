import axios from 'axios';
import {useState} from 'react'
import {useDispatch} from 'react-redux'

function Buttons() {
    const dispatch = useDispatch()
    const [category, setCategory] = useState(2);
    const handleClick = () => {
        console.log('Fav clicked');
        // dispatch({ type: })
    }
    console.log(category);
    return(
        <>
            <button onClick={handleClick}>Favorite</button>
            <button onClick={() => setCategory(3)}>Cute</button>
            <button onClick={() => setCategory(1)}>Funky!</button>
            <button onClick={() => setCategory(2)}>Cool</button>
            
        </>
    )
}

export default Buttons;