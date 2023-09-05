import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, Linking, Clipboard, ToastAndroid, View } from 'react-native';

const RandomColorButton = () => {
  const iconesIniciais = ["🧤", "🧤", "🧤", "🧤", "🧤"];
  const [arrayIcones, setArrayIcones] = useState([...iconesIniciais]);
  const [podeClicarBotao, setPodeClicarBotao] = useState(true);
  const [tempoRestante, setTempoRestante] = useState(13);
  const [textoBotao, setTextoBotao] = useState('PRÓXIMA PARTIDA');

  const substituirIcone = () => {
    if (podeClicarBotao) {
      const novoArray = [...arrayIcones];
      const indiceAleatorio = Math.floor(Math.random() * novoArray.length);
      novoArray[indiceAleatorio] = "⚽️";
      setArrayIcones(novoArray);
      setPodeClicarBotao(false);
      setTempoRestante(13);
      iniciarCronometro(); // Inicia o cronômetro
      setTextoBotao(`Novo jogo em ${tempoRestante}`); // Atualiza o texto do botão
    }
  };

  const iniciarCronometro = () => {
    const timer = setInterval(() => {
      setTempoRestante(tempoAnterior => {
        if (tempoAnterior <= 1) {
          clearInterval(timer);
          setPodeClicarBotao(true);
          setArrayIcones([...iconesIniciais]);
          setTextoBotao('PRÓXIMA PARTIDA');
          return 0;
        }
        setTextoBotao(`Novo jogo em ${tempoAnterior - 1}`);
        return tempoAnterior - 1;
      });
    }, 1000);
  };

  const irParaYouTube = () => {
    Linking.openURL('https://afonsocosta.shop/youtube-app-pt');
  };

  const copiarTextoParaAreaDeTransferencia = () => {
    Clipboard.setString('penalty shoot');
    ToastAndroid.show('Nome copiado!', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerCopy}>
        <Text style={styles.NomeJogo}>Jogo: penalty shoot out street</Text>
        <TouchableOpacity style={styles.botaoCopiar} onPress={copiarTextoParaAreaDeTransferencia}>
          <Text style={styles.textoBotaoCopiar}>Copiar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.texto}>|{arrayIcones[0]}{arrayIcones[1]}{arrayIcones[2]}|</Text>
      <Text style={styles.texto}>|{arrayIcones[3]}🧍🏻{arrayIcones[4]}|</Text>
      <TouchableOpacity
        style={[styles.botao, !podeClicarBotao && styles.botaoDesativado]}
        onPress={substituirIcone}
        disabled={!podeClicarBotao}
      >
        <Text style={styles.textoBotao}>{textoBotao}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoYT} onPress={irParaYouTube}>
        <Text style={styles.textoBotaoYT}>Tutorial de como jogar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 23,
    marginBottom: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
  },
  containerCopy: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  NomeJogo: {
    fontSize: 17,
    marginRight: 10,
    marginLeft: 10,
  },
  botao: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  botaoYT: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  textoBotaoYT: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
  },
  botaoCopiar: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  textoBotaoCopiar: {
    color: 'black',
    fontSize: 13,
    textAlign: 'center',
  },
  botaoDesativado: {
    backgroundColor: 'gray',
  },
});

export default RandomColorButton;
