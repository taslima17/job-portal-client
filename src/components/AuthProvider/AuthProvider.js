import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allvalue = useFirebase();
    console.log(allvalue)
    return (
        <AuthContext.Provider value={allvalue}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;