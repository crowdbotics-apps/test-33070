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
      <View style={styles.View_1_1403}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4a3/5254/39e641e39479fbb25ac45695dcd32418"
          }}
          style={styles.ImageBackground_1_1404}
        />
        <View style={styles.View_1_1405}>
          <Text style={styles.Text_1_1405}>Destinations</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/019f/2b06/fad5ebd4b9640ffa9f9e42b65a91dcb8"
          }}
          style={styles.ImageBackground_1_1406}
        />
        <View style={styles.View_1_1409}>
          <Text style={styles.Text_1_1409}>What Should I Eat?</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/858b/f03e/1baa0775554a232ae97731f0aa178124"
          }}
          style={styles.ImageBackground_1_1410}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
          }}
          style={styles.ImageBackground_1_1413}
        />
        <View style={styles.View_1_1414}>
          <Text style={styles.Text_1_1414}>John</Text>
        </View>
        <View style={styles.View_1_1415}>
          <View style={styles.View_1_1416}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1_1417}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2681/bd3d/3068ce27ee4b907429fb4dc57727ed1c"
              }}
              style={styles.ImageBackground_1_1418}
            />
            <View style={styles.View_1_1419}>
              <Text style={styles.Text_1_1419}>Scuba Dive Megalodon Ridge</Text>
            </View>
            <View style={styles.View_1_1420}>
              <View style={styles.View_1_1421}>
                <Text style={styles.Text_1_1421}>Usa, Wilmington</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c90/20c5/6645a30e6b28d872b40c49adc6839f27"
                }}
                style={styles.ImageBackground_1_1422}
              />
            </View>
          </View>
          <View style={styles.View_1_1423}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_1_1424}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc14/19b5/4d31629a3d0318b18590007f9e03ab85"
              }}
              style={styles.ImageBackground_1_1425}
            />
          </View>
          <View style={styles.View_1_1427}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9537/b5b9/2a393ece25e7f1c06b2f97ea90381732"
              }}
              style={styles.ImageBackground_1_1428}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f9b/6dcc/5fb0010136d4316903b0b6ef1d389dc8"
              }}
              style={styles.ImageBackground_1_1429}
            />
          </View>
          <View style={styles.View_1_1431}>
            <View style={styles.View_1_1432}>
              <View style={styles.View_1_1433}>
                <View style={styles.View_1_1434}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1435}
                  />
                  <View style={styles.View_1_1436}>
                    <Text style={styles.Text_1_1436}>Amazing Louvre </Text>
                  </View>
                  <View style={styles.View_1_1437}>
                    <View style={styles.View_1_1438}>
                      <Text style={styles.Text_1_1438}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/341b/d5c4/9f2778c18b7da3a6745f627294a58030"
                      }}
                      style={styles.ImageBackground_1_1439}
                    />
                  </View>
                  <View style={styles.View_1_1445}>
                    <View style={styles.View_1_1446}>
                      <Text style={styles.Text_1_1446}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1447}
                    />
                  </View>
                </View>
                <View style={styles.View_1_1450}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1451}
                  />
                  <View style={styles.View_1_1452}>
                    <Text style={styles.Text_1_1452}>
                      Live Oak Bank Pavilion{" "}
                    </Text>
                  </View>
                  <View style={styles.View_1_1453}>
                    <View style={styles.View_1_1454}>
                      <Text style={styles.Text_1_1454}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f5d/25ad/8c137066fb8b9a17bd340551cdf2166e"
                      }}
                      style={styles.ImageBackground_1_1455}
                    />
                  </View>
                  <View style={styles.View_1_1461}>
                    <View style={styles.View_1_1462}>
                      <Text style={styles.Text_1_1462}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1463}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1466}
                />
              </View>
              <View style={styles.View_1_1467}>
                <View style={styles.View_1_1468}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1469}
                  />
                  <View style={styles.View_1_1470}>
                    <Text style={styles.Text_1_1470}>Amazing Louvre </Text>
                  </View>
                  <View style={styles.View_1_1471}>
                    <View style={styles.View_1_1472}>
                      <Text style={styles.Text_1_1472}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f5d/25ad/8c137066fb8b9a17bd340551cdf2166e"
                      }}
                      style={styles.ImageBackground_1_1473}
                    />
                  </View>
                  <View style={styles.View_1_1479}>
                    <View style={styles.View_1_1480}>
                      <Text style={styles.Text_1_1480}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1481}
                    />
                  </View>
                </View>
                <View style={styles.View_1_1484}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1485}
                  />
                  <View style={styles.View_1_1486}>
                    <Text style={styles.Text_1_1486}>
                      Live Oak Bank Pavilion{" "}
                    </Text>
                  </View>
                  <View style={styles.View_1_1487}>
                    <View style={styles.View_1_1488}>
                      <Text style={styles.Text_1_1488}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f5d/25ad/8c137066fb8b9a17bd340551cdf2166e"
                      }}
                      style={styles.ImageBackground_1_1489}
                    />
                  </View>
                  <View style={styles.View_1_1495}>
                    <View style={styles.View_1_1496}>
                      <Text style={styles.Text_1_1496}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1497}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1500}
                />
              </View>
              <View style={styles.View_1_1501}>
                <View style={styles.View_1_1502}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1503}
                  />
                  <View style={styles.View_1_1504}>
                    <Text style={styles.Text_1_1504}>Amazing Louvre </Text>
                  </View>
                  <View style={styles.View_1_1505}>
                    <View style={styles.View_1_1506}>
                      <Text style={styles.Text_1_1506}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f5d/25ad/8c137066fb8b9a17bd340551cdf2166e"
                      }}
                      style={styles.ImageBackground_1_1507}
                    />
                  </View>
                  <View style={styles.View_1_1513}>
                    <View style={styles.View_1_1514}>
                      <Text style={styles.Text_1_1514}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1515}
                    />
                  </View>
                </View>
                <View style={styles.View_1_1518}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1519}
                  />
                  <View style={styles.View_1_1520}>
                    <Text style={styles.Text_1_1520}>
                      Live Oak Bank Pavilion{" "}
                    </Text>
                  </View>
                  <View style={styles.View_1_1521}>
                    <View style={styles.View_1_1522}>
                      <Text style={styles.Text_1_1522}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/341b/d5c4/9f2778c18b7da3a6745f627294a58030"
                      }}
                      style={styles.ImageBackground_1_1523}
                    />
                  </View>
                  <View style={styles.View_1_1529}>
                    <View style={styles.View_1_1530}>
                      <Text style={styles.Text_1_1530}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1531}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1534}
                />
              </View>
              <View style={styles.View_1_1535}>
                <View style={styles.View_1_1536}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1537}
                  />
                  <View style={styles.View_1_1538}>
                    <Text style={styles.Text_1_1538}>Amazing Louvre </Text>
                  </View>
                  <View style={styles.View_1_1539}>
                    <View style={styles.View_1_1540}>
                      <Text style={styles.Text_1_1540}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/341b/d5c4/9f2778c18b7da3a6745f627294a58030"
                      }}
                      style={styles.ImageBackground_1_1541}
                    />
                  </View>
                  <View style={styles.View_1_1547}>
                    <View style={styles.View_1_1548}>
                      <Text style={styles.Text_1_1548}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1549}
                    />
                  </View>
                </View>
                <View style={styles.View_1_1552}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1553}
                  />
                  <View style={styles.View_1_1554}>
                    <Text style={styles.Text_1_1554}>
                      Live Oak Bank Pavilion{" "}
                    </Text>
                  </View>
                  <View style={styles.View_1_1555}>
                    <View style={styles.View_1_1556}>
                      <Text style={styles.Text_1_1556}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/341b/d5c4/9f2778c18b7da3a6745f627294a58030"
                      }}
                      style={styles.ImageBackground_1_1557}
                    />
                  </View>
                  <View style={styles.View_1_1563}>
                    <View style={styles.View_1_1564}>
                      <Text style={styles.Text_1_1564}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1565}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1568}
                />
              </View>
              <View style={styles.View_1_1569}>
                <View style={styles.View_1_1570}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1571}
                  />
                  <View style={styles.View_1_1572}>
                    <Text style={styles.Text_1_1572}>Amazing Louvre </Text>
                  </View>
                  <View style={styles.View_1_1573}>
                    <View style={styles.View_1_1574}>
                      <Text style={styles.Text_1_1574}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/341b/d5c4/9f2778c18b7da3a6745f627294a58030"
                      }}
                      style={styles.ImageBackground_1_1575}
                    />
                  </View>
                  <View style={styles.View_1_1581}>
                    <View style={styles.View_1_1582}>
                      <Text style={styles.Text_1_1582}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1583}
                    />
                  </View>
                </View>
                <View style={styles.View_1_1586}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1587}
                  />
                  <View style={styles.View_1_1588}>
                    <Text style={styles.Text_1_1588}>
                      Live Oak Bank Pavilion{" "}
                    </Text>
                  </View>
                  <View style={styles.View_1_1589}>
                    <View style={styles.View_1_1590}>
                      <Text style={styles.Text_1_1590}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/341b/d5c4/9f2778c18b7da3a6745f627294a58030"
                      }}
                      style={styles.ImageBackground_1_1591}
                    />
                  </View>
                  <View style={styles.View_1_1597}>
                    <View style={styles.View_1_1598}>
                      <Text style={styles.Text_1_1598}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1599}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1602}
                />
              </View>
              <View style={styles.View_1_1603}>
                <View style={styles.View_1_1604}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1605}
                  />
                  <View style={styles.View_1_1606}>
                    <Text style={styles.Text_1_1606}>Amazing Louvre </Text>
                  </View>
                  <View style={styles.View_1_1607}>
                    <View style={styles.View_1_1608}>
                      <Text style={styles.Text_1_1608}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/341b/d5c4/9f2778c18b7da3a6745f627294a58030"
                      }}
                      style={styles.ImageBackground_1_1609}
                    />
                  </View>
                  <View style={styles.View_1_1615}>
                    <View style={styles.View_1_1616}>
                      <Text style={styles.Text_1_1616}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1617}
                    />
                  </View>
                </View>
                <View style={styles.View_1_1620}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_1_1621}
                  />
                  <View style={styles.View_1_1622}>
                    <Text style={styles.Text_1_1622}>
                      Live Oak Bank Pavilion{" "}
                    </Text>
                  </View>
                  <View style={styles.View_1_1623}>
                    <View style={styles.View_1_1624}>
                      <Text style={styles.Text_1_1624}>4.5 OUT OF 5</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/341b/d5c4/9f2778c18b7da3a6745f627294a58030"
                      }}
                      style={styles.ImageBackground_1_1625}
                    />
                  </View>
                  <View style={styles.View_1_1631}>
                    <View style={styles.View_1_1632}>
                      <Text style={styles.Text_1_1632}>Usa, Wilmington</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/553f/f9a3/62bd8ae187dc9051aed1e266d8e8c85e"
                      }}
                      style={styles.ImageBackground_1_1633}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                  }}
                  style={styles.ImageBackground_1_1636}
                />
              </View>
            </View>
            <View style={styles.View_1_1637}>
              <View style={styles.View_1_1638}>
                <Text style={styles.Text_1_1638}>Recommendation</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1_1639}>
            <Text style={styles.Text_1_1639}>What Are You Looking For</Text>
          </View>
          <View style={styles.View_1_1640}>
            <Text style={styles.Text_1_1640}>Show All</Text>
          </View>
          <View style={styles.View_1_1641}>
            <Text style={styles.Text_1_1641}>Local’s Recommendations</Text>
          </View>
          <View style={styles.View_1_1642}>
            <Text style={styles.Text_1_1642}>Usa, Wilmington</Text>
          </View>
          <View style={styles.View_1_1643}>
            <Text style={styles.Text_1_1643}>Night Clubs</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f736/3206/d7e90e92e0707f7d8306b365b36d8262"
            }}
            style={styles.ImageBackground_1_1644}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b26e/ea9d/ae7331cf2fec26ebd79252d38a97a2bf"
            }}
            style={styles.ImageBackground_1_1645}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aae1/86ee/6ece4ae2337923f20c128c617568460e"
            }}
            style={styles.ImageBackground_1_1655}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/648f/1b83/5614a3477129e7072ac51063cbec3430"
            }}
            style={styles.ImageBackground_1_1665}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f587/9ef3/e627aa07bdeec5e8d4cd347449bf767e"
            }}
            style={styles.ImageBackground_1_1675}
          />
          <View style={styles.View_1_1676}>
            <Text style={styles.Text_1_1676}>Now</Text>
          </View>
          <View style={styles.View_1_1677}>
            <Text style={styles.Text_1_1677}>1pm</Text>
          </View>
          <View style={styles.View_1_1678}>
            <Text style={styles.Text_1_1678}>2pm</Text>
          </View>
          <View style={styles.View_1_1679}>
            <Text style={styles.Text_1_1679}>3pm</Text>
          </View>
          <View style={styles.View_1_1680}>
            <View style={styles.View_1_1681}>
              <Text style={styles.Text_1_1681}>23</Text>
            </View>
            <View style={styles.View_1_1682}>
              <Text style={styles.Text_1_1682}>o</Text>
            </View>
          </View>
          <View style={styles.View_1_1683}>
            <View style={styles.View_1_1684}>
              <Text style={styles.Text_1_1684}>23</Text>
            </View>
            <View style={styles.View_1_1685}>
              <Text style={styles.Text_1_1685}>o</Text>
            </View>
          </View>
          <View style={styles.View_1_1686}>
            <View style={styles.View_1_1687}>
              <Text style={styles.Text_1_1687}>23</Text>
            </View>
            <View style={styles.View_1_1688}>
              <Text style={styles.Text_1_1688}>o</Text>
            </View>
          </View>
          <View style={styles.View_1_1689}>
            <View style={styles.View_1_1690}>
              <Text style={styles.Text_1_1690}>23</Text>
            </View>
            <View style={styles.View_1_1691}>
              <Text style={styles.Text_1_1691}>o</Text>
            </View>
          </View>
          <View style={styles.View_1_1692}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1af/bf3f/0759e9208b3b7e1e28df370ea839dcf4"
              }}
              style={styles.ImageBackground_1_1693}
            />
            <View style={styles.View_1_1694}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/246f/cc48/f3cb125286e170ec1a1052f0a8cefba7"
                }}
                style={styles.ImageBackground_1_1695}
              />
            </View>
          </View>
          <View style={styles.View_1_1697}>
            <Text style={styles.Text_1_1697}>6pm</Text>
          </View>
          <View style={styles.View_1_1698}>
            <View style={styles.View_1_1699}>
              <Text style={styles.Text_1_1699}>23</Text>
            </View>
            <View style={styles.View_1_1700}>
              <Text style={styles.Text_1_1700}>o</Text>
            </View>
          </View>
          <View style={styles.View_1_1701}>
            <Text style={styles.Text_1_1701}>5pm</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f32/e9a9/ff1ddc0513399d0daca741e3828034e7"
            }}
            style={styles.ImageBackground_1_1702}
          />
          <View style={styles.View_1_1708}>
            <View style={styles.View_1_1709}>
              <Text style={styles.Text_1_1709}>23</Text>
            </View>
            <View style={styles.View_1_1710}>
              <Text style={styles.Text_1_1710}>o</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb3b/2c53/27377507826034319b83759841d5bb50"
            }}
            style={styles.ImageBackground_1_1711}
          />
          <View style={styles.View_1_1712}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be65/3cb4/3fc3a718a3958e9e160ab7951c5c65b9"
              }}
              style={styles.ImageBackground_1_1713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9876/1d06/af4253b68ab777904d55f37e5a90fb5e"
              }}
              style={styles.ImageBackground_1_1720}
            />
          </View>
          <View style={styles.View_1_1721}>
            <Text style={styles.Text_1_1721}>4pm</Text>
          </View>
          <View style={styles.View_1_1722}>
            <View style={styles.View_1_1723}>
              <Text style={styles.Text_1_1723}>23</Text>
            </View>
            <View style={styles.View_1_1724}>
              <Text style={styles.Text_1_1724}>o</Text>
            </View>
          </View>
          <View style={styles.View_1_1725}>
            <View style={styles.View_1_1726}>
              <View style={styles.View_1_1727}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7a8/a965/b5412188cf727e099845c53488f9d07e"
                  }}
                  style={styles.ImageBackground_1_1728}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/733b/5666/2918b4fc8d8e04e49848eabc14df2680"
                }}
                style={styles.ImageBackground_1_1730}
              />
            </View>
            <View style={styles.View_1_1731}>
              <View style={styles.View_1_1732}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b728/0188/e20dde0792434daef0c52ac444110597"
                  }}
                  style={styles.ImageBackground_1_1733}
                />
              </View>
              <View style={styles.View_1_1735}>
                <Text style={styles.Text_1_1735}>IndoorActivities</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/733b/5666/2918b4fc8d8e04e49848eabc14df2680"
                }}
                style={styles.ImageBackground_1_1736}
              />
            </View>
            <View style={styles.View_1_1737}>
              <View style={styles.View_1_1738}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0082/9582/f6beebcdd1032a9535b5d25c8ed3b2af"
                  }}
                  style={styles.ImageBackground_1_1739}
                />
              </View>
              <View style={styles.View_1_1741}>
                <Text style={styles.Text_1_1741}>OutdoorActivities</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/733b/5666/2918b4fc8d8e04e49848eabc14df2680"
                }}
                style={styles.ImageBackground_1_1742}
              />
            </View>
            <View style={styles.View_1_1743}>
              <View style={styles.View_1_1744}>
                <Text style={styles.Text_1_1744}>Night club</Text>
              </View>
              <View style={styles.View_1_1745}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d3b/473a/c84d7635e2abfe2ad28f73a4e8b072a6"
                  }}
                  style={styles.ImageBackground_1_1746}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/733b/5666/2918b4fc8d8e04e49848eabc14df2680"
                }}
                style={styles.ImageBackground_1_1748}
              />
            </View>
            <View style={styles.View_1_1749}>
              <View style={styles.View_1_1750}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc82/0801/f4feb2fc504bea720448d0016626da9a"
                  }}
                  style={styles.ImageBackground_1_1751}
                />
                <View style={styles.View_1_1753}>
                  <Text style={styles.Text_1_1753}>Tour</Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3462/daf8/4424ce3bd2af560cb5f12613bede570c"
                }}
                style={styles.ImageBackground_1_1754}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1_1755}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a295/9208/e6b2d2159d9d0fdc5497647f1d720787"
            }}
            style={styles.ImageBackground_1_1756}
          />
          <View style={styles.View_1_1758}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6899/0fbc/c2c5a55e8d4f12679230473727951868"
              }}
              style={styles.ImageBackground_1_1759}
            />
            <View style={styles.View_1_1762}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15ac/a3f2/1393eebf3ee66a180f07ea9f530ad716"
                }}
                style={styles.ImageBackground_1_1763}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c0c/08b5/92f7a24251c30c7aef58d616361e1525"
              }}
              style={styles.ImageBackground_1_1767}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b898/5c7a/a1f9cd4024e5fc759e5b82bb8782e45c"
            }}
            style={styles.ImageBackground_1_1771}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bae/4e75/80e3f56877ee3731f2c182e5e3f43e33"
            }}
            style={styles.ImageBackground_1_1772}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("115%") },
  View_1_1403: {
    width: wp("109%"),
    height: hp("251%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1404: {
    width: wp("100%"),
    height: hp("115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1405: {
    width: wp("33%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_1_1405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1406: {
    width: wp("86%"),
    height: hp("6%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_1409: {
    width: wp("26%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_1_1409: {
    color: "rgba(168, 168, 168, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1410: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_1_1413: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  View_1_1414: {
    width: wp("7%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    justifyContent: "flex-start"
  },
  Text_1_1414: {
    color: "rgba(56, 61, 65, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1415: {
    width: wp("109%"),
    height: hp("231%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1416: {
    width: wp("46%"),
    height: hp("27%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1417: {
    width: wp("41%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1418: {
    width: wp("41%"),
    height: hp("8%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1419: {
    width: wp("43%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1419: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1420: {
    width: wp("20%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_1_1421: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1421: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1422: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1423: {
    width: wp("41%"),
    height: hp("27%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_1_1424: {
    width: wp("41%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1425: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_1427: {
    width: wp("41%"),
    height: hp("8%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_1_1428: {
    width: wp("41%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1429: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_1_1431: {
    width: wp("100%"),
    height: hp("158%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1432: {
    width: wp("100%"),
    height: hp("153%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1433: {
    width: wp("100%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1434: {
    width: wp("64%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1435: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1436: {
    width: wp("40%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1436: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1437: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1438: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1438: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1439: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1445: {
    width: wp("22%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1446: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1446: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1447: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1450: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1451: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1452: {
    width: wp("53%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1452: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1453: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1454: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1454: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1455: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1461: {
    width: wp("20%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1462: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1462: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1463: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1466: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1467: {
    width: wp("100%"),
    height: hp("29%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1468: {
    width: wp("64%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1469: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1470: {
    width: wp("40%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1470: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1471: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1472: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1472: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1473: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1479: {
    width: wp("22%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1480: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1480: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1481: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1484: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1485: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1486: {
    width: wp("53%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1486: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1487: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1488: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1488: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1489: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1495: {
    width: wp("20%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1496: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1496: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1497: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1500: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1501: {
    width: wp("100%"),
    height: hp("29%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1502: {
    width: wp("64%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1503: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1504: {
    width: wp("40%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1504: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1505: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1506: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1506: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1507: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1513: {
    width: wp("22%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1514: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1514: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1515: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1518: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1519: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1520: {
    width: wp("53%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1520: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1521: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1522: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1522: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1523: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1529: {
    width: wp("20%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1530: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1530: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1531: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1534: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1535: {
    width: wp("100%"),
    height: hp("29%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1536: {
    width: wp("64%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1537: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1538: {
    width: wp("40%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1538: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1539: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1540: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1540: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1541: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1547: {
    width: wp("22%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1548: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1548: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1549: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1552: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1553: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1554: {
    width: wp("53%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1554: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1555: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1556: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1556: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1557: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1563: {
    width: wp("20%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1564: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1564: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1565: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1568: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1569: {
    width: wp("100%"),
    height: hp("29%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1570: {
    width: wp("64%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1571: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1572: {
    width: wp("40%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1572: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1573: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1574: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1574: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1575: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1581: {
    width: wp("22%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1582: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1582: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1583: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1586: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1587: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1588: {
    width: wp("53%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1588: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1589: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1590: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1590: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1591: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1597: {
    width: wp("20%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1598: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1598: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1599: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1602: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1603: {
    width: wp("100%"),
    height: hp("29%"),
    top: hp("124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1604: {
    width: wp("64%"),
    height: hp("10%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1605: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1606: {
    width: wp("40%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1606: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1607: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1608: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1608: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1609: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1615: {
    width: wp("22%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1616: {
    width: wp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1616: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1617: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1620: {
    width: wp("77%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1621: {
    width: wp("19%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1622: {
    width: wp("53%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1622: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1623: {
    width: wp("37%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1624: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_1_1624: {
    color: "rgba(156, 169, 197, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1625: {
    width: wp("18%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1631: {
    width: wp("20%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1632: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1632: {
    color: "rgba(242, 130, 81, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1633: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1636: {
    width: wp("100%"),
    height: hp("17%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1637: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_1638: {
    width: wp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1638: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1639: {
    width: wp("40%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_1_1639: {
    color: "rgba(58, 66, 86, 1)",
    fontSize: 10.5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1640: {
    width: wp("13%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    justifyContent: "flex-start"
  },
  Text_1_1640: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1641: {
    width: wp("38%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_1_1641: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1642: {
    width: wp("17%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    justifyContent: "flex-start"
  },
  Text_1_1642: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1643: {
    width: wp("17%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    justifyContent: "flex-start"
  },
  Text_1_1643: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1644: {
    width: wp("86%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_1_1645: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_1_1655: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_1_1665: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_1_1675: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_1_1676: {
    width: wp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    justifyContent: "flex-start"
  },
  Text_1_1676: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1677: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_1_1677: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1678: {
    width: wp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    justifyContent: "flex-start"
  },
  Text_1_1678: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1679: {
    width: wp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    justifyContent: "flex-start"
  },
  Text_1_1679: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1680: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_1_1681: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1681: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1682: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1682: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1683: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  View_1_1684: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1684: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1685: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1685: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1686: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_1_1687: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1687: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1688: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1688: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1689: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  View_1_1690: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1690: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1691: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1691: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1692: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_1_1693: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1694: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_1695: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1697: {
    width: wp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    justifyContent: "flex-start"
  },
  Text_1_1697: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1698: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_1_1699: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1699: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1700: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1700: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1701: {
    width: wp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    justifyContent: "flex-start"
  },
  Text_1_1701: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1702: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  View_1_1708: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  View_1_1709: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1709: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1710: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1710: {
    color: "rgba(253, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1711: {
    width: wp("11%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  View_1_1712: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_1_1713: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_1_1720: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1721: {
    width: wp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    justifyContent: "flex-start"
  },
  Text_1_1721: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1722: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  View_1_1723: {
    width: wp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1723: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1724: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_1_1724: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1725: {
    width: wp("103%"),
    height: hp("11%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_1_1726: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  View_1_1727: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_1728: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1730: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1731: {
    width: wp("25%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  View_1_1732: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_1733: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1735: {
    width: wp("22%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_1735: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1736: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1737: {
    width: wp("26%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_1_1738: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_1739: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1741: {
    width: wp("24%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_1_1741: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1742: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1743: {
    width: wp("15%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_1_1744: {
    width: wp("14%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1744: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1745: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_1746: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1748: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1749: {
    width: wp("15%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1750: {
    width: wp("6%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_1_1751: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1753: {
    width: wp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_1753: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1754: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1755: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_1756: {
    width: wp("86%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1758: {
    width: wp("65%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_1_1759: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1762: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_1_1763: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1767: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  ImageBackground_1_1771: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_1772: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
