'use strict';

function convertertText(string) {

  const newString = string.trim().toLowerCase();
  return newString[0].toUpperCase() + newString.slice(1);

}

convertertText('привет Мир');

