import { View, Pressable, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view'


export function Banner() {
 return (
    <View className='w-full h-36 md:h-60 rounded-2xl mt-5 mb-4'>
        {/* O PageView não reconhece a eslização do TailWind */}
        <PagerView style={{flex: 1}} initialPage={0} pageMargin={14}>

            <Pressable className='w-full h-36 md:h-60 rounded-2xl' key="1" onPress={() => console.log("DEU CERTO - 1")}>
                <Image
                className='w-full h-36 rounded-2xl'
                source={require('../../../assets/images/banner1.png')}
                />
            </Pressable>
            <Pressable className='w-full h-36 md:h-60 rounded-2xl' key="2" onPress={() => console.log("DEU CERTO - 2")}>
                <Image
                className='w-full h-36 rounded-2xl'
                source={require('../../../assets/images/banner2.png')}
                />
            </Pressable>

        </PagerView>
    </View>
  );
}