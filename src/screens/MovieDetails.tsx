import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {FC} from 'react';
import {RootStackParams} from '../config/AppNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTypedSelector, MovieDetailsType} from '../types';
type Props = NativeStackScreenProps<RootStackParams, 'MovieDetails'>;
import React from 'react';
import FastImage from 'react-native-fast-image';
import {Colors} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import StarRating from 'react-native-star-rating-widget';
const MovieDetails: FC<Props> = ({
  route: {
    params: {id},
  },
}) => {
  const {
    title,
    adult,
    overview,
    backdrop_path,
    release_date,
    vote_average,
    original_language,
  }: MovieDetailsType = useTypedSelector(state => state.movies)
    .moviesData.map(ie => {
      return {
        id: ie.id,
        title: ie.title,
        adult: ie.adult,
        overview: ie.overview,
        backdrop_path: ie.backdrop_path,
        release_date: ie.release_date,
        popularity: ie.popularity,
        vote_average: ie.vote_average,
        original_language: ie.original_language,
      };
    })
    .filter(ie => ie.id.toString() === id)[0];
  return (
    <SafeAreaView style={styles.detailsContainer}>
      <FastImage
        style={styles.poster}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
        }}
      />
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <View style={styles.inlineData}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>

          <StarRating
            enableSwiping={false}
            onChange={() => {}}
            maxStars={5}
            rating={vote_average / 2}
            starStyle={styles.star as StyleProp<ViewStyle>}
          />
        </View>
        <View
          style={{
            padding: 10,
          }}>
          <Text style={styles.overview}>
            {Platform.OS=='android'?'\t\t\t':'\t'}
            {overview}
          </Text>
        </View>
        <View style={styles.tableLayout}>
          <View style={styles.rowLayout}>
            <Text style={styles.columnType}>Age</Text>
            <Text style={styles.columnValue}>
              {adult == false ? '12+' : '18+'}
            </Text>
          </View>
          <View style={styles.rowLayout}>
            <Text style={styles.columnType}>Language</Text>
            <Text style={styles.columnValue}>
              {original_language.toLocaleUpperCase()}
            </Text>
          </View>

          <View style={styles.rowLayout}>
            <Text style={styles.columnType}>Release</Text>
            <Text style={styles.columnValue}>{release_date}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default MovieDetails;
const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.PRIMARY,
  },
  poster: {
    height: 200,
  },
  inlineData: {
    top: 10,

    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  star: {
    color: 'yellow',
  },
  title: {
    color: Colors.SECOND,
    textAlign: 'center',
    fontSize: 20,
  },
  columnType: {
    color: Colors.SECOND,

    fontSize: 18,
  },
  columnValue: {
    color: 'gray',

    fontSize: 17,
  },
  rowLayout: {flexDirection: 'row', justifyContent: 'space-between'},
  tableLayout: {
    width: '40%',
    height: 100,
    left: 15,
    marginTop: 50,
    justifyContent: 'space-around',
  },
  overview: {
    color: Colors.SECOND,
    textAlign: 'auto',
    fontSize: 17,
  },
});
