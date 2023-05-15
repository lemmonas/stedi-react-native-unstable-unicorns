import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    const Login(props){
        const [currentUser, setCurrentUser] = useState(null);
        const handleUserClick = (user) => {
            setCurrentUser(user)
        }
    }

    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            {props.users.map((user) => (
                <Button
                key={user.id}
                title={'Hello {$user.name}'}
                />
            ))}
            {currentUser && (
                <Text> Hello {currentUser.name} </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})
const users = [
    {id: 1, name: 'Micah'},
];