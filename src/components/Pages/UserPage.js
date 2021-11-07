import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

export const UserPage = (props) => {
    const {userId} = useParams();

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${userId}`)
        .then((res) => {
            console.log(res);
            if (res.status === 404) {
                throw new Error(' PERSON NOT FOUND ')
            }
            return res.json()
        })
        .then((res) => { console.log(res); })
        .catch(() => {})
    }, []);
   

    return (<h1>UserPage {userId}</h1>)
};