import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
    return (
        <NativeTabs tintColor="#16A34A" backgroundColor="#FFFFFF">
            <NativeTabs.Trigger name="index">
                <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf="house.fill" />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="search">
                <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf="magnifyingglass" />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="saved">
                <NativeTabs.Trigger.Label>Saved</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf="heart.fill" />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="profile">
                <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon sf="person.circle" />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}
