import {
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';

const GoalItem = ({ item, index, onDelete }) => {
    return (

        <View
            style={styles.goalItem}
        >
            <Pressable
                android_ripple={{
                    color: '#210644',
                }}
                onPress={() => onDelete(index)}
            >
                <Text style={styles.goalText}>
                    {item}
                </Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6,
        borderColor: '#cccccc',
        borderWidth: 1,
    },
    goalText: {
        color: 'white',
        fontSize: 16,
        padding: 8,
    }
});