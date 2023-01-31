
import moment from "moment/moment";
import { Text, View } from "react-native"
import TweetStyles from "../Styles/TweetCard";

export const TweetCard = ({tweet})=>{
    return(
        <View style={TweetStyles.container}>
            <Text style={TweetStyles.titre}>{tweet.User_name}</Text>
            <Text style={TweetStyles.content}>{tweet.Tweet}</Text>
            <Text style={TweetStyles.date}>{moment(tweet.created_at).format('Do MMM YYYY')}</Text>
        </View>
    )
}