// import React from "react";
// import { FlatList, Image } from "react-native";
// function CarouselWithSteps(props) {
//     const { illustrations } = props;

//     let carouselJSX =



//     return (
//       <FlatList
//         horizontal
//         pagingEnabled
//         scrollEnabled
//         showsHorizontalScrollIndicator={false}
//         scrollEventThrottle={16}
//         snapToAlignment="center"
//         data={illustrations}
//         extraDate={this.state}
//         keyExtractor={(item, index) => `${item.id}`}
//         renderItem={({ item }) => (
//           <Image
//             source={item.source}
//             resizeMode="contain"
//             style={{ width, height: height / 2, overflow: 'visible' }}
//           />
//         )}
//         onScroll={
//           Animated.event([{
//             nativeEvent: { contentOffset: { x: this.scrollX } }
//           }])
//         }
//       />
//     )
//   }