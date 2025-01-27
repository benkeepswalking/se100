const AAPLCurrentBar = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71
}

const AAPLPrevBar = {
	open: 81.02,
	high: 82.49,
	low: 79.09,
	close: 83.71
}

// Write your code below

console.log((AAPLPrevBar['open'] + AAPLPrevBar['close']) / 2);
console.log((AAPLCurrentBar['open'] + AAPLCurrentBar['close'] + AAPLCurrentBar['high'] + AAPLCurrentBar['low']) / 4)
console.log(Math.max(AAPLCurrentBar['open'], AAPLCurrentBar['close'], AAPLCurrentBar['high']))
console.log(Math.min(AAPLCurrentBar['open'], AAPLCurrentBar['close'], AAPLCurrentBar['low']))
