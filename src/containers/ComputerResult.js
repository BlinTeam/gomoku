export default function (list, activeUser) {
  let goCount = 0
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (list[i][j]['go'] === 'none') {
        goCount++
        list[i][j]['attackCounts'] = counter(i, j, activeUser, list)
        let enemy = activeUser === 'black' ? 'white' : 'black'
        list[i][j]['defendCounts'] = counter(i, j, enemy, list)
      }
    }
  }

  if (goCount === 361) {
    return {
      x: 9,
      y: 9
    }
  }

  let countTop = 0
  let topTime = 0
  let countSumTop = 0
  let x = 0,
      y = 0
  for (let k = 0; k < list.length; k++) {
    for (let l = 0; l < list[k].length; l++) {
      if (list[k][l]['go'] === 'none') {
        let attackCountTop = list[k][l]['attackCounts']['countTop']
        let attackCountRepeat = list[k][l]['attackCounts']['countRepeat']
        let attackCountArr = list[k][l]['attackCounts']['countArr']
        let defendCountTop = list[k][l]['defendCounts']['countTop']
        let defendCountRepeat = list[k][l]['defendCounts']['countRepeat']

        if (attackCountTop > countTop) {
          countTop = attackCountTop
          topTime = attackCountRepeat
          x = k
          y = l
        }

        if (attackCountTop === countTop && attackCountRepeat > topTime) {
          countTop = attackCountTop
          topTime = attackCountRepeat
          x = k
          y = l
        }

        if (defendCountTop > countTop) {
          countTop = defendCountTop
          topTime = defendCountRepeat
          x = k
          y = l
        }

        if (defendCountTop === countTop && defendCountRepeat > topTime) {
          countTop = defendCountTop
          topTime = defendCountRepeat
          x = k
          y = l
        }

        if (defendCountTop === countTop && defendCountRepeat === topTime) {
          let countSum = 0
          for (let count of attackCountArr) {
            countSum += count
          }

          if (countSum > countSumTop) {
            countSumTop = countSum
            x = k
            y = l
          }
        }
      }
    }
  }

  return {
    x: x,
    y: y
  }
}

function counter(x, y, active, list) {
  let count = 0
  count = RightWin(x, y, active, list, count)
  count = LeftWin(x, y, active, list, count)
  let horizontal = count

  count = 0
  count = BottomRightWin(x, y, active, list, count)
  count = TopLeftWin(x, y, active, list, count)
  let leftBevel = count

  count = 0
  count = BottomWin(x, y, active, list, count)
  count = TopWin(x, y, active, list, count)
  let vertical = count

  count = 0
  count = BottomLeftWin(x, y, active, list, count)
  count = TopRightWin(x, y, active, list, count)
  let rightBevel = count

  let countArr = [horizontal, leftBevel, vertical, rightBevel]
  let countTop = 0
  let countRepeat = 1
  for (let count of countArr) {
    if (count > countTop) {
      countTop = count
      countRepeat = 1
    }
    else if (count === countTop) {
      countRepeat++
    }
  }

  return {
    countTop: countTop,
    countRepeat: countRepeat,
    countArr: countArr
  }
}

function RightWin(x, y, go, list, count) {
  if (!list[x - 1] || !list[x - 1][y]) {
    count--
  }

  if (list[x - 1] && list[x - 1][y] && list[x - 1][y]['go'] !== 'none') {
    if (list[x - 1][y]['go'] === go) {
      count++
      count++
      return RightWin(x - 1, y, go, list, count)
    }

    if (list[x - 1][y]['go'] === 'none') {
      count++
    }
  }

  return count
}

function LeftWin(x, y, go, list, count) {
  if (!list[x + 1] || !list[x + 1][y]) {
    count--
  }

  if (list[x + 1] && list[x + 1][y] && list[x + 1][y]['go'] !== 'none') {
    if (list[x + 1][y]['go'] === go) {
      count++
      count++
      return LeftWin(x + 1, y, go, list, count)
    }

    if (list[x + 1][y]['go'] === 'none') {
      count++
    }
  }

  return count
}

function BottomRightWin(x, y, go, list, count) {
  if (!list[x - 1] || !list[x - 1][y - 1]) {
    count--
  }

  if (list[x - 1] && list[x - 1][y - 1] && list[x - 1][y - 1] !== 'none') {
    if (list[x - 1][y - 1]['go'] === go) {
      count++
      count++
      return BottomRightWin(x - 1, y - 1, go, list, count)
    }

    if (list[x - 1][y - 1]['go'] === 'none') {
      count++
    }
  }

  return count
}

function TopLeftWin(x, y, go, list, count) {
  if (!list[x + 1] || !list[x + 1][y + 1]) {
    count--
  }

  if (list[x + 1] && list[x + 1][y + 1] && list[x + 1][y + 1] !== 'none') {
    if (list[x + 1][y + 1]['go'] === go) {
      count++
      count++
      return TopLeftWin(x + 1, y + 1, go, list, count)
    }

    if (list[x + 1][y + 1]['go'] === 'none') {
      count++
    }
  }

  return count
}

function BottomWin(x, y, go, list, count) {
  if (!list[x] || !list[x][y - 1]) {
    count--
  }

  if (list[x] && list[x][y - 1] && list[x][y - 1] !== 'none') {
    if (list[x][y - 1]['go'] === go) {
      count++
      count++
      return BottomWin(x, y - 1, go, list, count)
    }

    if (list[x][y - 1]['go'] === 'none') {
      count++
    }
  }

  return count
}

function TopWin(x, y, go, list, count) {
  if (!list[x] || !list[x][y + 1]) {
    count--
  }

  if (list[x] && list[x][y + 1] && list[x][y + 1] !== 'none') {
    if (list[x][y + 1]['go'] === go) {
      count++
      count++
      return TopWin(x, y + 1, go, list, count)
    }

    if (list[x][y + 1]['go'] === 'none') {
      count++
    }
  }

  return count
}

function BottomLeftWin(x, y, go, list, count) {
  if (!list[x + 1] || !list[x + 1][y - 1]) {
    count--
  }

  if (list[x + 1] && list[x + 1][y - 1] && list[x + 1][y - 1] !== 'none') {
    if (list[x + 1][y - 1]['go'] === go) {
      count++
      count++
      return BottomLeftWin(x + 1, y - 1, go, list, count)
    }

    if (list[x + 1][y - 1]['go'] === 'none') {
      count++
    }
  }

  return count
}

function TopRightWin(x, y, go, list, count) {
  if (!list[x - 1] || !list[x - 1][y + 1]) {
    count--
  }

  if (list[x - 1] && list[x - 1][y + 1] && list[x - 1][y + 1] !== 'none') {
    if (list[x - 1][y + 1]['go'] === go) {
      count++
      count++
      return TopRightWin(x - 1, y + 1, go, list, count)
    }

    if (list[x - 1][y + 1]['go'] === 'none') {
      count++
    }
  }

  return count
}
