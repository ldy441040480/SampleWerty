import React, {
    Component
} from 'react';

import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    SectionList,
} from 'react-native';

export default class SectionListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'A', data: ['Action', 'Absolute', 'Animation', 'Activity', 'Abc',]},
                        {title: 'D', data: ['Devin']},
                        {title: 'D', data: ['Favorite', 'Fast', 'find', 'feed', 'fuck']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
});