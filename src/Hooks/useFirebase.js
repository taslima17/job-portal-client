import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import initializeAuthentication from "../firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const Signup = (email, password) => {
        console.log('hello')
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setUser(user);
                setError(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                setError(errorMessage);
                setUser({});

            });
    }
    const Signin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                console.log(user)
                setError(error)
                alert('login successful')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message)
                setError(errorMessage)
                setUser(user)
            });
    }
    useEffect(() => {
        const unsubscribed =
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                } else {
                    setUser({});
                }
            })
        return unsubscribed;
    }, [])
    const logout = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {

        });
    }
    return { user, Signin, Signup, logout };
}
export default useFirebase;