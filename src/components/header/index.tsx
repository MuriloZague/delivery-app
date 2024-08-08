import { View, Text, TouchableOpacity, Pressable, Alert } from 'react-native';
import {Ionicons, Feather} from '@expo/vector-icons'
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

export function Header() {

    
 return (
    <View className='w-full items-center justify-between flex flex-row'>
        <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
            <Ionicons name='menu' size={20} color={'#121212'}/>
        </Pressable>

        <View className='flex flex-col items-center justify-center'>
            <Text className='text-center text-sm text-slate-800'>Localização</Text>

            <View className='flex-row items-center justify-center gap-1'>
                <Feather name='map-pin' size={14} color={"#ff0000"}/>
                <Text className='text-lg font-bold'>São João das Duas Pontes</Text>
            </View>
        </View>

        <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
            <Feather name='bell' size={20} color={'#121212'}/>
        </Pressable>
    </View>
  );
}