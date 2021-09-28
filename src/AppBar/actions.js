import {  setChat} from '../Chat/ChatSlice';
import {  db} from '../App';

const getPayloadFromSnapshot = (snapshot) => {
    // const messages = [];

    // const chats = [];

    // snapshot.forEach((mes) => {
    //     messages.push(mes.val());

    // });

    return {
        [snapshot.key]: snapshot.val()
    };
};


export const addChatToThunk = (message) => async (dispatch, getState) => {
    const {
        chat
    } = getState();
    const chatId = message.chatId;
    const messages = chat.messages[chatId] || [];
    
    // dispatch(
    //     addMessageWithFirebase(chatId, {
    //         ...message,
    //         id: `${chatId}-${messages?.length || 0}-${Date.now()}`,
    //     })
    // );
};

const generateChatId = (uidA, uidB) => {
    if (uidA > uidB) {
        return `${uidA}-${uidB}`
    };
    return `${uidB}-${uidA}`
};

export const addChatToFirebase = async (myUid, targetUid) => {
    const profile = db.ref('profiles').child(targetUid).get();

    if(profile){

    await db
    .ref("chats")
    .child(myUid)
    .child(targetUid)
    .set({chatId: generateChatId(myUid, targetUid)});
};
}

export const initChatsTracking = (myUid) => (dispatch) => {
    db.ref("chats")
    .child(myUid)
    .on("child_changed", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
     
        dispatch(setChat(payload));

    });

    db.ref("chats")
    .child(myUid)
    .on("child_added", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
       
        dispatch(setChat(payload));
    });
};