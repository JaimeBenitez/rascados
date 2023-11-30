import React, { useState } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from './RegisterScreen-style'
import DropDownPicker from 'react-native-dropdown-picker';
import { format } from "date-fns";
import DatePicker from 'react-native-date-picker'

import RegisterInput from '../../components/RegisterInput/RegisterInput'
import  Icon  from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button/Button';

const RegisterScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('NIF');
  const [items, setItems] = useState([
    {label: 'NIF', value: 'NIF'},
    {label: 'NIE', value: 'NIE'}
  ]);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  let formattedDate = format(date, 'dd/MM/yyyy')
  const onChange = (selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const showModal = () => {
    setShow(true);
  };


  return (
    <View style={styles.registerContainer}>
      <RegisterInput placeholder='Escriba aquí' marginTop={58} label="NOMBRE"/>
      <RegisterInput placeholder='Escriba aquí' marginTop={30} label="APELLIDOS"/>
      <View style={{ flexDirection: 'row' , alignItems: 'flex-start', justifyContent: 'flex-start', width: 358}}>
      <View style={{ justifyContent: 'flex-start', marginTop: 30, marginRight: 5}}>
        <Text style={styles.label}>IDENTIFICACIÓN</Text>
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
      />
      </View>
      <RegisterInput placeholder='Escriba aquí' marginTop={30} width={241} label="NÚMERO" />
      </View>
      <View  style={{ justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 30, marginRight: 5, width: 358}}>
        <Text style={styles.label}>FECHA DE NACIMIENTO</Text>
        <TouchableWithoutFeedback  onPress={showModal} style={styles.dateField}> 
            <View style={{...styles.dropdown, width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
             <Text style={styles.dateText}>{formattedDate}</Text>
             <Icon name='calendar-outline' size={38} color='rgb(135,126,126)'/>
            </View>
        </TouchableWithoutFeedback>
      </View>
      
      <DatePicker
          modal
          open={show}
          date={date}
          onConfirm={onChange}
          onCancel = {() =>
            setShow(false)
          }
        />
        <Button onPressEffect={()=>{}} text="Enviar" style={styles.button}/>
    </View>
  )
}

export default RegisterScreen
