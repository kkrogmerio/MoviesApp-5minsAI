import { ActivityIndicator} from 'react-native'
import {FC} from 'react'
import { Colors } from '../constants';


const LoadingScreen:FC = () => {
  return (
    <ActivityIndicator
    size="large"
    color={Colors.SECOND}
    style={{ top: 200 }}/>
  )
}

export default LoadingScreen

