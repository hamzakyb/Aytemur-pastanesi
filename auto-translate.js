const fs = require('fs');
const path = require('path');
const { translate } = require('@vitalets/google-translate-api');

const enFile = path.join(__dirname, 'src/i18n/locales/en/common.json');
const enData = JSON.parse(fs.readFileSync(enFile, 'utf8'));

const langs = ['de', 'fr', 'es', 'pt', 'ru', 'ar', 'zh-CN', 'ja', 'ko', 'hi', 'id', 'it'];

// Helper to flatten object
function flatten(ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;
    if ((typeof ob[i]) == 'object' && ob[i] !== null) {
      var flatObject = flatten(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;
        toReturn[i + '.' + x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
}

// Helper to unflatten object
function unflatten(ob) {
  var result = {};
  for (var i in ob) {
    var keys = i.split('.');
    keys.reduce(function(r, e, j) {
      return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? ob[i] : {}) : []);
    }, result);
  }
  return result;
}

async function run() {
  const flatEn = flatten(enData);
  const keys = Object.keys(flatEn);
  const values = keys.map(k => flatEn[k]);
  
  // Combine into one large string separated by a unique delimiter to save API calls
  const delimiter = '\n\n|||\n\n';
  const combinedText = values.join(delimiter);

  for (let lang of langs) {
    try {
      console.log(`Translating to ${lang}...`);
      const res = await translate(combinedText, { to: lang });
      const translatedValues = res.text.split(delimiter);
      
      const flatTranslated = {};
      keys.forEach((key, index) => {
        flatTranslated[key] = translatedValues[index] ? translatedValues[index].trim() : values[index];
      });
      
      const translatedData = unflatten(flatTranslated);
      
      // zh-CN should map to zh folder
      const folderName = lang === 'zh-CN' ? 'zh' : lang;
      const dir = path.join(__dirname, 'src/i18n/locales', folderName);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'common.json'), JSON.stringify(translatedData, null, 2));
      console.log(`Success for ${lang}`);
    } catch (e) {
      console.error(`Error translating to ${lang}:`, e.message);
    }
  }
}

run();
