import { Text, View, ScrollView } from "react-native";
import  Constants  from "expo-constants";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantsVeticalList } from "../components/restaurantsList";
import { StatusBar } from "expo-status-bar";

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <StatusBar style="dark"/>
        <View className="w-full px-4" style={{marginTop: statusBarHeight + 8}}>
          <Header/>
          <Banner/>
          <Search/>
        </View>

        <Section
          name="Comidas em alta"
          size='text-2xl'
          label="Veja mais"
          action={() => console.log("clicou no veja mais")}
        />

        <TrendingFoods/>

        <Section
          name="Famosos no iFood"
          size='text-xl'
          label="Veja todos"
          action={() => console.log("clicou no veja todos")}
        />

        <Restaurants/>

        <Section
          name="Restaurantes"
          size='text-xl'
          label="Veja todos"
          action={() => console.log("clicou no restaurantes")}
        />

        <RestaurantsVeticalList/>

    </ScrollView>
  );
}
