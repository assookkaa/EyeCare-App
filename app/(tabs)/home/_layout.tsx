import { Stack } from "expo-router"

const StackLayout = () => {
  
return(

  <Stack>
    <Stack.Screen name="index" options={{headerTitle: 'HomeScreen'}}/>
  </Stack>
  
  );
  
};
export default StackLayout;
