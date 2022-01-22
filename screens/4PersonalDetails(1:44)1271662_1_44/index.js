import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_45}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4a3/5254/39e641e39479fbb25ac45695dcd32418"
          }}
          style={styles.ImageBackground_1_46}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc96/5fa0/c7d641468cd6e66a94836277f2aadecb"
          }}
          style={styles.ImageBackground_1_47}
        />
        <View style={styles.View_1_48}>
          <Text style={styles.Text_1_48}>Sign Up</Text>
        </View>
        <View style={styles.View_1_49}>
          <Text style={styles.Text_1_49}>Personal details</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e29/0a18/cfc6111449fbe319adffad554f5514bf"
          }}
          style={styles.ImageBackground_1_50}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e29/0a18/cfc6111449fbe319adffad554f5514bf"
          }}
          style={styles.ImageBackground_1_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e29/0a18/cfc6111449fbe319adffad554f5514bf"
          }}
          style={styles.ImageBackground_1_52}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9be8/ecf4/e0bfd6110ec9bb0070a5c96aa96e5f9d"
          }}
          style={styles.ImageBackground_1_53}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e29/0a18/cfc6111449fbe319adffad554f5514bf"
          }}
          style={styles.ImageBackground_1_54}
        />
        <View style={styles.View_1_55}>
          <Text style={styles.Text_1_55}>Email</Text>
        </View>
        <View style={styles.View_1_56}>
          <Text style={styles.Text_1_56}>Phone</Text>
        </View>
        <View style={styles.View_1_57}>
          <Text style={styles.Text_1_57}>Password</Text>
        </View>
        <View style={styles.View_1_58}>
          <Text style={styles.Text_1_58}>Vacation Rental Company</Text>
        </View>
        <View style={styles.View_1_59}>
          <Text style={styles.Text_1_59}>Reservation Code</Text>
        </View>
        <View style={styles.View_1_60}>
          <Text style={styles.Text_1_60}>Already have an account? Sign In</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  View_1_45: {
    width: wp("100%"),
    height: hp("115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_46: {
    width: wp("100%"),
    height: hp("115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_47: {
    width: wp("68%"),
    height: hp("7%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_1_48: {
    width: wp("14%"),
    top: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    justifyContent: "flex-start"
  },
  Text_1_48: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_49: {
    width: wp("71%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_1_49: {
    color: "rgba(43, 43, 43, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_50: {
    width: wp("84%"),
    height: hp("7%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1_51: {
    width: wp("84%"),
    height: hp("7%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1_52: {
    width: wp("84%"),
    height: hp("7%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1_53: {
    width: wp("84%"),
    height: hp("7%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_1_54: {
    width: wp("84%"),
    height: hp("7%"),
    top: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_1_55: {
    width: wp("7%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_55: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_56: {
    width: wp("9%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_56: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_57: {
    width: wp("13%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_57: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_58: {
    width: wp("35%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_58: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_59: {
    width: wp("24%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_59: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_60: {
    width: wp("62%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    justifyContent: "flex-start"
  },
  Text_1_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
