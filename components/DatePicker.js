import React, { useState } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import moment from 'moment';

import DateTimePicker from '@react-native-community/datetimepicker';

const CustomDatePicker = (props) => {
  const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);
  const [showText, setShowText] = useState(true);

  const onChange = (e, selectedDate) => {
    setDate(moment(selectedDate));
  };

  const onCancel = () => {
    setShow(false);
  };

  const onDone = () => {
    props.onDateChange(date);
    setDate(date);
    setShowText(false);
    setShow(false);
  };

  let selectDate;

  if (showText) {
    selectDate = (
      <View>
        <Text style={{ paddingLeft: 10, color: 'rgba(0, 0, 0, 0.16)' }}>
          {props.children}
        </Text>
      </View>
    );
  } else if (!showText) {
    selectDate = (
      <View>
        <Text style={{ paddingLeft: 10, color: 'black' }}>
          {date.format('DD-MM-YYYY')}
        </Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback activeOpacity={0} onPress={() => setShow(true)}>
      <View style={{ flexDirection: 'row' }}>
        {selectDate}
        <Modal
          transparent={true}
          animationType={'fade'}
          visible={show}
          supportedOrientations={['portrait']}
          onRequestClose={() => setShow(false)}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={{ flex: 1, alignItems: 'flex-end', flexDirection: 'row' }}
              activeOpacity={1}
              visible={show}
              onPress={() => setShow(false)}
            >
              <TouchableHighlight
                style={{
                  flex: 1,
                }}
                onPress={() => console.log('date picker clicked!')}
              >
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 425,
                    overflow: 'hidden',
                  }}
                >
                  <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <TouchableOpacity
                          onPress={onCancel}
                          style={(styles.btnText, styles.btnCancel)}
                        >
                          <Text style={styles.btnTextCancel}>Cancel</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={onDone}
                          style={(styles.btnText, styles.btnCancel)}
                        >
                          <Text style={styles.btnTextDone}>Done</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <DateTimePicker
                      value={new Date(date)}
                      mode="date"
                      display="inline"
                      minimumDate={
                        new Date(
                          moment().subtract(120, 'years').format('YYYY-MM-DD')
                        )
                      }
                      maximumDate={new Date(moment().format('YYYY-MM-DD'))}
                      onChange={onChange}
                    />
                  </View>
                </View>
              </TouchableHighlight>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

CustomDatePicker.defaultProps = {
  onDateChange: () => {},
};

const styles = StyleSheet.create({
  btnTextCancel: {
    marginLeft: 2,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextDone: {
    marginLeft: 252,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
});

export default CustomDatePicker;
