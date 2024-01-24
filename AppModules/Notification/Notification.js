import notifee, {AuthorizationStatus} from '@notifee/react-native';

export async function requestUserPermission() {
  const settings = await notifee.requestPermission({
    sound: true,
    inAppNotificationSettings: true,
  });

  if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    console.log('Permission settings:', settings);
  } else {
    console.log('User declined permissions');
  }
}
export const displayNotification = async data => {
  await notifee.displayNotification({
    title: data.title,
    body: data.body,
    ios: {
      sound: 'local.wav',
      critical: true,
    },
  });
};
