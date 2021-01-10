import React from 'react';  
import {Button, Text} from 'react-native';
import Background from '../../components/Background';


function ContinueToSignUp(navigation){
    navigation.navigate('SignUp')
}

function Welcome(props){
    return <>
    <Background>
    
    <Text>Welcome</Text>
    <Button title="Continue" onPress={()=>ContinueToSignUp(props.navigation)}></Button>
    </Background>
    </>
}


export default Welcome;