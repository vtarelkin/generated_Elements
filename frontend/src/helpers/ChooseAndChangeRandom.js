import random from 'lodash/random';
import sampleSize from 'lodash/sampleSize';

const ChooseAndChangeRandom = (dataArray) => {
    let selectedItems = sampleSize(dataArray, 8000); // choose random 800 elements
    selectedItems.forEach(item => item.value = random(200, 1500)); //forEach loop changes array with setting new values
    return selectedItems;
};

export default ChooseAndChangeRandom;
