export const unSupport = [
  // 更新
  'updateWeChatApp',

  // 应用级事件
  'onUnhandledRejection',
  'onThemeChange',
  'onAudioInterruptionEnd',
  'onAudioInterruptionBegin',
  'offUnhandledRejection',
  'offThemeChange',
  'offAudioInterruptionEnd',
  'offAudioInterruptionBegin',

  // 调试
  'getRealtimeLogManager',
  'getLogManager',

  //性能
  'reportPerformance',
  'getPerformance',

  // 加密
  'getUserCryptoManager',

  // 转发
  'updateShareMenu',
  'showShareImageMenu',
  'shareVideoMessage',
  'shareFileMessage',
  'onCopyUrl',
  'offCopyUrl',
  'getShareInfo',
  'authPrivateMessage',

  // 交互
  'enableAlertBeforeUnload',
  'disableAlertBeforeUnload',

  // 置顶
  'setTopBarText',

  // 窗口
  'setWindowSize',
  'onWindowResize',
  'offWindowResize',

  // mDNS
  'stopLocalServiceDiscovery',
  'startLocalServiceDiscovery',
  'onLocalServiceResolveFail',
  'onLocalServiceLost',
  'onLocalServiceFound',
  'onLocalServiceDiscoveryStop',
  'offLocalServiceResolveFail',
  'offLocalServiceLost',
  'offLocalServiceFound',
  'offLocalServiceDiscoveryStop',

  // TCP 通信
  'createTCPSocket',

  // 支付
  'requestPayment',
  'requestOrderPayment',

  // 数据缓存
  'revokeBufferURL',
  'createBufferURL',

  // 周期性更新
  'setBackgroundFetchToken',
  'onBackgroundFetchData',
  'getBackgroundFetchToken',
  'getBackgroundFetchData',

  // 数据分析
  'reportMonitor',
  'reportEvent',
  'reportAnalytics',
  'getExptInfoSync',

  // 画布

  'createOffscreenCanvas',

  // 地图
  'createMapContext',

  // 视频
  'openVideoEditor',
  'getVideoInfo',
  'compressVideo',

  // 音频
  'getAvailableAudioSources',
  'createWebAudioContext',
  'createMediaAudioPlayer',

  // 音视频合成
  'createMediaContainer',

  // 实时语音
  'updateVoIPChatMuteConfig',
  'subscribeVoIPVideoMembers',
  'onVoIPVideoMembersChanged',
  'onVoIPChatStateChanged',
  'onVoIPChatSpeakersChanged',
  'onVoIPChatMembersChanged',
  'onVoIPChatInterrupted',
  'offVoIPVideoMembersChanged',
  'offVoIPChatStateChanged',
  'offVoIPChatMembersChanged',
  'offVoIPChatInterrupted',
  'joinVoIPChat',
  'exitVoIPChat',

  // 画面录制器
  'createMediaRecorder',

  // 视频解码器
  'createVideoDecoder',

  // 位置
  'stopLocationUpdate',
  'startLocationUpdateBackground',
  'startLocationUpdate',
  'onLocationChange',
  'offLocationChange',
  'choosePoi',

  // 文件
  'saveFileToDisk',

  // 登录
  'login',
  'checkSession',

  // 帐号信息
  'getAccountInfoSync',

  // 用户信息
  'getUserProfile',
  'getUserInfo',

  // 授权
  'authorizeForMiniProgram',
  'authorize',

  // 设置
  'openSetting',
  'getSetting',

  // 收货地址
  'chooseAddress',

  // 卡券
  'openCard',
  'addCard',

  // 发票
  'chooseInvoiceTitle',
  'chooseInvoice',

  // 生物认证
  'startSoterAuthentication',
  'checkIsSupportSoterAuthentication',
  'checkIsSoterEnrolledInDevice',

  // 微信运动
  'shareToWeRun',
  'getWeRunData',

  // 订阅消息
  'requestSubscribeMessage',

  // 微信红包
  'showRedPackage',

  // 收藏
  'addVideoToFavorites',
  'addFileToFavorites',

  // 车牌
  'chooseLicensePlate',

  // 视频号
  'reserveChannelsLive',
  'openChannelsLive',
  'openChannelsActivity',
  'getChannelsLiveNoticeInfo',
  'getChannelsLiveInfo',

  // 微信群
  'getGroupEnterInfo',

  // 微信客服
  'openCustomerServiceChat',

  // 蓝牙-通用
  'stopBluetoothDevicesDiscovery',
  'startBluetoothDevicesDiscovery',
  'openBluetoothAdapter',
  'onBluetoothDeviceFound',
  'onBluetoothAdapterStateChange',
  'offBluetoothDeviceFound',
  'offBluetoothAdapterStateChange',
  'makeBluetoothPair',
  'getConnectedBluetoothDevices',
  'getBluetoothDevices',
  'getBluetoothAdapterState',
  'closeBluetoothAdapter',

  // 蓝牙-低功耗中心设备
  'writeBLECharacteristicValue',
  'setBLEMTU',
  'readBLECharacteristicValue',
  'onBLEConnectionStateChange',
  'onBLECharacteristicValueChange',
  'offBLEConnectionStateChange',
  'offBLECharacteristicValueChange',
  'notifyBLECharacteristicValueChange',
  'getBLEDeviceServices',
  'getBLEDeviceRSSI',
  'getBLEDeviceCharacteristics',
  'createBLEConnection',
  'closeBLEConnection',

  // 蓝牙-低功耗外围设备
  'onBLEPeripheralConnectionStateChanged',
  'offBLEPeripheralConnectionStateChanged',
  'createBLEPeripheralServer',

  // 蓝牙-信标(Beacon)
  'stopBeaconDiscovery',
  'startBeaconDiscovery',
  'onBeaconUpdate',
  'onBeaconServiceChange',
  'offBeaconUpdate',
  'offBeaconServiceChange',
  'getBeacons',

  // NFC
  'stopHCE',
  'startHCE',
  'sendHCEMessage',
  'onHCEMessage',
  'offHCEMessage',
  'getNFCAdapter',
  'getHCEState',

  // Wi-Fi
  'stopWifi',
  'startWifi',
  'setWifiList',
  'onWifiConnected',
  'onGetWifiList',
  'offWifiConnected',
  'offGetWifiList',
  'getWifiList',
  'getConnectedWifi',
  'connectWifi',

  // 无障碍
  'checkIsOpenAccessibility',

  // 加密
  'getRandomValues',

  // 内存
  'onMemoryWarning',
  'offMemoryWarning',

  // AI/人脸识别
  'stopFaceDetect',
  'initFaceDetect',
  'faceDetect',

  // Worker
  'createWorker',

  // NodesRef
  //  NodesRef.node 	获取 Node 节点实例

  // 第三方平台
  'getExtConfigSync',
  'getExtConfig',

  // 广告
  'createRewardedVideoAd',
  'createInterstitialAd',
]
