



// 公共方法
initBlack = () => {
  let blackCardPile = [];
  for (i = 0; i < 13; i++) {
    blackCardPile.push(
      { color: 'black', value: i === 12 ? 99 : i, show: false },
    )
  }
  return blackCardPile;
}

initWhite = () => {
  let whiteCardPile = [];
  for (i = 0; i < 13; i++) {
    whiteCardPile.push(
      { color: 'white', value: i === 12 ? 99 : i, show: false },
    )
  }
  return whiteCardPile;
}



orderBy = (ObjectA, ObjectB) => {
  // console.log(ObjectA, ObjectB);
  if (ObjectA.value === ObjectB.value) {
    if (ObjectA.color === 'black') {
      return -1;
    }
  } else {
    return ObjectA.value - ObjectB.value
  }

}


/**
 * 发牌函数
 * @param range 派牌，随机范围 [0,13)向下取整
 * @param count 每名玩家牌数的一半(8张牌，4黑，4白，count为4)
 * @param blackCardPile/whiteCardPile  黑白卡组
 * 
 */
Licensing = (range, count, blackCardPile, whiteCardPile) => {
  let playerOneCardPile = [];
  let playerTwoCardPile = [];
  let playerThreeCardPile = [];
  let tempBlack = blackCardPile;
  let tempWhite = whiteCardPile;
  for (i = 0; i < count; i++) {
    playerOneCardPile.push(tempBlack.splice(Math.floor(Math.random() * range), 1)[0]);
    playerOneCardPile.push(tempWhite.splice(Math.floor(Math.random() * range), 1)[0]);
    range--;
  }
  for (i = 0; i < count; i++) {
    playerTwoCardPile.push(tempBlack.splice(Math.floor(Math.random() * range), 1)[0]);
    playerTwoCardPile.push(tempWhite.splice(Math.floor(Math.random() * range), 1)[0]);
    range--;
  }
  for (i = 0; i < count; i++) {
    playerThreeCardPile.push(tempBlack.splice(Math.floor(Math.random() * range), 1)[0]);
    playerThreeCardPile.push(tempWhite.splice(Math.floor(Math.random() * range), 1)[0]);
    range--;
  }

  console.log(tempBlack, tempWhite);

  playerOneCardPile.sort(orderBy);
  playerTwoCardPile.sort(orderBy);
  playerThreeCardPile.sort(orderBy);
  debugger;
  const remainCard = tempBlack.concat(tempWhite);


  console.log(playerOneCardPile);
  console.log('-------------------------------------')
  console.log(playerTwoCardPile);
  console.log('-------------------------------------')
  console.log(playerThreeCardPile);
  return [playerOneCardPile, playerTwoCardPile, playerThreeCardPile, remainCard];
}


export default {
  initBlack,
  initWhite,
  orderBy,
  Licensing,
};