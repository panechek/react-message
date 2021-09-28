import {
    useSelector, useDispatch
} from "react-redux";
import { useEffect } from "react";
import {
    Route,
    Redirect
} from 'react-router-dom';
import AppBar from "../AppBar";
import { initMessageTracking } from "../Chat/actions";
import {initChatsTracking} from "../AppBar/actions"
import { setMyUid, changeIsAuth } from "../Chat/ChatSlice";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";


   



const CustomRoute = ({
    secured,
    children,
    withAppBar = true,
    ...rest
}) => {
    const {
        isAuthenticated, myUid,
    } = useSelector((state) => state.chat);

    const [user, loading, error] = useAuthState(firebase.auth())
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initMessageTracking());
       
      }, [dispatch]);

    useEffect(()=>{
        if(myUid){
        dispatch(initChatsTracking(myUid));
    }},[myUid, dispatch])
    
      if(user && !myUid){
          dispatch(setMyUid(user.uid));
          dispatch(changeIsAuth(true));

          return ( <Route {...rest}>
            {withAppBar && <AppBar />}
            {children}
            </Route>
            )
      }

    if ((secured && isAuthenticated) || !secured) {
        return <Route {...rest}>
            {withAppBar && <AppBar />}
            {children}
            </Route>
            ;
    }

    return <Redirect to = {
        {
            pathname: '/login'
        }
    }
    />;
};

export default CustomRoute;