import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style.js';

const Post = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image
        }}
      />

      {/* Bed & bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
       {post.type}:{post.title}
      </Text>

      {/* Old Price & New Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.price}>${post.newPrice} </Text>/ Per day
      </Text>

      {/*Total Price*/}
      <Text style={styles.totalPrice}>${post.totalPrice} Total </Text>
    </View>
  );
};
export default Post;
