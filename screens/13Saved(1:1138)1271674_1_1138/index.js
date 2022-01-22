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
      <View style={styles.View_1_1139}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4a3/5254/39e641e39479fbb25ac45695dcd32418"
          }}
          style={styles.ImageBackground_1_1140}
        />
        <View style={styles.View_1_1141}>
          <View style={styles.View_1_1142}>
            <View style={styles.View_1_1143}>
              <View style={styles.View_1_1144}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1145}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d450/8ca9/7613f0e0712affbd233b49f507ded320"
                  }}
                  style={styles.ImageBackground_1_1147}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d43f/dff5/9ca209955d972369dfc65ffcdb1aae6b"
                  }}
                  style={styles.ImageBackground_1_1149}
                />
                <View style={styles.View_1_1151}>
                  <View style={styles.View_1_1152}>
                    <Text style={styles.Text_1_1152}>
                      Night Camp at Yosemite Valley
                    </Text>
                  </View>
                  <View style={styles.View_1_1153}>
                    <View style={styles.View_1_1154}>
                      <Text style={styles.Text_1_1154}>
                        CALIFORNIA, UNITED STATES
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c288/55b0/6e9b94c1598524bd982b8092244cde61"
                      }}
                      style={styles.ImageBackground_1_1155}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1158}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1159}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d450/8ca9/7613f0e0712affbd233b49f507ded320"
                  }}
                  style={styles.ImageBackground_1_1161}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d43f/dff5/9ca209955d972369dfc65ffcdb1aae6b"
                  }}
                  style={styles.ImageBackground_1_1163}
                />
                <View style={styles.View_1_1165}>
                  <View style={styles.View_1_1166}>
                    <Text style={styles.Text_1_1166}>
                      Wakeboarding &amp; Tubing
                    </Text>
                  </View>
                  <View style={styles.View_1_1167}>
                    <View style={styles.View_1_1168}>
                      <Text style={styles.Text_1_1168}>WRIGHTSVILLE BEACH</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c288/55b0/6e9b94c1598524bd982b8092244cde61"
                      }}
                      style={styles.ImageBackground_1_1169}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1172}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1173}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d450/8ca9/7613f0e0712affbd233b49f507ded320"
                  }}
                  style={styles.ImageBackground_1_1175}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d43f/dff5/9ca209955d972369dfc65ffcdb1aae6b"
                  }}
                  style={styles.ImageBackground_1_1177}
                />
                <View style={styles.View_1_1179}>
                  <View style={styles.View_1_1180}>
                    <Text style={styles.Text_1_1180}>Surf Lessons</Text>
                  </View>
                  <View style={styles.View_1_1181}>
                    <View style={styles.View_1_1182}>
                      <Text style={styles.Text_1_1182}>KURE BEACH</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c288/55b0/6e9b94c1598524bd982b8092244cde61"
                      }}
                      style={styles.ImageBackground_1_1183}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_1_1186}>
              <View style={styles.View_1_1187}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1188}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d450/8ca9/7613f0e0712affbd233b49f507ded320"
                  }}
                  style={styles.ImageBackground_1_1190}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d43f/dff5/9ca209955d972369dfc65ffcdb1aae6b"
                  }}
                  style={styles.ImageBackground_1_1192}
                />
                <View style={styles.View_1_1194}>
                  <View style={styles.View_1_1195}>
                    <Text style={styles.Text_1_1195}>
                      Night Camp at Yosemite Valley
                    </Text>
                  </View>
                  <View style={styles.View_1_1196}>
                    <View style={styles.View_1_1197}>
                      <Text style={styles.Text_1_1197}>
                        CALIFORNIA, UNITED STATES
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c288/55b0/6e9b94c1598524bd982b8092244cde61"
                      }}
                      style={styles.ImageBackground_1_1198}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1201}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1202}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d450/8ca9/7613f0e0712affbd233b49f507ded320"
                  }}
                  style={styles.ImageBackground_1_1204}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d43f/dff5/9ca209955d972369dfc65ffcdb1aae6b"
                  }}
                  style={styles.ImageBackground_1_1206}
                />
                <View style={styles.View_1_1208}>
                  <View style={styles.View_1_1209}>
                    <Text style={styles.Text_1_1209}>
                      Wakeboarding &amp; Tubing
                    </Text>
                  </View>
                  <View style={styles.View_1_1210}>
                    <View style={styles.View_1_1211}>
                      <Text style={styles.Text_1_1211}>WRIGHTSVILLE BEACH</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c288/55b0/6e9b94c1598524bd982b8092244cde61"
                      }}
                      style={styles.ImageBackground_1_1212}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1215}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1216}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d450/8ca9/7613f0e0712affbd233b49f507ded320"
                  }}
                  style={styles.ImageBackground_1_1218}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d43f/dff5/9ca209955d972369dfc65ffcdb1aae6b"
                  }}
                  style={styles.ImageBackground_1_1220}
                />
                <View style={styles.View_1_1222}>
                  <View style={styles.View_1_1223}>
                    <Text style={styles.Text_1_1223}>Surf Lessons</Text>
                  </View>
                  <View style={styles.View_1_1224}>
                    <View style={styles.View_1_1225}>
                      <Text style={styles.Text_1_1225}>KURE BEACH</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c288/55b0/6e9b94c1598524bd982b8092244cde61"
                      }}
                      style={styles.ImageBackground_1_1226}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1229}>
          <View style={styles.View_1_1230}>
            <Text style={styles.Text_1_1230}>Saves</Text>
          </View>
          <View style={styles.View_1_1231}>
            <Text style={styles.Text_1_1231}>Events</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/253d/d583/11df882fe0e512f301a01e79f82d828b"
            }}
            style={styles.ImageBackground_1_1232}
          />
        </View>
        <View style={styles.View_1_1233}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/236a/dc0f/81b319968c3ad8326fc545797910dbf2"
            }}
            style={styles.ImageBackground_1_1234}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2360/20c0/6e2d23592e99dc894505b12d4d7c8f6c"
          }}
          style={styles.ImageBackground_1_1236}
        />
        <View style={styles.View_1_1237}>
          <View style={styles.View_1_1238}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a295/9208/e6b2d2159d9d0fdc5497647f1d720787"
              }}
              style={styles.ImageBackground_1_1239}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78f4/847c/540227691f0bef008d96ab2a53a2d78d"
            }}
            style={styles.ImageBackground_1_1241}
          />
          <View style={styles.View_1_1244}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15ac/a3f2/1393eebf3ee66a180f07ea9f530ad716"
              }}
              style={styles.ImageBackground_1_1245}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f74/05f0/9f96789eb28af40990512e9951f7fdf2"
            }}
            style={styles.ImageBackground_1_1249}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c0c/08b5/92f7a24251c30c7aef58d616361e1525"
            }}
            style={styles.ImageBackground_1_1250}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/019f/2b06/fad5ebd4b9640ffa9f9e42b65a91dcb8"
          }}
          style={styles.ImageBackground_1_1254}
        />
        <View style={styles.View_1_1257}>
          <Text style={styles.Text_1_1257}>Search</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/858b/f03e/1baa0775554a232ae97731f0aa178124"
          }}
          style={styles.ImageBackground_1_1258}
        />
        <View style={styles.View_1_1261}>
          <Text style={styles.Text_1_1261}>Saved</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b898/5c7a/a1f9cd4024e5fc759e5b82bb8782e45c"
          }}
          style={styles.ImageBackground_1_1262}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  View_1_1139: {
    width: wp("100%"),
    height: hp("209%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1140: {
    width: wp("100%"),
    height: hp("115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1141: {
    width: wp("88%"),
    height: hp("178%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_1142: {
    width: wp("88%"),
    height: hp("178%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1143: {
    width: wp("88%"),
    height: hp("88%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1144: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1145: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1147: {
    width: wp("79%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_1149: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_1_1151: {
    width: wp("56%"),
    height: hp("5%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_1152: {
    width: wp("56%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1153: {
    width: wp("42%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1154: {
    width: wp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1154: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1155: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1158: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1159: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1161: {
    width: wp("79%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_1163: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_1_1165: {
    width: wp("38%"),
    height: hp("5%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_1166: {
    width: wp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1166: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1167: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1168: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1168: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1169: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1172: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1173: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1175: {
    width: wp("79%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_1177: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_1_1179: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_1180: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1181: {
    width: wp("18%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1182: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1182: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1183: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1186: {
    width: wp("88%"),
    height: hp("88%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1187: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1188: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1190: {
    width: wp("79%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_1192: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_1_1194: {
    width: wp("56%"),
    height: hp("5%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_1195: {
    width: wp("56%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1195: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1196: {
    width: wp("42%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1197: {
    width: wp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1197: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1198: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1201: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1202: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1204: {
    width: wp("79%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_1206: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_1_1208: {
    width: wp("38%"),
    height: hp("5%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_1209: {
    width: wp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1209: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1210: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1211: {
    width: wp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1211: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1212: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1215: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1216: {
    width: wp("88%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1218: {
    width: wp("79%"),
    height: hp("9%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_1220: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_1_1222: {
    width: wp("20%"),
    height: hp("5%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_1223: {
    width: wp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1223: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1224: {
    width: wp("18%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1225: {
    width: wp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1225: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1226: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1229: {
    width: wp("32%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_1230: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1230: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1231: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1231: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1232: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_1233: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_1234: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1236: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1237: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1_1238: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1239: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1241: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_1_1244: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_1_1245: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1249: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_1_1250: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_1_1254: {
    width: wp("86%"),
    height: hp("6%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_1257: {
    width: wp("9%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_1_1257: {
    color: "rgba(168, 168, 168, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1258: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_1_1261: {
    width: wp("15%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    justifyContent: "flex-start"
  },
  Text_1_1261: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1262: {
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
