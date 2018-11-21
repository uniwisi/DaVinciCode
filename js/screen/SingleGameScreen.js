/*
*单人游戏界面
* @flow
*/
import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Platform, TouchableOpacity, Image, ImageBackground } from 'react-native';

import utils from '../utils/commonMethod';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  topContainer: {
    height: 30,
    width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    height: 30,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  playerSelfContainer: {
    height: 50,
    width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  card: {
    width: width / 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class SingleGameScreen extends Component {




  state = {
    playerOne: [],
    playerTwo: [],
    playerThree: [],
    remainCard: [],
    step: 0,
  }

  componentDidMount() {
    this.Licensing();
  }


  Licensing = () => {
    // cardData=[一号玩家，二号玩家，三号玩家，底牌]
    const cardData = utils.Licensing(13, 4, utils.initBlack(), utils.initWhite());
    this.setState({ playerOne: cardData[0], playerTwo: cardData[1], playerThree: cardData[2], remainCard: cardData[3], step: 0 })
  }

  openCard = (playerData, item, index) => {
    playerData[index].show = true;
    this.setState({ step: this.state.step + 1 })
  }

  render() {
    const {
      playerOne,
      playerTwo,
      playerThree,
      remainCard,
      step,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={this.Licensing} style={styles.button}>
            <Text>开始游戏</Text>
          </TouchableOpacity>
          <Text>当前步数:{step}</Text>
        </View>
        <View style={styles.playerSelfContainer}>
          {remainCard.map((item, index) => {
            return (
              <TouchableOpacity
                key={`${item.value}${item.color}`}
                style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => this.openCard(remainCard, item, index)}>
                {item.show ? <Text style={[styles.cardText, { color: item.color === 'black' ? '#fff' : '#333' }]}>{item.value}</Text> : null}
              </TouchableOpacity>)
          })}
        </View>
        <View style={styles.playerSelfContainer}>
          {playerOne.map((item, index) => {
            return (
              <TouchableOpacity
                key={`${item.value}${item.color}`}
                style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => this.openCard(playerOne, item, index)}>
                {item.show ? <Text style={[styles.cardText, { color: item.color === 'black' ? '#fff' : '#333' }]}>{item.value}</Text> : null}
              </TouchableOpacity>)
          })}
        </View>
        <View style={styles.playerSelfContainer}>
          {playerTwo.map((item, index) => {
            return (
              <TouchableOpacity
                key={`${item.value}${item.color}`}
                style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => this.openCard(playerTwo, item, index)}>
                {item.show ? <Text style={[styles.cardText, { color: item.color === 'black' ? '#fff' : '#333' }]}>{item.value}</Text> : null}
              </TouchableOpacity>)
          })}
        </View>
        <View style={styles.playerSelfContainer}>

          {playerThree.map((item, index) => {
            return (
              <TouchableOpacity
                key={`${item.value}${item.color}`}
                style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => this.openCard(playerThree, item, index)}>
                <Text style={[styles.cardText, { color: item.color === 'black' ? '#fff' : '#333' }]}>{item.value}</Text>
              </TouchableOpacity>)
          })}

        </View>

      </View>
    );
  }
}

export default SingleGameScreen;
