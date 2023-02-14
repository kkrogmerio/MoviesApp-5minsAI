import {MovieItemType} from '../types';
import {FC} from 'react';
type Props = MovieItemType;
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import {Colors} from '../constants';
import StarRating from 'react-native-star-rating-widget';
import {RootStackParams} from '../config/AppNavigator';
const MovieItem: FC<Props> = props => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const navigateToDetailsScreen = () => {
    navigation.navigate('MovieDetails', {id: props.id.toString()});
  };
  return (
    <TouchableOpacity onPress={navigateToDetailsScreen} style={styles.movieItemStyle}>
      <View >
        <View style={{flex: 1, flexDirection: 'row'}}>
          <FastImage
            style={styles.poster}
            resizeMode="cover"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${props.poster_path}`,
            }}
          />
          <View style={styles.movieItemDetailsLayout}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.detailRow}>
              <Text style={styles.description}>{props.vote_average / 2}/5</Text>
              <StarRating
                enableSwiping={false}
                onChange={() => {}}
                maxStars={5}
                starSize={20}
                rating={props.vote_average / 2}
                starStyle={styles.movieItemStyle}
              />
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.description}>Vote count:</Text>
              <Text style={[styles.description,{color:'gray'}]}>{props.vote_count}</Text>
      
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default MovieItem;
const styles = StyleSheet.create({
  movieItemDetailsLayout:{flex: 1, marginLeft: 10,marginVertical:10},
  starStyle: {color: 'yellow', marginRight: 10},
  movieItemStyle: {marginVertical: 17,backgroundColor:Colors.ACCENT,borderRadius:5,overflow:'hidden'},
  poster: {width: 90, height: '100%'},
  title: {fontSize: 20, color: Colors.SECOND},
  description: {fontSize: 15, color: Colors.SECOND,marginRight:10,marginTop:5},
  detailRow:{flex: 1, flexDirection: 'row', alignItems: 'center'}
});
