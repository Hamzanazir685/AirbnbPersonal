import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },
    button:{
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',


    },
    searchButton:{
        backgroundColor: '#fff',
        height: 60,
        width: '100%',
        borderRadius: 30,
        //marginHorizontal: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        zIndex: 100,

    },
    searchButtonText:{
        
    }    

})
export default styles;