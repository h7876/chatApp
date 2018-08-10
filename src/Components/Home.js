import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,


} from 'react-native';

import {
    Actions
} from 'react-native-router-flux';

class Home extends React.Component {
    
    state={
        username: ''
    }

    render(){
        return(
            <View>
                <Text style={styles.title}>
                    Enter your name :
                    </Text>
                    <TextInput
                    style={styles.nameInput}
                    placeholder="Name"
                    paddingLeft={10}
                    onChangeText={(text)=> {
                        this.setState({username: text})
                    }}
                    value={this.state.username}
                    />
                    <TouchableOpacity
                    onPress={()=> {
                        Actions.chat({
                            username: this.state.username
                        })
                          
                    }}
                    >
                        <Text style={styles.nextButton}>
                            Next
                            </Text>
                        </TouchableOpacity>
                </View>
        )
    }
}

var styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
    },
    nextButton: {
        marginLeft: 20,
        fontSize: 20
    }
})

export default Home;