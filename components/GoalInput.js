import React from 'react';
import {
    View,
    TextInput,
    Button,
    Modal,
    StyleSheet,
    Image,
} from 'react-native';

const GoalInput = ({ goalInputHandler, enteredGoalText, addGoalHandler, openModal, onClose }) => {
    return (
        <Modal
            visible={openModal}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/goal.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Course Goal"
                        style={styles.input}
                        onChangeText={goalInputHandler}
                        value={enteredGoalText}
                    />
                    <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                            <Button
                                title="Close"
                                onPress={onClose}
                                color="#f31282"
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Add Goal"
                                onPress={addGoalHandler}
                                color="#5e0acc"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b',
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '80%',
        resizeMode: 'cover',
        opacity: 0.4,
    },
    inputContainer: {
        width: '80%',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        zIndex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    closeButton: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff6347',
    },
    input: {
        width: '100%',
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderWidth: 1,
        padding: 10,
        borderRadius: 6,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
    },
});

export default GoalInput;