// src/app/(tabs)/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1D4ED8",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: { height: 55, backgroundColor: "white" },
      }}
    >
      <Tabs.Screen
        name="ScreenOne"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`
                text-xs
                  ${
                    focused
                      ? "text-blue-700 font-NunitoBold"
                      : "text-gray-600 font-NunitoRegular"
                  } 
                `}
            >
              ScreenOne
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name="logo-react" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ScreenTwo"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`
                text-xs
                  ${
                    focused
                      ? "text-blue-700 font-NunitoBold"
                      : "text-gray-600 font-NunitoRegular"
                  } 
                `}
            >
              ScreenTwo
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name={"logo-react"} size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ScreenThree"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`
                text-xs
                  ${
                    focused
                      ? "text-blue-700 font-NunitoBold"
                      : "text-gray-600 font-NunitoRegular"
                  } 
                `}
            >
              ScreenThree
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name={"logo-react"} size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ScreenFour"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`
                text-xs
                  ${
                    focused
                      ? "text-blue-700 font-NunitoBold"
                      : "text-gray-600 font-NunitoRegular"
                  } 
                `}
            >
              ScreenFour
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name={"logo-react"} size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ScreenFive"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              className={`
                text-xs
                  ${
                    focused
                      ? "text-blue-700 font-NunitoBold"
                      : "text-gray-600 font-NunitoRegular"
                  } 
                `}
            >
              ScreenFive
            </Text>
          ),
          tabBarIcon: ({ color }) => (
            <Ionicons name={"logo-react"} size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
