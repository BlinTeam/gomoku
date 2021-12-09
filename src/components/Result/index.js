export default function(coordinate, go, field) {
  let {x, y} = coordinate;
  let count = 0;
  count = RightWin(x, y, go, field, count);
  count = LeftWin(x, y, go, field, count);
  if (count >= 4) {
    return true;
  }

  count = 0;
  count = BottomRightWin(x, y, go, field, count);
  count = TopLeftWin(x, y, go, field, count);
  if (count >= 4) {
    return true;
  }

  count = 0;
  count = BottomWin(x, y, go, field, count);
  count = TopWin(x, y, go, field, count);
  if (count >= 4) {
    return true;
  }

  count = 0;
  count = BottomLeftWin(x, y, go, field, count);
  count = TopRightWin(x, y, go, field, count);
  return count >= 4;


}

function RightWin(x, y, go, field, count) {
  if (field[x - 1] && field[x - 1][y] && field[x - 1][y]['go'] !== 'none') {
    if (field[x - 1][y]['go'] === go) {
      count++;
      return RightWin(x - 1, y, go, field, count);
    }
  }

  return count;
}

function LeftWin(x, y, go, field, count) {
  if (field[x + 1] && field[x + 1][y] && field[x + 1][y]['go'] !== 'none') {
    if (field[x + 1][y]['go'] === go) {
      count++;
      return LeftWin(x + 1, y, go, field, count);
    }
  }

  return count;
}

function BottomRightWin(x, y, go, field, count) {
  if (field[x - 1] && field[x - 1][y - 1] && field[x - 1][y - 1] !== 'none') {
    if (field[x - 1][y - 1]['go'] === go) {
      count++;
      return BottomRightWin(x - 1, y - 1, go, field, count);
    }
  }

  return count;
}

function TopLeftWin(x, y, go, field, count) {
  if (field[x + 1] && field[x + 1][y + 1] && field[x + 1][y + 1] !== 'none') {
    if (field[x + 1][y + 1]['go'] === go) {
      count++;
      return TopLeftWin(x + 1, y + 1, go, field, count);
    }
  }

  return count;
}

function BottomWin(x, y, go, field, count) {
  if (field[x] && field[x][y - 1] && field[x][y - 1] !== 'none') {
    if (field[x][y - 1]['go'] === go) {
      count++;
      return BottomWin(x, y - 1, go, field, count);
    }
  }

  return count;
}

function TopWin(x, y, go, field, count) {
  if (field[x] && field[x][y + 1] && field[x][y + 1] !== 'none') {
    if (field[x][y + 1]['go'] === go) {
      count++;
      return TopWin(x, y + 1, go, field, count);
    }
  }

  return count;
}

function BottomLeftWin(x, y, go, field, count) {
  if (field[x + 1] && field[x + 1][y - 1] && field[x + 1][y - 1] !== 'none') {
    if (field[x + 1][y - 1]['go'] === go) {
      count++;
      return BottomLeftWin(x + 1, y - 1, go, field, count);
    }
  }

  return count;
}

function TopRightWin(x, y, go, field, count) {
  if (field[x - 1] && field[x - 1][y + 1] && field[x - 1][y + 1] !== 'none') {
    if (field[x - 1][y + 1]['go'] === go) {
      count++;
      return TopRightWin(x - 1, y + 1, go, field, count);
    }
  }

  return count;
}