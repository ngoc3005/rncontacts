import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Platform,
} from 'react-native';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const CustomDatePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    console.log(x1[2] + '/' + x1[1] + '/' + x1[0]);
    setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };

  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          showDatePicker();
        }}>
        <Text>{selectedDate}</Text>
      </TouchableHighlight>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

CustomDatePicker.defaultProps = {
  textStyle: {},
};

export default CustomDatePicker;
