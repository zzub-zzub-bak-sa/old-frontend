import { StyleSheet } from "react-native";
import font from '../utils/font'

export const title1 = StyleSheet.create({
  bold: {
    fontFamily: 'bold',
    fontSize: font(25),
  },
});

export const title2 = StyleSheet.create({
  bold: {
    fontFamily: 'bold',
    fontSize: font(20)
  },
  medium: {
    fontFamily: 'medium',
    fontSize: font(20)
  }
})

export const title3 = StyleSheet.create({
  bold: {
    fontFamily: 'bold',
    fontSize: font(19),
  },
  semibold: {
    fontFamily: 'semibold',
    fontSize: font(19),
  },
});

export const subtitle1 = StyleSheet.create({
  semibold: {
    fontFamily: 'semibold',
    fontSize: font(17),
  },
});

export const subtitle2 = StyleSheet.create({
  semibold: {
    fontFamily: 'semibold',
    fontSize: font(16),
  },
  medium: {
    fontFamily: 'medium',
    fontSize: font(16),
  },
});

export const subtitle3 = StyleSheet.create({
  bold: {
    fontFamily: 'bold',
    fontSize: font(15),
  },
});

export const body1 = StyleSheet.create({
  medium: {
    fontFamily: 'medium',
    fontSize: font(16)
  }
})

export const body2 = StyleSheet.create({
  medium: {
    fontFamily: 'medium',
    fontSize: font(15),
  },
});

export const body3 = StyleSheet.create({
  medium: {
    fontFamily: 'medium',
    fontSize: font(14),
  },
});

export const caption1 = StyleSheet.create({
  semibold: {
    fontFamily: 'semibold',
    fontSize: font(13),
  },
  medium: {
    fontFamily: 'medium',
    fontSize: font(13),
  },
});

export const caption2 = StyleSheet.create({
  medium: {
    fontFamily: 'medium',
    fontSize: font(12),
  },
});

export const caption3 = StyleSheet.create({
  medium: {
    fontFamily: 'medium',
    fontSize: font(11),
  },
});