//Thx to nicthib
function fxrand_weighted(w) {
    // Normalize
    let w_sum = 0;
    for (i = 0; i < w.length; i++) {
        w_sum += w[i];
    }
    for (i = 0; i < w.length; i++) {
        w[i] = w[i] / w_sum;
    }
    //

    // Cumulative sum
    csum = [];
    tsum = 0;
    for (i = 0; i < w.length; i++) {
        tsum += w[i];
        csum[i] = tsum;
    }
    //

    // Run fxrand, return value it is nearest, but not greater than
    droll = random(0,1);
    for (i = 0; i < csum.length; i++) {
        if (droll <= csum[i]) {
            return i
        }
    }
    //
}

const randRange = (min, max) => {
    return min + (max - min) * fxrand();
};

const intRandRange = (min, max) => {
    return Math.round(randRange(min, max) + 0.499);
};

function fxrandRange(min, max, step) {
    value = Math.round(fxrand() * (max - min) / step)
    return value * step + min
}

function selectWithRarity(array){
    let rarities = [];
    for(let i=0;i<array.length;i++){
        rarities[i]= array[i].rs;
        
    }
   
    let resultIndex = fxrand_weighted(rarities);
    return array[resultIndex]
}


const invertColor = (bg) => {
    bg = parseInt(Number(bg.replace('#', '0x')), 10)
    bg = ~bg
    bg = bg >>> 0
    bg = bg & 0x00ffffff
    bg = '#' + bg.toString(16).padStart(6, "0")
  
    return bg
  }
  
  function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }