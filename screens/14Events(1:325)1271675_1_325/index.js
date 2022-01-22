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
      <View style={styles.View_1_326}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4a3/5254/39e641e39479fbb25ac45695dcd32418"
          }}
          style={styles.ImageBackground_1_327}
        />
        <View style={styles.View_1_328}>
          <Text style={styles.Text_1_328}>Events</Text>
        </View>
        <View style={styles.View_1_329}>
          <View style={styles.View_1_330}>
            <Text style={styles.Text_1_330}>September,2022</Text>
          </View>
          <View style={styles.View_1_331}>
            <Text style={styles.Text_1_331}>Mon</Text>
          </View>
          <View style={styles.View_1_332}>
            <Text style={styles.Text_1_332}>Tue</Text>
          </View>
          <View style={styles.View_1_333}>
            <Text style={styles.Text_1_333}>Thu</Text>
          </View>
          <View style={styles.View_1_334}>
            <Text style={styles.Text_1_334}>Fri</Text>
          </View>
          <View style={styles.View_1_335}>
            <Text style={styles.Text_1_335}>Sat</Text>
          </View>
          <View style={styles.View_1_336}>
            <Text style={styles.Text_1_336}>Sun</Text>
          </View>
          <View style={styles.View_1_337}>
            <Text style={styles.Text_1_337}>18</Text>
          </View>
          <View style={styles.View_1_338}>
            <Text style={styles.Text_1_338}>19</Text>
          </View>
          <View style={styles.View_1_339}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/591c/55e6/30fc7cab4e38353e7756d0d060db31bc"
              }}
              style={styles.ImageBackground_1_340}
            />
            <View style={styles.View_1_341}>
              <Text style={styles.Text_1_341}>20</Text>
            </View>
            <View style={styles.View_1_342}>
              <Text style={styles.Text_1_342}>Wed</Text>
            </View>
          </View>
          <View style={styles.View_1_343}>
            <Text style={styles.Text_1_343}>21</Text>
          </View>
          <View style={styles.View_1_344}>
            <Text style={styles.Text_1_344}>22</Text>
          </View>
          <View style={styles.View_1_345}>
            <Text style={styles.Text_1_345}>23</Text>
          </View>
          <View style={styles.View_1_346}>
            <Text style={styles.Text_1_346}>24</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/718a/8b16/09cc6de288964f8449fe21cc13ee2db4"
          }}
          style={styles.ImageBackground_1_347}
        />
        <View style={styles.View_1_349}>
          <View style={styles.View_1_350}>
            <View style={styles.View_1_351}>
              <Text style={styles.Text_1_351}>SEP</Text>
            </View>
            <View style={styles.View_1_352}>
              <Text style={styles.Text_1_352}>20</Text>
            </View>
          </View>
          <View style={styles.View_1_353}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95f4/233d/a071e77f4776d8c4276192763d295d76"
              }}
              style={styles.ImageBackground_1_354}
            />
            <View style={styles.View_1_355}>
              <Text style={styles.Text_1_355}>1 Hour Wakeboard Lesson</Text>
            </View>
            <View style={styles.View_1_356}>
              <Text style={styles.Text_1_356}>
                Shred the Gnar”. Second event should be
              </Text>
            </View>
            <View style={styles.View_1_357}>
              <Text style={styles.Text_1_357}>10:30 - 11:30</Text>
            </View>
          </View>
          <View style={styles.View_1_358}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a06/907b/5858720e354d6b3582448164843ffdc0"
              }}
              style={styles.ImageBackground_1_359}
            />
            <View style={styles.View_1_360}>
              <Text style={styles.Text_1_360}>Lunch at Tower 7</Text>
            </View>
            <View style={styles.View_1_361}>
              <Text style={styles.Text_1_361}>
                Lay out on the beach” The last eventshould be on the same day as
                the othersand be “Dinner at Slice of Life and beersat Wilmington
                Brewing Company
              </Text>
            </View>
            <View style={styles.View_1_362}>
              <Text style={styles.Text_1_362}>12:00 - 13:00</Text>
            </View>
          </View>
          <View style={styles.View_1_363}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2008/e887/18fa958d40bb3ffc542685cc56e1e953"
              }}
              style={styles.ImageBackground_1_364}
            />
            <View style={styles.View_1_365}>
              <Text style={styles.Text_1_365}>Landing Page Design</Text>
            </View>
            <View style={styles.View_1_366}>
              <Text style={styles.Text_1_366}>
                Vivamus varius id magna id finibus.
              </Text>
            </View>
            <View style={styles.View_1_367}>
              <Text style={styles.Text_1_367}>13:30 - 15:00</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cabc/5186/61499472ce3c7ddbf9f4e64740dc563c"
            }}
            style={styles.ImageBackground_1_368}
          />
        </View>
        <View style={styles.View_1_369}>
          <View style={styles.View_1_370}>
            <View style={styles.View_1_371}>
              <Text style={styles.Text_1_371}>SEP</Text>
            </View>
            <View style={styles.View_1_372}>
              <Text style={styles.Text_1_372}>22</Text>
            </View>
          </View>
          <View style={styles.View_1_373}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5365/55cc/97a468b07b7d15ac61a18e410a8e6d1e"
              }}
              style={styles.ImageBackground_1_374}
            />
            <View style={styles.View_1_375}>
              <Text style={styles.Text_1_375}>Meeting with Yunus</Text>
            </View>
            <View style={styles.View_1_376}>
              <Text style={styles.Text_1_376}>
                Suspendisse posuere, nisl vitae.
              </Text>
            </View>
            <View style={styles.View_1_377}>
              <Text style={styles.Text_1_377}>10:00 - 11:30</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce31/dfb2/31e67b14b97e3a7962bede738b09c82f"
            }}
            style={styles.ImageBackground_1_378}
          />
        </View>
        <View style={styles.View_1_379}>
          <View style={styles.View_1_380}>
            <Text style={styles.Text_1_380}>Saves</Text>
          </View>
          <View style={styles.View_1_381}>
            <Text style={styles.Text_1_381}>Events</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253d/d583/11df882fe0e512f301a01e79f82d828b"
            }}
            style={styles.ImageBackground_1_382}
          />
        </View>
        <View style={styles.View_1_383}>
          <View style={styles.View_1_384}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a295/9208/e6b2d2159d9d0fdc5497647f1d720787"
              }}
              style={styles.ImageBackground_1_385}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78f4/847c/540227691f0bef008d96ab2a53a2d78d"
            }}
            style={styles.ImageBackground_1_387}
          />
          <View style={styles.View_1_390}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15ac/a3f2/1393eebf3ee66a180f07ea9f530ad716"
              }}
              style={styles.ImageBackground_1_391}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a57f/9ffc/2ca76924b1b82e9c1b6fbe95fcb9c7c7"
            }}
            style={styles.ImageBackground_1_395}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c0c/08b5/92f7a24251c30c7aef58d616361e1525"
            }}
            style={styles.ImageBackground_1_396}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b898/5c7a/a1f9cd4024e5fc759e5b82bb8782e45c"
          }}
          style={styles.ImageBackground_1_400}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  View_1_326: {
    width: wp("242%"),
    height: hp("118%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_327: {
    width: wp("100%"),
    height: hp("115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_328: {
    width: wp("16%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    justifyContent: "flex-start"
  },
  Text_1_328: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_329: {
    width: wp("99%"),
    height: hp("19%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_330: {
    width: wp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_330: {
    color: "rgba(30, 32, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_331: {
    width: wp("8%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_331: {
    color: "rgba(30, 32, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_332: {
    width: wp("6%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    justifyContent: "flex-start"
  },
  Text_1_332: {
    color: "rgba(30, 32, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_333: {
    width: wp("7%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    justifyContent: "flex-start"
  },
  Text_1_333: {
    color: "rgba(30, 32, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_334: {
    width: wp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    justifyContent: "flex-start"
  },
  Text_1_334: {
    color: "rgba(30, 32, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_335: {
    width: wp("6%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    justifyContent: "flex-start"
  },
  Text_1_335: {
    color: "rgba(30, 32, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_336: {
    width: wp("7%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    justifyContent: "flex-start"
  },
  Text_1_336: {
    color: "rgba(30, 32, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_337: {
    width: wp("4%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_337: {
    color: "rgba(119, 131, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_338: {
    width: wp("4%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    justifyContent: "flex-start"
  },
  Text_1_338: {
    color: "rgba(119, 131, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_339: {
    width: wp("12%"),
    height: hp("13%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_1_340: {
    width: wp("12%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_341: {
    width: wp("5%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_341: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_342: {
    width: wp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_342: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_343: {
    width: wp("4%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    justifyContent: "flex-start"
  },
  Text_1_343: {
    color: "rgba(119, 131, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_344: {
    width: wp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    justifyContent: "flex-start"
  },
  Text_1_344: {
    color: "rgba(119, 131, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_345: {
    width: wp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    justifyContent: "flex-start"
  },
  Text_1_345: {
    color: "rgba(119, 131, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_346: {
    width: wp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    justifyContent: "flex-start"
  },
  Text_1_346: {
    color: "rgba(119, 131, 143, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_347: {
    width: wp("100%"),
    height: hp("80%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_349: {
    width: wp("239%"),
    height: hp("55%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_350: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_351: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_351: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_352: {
    width: wp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_352: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_353: {
    width: wp("77%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_354: {
    width: wp("77%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_355: {
    width: wp("42%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_355: {
    color: "rgba(69, 92, 199, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_356: {
    width: wp("59%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_356: {
    color: "rgba(69, 92, 199, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_357: {
    width: wp("20%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_357: {
    color: "rgba(69, 92, 199, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_358: {
    width: wp("222%"),
    height: hp("17%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_359: {
    width: wp("77%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_360: {
    width: wp("25%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_360: {
    color: "rgba(251, 163, 77, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_361: {
    width: wp("218%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_361: {
    color: "rgba(251, 163, 77, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_362: {
    width: wp("20%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_362: {
    color: "rgba(251, 163, 77, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_363: {
    width: wp("77%"),
    height: hp("17%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_364: {
    width: wp("77%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_365: {
    width: wp("31%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_365: {
    color: "rgba(249, 44, 132, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_366: {
    width: wp("51%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_366: {
    color: "rgba(249, 44, 132, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_367: {
    width: wp("20%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_367: {
    color: "rgba(249, 44, 132, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_368: {
    width: wp("0%"),
    height: hp("45%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_369: {
    width: wp("93%"),
    height: hp("19%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_370: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_371: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_371: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_372: {
    width: wp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_1_372: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_373: {
    width: wp("77%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_1_374: {
    width: wp("77%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_375: {
    width: wp("29%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_375: {
    color: "rgba(133, 109, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_376: {
    width: wp("46%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_376: {
    color: "rgba(133, 109, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_377: {
    width: wp("20%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_377: {
    color: "rgba(133, 109, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_378: {
    width: wp("0%"),
    height: hp("9%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_379: {
    width: wp("32%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_380: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_380: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_381: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_381: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_382: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_1_383: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1_384: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_385: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_387: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_390: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_1_391: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_395: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_1_396: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_1_400: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("110%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
