import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const ConversionOutput = () => {
  return (
    <View style={styles.conversionOutput}>
      <View style={[styles.container72, styles.containerShadowBox2]}>
        <View style={[styles.container69, styles.containerShadowBox2]}>
          <Text style={[styles.termsAndConditions, styles.aboutTypo]}>
            Terms and conditions
          </Text>
          <Text style={[styles.privacyPolicy, styles.aboutTypo]}>
            Privacy policy
          </Text>
          <Text style={[styles.homepage, styles.aboutTypo]}>Homepage</Text>
          <Text style={[styles.services, styles.textTypo5]}>Services</Text>
          <Text style={[styles.portfolio, styles.aboutTypo]}>Portfolio</Text>
          <Text style={[styles.pricing, styles.aboutTypo]}>Pricing</Text>
          <Text style={[styles.about, styles.aboutTypo]}>About</Text>
          <Image
            style={[styles.image35Icon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/image-35.png")}
          />
          <Image
            style={[styles.image36Icon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/image-35.png")}
          />
          <Image
            style={[styles.image37Icon, styles.iconPosition1]}
            resizeMode="cover"
            source={require("../assets/image-37.png")}
          />
          <Image
            style={[styles.image41Icon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/image-35.png")}
          />
          <Image
            style={[styles.image45Icon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/image-35.png")}
          />
          <Image
            style={[styles.image46Icon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/image-35.png")}
          />
          <Image
            style={[styles.image47Icon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/image-35.png")}
          />
        </View>
        <View style={[styles.container66, styles.containerShadowBox1]}>
          <View style={[styles.button24, styles.buttonLayout2]}>
            <Text style={[styles.text, styles.textTypo4]} />
            <Image
              style={[styles.gearIcon, styles.textPosition]}
              resizeMode="cover"
              source={require("../assets/gear.png")}
            />
          </View>
          <Image
            style={styles.image31Icon}
            resizeMode="cover"
            source={require("../assets/image-31.png")}
          />
          <Image
            style={[styles.stack1Icon, styles.fontSizePosition]}
            resizeMode="cover"
            source={require("../assets/stack-1.png")}
          />
        </View>
        <View style={[styles.textbox5, styles.textboxLayout]}>
          <Image
            style={[styles.textfieldIcon, styles.textfieldIconLayout]}
            resizeMode="cover"
            source={require("../assets/textfield.png")}
          />
          <Text style={[styles.text1, styles.textClr]}>字型</Text>
        </View>
        <View style={[styles.container78, styles.containerShadowBox2]}>
          <Image
            style={[styles.image48Icon, styles.text2Layout]}
            resizeMode="cover"
            source={require("../assets/image-48.png")}
          />
          <Image
            style={[styles.image49Icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/image-49.png")}
          />
          <Image
            style={[styles.image50Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/image-50.png")}
          />
          <Image
            style={[styles.image51Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/image-51.png")}
          />
          <Image
            style={[styles.image54Icon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/image-54.png")}
          />
          <Image
            style={[styles.image57Icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/image-57.png")}
          />
        </View>
        <Image
          style={styles.container79Icon}
          resizeMode="cover"
          source={require("../assets/container-79.png")}
        />
        <View style={[styles.textbox51, styles.textboxLayout]}>
          <Text style={[styles.text2, styles.text2Layout]}>大小</Text>
          <Image
            style={[styles.textfieldIcon1, styles.textfieldIconLayout]}
            resizeMode="cover"
            source={require("../assets/textfield1.png")}
          />
        </View>
        <View style={[styles.textbox52, styles.textboxBg]}>
          <Text style={styles.text3}>位置</Text>
          <Image
            style={[styles.textfieldIcon2, styles.textfieldIconLayout]}
            resizeMode="cover"
            source={require("../assets/textfield2.png")}
          />
        </View>
        <View style={[styles.textbox53, styles.textboxLayout]}>
          <Text style={[styles.text4, styles.textTypo]}>颜色</Text>
          <Image
            style={[styles.textfieldIcon3, styles.textfieldIconLayout]}
            resizeMode="cover"
            source={require("../assets/textfield3.png")}
          />
          <View style={[styles.textbox54, styles.textboxBg]}>
            <Text style={[styles.text5, styles.textTypo]}>透明度</Text>
            <Image
              style={[styles.textfieldIcon4, styles.textfieldIconLayout]}
              resizeMode="cover"
              source={require("../assets/textfield4.png")}
            />
          </View>
        </View>
        <Text style={[styles.text6, styles.textClr]}>新增页面</Text>
        <Text style={[styles.text7, styles.text7Layout]}>页面</Text>
      </View>
      <View style={[styles.container68, styles.containerShadowBox]}>
        <Text style={[styles.fontSize, styles.fontSizePosition]}>
          - Font size
        </Text>
        <Image
          style={styles.flight1Icon}
          resizeMode="cover"
          source={require("../assets/flight-1.png")}
        />
        <Image
          style={[styles.caretDown10, styles.downLayout]}
          resizeMode="cover"
          source={require("../assets/caret-down-10.png")}
        />
        <Image
          style={[styles.caretDown12, styles.caretPosition]}
          resizeMode="cover"
          source={require("../assets/caret-down-10.png")}
        />
        <Image
          style={[styles.caretDown13, styles.caretPosition]}
          resizeMode="cover"
          source={require("../assets/caret-down-10.png")}
        />
        <Image
          style={[styles.image39Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/image-39.png")}
        />
        <Image
          style={styles.image40Icon}
          resizeMode="cover"
          source={require("../assets/image-40.png")}
        />
        <Image
          style={styles.image42Icon}
          resizeMode="cover"
          source={require("../assets/image-42.png")}
        />
        <Image
          style={[styles.image43Icon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/image-43.png")}
        />
        <Image
          style={[styles.image44Icon, styles.text7Layout]}
          resizeMode="cover"
          source={require("../assets/image-44.png")}
        />
      </View>
      <Text
        style={[styles.theNextGeneration, styles.text9Clr]}
      >{`hello world `}</Text>
      <View style={styles.textarea1}>
        <Text style={[styles.powerfulAndEasy, styles.text9Clr]}>helllo</Text>
        <Image
          style={[styles.resizingHandleIcon, styles.downLayout]}
          resizeMode="cover"
          source={require("../assets/resizing-handle.png")}
        />
      </View>
      <View style={[styles.button25, styles.buttonLayout2]}>
        <Text style={[styles.text8, styles.textTypo4]} />
        <Image
          style={[styles.eAddIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/e-add.png")}
        />
      </View>
      <View style={[styles.button13, styles.buttonLayout]}>
        <Text style={[styles.text9, styles.text9Clr]} />
        <Image
          style={[styles.removeRedEye, styles.textIconPosition]}
          resizeMode="cover"
          source={require("../assets/remove-red-eye.png")}
        />
      </View>
      <View style={[styles.button14, styles.button14Bg]}>
        <Text style={[styles.text10, styles.textPosition]} />
        <Image
          style={[styles.fullscreenIcon, styles.iconLayout2]}
          resizeMode="cover"
          source={require("../assets/fullscreen.png")}
        />
      </View>
      <View style={[styles.container26, styles.containerShadowBox]}>
        <View style={[styles.button1, styles.buttonLayout]}>
          <Text style={[styles.text11, styles.textPosition]} />
          <Image
            style={[styles.removeRedEye1, styles.textIconPosition]}
            resizeMode="cover"
            source={require("../assets/remove-red-eye1.png")}
          />
        </View>
        <View style={[styles.button2, styles.buttonLayout]}>
          <Text style={[styles.text10, styles.textPosition]} />
          <Image
            style={[styles.fullscreenIcon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/fullscreen1.png")}
          />
        </View>
        <View style={[styles.button4, styles.buttonLayout]}>
          <Text style={[styles.text13, styles.textPosition]} />
          <Image
            style={[styles.codeIcon, styles.textIconPosition]}
            resizeMode="cover"
            source={require("../assets/code.png")}
          />
        </View>
        <View style={[styles.button5, styles.buttonLayout]}>
          <Text style={[styles.text9, styles.text9Clr]} />
          <Image
            style={[styles.removeRedEye, styles.textIconPosition]}
            resizeMode="cover"
            source={require("../assets/undo.png")}
          />
        </View>
        <View style={[styles.container3, styles.button14Bg]}>
          <Text style={[styles.desktop, styles.desktopTypo]}>Desktop</Text>
          <Image
            style={[styles.triangleSmDown1, styles.downLayout]}
            resizeMode="cover"
            source={require("../assets/triangle-sm-down-1.png")}
          />
        </View>
        <View style={[styles.container4, styles.buttonLayout2]}>
          <Text style={[styles.desktop1, styles.desktopTypo]}>保存</Text>
          <Image
            style={[styles.triangleSmDown1, styles.downLayout]}
            resizeMode="cover"
            source={require("../assets/triangle-sm-down-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerShadowBox2: {
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  aboutTypo: {
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
  },
  textTypo5: {
    fontSize: FontSize.size_sm,
    lineHeight: 22,
  },
  iconLayout3: {
    height: 17,
    borderRadius: Border.br_9xs,
  },
  iconPosition1: {
    width: 17,
    left: 17,
    position: "absolute",
  },
  containerShadowBox1: {
    height: 39,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonLayout2: {
    height: 33,
    position: "absolute",
  },
  textTypo4: {
    color: Color.colorDarkolivegreen,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
  },
  textPosition: {
    marginTop: -11,
    left: "50%",
    top: "50%",
  },
  fontSizePosition: {
    top: 11,
    position: "absolute",
  },
  textboxLayout: {
    height: 65,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  textfieldIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: Border.br_9xs,
    position: "absolute",
    overflow: "hidden",
  },
  textClr: {
    color: Color.colorDimgray,
    textAlign: "left",
  },
  text2Layout: {
    height: 26,
    position: "absolute",
  },
  iconLayout2: {
    width: 27,
    position: "absolute",
  },
  iconLayout1: {
    height: 18,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  iconPosition: {
    top: 33,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  textboxBg: {
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    left: 0,
    height: 22,
    lineHeight: 22,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  text7Layout: {
    width: 20,
    position: "absolute",
  },
  containerShadowBox: {
    height: 44,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  downLayout: {
    height: 12,
    width: 12,
    position: "absolute",
    overflow: "hidden",
  },
  caretPosition: {
    top: 17,
    height: 12,
    width: 12,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    width: 15,
    position: "absolute",
  },
  text9Clr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  buttonLayout: {
    height: 35,
    overflow: "hidden",
  },
  textIconPosition: {
    left: "50%",
    top: "50%",
  },
  button14Bg: {
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  desktopTypo: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    lineHeight: 26,
    textAlign: "left",
    position: "absolute",
  },
  termsAndConditions: {
    color: Color.colorGray_200,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 41,
    position: "absolute",
    top: 205,
  },
  privacyPolicy: {
    top: 172,
    color: Color.colorGray_200,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 41,
    position: "absolute",
  },
  homepage: {
    color: "#386bc9",
    top: 10,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 41,
    position: "absolute",
  },
  services: {
    top: 106,
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorGray_200,
    left: 41,
    position: "absolute",
  },
  portfolio: {
    top: 42,
    color: Color.colorGray_200,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 41,
    position: "absolute",
  },
  pricing: {
    top: 75,
    color: Color.colorGray_200,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 41,
    position: "absolute",
  },
  about: {
    top: 139,
    color: Color.colorGray_200,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 41,
    position: "absolute",
  },
  image35Icon: {
    top: 140,
    width: 17,
    left: 17,
    position: "absolute",
  },
  image36Icon: {
    top: 173,
    width: 17,
    left: 17,
    position: "absolute",
  },
  image37Icon: {
    height: 16,
    top: 205,
    borderRadius: Border.br_9xs,
  },
  image41Icon: {
    top: 107,
    width: 17,
    left: 17,
    position: "absolute",
  },
  image45Icon: {
    width: 17,
    left: 17,
    position: "absolute",
    top: 10,
  },
  image46Icon: {
    width: 17,
    left: 17,
    position: "absolute",
    top: 75,
  },
  image47Icon: {
    top: 43,
    width: 17,
    left: 17,
    position: "absolute",
  },
  container69: {
    top: 419,
    backgroundColor: "#f3f4f6",
    width: 229,
    height: 268,
    borderRadius: Border.br_9xs,
    left: 1,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    position: "absolute",
  },
  text: {
    left: "50%",
    top: "50%",
    marginLeft: -11,
    marginTop: -10,
    color: Color.colorDarkolivegreen,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  gearIcon: {
    width: 22,
    height: 22,
    marginLeft: -11,
    position: "absolute",
    overflow: "hidden",
  },
  button24: {
    left: 54,
    borderRadius: 3,
    backgroundColor: "#f7f8f8",
    width: 42,
    top: 3,
    overflow: "hidden",
  },
  image31Icon: {
    left: 129,
    width: 19,
    height: 20,
    top: 10,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  stack1Icon: {
    left: 198,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  container66: {
    left: -19,
    width: 244,
    top: 4,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  textfieldIcon: {
    right: 56,
    left: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: 0,
    top: 27,
  },
  text1: {
    fontFamily: FontFamily.openSansBold,
    lineHeight: 26,
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  textbox5: {
    width: 135,
    left: 11,
    top: 58,
    height: 65,
  },
  image48Icon: {
    top: 30,
    left: 137,
    width: 33,
    borderRadius: Border.br_9xs,
  },
  image49Icon: {
    left: 104,
    top: 32,
    height: 22,
    borderRadius: Border.br_9xs,
  },
  image50Icon: {
    top: 31,
    left: 21,
    width: 14,
  },
  image51Icon: {
    left: 184,
    width: 21,
    height: 21,
  },
  image54Icon: {
    left: 74,
    width: 16,
    height: 20,
  },
  image57Icon: {
    left: 49,
    width: 11,
    top: 32,
  },
  container78: {
    top: 188,
    width: 226,
    height: 56,
    backgroundColor: Color.colorWhite,
    left: 4,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  container79Icon: {
    top: 253,
    left: 10,
    width: 215,
    height: 49,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  text2: {
    width: 52,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.openSansBold,
    lineHeight: 26,
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  textfieldIcon1: {
    right: 1,
    bottom: 1,
    left: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    top: 27,
  },
  textbox51: {
    left: 108,
    width: 107,
    top: 58,
    height: 65,
  },
  text3: {
    width: 43,
    height: 26,
    color: Color.colorDimgray,
    fontFamily: FontFamily.openSansBold,
    fontWeight: "700",
    lineHeight: 26,
    fontSize: FontSize.size_smi,
    left: 0,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  textfieldIcon2: {
    right: 88,
    left: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: 0,
    top: 27,
  },
  textbox52: {
    top: 123,
    width: 294,
    height: 55,
    left: 11,
  },
  text4: {
    width: 35,
  },
  textfieldIcon3: {
    right: 87,
    bottom: 18,
    top: 22,
    left: 0,
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text5: {
    width: 47,
  },
  textfieldIcon4: {
    right: 42,
    bottom: 16,
    left: 14,
    top: 22,
  },
  textbox54: {
    left: 90,
    width: 140,
    height: 62,
    top: 0,
  },
  textbox53: {
    top: 311,
    left: 8,
    width: 142,
  },
  text6: {
    top: 388,
    left: 154,
    fontWeight: "300",
    fontFamily: FontFamily.openSansLight,
    width: 79,
    height: 22,
    lineHeight: 22,
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray,
    position: "absolute",
  },
  text7: {
    top: 382,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
    left: 4,
    color: Color.colorDimgray,
    textAlign: "left",
    height: 22,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  container72: {
    width: 230,
    backgroundColor: Color.colorGray_100,
    left: 1,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    position: "absolute",
    top: 0,
    height: 689,
  },
  fontSize: {
    left: 368,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    color: Color.colorGray_200,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  flight1Icon: {
    left: 50,
    top: 15,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  caretDown10: {
    left: 183,
    top: 22,
  },
  caretDown12: {
    left: 799,
  },
  caretDown13: {
    left: 462,
  },
  image39Icon: {
    left: 224,
    height: 14,
    top: 15,
    borderRadius: Border.br_9xs,
  },
  image40Icon: {
    top: 13,
    left: 126,
    width: 14,
    height: 16,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  image42Icon: {
    top: 15,
    width: 14,
    left: 11,
    height: 16,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  image43Icon: {
    left: 89,
    top: 15,
    width: 16,
    position: "absolute",
  },
  image44Icon: {
    left: 162,
    top: 15,
    height: 17,
    borderRadius: Border.br_9xs,
  },
  container68: {
    top: 281,
    left: 413,
    width: 829,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_100,
  },
  theNextGeneration: {
    top: 324,
    left: 419,
    fontSize: 51,
    lineHeight: 72,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  powerfulAndEasy: {
    left: 12,
    fontSize: 26,
    lineHeight: 37,
    width: 901,
    top: 7,
    fontFamily: FontFamily.openSansRegular,
  },
  resizingHandleIcon: {
    right: 3,
    bottom: 3,
  },
  textarea1: {
    top: 407,
    left: 410,
    borderStyle: "solid",
    borderColor: "#9095a1",
    borderWidth: 1,
    width: 932,
    height: 170,
    borderRadius: Border.br_9xs,
    position: "absolute",
    backgroundColor: Color.colorBlack,
  },
  text8: {
    marginLeft: 7.5,
    left: "50%",
    top: "50%",
    marginTop: -10,
    color: Color.colorDarkolivegreen,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  eAddIcon: {
    marginTop: -7.5,
    marginLeft: -7.5,
    height: 15,
    left: "50%",
    top: "50%",
    overflow: "hidden",
  },
  button25: {
    top: 105,
    left: 865,
    borderRadius: 17,
    backgroundColor: "#3175f4",
    width: 36,
    overflow: "hidden",
  },
  text9: {
    marginLeft: 11.5,
    marginTop: -11,
    left: "50%",
    top: "50%",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.openSansRegular,
  },
  removeRedEye: {
    marginTop: -11.5,
    marginLeft: -11.5,
    width: 23,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  button13: {
    left: 980,
    backgroundColor: Color.colorGray_200,
    height: 35,
    width: 43,
    borderRadius: Border.br_9xs,
    position: "absolute",
    top: 4,
  },
  text10: {
    marginLeft: 13.5,
    color: Color.colorDarkolivegreen,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  fullscreenIcon: {
    marginTop: -13.5,
    marginLeft: -13.5,
    height: 27,
    left: "50%",
    top: "50%",
    overflow: "hidden",
  },
  button14: {
    top: 6,
    left: 1044,
    height: 35,
    overflow: "hidden",
    width: 47,
  },
  text11: {
    marginLeft: 12,
    color: Color.colorDarkolivegreen,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  removeRedEye1: {
    marginTop: -12,
    marginLeft: -12,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  button1: {
    left: 856,
    width: 44,
    top: 5,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  button2: {
    left: 918,
    top: 5,
    width: 47,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  text13: {
    marginLeft: 12.5,
    color: Color.colorDarkolivegreen,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    position: "absolute",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  codeIcon: {
    marginTop: -12.5,
    marginLeft: -12.5,
    width: 25,
    height: 25,
    position: "absolute",
    overflow: "hidden",
  },
  button4: {
    left: 965,
    width: 45,
    backgroundColor: Color.colorWhite,
    top: 3,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  button5: {
    left: 1033,
    backgroundColor: Color.colorGray_200,
    height: 35,
    width: 43,
    borderRadius: Border.br_9xs,
    position: "absolute",
    top: 7,
  },
  desktop: {
    left: 13,
    top: 7,
    fontFamily: FontFamily.openSansRegular,
  },
  triangleSmDown1: {
    top: 16,
    left: 93,
  },
  container3: {
    left: 30,
    width: 105,
    top: 5,
    height: 39,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  desktop1: {
    left: 35,
    top: 5,
    fontFamily: FontFamily.openSansExtraBold,
    fontWeight: "800",
  },
  container4: {
    left: 1094,
    backgroundColor: "rgba(16, 23, 41, 0.1)",
    width: 102,
    top: 7,
    borderRadius: Border.br_9xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  container26: {
    top: -3,
    left: 231,
    width: 1307,
    backgroundColor: Color.colorWhite,
  },
  conversionOutput: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 689,
    backgroundColor: Color.colorBlack,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

export default ConversionOutput;
