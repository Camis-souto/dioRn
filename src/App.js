import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGitHub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104527029?s=400&u=a4c07f79c7a6c7e848b63c17f8156951f6eb6d5c&v=4';
const urlToMyGithub = 'https://github.com/Camis-souto';

const App = () => {

   const handlePressGoToGithub = async () => {
      console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res){
      console.log('Link aprovado');
      console.log('Abrindo link.....');
      await Linking.openURL(urlToMyGithub);
    }
   };

   return (
      <SafeAreaView style ={style.container}> 
      <StatusBar backgroundColor={colorGitHub} barStyle= "light-content"/>                          
      <View style={style.content}>  
         <Image accessibilityLabel='Camilla em quarto e foto preto e branco' style={style.avatar} source={{uri: imageProfileGithub }}/>
         <Text  accessibilityLabel='Nome: Camilla Souto' style={[style.defaultText, style.name]}>Camilla Souto</Text>
         <Text accessibilityLabel='Nickname: Camis-Souto' style={[style.defaultText, style.nickname]}>Camis-Souto</Text>
         <Text accessibilityLabel='Descrição: Estudante de Programação e Tecnologia. Ajuda e sugestões são bem vindas.' style={[style.defaultText, style.description]}>Estudante de Programação e Tecnologia. Ajuda e sugestões são bem vindas.</Text>
        
        <Pressable onPress={handlePressGoToGithub}>
         <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
               Open in Github
            </Text>
         </View>
         </Pressable>
   </View>
   </SafeAreaView>
   );
};

export default App;

const style = StyleSheet.create({
   container:{
      backgroundColor: colorGitHub,
      flex: 1, // Expandir para a tela inteira
      justifyContent: 'center',     
   },
   content: {
      alignItems: 'center',
      padding: 20,
   },
   avatar: {
      height:200,
      width: 200,
      borderRadius: 100,
      borderColor: 'purple',
      borderWidth: 2,
   },
   defaultText:{
      color: colorFontGithub,
   },
   name: {
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: 25,
   },
   nickname: {
      fontSize: 19,
      color: colorDarkFontGithub,
   },
   description: {
      fontWeight: 'bold',
      fontSize: 14,
   },
   button:{
      marginTop:20,
      backgroundColor:colorDarkFontGithub,
      borderRadius: 10,
      padding: 20,
   },
   textButton:{
      fontWeight: 'bold',
      fontSize: 16,
   },

});