// import React from 'react';
// import { Text, View, TouchableOpacity } from 'react-native';
// import * as Permissions from 'expo-permissions';
// import { Camera } from 'expo';

// export default class CameraExample extends React.Component {
//   state = {
//     hasCameraPermission: this.props.hasCameraPermission,
//     type: Camera.Constants.Type.back,
//   };

//   // async componentDidMount() {
//   //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
//   //   this.setState({ hasCameraPermission: status === 'granted' });
//   // }

//   render() {
//     // const { hasCameraPermission } = this.state;
    
//       return (
//         <View style={{ flex: 1 }}>
//           <Camera style={{ flex: 1 }} type={this.state.type}>
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: 'transparent',
//                 flexDirection: 'row',
//               }}>
//               <TouchableOpacity
//                 style={{
//                   flex: 0.1,
//                   alignSelf: 'flex-end',
//                   alignItems: 'center',
//                 }}
//                 onPress={() => {
//                   this.setState({
//                     type:
//                       this.state.type === Camera.Constants.Type.back
//                         ? Camera.Constants.Type.front
//                         : Camera.Constants.Type.back,
//                   });
//                 }}>
//                 <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
//               </TouchableOpacity>
//             </View>
//           </Camera>
//         </View>
//       );
//     }
  
// }