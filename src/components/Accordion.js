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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Accordion = ({data, title}) => {
  const [expanded, setExpanded] = useState(false);
  const [accordionState, setAccordionState] = useState(data);
  const [chevronState, setChevronState] = useState(['fas', 'chevron-down']);

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
    !expanded === true
      ? setChevronState(['fas', 'chevron-up'])
      : setChevronState(['fas', 'chevron-down']);
  };

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
        <Text>{title}</Text>
        <FontAwesomeIcon
          size={15}
          color={'#915159'}
          icon={chevronState}
          style={styles.alignRight}
        />
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
                <Text style={styles.itemInActive}>
                  {item.icon === null || item.icon === undefined ? (
                    ''
                  ) : (
                    <FontAwesomeIcon
                      icon={item.icon}
                      color={'blue'}
                      size={15}
                    />
                  )}
                  {' ' + item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Accordion;
