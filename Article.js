import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import {Feather} from '@expo/vector-icons' 

export default function Article({item}){
    return (
        <View style={styles.article}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <TouchableOpacity>
                        <Image source={item.avatar} style={styles.avatar}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text numberOfLines={1} style={styles.name}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Feather name="more-horizontal" size={16}/>
                </TouchableOpacity>
            </View>
            <Image source={item.image} style={styles.image}/>
            <View style={styles.action}>
                <View style={styles.actionLeft}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="heart" size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="message-circle" size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="send" size={24}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="bookmark" size={24}/> 
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.info}>
                <Text style={styles.viewCount}> {item.viewCount} Views </Text>
                <Text style={styles.date}> {item.date}  </Text>
            </View>
            
        </View>
    )
} 
const styles = StyleSheet.create({
    article: {
        marginBottom: 15
    },
    header: {
        flexDirection: "row", alignItems: "center",
        justifyContent: "space-between", height: 60, 
        paddingHorizontal: 16
    },
    user: {
        flexDirection: "row", alignItems: "center",
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16
    },
    name: {
      textAlign: "center", fontSize: 12, lineHeight: 14,
      color: "#262626", marginLeft: 12, fontWeight: "bold"  
    }, 
    image: {
        width: "100%", height: null, aspectRatio: 1, resizeMode: "contain",
        backgroundColor: "red", margin: 0, padding: 0

    },
    action: {
        flexDirection: "row", alignItems: "center",
        justifyContent: "space-between",
        marginTop: 4, paddingHorizontal: 8

    },
    actionLeft: {
        flexDirection: "row", alignItems: "center",
    },
    actionButton: {
        padding: 8
    },
    info: {
        paddingHorizontal: 16
    },
    viewCount: {
        color: "#262626",
        fontWeight: "bold",
        marginBottom: 8
    },
    date: {
        color: "#8e8e8e", fontSize: 10, marginBottom: 5 
    }
})