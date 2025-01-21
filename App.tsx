import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, Button, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const App = () => {

  const showAlert = () => {
    Alert.alert("Alert", "Alert button pressed");
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* App Header */}
      <View style={styles.appHeader}>
        <Ionicons name="chevron-back" size={24} color="black" />
        <View style={styles.profileTitle}>
          <Text style={styles.deemedTitle}>OOT_EVERYDAY</Text>
          <Text style={styles.headerTitle}>Posts</Text>
        </View> 
  </View>

      {/* Post View */}
      <View style={styles.postView}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <View style={styles.profileInfoWrapper}>
            <Image
              source={{ uri: "https://i.pinimg.com/originals/bc/af/18/bcaf18ce6054768da1628a939e2b4f65.jpg" }}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.postAuthor}>ootd_everyday</Text>
              <Text style={styles.postVia}>via frenchie_fry39</Text>
            </View>
          </View>
          <Ionicons style={styles.ellipsis} name="ellipsis-horizontal" size={20} color="black" />
        </View>

        {/* Post Image */}
        <View style={styles.postImageWrapper}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1735597821463-05f8cbd08fca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            style={styles.postImage}
          />
        </View>
        {/* Icons Section */}
        <View style={styles.iconRow}>
          <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
          <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.icon} />
          <Ionicons name="paper-plane-outline" size={24} color="black" style={styles.icon} />
        </View>
        {/* Post Footer */}
        <View style={styles.postFooter}>
        <View style={styles.row}>
        {/* Small circular images */}
        <View style={styles.imageRow}>
        <Image
          source={{ uri: "https://th.bing.com/th/id/OIP.CAbTaFvo9r1nh2uSZgd5yAAAAA?rs=1&pid=ImgDetMain" }}
          style={styles.profileImages}
        />
        <Image
          source={{ uri: "https://i.pinimg.com/originals/81/98/19/819819d5b42fb66280edd3426d401929.jpg" }}
          style={styles.profileImages}
        />
        <Image
          source={{ uri: "https://i.pinimg.com/originals/fe/91/43/fe9143350d8d892b41d2344dbf086cbd.jpg" }}
          style={styles.profileImages}
        />
      </View>
          <Text style={styles.postLikes}>Liked by <Text style={styles.boldText}>paisley.print.48</Text> and <Text style={styles.boldText}>7 others</Text></Text>
          </View>
          <Text style={styles.postCaption}><Text style={styles.commentAuthor}>frenchy_fry39 </Text>Fresh shot on a sunny day! ☀️</Text>
          <TouchableOpacity>
            <Text style={styles.viewComments}>View all 12 comments</Text>
          </TouchableOpacity>

          {/* Individual Comments */}
          <View style={styles.commentSection}>
            <View style={styles.commentWrapper}>
              <Text style={styles.comment}><Text style={styles.commentAuthor}>lil_wyatt838</Text> Awesome tones</Text>
            </View>
            <View style={styles.commentWrapper}>
              <Text style={styles.comment}><Text style={styles.commentAuthor}>pia.in.a.pod</Text> Gorg. Love it! ❤️</Text>
            </View>
          </View>
          <Text style={styles.timeStamp}>1 day ago</Text>

         
          <Button  title="Press Me" onPress={showAlert} />
         
        </View>


        {/* Bottom Bar */}
        <View style={styles.bottomBar}>
          <Ionicons name="home-outline" size={28} color="black" />
          <Ionicons name="search-outline" size={28} color="black" />
          <Image style={styles.bottomBarIcon} source={{uri: "https://media.istockphoto.com/id/1265127017/vector/instagramm-reels-icon-line-vector-illustration.jpg?s=612x612&w=0&k=20&c=nZnBU983UH35mAmwoxtJHyLVLNo6y-DG6BDDRc_t9HY="}}></Image>
          <Image style={styles.bottomBarIcon1} source={{uri: "https://cdn.iconscout.com/icon/free/png-256/free-instagram-shop-icon-download-in-svg-png-gif-file-formats--logo-shopping-menu-brand-social-media-pack-user-interface-icons-4109073.png"}}></Image>
          <Ionicons name="person-outline" size={28} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  appHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  postView: {
    flex: 1,
    paddingTop: 12,
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 12

  },
  bottomBarIcon:{
    width:35,
    height:35,
  },
  bottomBarIcon1:{
    width:28,
    height:28,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  profileInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    
  },
  profileInfo: {
    flexDirection: "column",
  },
  postAuthor: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postVia: {
    fontSize: 14,
    color: "#666",
  },
  postImageWrapper: {
    width: "100%",
    height: 388,
    marginBottom: 8,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  postFooter: {
    marginTop: 8,
    paddingLeft: 12,
  },
  postLikes: {
    fontSize: 14,
    marginBottom: 7,
  },
  postCaption: {
    fontSize: 14,
    color: "#333",
  },
  viewComments: {
    fontSize: 14,
    color: "#888",
    marginBottom: 3,
    marginTop: 10
  },
  commentSection: {
    marginTop: 8,
  },
  commentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  commentProfileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  comment: {
    fontSize: 14,
    color: "#333",
  },
  commentAuthor: {
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
    marginTop: 8,
    paddingLeft: 12,
  },
  icon: {
    marginRight: 16,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginTop: 1,
  },
  profileTitle: {
    alignItems: "center",
    flexDirection: "column",
    margin: "auto"
  },
  deemedTitle: {
    fontSize: 15,
    color: "#C0C0C0",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8, // Space between images and text
  },
  profileImages: {
    width: 20,
    height: 20,
    borderRadius: 10, // Makes the images circular
    marginLeft: -5, // Overlapping effect
    borderWidth: 1,
    borderColor: "#fff",
  },
boldText:{
  fontWeight: "bold"
},

timeStamp:{
  marginTop:3,
  color: "grey"
},

ellipsis:{
  marginRight: 16,
}


});

export default App;
