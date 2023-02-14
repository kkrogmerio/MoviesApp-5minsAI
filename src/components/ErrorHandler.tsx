import { StyleSheet, Text, View } from 'react-native'
import {FC} from 'react'
import { Colors } from '../constants'
type Props = {
    message:string|null
}

const ErrorHandler:FC<Props> = ({message}) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  )
}

export default ErrorHandler

const styles = StyleSheet.create({
    errorContainer:{
        flex:1,
        
        alignItems:'center',
        paddingTop:'40%'
        
    },
    errorText:{
        color:Colors.SECOND,
        fontSize:16
    }
})