import {StyleSheet, View, FlatList,Text} from 'react-native';
import {useActions} from '../hooks';
import {FC, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  MovieItem,
  SearchBarComponent,
  ErrorHandler,
  LoadingScreen,
} from '../components';
import {useTypedSelector} from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../constants';
const Movies: FC = () => {
  const [searchText, setSearch] = useState('');
  const {searchMovies} = useActions();

  const {moviesData, error, isLoading} = useTypedSelector(
    state => state.movies,
  );
  const changeTextHandler: (text: string) => void = text => {
    setSearch(text);
    searchMovies(text);
  };
  useEffect(() => {
    searchMovies('');
  }, []);
  if (isLoading)
    return (
      <SafeAreaView style={styles.listMovies}>
        <SearchBarComponent
          searchText={searchText}
          changeTextHandler={changeTextHandler}
        />
        <LoadingScreen />
      </SafeAreaView>
    );
  if (!isLoading && error)
    return (
      <SafeAreaView style={styles.listMovies}>
        <SearchBarComponent
          searchText={searchText}
          changeTextHandler={changeTextHandler}
        />
        <ErrorHandler message={error} />
      </SafeAreaView>
    );
  return (
    <SafeAreaView style={styles.listMovies}>
      <SearchBarComponent
        searchText={searchText}
        changeTextHandler={changeTextHandler}
      />
      <FlatList
        style={{top: 30}}
        data={moviesData}
       
        keyExtractor={(item,index) => item.id.toString()+index.toString()}
        renderItem={({item}) => (
          <MovieItem
          vote_count={item.vote_count}
            id={item.id}
            title={item.title}
            vote_average={item.vote_average}
            poster_path={item.poster_path}
            backdrop_path={item.backdrop_path}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Movies;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
  },
  list: {
    flexGrow: 1,
  },
  listMovies: {
    flex: 1,
    backgroundColor:Colors.PRIMARY,
    padding:30,
    paddingTop:45,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
