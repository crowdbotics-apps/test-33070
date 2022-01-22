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
      <View style={styles.View_1_910}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4a3/5254/39e641e39479fbb25ac45695dcd32418"
          }}
          style={styles.ImageBackground_1_911}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/984a/bcde/f58ccc7bdfb933122a35281f1e35673d"
          }}
          style={styles.ImageBackground_1_912}
        />
        <View style={styles.View_1_914}>
          <View style={styles.View_1_915}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eefc/4551/95f1e313590e923c5f6859229c2bdaeb"
              }}
              style={styles.ImageBackground_1_916}
            />
            <View style={styles.View_1_918}>
              <Text style={styles.Text_1_918}>Food</Text>
            </View>
          </View>
          <View style={styles.View_1_919}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8697/a533/aaa17c6d022f0a27a71da5a6fbfc7695"
              }}
              style={styles.ImageBackground_1_920}
            />
            <View style={styles.View_1_922}>
              <Text style={styles.Text_1_922}>Shop</Text>
            </View>
          </View>
          <View style={styles.View_1_923}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b606/1d30/bf6a2d717eeb9588776d72fde4344fc5"
              }}
              style={styles.ImageBackground_1_924}
            />
            <View style={styles.View_1_925}>
              <Text style={styles.Text_1_925}>Beach Crowds</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_926}>
          <View style={styles.View_1_927}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a653/3236/d6055508299cc347774ff6c9a632d247"
              }}
              style={styles.ImageBackground_1_928}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbff/a55c/0f9f45be0817ccec16c65df8bc5546d2"
            }}
            style={styles.ImageBackground_1_931}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/858b/f03e/1baa0775554a232ae97731f0aa178124"
            }}
            style={styles.ImageBackground_1_942}
          />
          <View style={styles.View_1_945}>
            <Text style={styles.Text_1_945}>Search</Text>
          </View>
        </View>
        <View style={styles.View_1_946}>
          <Text style={styles.Text_1_946}>Auggie and Zo</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
          }}
          style={styles.ImageBackground_1_947}
        />
        <View style={styles.View_1_949}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dede/d444/bd60cdcc17ba2c2b13b4da1d2dd8dbef"
            }}
            style={styles.ImageBackground_1_950}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6846/0fa9/4c5f097cab243b9ad19a0522fc3f7536"
            }}
            style={styles.ImageBackground_1_951}
          />
          <View style={styles.View_1_952}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1_953}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1_955}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1_957}
            />
            <View style={styles.View_1_959}>
              <Text style={styles.Text_1_959}>The Cargo District</Text>
            </View>
            <View style={styles.View_1_960}>
              <Text style={styles.Text_1_960}>LuminaStation</Text>
            </View>
            <View style={styles.View_1_961}>
              <Text style={styles.Text_1_961}>CottonExchange</Text>
            </View>
          </View>
          <View style={styles.View_1_962}>
            <Text style={styles.Text_1_962}>Local’s Recommendations</Text>
          </View>
          <View style={styles.View_1_963}>
            <Text style={styles.Text_1_963}>Shopping Centers</Text>
          </View>
          <View style={styles.View_1_964}>
            <Text style={styles.Text_1_964}>Auggie &amp; Zo</Text>
          </View>
          <View style={styles.View_1_965}>
            <View style={styles.View_1_966}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4b8/20eb/83d159666ccce6a162befc0583608e88"
                }}
                style={styles.ImageBackground_1_967}
              />
              <View style={styles.View_1_968}>
                <Text style={styles.Text_1_968}>The Cargo District</Text>
              </View>
              <View style={styles.View_1_969}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_970}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_972}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_974}
                />
                <View style={styles.View_1_976}>
                  <Text style={styles.Text_1_976}>Bones</Text>
                </View>
                <View style={styles.View_1_977}>
                  <Text style={styles.Text_1_977}>SaltySoap</Text>
                </View>
                <View style={styles.View_1_978}>
                  <Text style={styles.Text_1_978}>Auggie &amp; Zo</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1_979}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4b8/20eb/83d159666ccce6a162befc0583608e88"
                }}
                style={styles.ImageBackground_1_980}
              />
              <View style={styles.View_1_981}>
                <Text style={styles.Text_1_981}>Lumina Station</Text>
              </View>
              <View style={styles.View_1_982}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_983}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_985}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_987}
                />
                <View style={styles.View_1_989}>
                  <Text style={styles.Text_1_989}>Airlie Moon</Text>
                </View>
                <View style={styles.View_1_990}>
                  <Text style={styles.Text_1_990}>Ziabird</Text>
                </View>
                <View style={styles.View_1_991}>
                  <Text style={styles.Text_1_991}>Island Passage</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1_992}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4b8/20eb/83d159666ccce6a162befc0583608e88"
                }}
                style={styles.ImageBackground_1_993}
              />
              <View style={styles.View_1_994}>
                <Text style={styles.Text_1_994}>The Cotton Exchange</Text>
              </View>
              <View style={styles.View_1_995}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_996}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_998}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1000}
                />
                <View style={styles.View_1_1002}>
                  <Text style={styles.Text_1_1002}>Heart of Carolina</Text>
                </View>
                <View style={styles.View_1_1003}>
                  <Text style={styles.Text_1_1003}>Down to Earth</Text>
                </View>
                <View style={styles.View_1_1004}>
                  <Text style={styles.Text_1_1004}>
                    Elizabeth’s Ladies Boutique
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1005}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da3e/6ea8/92e1fff1fca653e545d3f67e29aa5c81"
            }}
            style={styles.ImageBackground_1_1006}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c956/42b9/5c27e7e4aaac9bdf2d9bdf9753c4d78c"
            }}
            style={styles.ImageBackground_1_1008}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b898/5c7a/a1f9cd4024e5fc759e5b82bb8782e45c"
          }}
          style={styles.ImageBackground_1_1009}
        />
        <View style={styles.View_1_1010}>
          <View style={styles.View_1_1011}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a653/3236/d6055508299cc347774ff6c9a632d247"
              }}
              style={styles.ImageBackground_1_1012}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbff/a55c/0f9f45be0817ccec16c65df8bc5546d2"
            }}
            style={styles.ImageBackground_1_1015}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/858b/f03e/1baa0775554a232ae97731f0aa178124"
            }}
            style={styles.ImageBackground_1_1026}
          />
          <View style={styles.View_1_1029}>
            <Text style={styles.Text_1_1029}>Search</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eefc/4551/95f1e313590e923c5f6859229c2bdaeb"
          }}
          style={styles.ImageBackground_1_1030}
        />
        <View style={styles.View_1_1032}>
          <Text style={styles.Text_1_1032}>Food</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8697/a533/aaa17c6d022f0a27a71da5a6fbfc7695"
          }}
          style={styles.ImageBackground_1_1033}
        />
        <View style={styles.View_1_1035}>
          <Text style={styles.Text_1_1035}>Shop</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b606/1d30/bf6a2d717eeb9588776d72fde4344fc5"
          }}
          style={styles.ImageBackground_1_1036}
        />
        <View style={styles.View_1_1037}>
          <Text style={styles.Text_1_1037}>Beach Crowds</Text>
        </View>
        <View style={styles.View_1_1038}>
          <View style={styles.View_1_1039}>
            <View style={styles.View_1_1040}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a295/9208/e6b2d2159d9d0fdc5497647f1d720787"
                }}
                style={styles.ImageBackground_1_1041}
              />
            </View>
            <View style={styles.View_1_1043}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78f4/847c/540227691f0bef008d96ab2a53a2d78d"
                }}
                style={styles.ImageBackground_1_1044}
              />
              <View style={styles.View_1_1047}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b198/e8a3/f819b9cbabdefb1d15b56e8e5c71f25b"
                  }}
                  style={styles.ImageBackground_1_1048}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bae/4e75/80e3f56877ee3731f2c182e5e3f43e33"
                }}
                style={styles.ImageBackground_1_1052}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c0c/08b5/92f7a24251c30c7aef58d616361e1525"
                }}
                style={styles.ImageBackground_1_1053}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b898/5c7a/a1f9cd4024e5fc759e5b82bb8782e45c"
            }}
            style={styles.ImageBackground_1_1057}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  View_1_910: {
    width: wp("119%"),
    height: hp("173%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%")
  },
  ImageBackground_1_911: {
    width: wp("100%"),
    height: hp("115%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_912: {
    width: wp("106%"),
    height: hp("122%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_914: {
    width: wp("93%"),
    height: hp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1_915: {
    width: wp("29%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_1_916: {
    width: wp("29%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_918: {
    width: wp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_1_918: {
    color: "rgba(56, 61, 65, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_919: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_1_920: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_922: {
    width: wp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_1_922: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_923: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_924: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_925: {
    width: wp("15%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_1_925: {
    color: "rgba(56, 56, 56, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_926: {
    width: wp("86%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_1_927: {
    width: wp("71%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_928: {
    width: wp("71%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_931: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_1_942: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_945: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_1_945: {
    color: "rgba(168, 168, 168, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_946: {
    width: wp("21%"),
    top: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    justifyContent: "flex-start"
  },
  Text_1_946: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_947: {
    width: wp("110%"),
    height: hp("122%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_949: {
    width: wp("116%"),
    height: hp("115%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_950: {
    width: wp("100%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_951: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_1_952: {
    width: wp("107%"),
    height: hp("15%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_953: {
    width: wp("34%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_955: {
    width: wp("34%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_1_957: {
    width: wp("34%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_1_959: {
    width: wp("27%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_959: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_960: {
    width: wp("21%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    justifyContent: "flex-start"
  },
  Text_1_960: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_961: {
    width: wp("24%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    justifyContent: "flex-start"
  },
  Text_1_961: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_962: {
    width: wp("51%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_962: {
    color: "rgba(56, 61, 65, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_963: {
    width: wp("30%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_963: {
    color: "rgba(56, 61, 65, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_964: {
    width: wp("18%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    justifyContent: "flex-start"
  },
  Text_1_964: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_965: {
    width: wp("115%"),
    height: hp("88%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_966: {
    width: wp("115%"),
    height: hp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_967: {
    width: wp("100%"),
    height: hp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_968: {
    width: wp("35%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_968: {
    color: "rgba(56, 61, 65, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_969: {
    width: wp("112%"),
    height: hp("21%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_970: {
    width: wp("35%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_1_972: {
    width: wp("35%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_974: {
    width: wp("35%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_1_976: {
    width: wp("9%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_976: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_977: {
    width: wp("14%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    justifyContent: "flex-start"
  },
  Text_1_977: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_978: {
    width: wp("15%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    justifyContent: "flex-start"
  },
  Text_1_978: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_979: {
    width: wp("115%"),
    height: hp("32%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_980: {
    width: wp("100%"),
    height: hp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_981: {
    width: wp("29%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_981: {
    color: "rgba(56, 61, 65, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_982: {
    width: wp("112%"),
    height: hp("21%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_983: {
    width: wp("35%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_1_985: {
    width: wp("35%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_987: {
    width: wp("35%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_1_989: {
    width: wp("17%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_989: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_990: {
    width: wp("10%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    justifyContent: "flex-start"
  },
  Text_1_990: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_991: {
    width: wp("18%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    justifyContent: "flex-start"
  },
  Text_1_991: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_992: {
    width: wp("115%"),
    height: hp("32%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_993: {
    width: wp("100%"),
    height: hp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_994: {
    width: wp("41%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_994: {
    color: "rgba(56, 61, 65, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_995: {
    width: wp("112%"),
    height: hp("21%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_996: {
    width: wp("35%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_1_998: {
    width: wp("35%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1000: {
    width: wp("35%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_1_1002: {
    width: wp("25%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1002: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1003: {
    width: wp("22%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    justifyContent: "flex-start"
  },
  Text_1_1003: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1004: {
    width: wp("34%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    justifyContent: "flex-start"
  },
  Text_1_1004: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1005: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_1_1006: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1008: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_1_1009: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  View_1_1010: {
    width: wp("86%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_1_1011: {
    width: wp("71%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1012: {
    width: wp("71%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1015: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_1_1026: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_1029: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_1_1029: {
    color: "rgba(168, 168, 168, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1030: {
    width: wp("29%"),
    height: hp("5%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_1_1032: {
    width: wp("5%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    justifyContent: "flex-start"
  },
  Text_1_1032: {
    color: "rgba(56, 61, 65, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1033: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  View_1_1035: {
    width: wp("5%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    justifyContent: "flex-start"
  },
  Text_1_1035: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1036: {
    width: wp("28%"),
    height: hp("5%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1_1037: {
    width: wp("15%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_1_1037: {
    color: "rgba(56, 56, 56, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1038: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_1_1039: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1040: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1041: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1043: {
    width: wp("65%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_1_1044: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1047: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_1_1048: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1052: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_1_1053: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_1_1057: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
