import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../assets/AppStyles';

const Accordion = ({data, title}) => {
  const [expanded, setExpanded] = useState(false);
  const [accordionState, setAccordionState] = useState(data);

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const onClick = index => {
    const temp = data.slice();
    temp[index].value = !temp[index].value;
    setAccordionState(temp);
  };

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
        <Text>{title}</Text>
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && (
        <FlatList
          numColumns={1}
          data={accordionState}
          scrollEnabled={false}
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity
                style={[
                  styles.childRow,
                  styles.button,
                  item.value ? styles.btnActive : styles.btnInActive,
                ]}
                onPress={() => onClick(index)}>
                <Text style={styles.itemInActive}>{item.title}</Text>
                {item.icon}
                {/* <Icon
                    name={'check-circle'}
                    size={24}
                    color={item.value ? Colors.GREEN : Colors.LIGHTGRAY}
                  /> */}
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Accordion;
