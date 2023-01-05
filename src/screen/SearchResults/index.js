import React from 'react';
import {FlatList, View} from 'react-native';
import Feed from '../../../assest/data/Feed';
import Post from '../../components/Post';

const SearchResultsScreen = props => {
  return (
    <View>
      <FlatList data={Feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
