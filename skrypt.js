(function() {
  
  console.log('hello world!');
  
  if (window.navigator.userAgentData.platform.strToLower() === 'macos') {
    console.info('ktoś tu używa macintosha'); 
  }
  else {
    console.warn('o nieee, tylko nie ' +  window.navigator.userAgentData.platform + '!!');
  }
})();
