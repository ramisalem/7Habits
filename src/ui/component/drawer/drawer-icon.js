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
    run: MCIconCreater('run'),
    walk: MCIconCreater('walk'),
    menu: MCIconCreater('menu'),
    group: MCIconCreater('group'),
    close: MCIconCreater('close'),
    cached: MCIconCreater('cached'),
    update: MCIconCreater('update'),
    target: MCIconCreater('target'),
    trendingUp: MCIconCreater('trending-up'),
    earHearing: MCIconCreater('ear-hearing'),
    cardGiftcard: MCIconCreater('card-giftcard'),
    humanHandsup: MCIconCreater('human-handsup'),
    accountGroup: MCIconCreater('account-group'),
    humanGreeting: MCIconCreater('human-greeting'),
    crosshairsGps: MCIconCreater('crosshairs-gps'),
    playlistCcheck: MCIconCreater('playlist-check'),
    creditCardPlus: MCIconCreater('credit-card-plus'),
    accountMultiple: MCIconCreater('account-multiple'),
    lightbulbOnOutline: MCIconCreater('lightbulb-on-outline'),
    checkboxMarkedOutline: MCIconCreater('checkbox-marked-outline'),
    checkboxMarkedCircleOutline: MCIconCreater('checkbox-marked-circle-outline'),
};

export const MIcons = {
    directionsWalk: MIconCreater('directions-walk'),
    walk: MCIconCreater('walk'),
    walk: MCIconCreater('walk'),
    walk: MCIconCreater('walk'),
    walk: MCIconCreater('walk'),
};