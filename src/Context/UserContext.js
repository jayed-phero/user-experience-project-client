import React, { createContext } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {

    const [user , setUser] = useState("")
    const [loading, setLoading] = useState(false)

    
    return (
        <div>
            
        </div>
    );
};

export default UserContext;