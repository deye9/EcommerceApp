import React, {useState} from 'react';
import {
  View,
  Text,
  SectionList,
  LayoutAnimation,
  Platform,
  UIManager,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../assets/themes';

const Accordion = props => {
  const [data, setData] = useState(props.data);
  const [expanded, setExpanded] = useState(false);

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const onClick = index => {
    const temp = data.slice();
    temp[index].value = !temp[index].value;
    setData(temp);
  };

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={() => toggleExpand()}>
        <Text style={[styles.title]}>{props.title}</Text>
      </TouchableOpacity>
      <View style={styles.parentHr} />
      {expanded && (
        <SectionList
          sections={data}
        //   numColumns={1}
        //   scrollEnabled={false}
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity
                style={[
                  styles.childRow,
                  styles.button,
                  item.value ? styles.btnActive : styles.btnInActive,
                ]}
                onPress={() => onClick(index)}>
                <Text style={[styles.font, styles.itemInActive]}>
                  {item.key}
                </Text>
                {/* <Icon
                    name={'check-circle'}
                    size={24}
                    color={item.value ? Colors.GREEN : Colors.LIGHTGRAY}
                  /> */}
              </TouchableOpacity>
              <View style={styles.childHr} />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.DARKGRAY,
  },
  itemActive: {
    fontSize: 12,
    color: Colors.GREEN,
  },
  itemInActive: {
    fontSize: 12,
    color: Colors.DARKGRAY,
  },
  btnActive: {
    borderColor: Colors.GREEN,
  },
  btnInActive: {
    borderColor: Colors.DARKGRAY,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: 'center',
    backgroundColor: Colors.CGRAY,
  },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.GRAY,
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: '100%',
  },
  childHr: {
    height: 1,
    backgroundColor: Colors.LIGHTGRAY,
    width: '100%',
  },
  colorActive: {
    borderColor: Colors.GREEN,
  },
  colorInActive: {
    borderColor: Colors.DARKGRAY,
  },
});

export default Accordion;
