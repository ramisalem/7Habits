import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const iconSize = 20;

const FAIconCreater = (iconName) => ({tintColor}) =>
    <FontAwesomeIcon name={iconName} size={iconSize} color={tintColor} />;
const MCIconCreater = (iconName) => ({tintColor}) =>
    <MaterialCommunityIcons name={iconName} size={iconSize} color={tintColor} />;
const MIconCreater = (iconName) => ({tintColor}) =>
    <MaterialIcons name={iconName} size={iconSize} color={tintColor} />;

export const MCIcons = {
    walk: MCIconCreater('walk'),
    run: MCIconCreater('run'),
    gps: MCIconCreater('crosshairs-gps'),
    update: MCIconCreater('update'),
    target: MCIconCreater('target'),
    playlistCcheck: MCIconCreater('playlist-check'),
    checkboxMarkedOutline: MCIconCreater('checkbox-marked-outline'),
    checkboxMarkedCircleOutline: MCIconCreater('checkbox-marked-circle-outline'),
    cardGiftcard: MCIconCreater('card-giftcard'),
    creditCardPlus: MCIconCreater('credit-card-plus'),
    earHearing: MCIconCreater('ear-hearing'),
    accountMultiple: MCIconCreater('account-multiple'),
    group: MCIconCreater('group'),
    lightbulbOnOutline: MCIconCreater('lightbulb-on-outline'),
    humanHandsup: MCIconCreater('human-handsup'),
    humanGreeting: MCIconCreater('human-greeting'),
};

export const MIcons = {
    directionsWalk: MIconCreater('directions-walk'),
    walk: MCIconCreater('walk'),
    walk: MCIconCreater('walk'),
    walk: MCIconCreater('walk'),
    walk: MCIconCreater('walk'),
};