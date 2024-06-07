const pinList = {
  1: [262, 387],
  2: [295, 370],
  3: [291, 369],
  4: [248, 366],
  5: [523, 369],
  6: [794, 560],
  7: [209, 396],
  8: [220, 433],
  9: [211, 429],
  10: [269, 454],
  11: [379, 479],
  12: [382, 480],
  13: [404, 511],
  14: [429, 527],
  15: [473, 529],
  
  17: [482, 529],
  
  19: [489, 532],
  20: [501, 532],
  21: [505, 532],
  22: [552, 540],
  23: [577, 534],
  24: [606, 520],
  25: [618, 521],
  26: [751, 498],
  27: [715, 437],
  28: [543, 534],
  29: [517, 529],
  30: [510, 528],
  31: [428, 521],
  32: [285, 450],
  33: [241, 428],
  34: [239, 393],
  35: [235, 384],
  36: [241, 371],
  37: [261, 359],
  38: [242, 338],
  39: [262, 328],
  40: [277, 332],
  41: [288, 330],
  42: [289, 326],
  43: [300, 362],
  44: [295, 365],
  45: [275, 367],
  46: [269, 366],
  47: [259, 363],
  48: [256, 365],
  49: [253, 368],
  50: [302, 369],
  51: [289, 383],
  52: [308, 440],
  53: [265, 486],
  54: [257, 500],
  55: [218, 588],
  56: [233, 602],
  57: [250, 624],
  58: [267, 633],
  59: [268, 639],
  60: [293, 646],
  61: [307, 665],
  62: [307, 668],
  63: [300, 668],
  64: [307, 662],
  65: [327, 669],
  66: [335, 658],
  67: [346, 658],
  68: [375, 662],
  69: [375, 669],
  70: [375, 681],
  71: [411, 676],
  72: [428, 674],
  73: [455, 669],
  74: [465, 669],
  75: [469, 670],
  76: [489, 663],
  77: [489, 659],
  78: [519, 644],
  79: [409, 660],
  80: [421, 635],
  81: [431, 626],
  82: [439, 602],
  83: [466, 546],
  84: [466, 471],
  85: [466, 457],
  86: [471, 348],
  87: [474, 348],
  88: [468, 342],
  89: [468, 332],
  90: [467, 304],
  91: [467, 295],
  92: [467, 288],
  93: [469, 282],
  94: [464, 249],
  95: [464, 241],
  96: [469, 202],
  97: [416, 54],
  98: [324, 247],
  99: [312, 261],
  100: [290, 304],
  101: [290, 310],
  102: [296, 323],
  103: [313, 325],
  104: [322, 347],
  105: [393, 501],
  106: [335, 524],
  107: [330, 528],
  108: [319, 549],
  109: [324, 551],
  110: [323, 563],
  111: [320, 585],
  112: [324, 588],
  113: [319, 593],
  114: [301, 592],
  115: [321, 639],
  116: [327, 642],
  117: [327, 631],
  118: [315, 600],
  119: [257, 562],
  120: [161, 497],
  121: [125, 483],
  122: [131, 470],
  123: [315, 396],
  124: [504, 361],
  125: [414, 374],
  126: [274, 273],
  127: [249, 274],
  128: [211, 281],
  129: [177, 282],
  130: [109, 310],
  131: [121, 323],
  132: [126, 330],
  133: [137, 338],
  134: [146, 346],
  135: [153, 359],
  136: [153, 376],
  137: [135, 396],
  138: [118, 400],
  139: [202, 341],
  140: [199, 320],
  141: [379, 552],
  142: [401, 450],
  143: [393, 511],
  144: [370, 576],
  145: [317, 559],
  146: [295, 560],
  147: [279, 559],
  148: [281, 545],
  149: [296, 524],
  150: [502, 430],
  151: [505, 419],
  152: [505, 416],
  153: [524, 367],
  154: [580, 348],
  155: [578, 361],
  156: [672, 359],
  157: [707, 426],
  158: [758, 470],
  159: [713, 468],
  160: [589, 441],
  161: [548, 391],
  162: [542, 380]
}

function showOrHideHeatMap(mapId) {
  const selectedMap = document.getElementById(mapId);
  if (selectedMap) {
    if (selectedMap.classList.contains('active')) {
      // if the map is shown, hide it
      selectedMap.classList.remove('active');
    } else {
      // otherwise, show it
      selectedMap.classList.add('active');
    }
  }
}

function onPinClick(pinId) {
  console.log(pinId.dataset.pin)
}

function handleShowImage(imageId) {

}

async function setupPins() {
  for (const pin in pinList) {
    const pinElement = document.createElement('div');
    pinElement.classList.add('pin');
    pinElement.style.left = `${pinList[pin][0]-20}px`;
    pinElement.style.top = `${pinList[pin][1]-15}px`;
    pinElement.dataset.pin = pin;
    document.getElementById('map-container').appendChild(pinElement);
  }
}

function setupClickEvents() {
  const heatmapIcons = document.querySelectorAll('.icon-button')
  const heatmapPins = document.querySelectorAll('.pin')

  heatmapIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const mapIcon = icon.dataset.mapicon;
      let mapId;

      switch (mapIcon) {
        case '1':
          mapId = 'map-activism';
          break;
        case '2':
          mapId = 'map-art';
          break;
        case '3':
          mapId = 'map-hate';
          break;
        case '4':
          mapId = 'map-marketing';
          break;
        case '5':
          mapId = 'map-sport';
          break;
        case '6':
          mapId = 'map-street';
          break;
        default:
          mapId = null;
      }

      if (mapId) {
        showOrHideHeatMap(mapId);
      }
    });
  });

  for (const pin of heatmapPins) {
    console.log(pin.dataset.pin)
    pin.addEventListener('click', () => {
      onPinClick(pin)
    })
  }
}

// call these functions in order when the site loads
window.addEventListener('load', async () => {
  await setupPins()
  setupClickEvents()
})