import {StyleSheet, Dimensions, Platform} from 'react-native';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'red',
    borderColor: 'white',
    borderLeftWidth: 2,
    borderBottomWidth: 0,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          height: 2,
          width: 0.5,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6,
      },
    }),
  },
  menuIconContainer: {
    height: 44,
    width: 44,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    flex: 1,
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  headerTitleStyle: {
    flex: 1,

    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
  },
  infoContainer: {
    height: 44,
    position: 'absolute',
    top: 0,
    right: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  info: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  header: {
    flexDirection: 'row',
    height: 48,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0,0,0,0.35)',
    ...Platform.select({
      ios: {
        shadowOffset: {
          height: 4,
          width: 2,
        },
        shadowOpacity: 0.35,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  headerBtn: {
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    height: 28.11,
    width: 26.06,
    tintColor: '#FFFFFF',
  },
  counterContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    minWidth: 15,
    height: 15,
    borderRadius: 15,
    color: 'white',
    textAlign: 'center',
    fontSize: 9,
    borderColor: 'white',
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
});

export default styles;
