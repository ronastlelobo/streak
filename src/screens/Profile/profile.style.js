import {StyleSheet, View, PixelRatio} from 'react-native';
import Appconstants from '../../components/Appconstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    marginHorizontal: 20,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileText: {
    color: '#500061',
    fontSize: Appconstants.PIXEL_RATIO['22PX'],
    fontFamily: Appconstants.FONT_FAMILY.IBMPS_BOLD,
    fontWeight: '600',
  },
  closeContaniner: {
    height: 40,
    width: 40,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  instContainer: {
    marginTop: 20,
    width: '65%',
  },
  instText: {
    color: 'rgba(100, 100, 100, 1)',
    fontFamily: Appconstants.FONT_FAMILY.IBMPS_BOLD,
    fontSize: Appconstants.PIXEL_RATIO['16PX'],
    fontWeight: '600',
  },
  sep: {
    marginTop: 30,
    width: '100%',
    height: 2,
    backgroundColor: 'rgba(80, 0, 97, 0.1)',
  },
  textDetail: {
    color: 'rgba(65, 83, 109, 1)',
    marginTop: 25,
    marginBottom: 12,
    fontFamily: Appconstants.FONT_FAMILY.IBMPS_BOLD,
    fontSize: Appconstants.PIXEL_RATIO['14PX'],
  },
  otpText: {
    marginTop: 18,
    color: 'rgba(138, 138, 138, 1)',
    fontFamily: Appconstants.FONT_FAMILY.IBMPS_BOLD,
    fontSize: Appconstants.PIXEL_RATIO['16PX'],
    textAlign: 'center',
  },
  createProfileContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createProfile: {
    borderRadius: 15,
    marginTop: 70,
    marginBottom: 50,
    backgroundColor: '#500061',
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createProfileText: {
    fontFamily: Appconstants.FONT_FAMILY.IBMPS_BOLD,
    fontSize: Appconstants.PIXEL_RATIO['20PX'],
    color: 'rgba(255, 255, 255, 1)',
  },
  textInputStyle: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#EEEEEE',
    paddingLeft: 10,
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    fontFamily: Appconstants.FONT_FAMILY.IBMPS,
    color: '#000',
  },
});
