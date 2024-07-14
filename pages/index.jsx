import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";

export default function Home(){
    const [authUsername, setAuthUsername] = useState('')
    const [isStuff, setIsStuff] = useState(false)

    const isAuth = () =>{
        axios
            .get('http://127.0.0.1:8000/api/mydata/')
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
            <Body mode='Home' />
        </>
    )
}