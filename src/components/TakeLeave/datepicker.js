import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Platform,
} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
// import { DateTimePicker } from '@mui/x-date-pickers';

const CustomDatePicker = props => {
  const {textStyle} = props;
  const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    setDate(moment(selectedDate));
  };

  return (
    <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
      <View>
        <Text style={textStyle}>{moment().format('YYYY-MM-DD')}</Text>
        <Modal
          transparent={true}
          animationType="slide"
          visible={show}
          supportedOrientations={['portrait']}
          onRequestClose={() => setShow(false)}>
          {/* <View style={{flex:1}}>
                    <TouchableHighlight
                        style={{
                            flex:1,
                            alignItems:'flex-end',
                            flexDirection:'row',
                        }}
                        activeOpacity={1}
                        visible={show}
                        onPress={()=>setShow(false)}>
                        <TouchableHighlight
                            underlayColor={'#FFFFFF'}
                            style={{
                                flex:1,
                                borderTopColor: '#E9E9E9',
                                borderTopWidth: 1,
                            }}
                            onPress={()=>console.log('datepicker clicked')}>
                                <View style={{
                                    backgroundColor:'#FFFFFF',
                                    height: 256,
                                    // overflow:'hidden',
                                }}>
                                    <View style={{marginTop:20}}>
                                        <DateTimePicker
                                            timeZoneOffsetInMinutes={0}
                                            value={new Date(date)}
                                            mode="date"
                                            minimumDate={new Date(moment().subtract(120,'years').format('YYYY-MM-DD'))}
                                            // maximumDate={new Date(moment().format('YYYY-MM-DD'))}
                                            onChange={onChange}
                                        />
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </TouchableHighlight>
                    </View> */}
        </Modal>
      </View>
    </TouchableHighlight>
  );
};

CustomDatePicker.defaultProps = {
  textStyle: {},
};

export default CustomDatePicker;

// import DatePicker from '@react-native-datepicker';

// function CustomDatePicker() {
//   const [chosenDate, setChosenDate] = React.useState(new Date());

//   return (
//     <DatePicker
//       date={chosenDate}
//       mode="datetime"
//       placeholder="select date and time"
//       format="YYYY-MM-DD HH:mm"
//       minDate="2016-05-01"
//       maxDate="2022-06-01"
//       confirmBtnText="Confirm"
//       cancelBtnText="Cancel"
//       customStyles={{
//         dateIcon: {
//           position: 'absolute',
//           left: 0,
//           top: 4,
//           marginLeft: 0,
//         },
//         dateInput: {
//           marginLeft: 36,
//         },
//       }}
//       onDateChange={(newDate) => {
//         setChosenDate(newDate);
//       }}
//     />
//   );
// };
// export default CustomDatePicker;
