import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font';

const AboutApp = () => {
  
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'kalpurush': require('../../assets/font/kalpurush.ttf')
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  return (
    <ImageBackground 
    source={require('../../assets/background_image_desc.png')}
    style={styles.app_bg}
    >
      {
        fontLoaded &&
        <ScrollView style={styles.book_Writer}>
          <Text style={[styles.book_Writer_Desc, { fontFamily: 'kalpurush' }]}>{`স্রোতের বিপরীতে পথচলা একদল তরুনের ঘুরে দাঁড়ানোর গল্প নিয়ে সাজানো হয়েছে "প্রত্যাবর্তন"। ছাব্বিশটি গল্পের প্রত্যেকটি খুব সুন্দর করে সাজানো হয়েছে এই অ্যাপে। মুসলিম প্রধান বাংলাদেশেও যে একটা ছেলেকে আলোর পথে ফিরে আসতে এত কষ্ট করতে হয় আমার জানা ছিল না। ইউনিভার্সিটিতে একটা ছেলে চাইলেও ধর্মীয় লেবাসে চলতে পারে না। নানারকম প্রতিকূলতার মধ্য দিয়ে যেতে হয়। প্রচন্ড কষ্ট সহ্য করতে হয়। যারা সমস্ত প্রতিকূলতা পেরিয়ে আল্লাহকে ভালোবাসতে পেরেছে তারাই সফল। এরকম সফল কিছু যুবকের ‘আলোর পথে ফিরে আসার’ গল্প দিয়ে সাজানো হয়েছে প্রত্যাবর্তন।\n\nবইতে কিছু ভাইয়ের মূলে ফিরে আসার জন্য সংগ্রামের, প্রতিকূলতাকে মোকাবেলার বর্ণনা আছে। তাদের ঘটনা আমাদের জন্য অনুপ্রেরণা। রাব্বুল আলা'মীন তাদের জীবনের শেষ সময় পর্যন্ত এ অনুগ্রহের উপর অটল থাকার সুযোগ দান করুন।\n`}</Text>
        </ScrollView>
      }
    </ImageBackground>
  )
}

export default AboutApp

const styles = StyleSheet.create({
  app_bg:{
    display: 'flex',
    height: "100%",
    width: "100%",
  },
  book_Writer_Desc:{
    fontSize: 22,
    lineHeight: 30,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 40,
  }

})