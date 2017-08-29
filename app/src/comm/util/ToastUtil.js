'use strict';

import Toast from 'react-native-root-toast';

Toast.showToast = (msg) => {
    return Toast.show(msg, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
    });
};

module.exports = Toast;