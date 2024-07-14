import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";
import axios from "axios";

export default function Terms(){
    const [authUsername, setAuthUsername] = useState('')
    const [isStuff, setIsStuff] = useState(false)

    const isAuth = () =>{
        accessToken = localStorage.getItem('access')
        axios
            .get('http://127.0.0.1:8000/api/mydata/', {headers: {Authorization: `ITGlossary ${accessToken}`}})
            .then((response) => {
                setAuthUsername(response.data.username)
                setIsStuff(response.data.is_stuff)
            })
            .catch((error) => {
                alert('Что-то пошло не так')
            })
    }

    return (
        <>
            <Header authUsername={authUsername} isStuff={isStuff}/>
            <Body mode='Terms' />
        </>
    )
}