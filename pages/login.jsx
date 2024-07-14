import { Header } from "../components/Header/Header";
import { Body } from "../components/Body/Body";

export default function Login(){
    const [authUsername, setAuthUsername] = useState('')
    const [isStuff, setIsStuff] = useState(false)

    const isAuth = () =>{
        let accessToken = localStorage.getItem('access')
        if (accessToken){
            axios
                .get('http://127.0.0.1:8000/api/mydata/', {headers: {Authorization: `ITGlossary ${accessToken}`}})
                .then((response) => {
                    setAuthUsername(response.data.username)
                    setIsStuff(response.data.is_stuff)
                })
                .catch((error) => {
                    let refreshToken = localStorage.getItem('refresh')
                    axios
                        .post('http://127.0.0.1:8000/api/token/refresh/', {refresh: refreshToken})
                        .then((response) => {
                            localStorage.setItem('access', response.data.access)
                            let accessToken = localStorage.getItem('access')
                            axios
                                .get('http://127.0.0.1:8000/api/mydata/', {headers: {Authorization: `ITGlossary ${accessToken}`}})
                                .then((response) => {
                                    setAuthUsername(response.data.username)
                                    setIsStuff(response.data.is_stuff)
                                })
                        })
                })
        }
    }

    isAuth();
    return (
        <>
            <Header authUsername={authUsername} isStuff={isStuff}/>
            <Body mode='Login' authUsername={authUsername} isStuff={isStuff}/>
        </>
    )
}