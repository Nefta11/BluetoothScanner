import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { BleManager } from 'react-native-ble-plx';

const manager = new BleManager();

export default function BluetoothScanner() {
  const [devices, setDevices] = useState([]);
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    return () => {
      manager.destroy();
    };
  }, []);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);
        return (
          granted['android.permission.BLUETOOTH_SCAN'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.BLUETOOTH_CONNECT'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.ACCESS_FINE_LOCATION'] ===
            PermissionsAndroid.RESULTS.GRANTED
        );
      } catch (err) {
        setError('Permisos denegados');
        return false;
      }
    }
    return true;
  };

  const scanDevices = async () => {
    setDevices([]);
    setError(null);
    const hasPermission = await requestPermissions();
    if (!hasPermission) {
      setError('No se otorgaron los permisos necesarios.');
      return;
    }
    setScanning(true);
    const discovered = {};
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        setError(error.message);
        setScanning(false);
        manager.stopDeviceScan();
        return;
      }
      if (device && !discovered[device.id]) {
        discovered[device.id] = device;
        setDevices(prev => [...prev, device]);
      }
    });
    setTimeout(() => {
      manager.stopDeviceScan();
      setScanning(false);
    }, 8000);
  };

  const renderItem = ({ item }) => (
    <View style={styles.deviceItem}>
      <Text style={styles.deviceName}>
        {item.name ? item.name : 'Sin nombre'}
      </Text>
      <Text style={styles.deviceId}>{item.id}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dispositivos Bluetooth Cercanos</Text>
      <TouchableOpacity
        style={[styles.button, scanning && styles.buttonDisabled]}
        onPress={scanDevices}
        disabled={scanning}
      >
        <Text style={styles.buttonText}>
          {scanning ? 'Buscando...' : 'Buscar dispositivos'}
        </Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}
      {scanning && (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={{ margin: 10 }}
        />
      )}
      <FlatList
        data={devices}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          !scanning ? (
            <Text style={styles.empty}>No se encontraron dispositivos.</Text>
          ) : null
        }
        style={{ width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#222',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#A0A0A0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  deviceItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  deviceId: {
    fontSize: 12,
    color: '#888',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  empty: {
    color: '#888',
    marginTop: 30,
    textAlign: 'center',
  },
});
