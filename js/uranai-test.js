function uranai() { 
 
    let message = '' 
    let uranai = Math.floor(Math.random() * 3); 
 
    if (uranai === 0) { 
        message = 'チョコレート'; 
    } else if (uranai === 1) { 
        message = 'シュークリーム'; 
    } else if (uranai === 2) { 
        message = 'ケーキ';
    } else { 
        message = 'アイスクリーム'; 
    } 
 
    const result = document.querySelector('#result'); 
    result.innerHTML = `今日のおすすめスイーツは、<br>${message}です🎵`; 
}