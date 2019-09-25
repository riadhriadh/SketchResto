// import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import Recipes from '../pages/recipes';
// import RecipesDetaile from '../pages/recipes_detaile/index';
// import IconTabBadage from '../components/iconTabBadage';
// export const TabNav = createBottomTabNavigator(
//   {
//     Home: {
//       screen: Recipes,
//       navigationOptions: {
//         tabBarVisible: false,
//       },
//     },
//     Portefeuille: {screen: RecipesDetaile},
//   },

//   {
//     defaultNavigationOptions: ({navigation}) => ({
//       tabBarIcon: ({focused, horizontal, tintColor}) => {
//         const {routeName} = navigation.state;
//         let badage = false;
//         let iconPath = require('../assets/img/rec1.jpg');
//         switch (routeName) {
//           case 'Home':
//             iconPath = focused
//               ? require('../assets/img/rec1.jpg')
//               : require('../assets/img/rec1.jpg');

//             break;
//           case 'Portefeuille':
//             iconPath = focused
//               ? require('../assets/img/rec1.jpg')
//               : require('../assets/img/rec1.jpg');

//             break;
//           default:
//             iconPath = require('../assets/img/rec1.jpg');

//             break;
//         }
//         //return <Icon name="Portefeuille" color="white" size={25} />;
//         return (
//           <IconTabBadage
//             iconPath={iconPath}
//             tintColor={tintColor}
//             badage={badage}
//           />
//         );
//       },
//     }),
//     initialRouteName: 'Home',
//     tabBarOptions: {
//       showLabel: false,
//       showIcon: true,
//       activeTintColor: 'red',
//       inactiveTintColor: '#636363',
//       tabStyle: {
//         borderTopWidth: 0.25,
//         borderTopColor: 'red',
//       },
//       style: {
//         alignItems: 'center',
//         backgroundColor: '#FFFFFF',
//         height: 45,
//       },
//     },
//     order: ['Home', 'Portefeuille'],
//     animationEnabled: true,
//     swipeEnabled: true,
//     backBehavior: 'initialRoute',
//   },
// );
// const AppContainer = createAppContainer(TabNav);

// export default AppContainer;
