function areAnagrams(str1, str2) {
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
    
    if (str1.length !== str2.length) {
        return false;
    }
    
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}

const str1 = "Astronomer";
const str2 = "Moon starer";
