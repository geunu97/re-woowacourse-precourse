function problem7(user, friends, visitors) {
  const userFriends = getUserFriends(user, friends);
  const userScores = calculateAcquaintanceScores(user, friends, userFriends);
  const answer = calculateVisitorScores(visitors, userScores, userFriends);

  return removeZeroScore(sortScores(answer)).slice(0, 5);
}

const removeZeroScore = (scores) => {
  return scores.map(([name, score]) => {
    if (score !== 0) {
      return name;
    }
  });
};

const sortScores = (scores) => {
  return [...scores].sort(([prevName, prevScore], [nextName, nextScore]) => {
    if (prevScore === nextScore) {
      return prevName > nextName ? 1 : -1;
    }
    return prevScore > nextScore ? -1 : 1;
  });
};

const getUserFriends = (user, friends) => {
  const userFriends = new Map();
  friends.forEach(([friendA, friendB]) => {
    if (friendA === user) {
      userFriends.set(friendB, true);
      return;
    }
    if (friendB === user) {
      userFriends.set(friendA, true);
    }
  });
  return userFriends;
};

const setUserScores = (user, score, userScores) => {
  if (userScores.has(user)) {
    userScores.set(user, userScores.get(user) + score);
    return userScores;
  }
  userScores.set(user, score);
  return userScores;
};

const calculateAcquaintanceScores = (user, friends, userFriends) => {
  const userScores = new Map();
  friends.forEach(([friendA, friendB]) => {
    if (friendA === user || friendB === user) {
      return;
    }
    if (userFriends.has(friendA) && !userFriends.has(friendB)) {
      setUserScores(friendB, 10, userScores);
      return;
    }
    if (!userFriends.has(friendA) && userFriends.has(friendB)) {
      setUserScores(friendA, 10, userScores);
    }
  });
  return userScores;
};

const calculateVisitorScores = (visitors, userScores, userFriends) => {
  visitors.forEach((visitor) => {
    if (!userFriends.has(visitor)) {
      setUserScores(visitor, 1, userScores);
    }
  });
  return userScores;
};

module.exports = problem7;
