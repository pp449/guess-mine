import { disableChat, enableChat } from "./chat";
import {
  disableCanvas,
  enableCanvas,
  hideControls,
  showControls,
  resetCanvas,
} from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");
const leftTime = document.getElementById("jsLeftTime");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotifs = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  setNotifs("");
  disableCanvas();
  hideControls();
  enableChat();
};
export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disableChat();
  notifs.innerText = `You are the leader, paint: ${word}`;
};

export const handleGameEnded = () => {
  setNotifs("Gamed ended.");
  disableCanvas();
  hideControls();
  resetCanvas();
};

export const handleGameStarting = () => setNotifs("Game will start soon");

export const handleLeftTime = ({ time }) => {
  leftTime.innerText = "";
  if (time === 1) {
    leftTime.innerText = `${time} second left`;
  } else {
    leftTime.innerText = `${time} seconds left`;
  }
};
