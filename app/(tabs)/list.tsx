import { View } from "@/components/Themed";
import { Link } from "expo-router";

const ListPage =() => {

return(
    <View style={{
        flex:1, justifyContent: 'center', alignItems: 'center', gap: 10,
    }}>
        <Link href="/list/1">Nah</Link>
        <Link href="/list/2">I'd</Link>
        <Link href="/list/3">Win</Link>
    </View>
)

}
export default ListPage;