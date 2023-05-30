import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native'
import appData from '../../Component/db/book_Data';
 
const BookWriter = () => {
  const navigation = useNavigation()
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
          <Text style={[styles.book_Writer_Desc, { fontFamily: 'kalpurush' }]}>{`আরিফ আজাদ একজন জীবন্ত আলোকবর্তিকা - গার্ডিয়ান প্রকাশনী আরিফ আজাদের পরিচয় দিতে গিয়ে লিখেছে, “তিনি বিশ্বাস নিয়ে লেখেন, অবিশ্বাসের আয়না চূর্ণবিচুর্ণ করেন।” আরিফ আজাদ এর বই মানেই একুশে বইমেলায় বেস্ট সেলার, এতটাই জনপ্রিয় এ লেখক। সাম্প্রতিককালে বাংলাদেশের সাহিত্য অঙ্গনে সবচেয়ে আলোড়ন তোলা লেখকদের একজন আরিফ আজাদ।\n\n১৯৯০ সালের ৭ই জানুয়ারি চট্টগ্রামে জন্ম নেয়া এ লেখক মাধ্যমিক শিক্ষাজীবন শেষ করে চট্টগ্রাম জিলা স্কুলে। একটি সরকারি কলেজে উচ্চ মাধ্যমিক পাস করে চট্টগ্রাম বিশ্ববিদ্যালয়ে ভর্তি হন এবং সেখানে উচ্চশিক্ষা সম্পন্ন করেন।\n\nলেখালেখির ক্যারিয়ারের শুরু থেকেই আরিফ আজাদ এর বই সমূহ পাঠক মহলে ব্যাপক সাড়া ফেলে। তার প্রথম বই ‘প্যারাডক্সিক্যাল সাজিদ’ ২০১৭ সালের একুশে বইমেলায় প্রকাশ পায়। বইটির কেন্দ্রীয় চরিত্র সাজিদ বিভিন্ন কথোপকথনের মধ্যে তার নাস্তিক বন্ধুর অবিশ্বাসকে বিজ্ঞানসম্মত নানা যুক্তিতর্কের মাধ্যমে খণ্ডন করে। আর এসব কথোপকথনের মধ্য দিয়েই বইটিতে অবিশ্বাসীদের অনেক যুক্তি খণ্ডন করেছেন লেখক। বইটি প্রকাশের পরপরই তুমুল জনপ্রিয়তা পায়। এটি ইংরেজি ও অসমীয়া ভাষায় অনূদিতও হয়েছে। ২০১৯ সালের একুশে বইমেলায় ‘প্যারাডক্সিক্যাল সাজিদ - ২’ প্রকাশিত হয়ে এবং এটিও বেস্টসেলারে পরিণত হয়। সাজিদ সিরিজ ছাড়াও আরিফ আজাদ এর বই সমগ্রতে আছে ‘আরজ আলী সমীপে’ এবং ‘সত্যকথন’ (সহলেখক) এর মতো তুমুল জনপ্রিয় বই।\n\n\n\n`}</Text>
        </ScrollView>
      }
    </ImageBackground>
  )
}

export default BookWriter

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
    marginBottom: 10,
    marginTop: 20,
    opacity: .9
  }

})