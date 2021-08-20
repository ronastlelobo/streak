import {StyleSheet, View, PixelRatio} from 'react-native';
import Appconstants from '../../components/Appconstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainHorizontalPadding: {
    paddingHorizontal: 12,
  },
  mainHorizontalPadding2: {
    paddingHorizontal: 12,
    paddingTop: 30,
  },
  header: {
    paddingTop: 25,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImage: {
    width: Appconstants.PIXEL_RATIO[15],
    height: Appconstants.PIXEL_RATIO[15],
  },
  profile: {
    flex: 1,
    backgroundColor: 'rgba(67, 7, 84, 0.65)',
    height: Appconstants.PIXEL_RATIO[14],
    maxWidth: '35%',
    borderRadius: 22,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  photo: {
    width: Appconstants.PIXEL_RATIO[10],
    height: Appconstants.PIXEL_RATIO[10],
    marginLeft: 5,
  },
  profileText: {
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    color: Appconstants.COLORS.WHITE,
    fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
    fontWeight: '600',
    flex: 0.4,
    textAlign: 'center',
  },
  bottomCard: {
    backgroundColor: '#F4E7F5',
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  savingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  savingsText: {
    color: 'rgba(104, 26, 96, 0.6)',
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    fontWeight: '600',
  },
  bottomCardPadding: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 12,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceText: {
    color: 'rgba(155, 155, 155, 1)',
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    fontWeight: '600',
  },
  balanceTextCost: {
    color: 'rgba(37, 37, 37, 1)',
    fontFamily: Appconstants.FONT_FAMILY.IBMPM_BOLD,
    fontSize: Appconstants.PIXEL_RATIO['30PX'],
    fontWeight: '600',
  },
  savingsTextCost: {
    color: 'rgba(104, 26, 96, 1)',
    fontFamily: Appconstants.FONT_FAMILY.IBMPM_BOLD,
    fontSize: Appconstants.PIXEL_RATIO['30PX'],
    fontWeight: '600',
  },
  saveMoreContainer: {
    backgroundColor: '#E8D3E9',
    height: Appconstants.PIXEL_RATIO[10],
    width: '35%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  saveMoreText: {
    color: 'rgba(64, 1, 66, 1)',
    fontFamily: Appconstants.FONT_FAMILY.BARLOW,
    fontSize: Appconstants.PIXEL_RATIO['16PX'],
    fontWeight: '700',
  },
  topCard: {
    backgroundColor: '#FFFEFF',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  payOptionsContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  scanCode: {
    flexDirection: 'row',
    backgroundColor: 'rgba(101, 15, 92, 1)',
    height: Appconstants.PIXEL_RATIO[18],
    width: '55%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
  scanText: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    fontWeight: '600',
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
  },
  gotoContainer: {
    backgroundColor: 'rgba(101, 15, 92, 0.4)',
    height: Appconstants.PIXEL_RATIO[18],
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  recentTransactions: {
    borderWidth: 1,
    borderColor: 'rgba(204, 170, 207, 0.2)',
    borderStyle: 'solid',
    backgroundColor: 'rgba(248, 245, 251, 1)',
    borderRadius: Appconstants.PIXEL_RATIO[2],
  },
  recentTransactionsText: {
    color: 'rgba(96, 0, 99, 1)',
    fontWeight: 'bold',
    fontFamily: Appconstants.FONT_FAMILY.BARLOW,
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    paddingTop: 20,
    paddingLeft: 14,
  },
  savingsTab: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderStyle: 'solid',
    backgroundColor: 'rgba(245, 247, 251, 1)',
    borderRadius: Appconstants.PIXEL_RATIO[2],
  },
  savingsTabText: {
    color: 'rgba(17, 40, 84, 1)',
    fontWeight: 'bold',
    fontFamily: Appconstants.FONT_FAMILY.BARLOW,
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    paddingTop: 20,
    paddingLeft: 14,
  },
  game: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderStyle: 'solid',
    backgroundColor: 'rgba(251, 247, 245, 1)',
    borderRadius: Appconstants.PIXEL_RATIO[2],
  },
  gameText: {
    color: 'rgba(99, 30, 0, 1)',
    fontWeight: 'bold',
    fontFamily: Appconstants.FONT_FAMILY.BARLOW,
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    paddingTop: 20,
    paddingLeft: 14,
  },
  parentalControlContainer: {
    marginVertical: 40,
    marginRight: 14,
    alignItems: 'flex-end',
  },
  parentalControl: {
    width: '50%',
    height: Appconstants.PIXEL_RATIO[15],
    backgroundColor: 'rgba(229, 229, 229, 1)',
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  pc: {
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    fontWeight: '600',
    fontSize: Appconstants.PIXEL_RATIO['16PX'],
    color: 'rgba(141, 141, 141, 1)',
  },
});
