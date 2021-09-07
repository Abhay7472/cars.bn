import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
    Avatar,
    Title,
    Caption,
    Drawer,
    TouchableRipple,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../model/context';


export function DrawerContent(props) {

    const { signOut, } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Manish Sharma</Title>
                                <Caption style={styles.caption}>ManishSharma@gmail.com</Caption>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="plus-box"
                                    color={color = "#EA002A"}
                                    size={size}
                                />
                            )}

                            label="Post Your car"
                            onPress={() => props.navigation.navigate('DrawerContainerStack', { screen: 'CreatePost1' })} />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="post-outline"
                                    color={color = "#EA002A"}
                                    size={size}
                                />
                            )}
                            label="MY post"
                            onPress={() => props.navigation.navigate('DrawerContainerStack', { screen: 'MyPostDesign' })}
                        //onPress={() => props.navigation.navigate('', { screen: 'MyPostDesign' })}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="alert-box-outline"
                                    color={color = "#EA002A"}
                                    size={size}
                                />
                            )}
                            label="Request Status"
                            onPress={() => props.navigation.navigate('DrawerContainerStack', { screen: 'RequestStatus' })}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="android-messages"
                                    color={color = "#EA002A"}
                                    size={size}
                                />
                            )}
                            label="Messages"
                            onPress={() => props.navigation.navigate('DrawerContainerStack', { screen: 'Message' })}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="comment-question"
                                    color={color = "#EA002A"}
                                    size={size}
                                />
                            )}
                            label="Ask Admin"
                            onPress={() => props.navigation.navigate('DrawerContainerStack', { screen: 'AskAdmin' })}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color = "#EA002A"}
                                    size={size}
                                />
                            )}
                            label="Transaction"
                            onPress={() => props.navigation.navigate('DrawerContainerStack', { screen: 'Payment' })}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color = "#EA002A"}
                                    size={size}
                                />
                            )}
                            label="Privacy Policy"
                            onPress={() => props.navigation.navigate('DrawerContainerStack', { screen: 'PrivacyPolicy' })}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color = "#EA002A"}
                                    size={size}
                                />
                            )}
                            label="Term & Condition"
                            onPress={() => props.navigation.navigate('DrawerContainerStack', { screen: 'TermCondition' })}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="power"
                                    color={color = "#EA002A"}
                                    size={size}
                                />
                            )}
                            label="Log Out"
                            onPress={() => { signOut() }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        // backgroundColor: COLORS.white,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 18,
        marginTop: 3,

        color: "#00008b"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});