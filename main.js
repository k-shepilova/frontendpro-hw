const smiles_holder = document.querySelector('#smiles_holder');

const smiles = [{
    smile: '😀',
    vote_count: 0,
}, {
    smile: '😍',
    vote_count: 0,
}, {
    smile: '😇',
    vote_count: 0,
}, {
    smile: '😭',
    vote_count: 0,
}, {
    smile: '😡',
    vote_count: 0,
},]

smiles.forEach(smile =>{
    const smile_block = document.createElement('div');
    const smile_btn = document.createElement('div');
    const smile_votes = document.createElement('div');
    const current_index = smiles.indexOf(smile);

    smile_block.classList.add('smile-block');
    smile_btn.classList.add('smile-btn');
    smile_votes.classList.add('smile-votes');

    smile.vote_count = JSON.parse(localStorage.getItem(`vote_count_${current_index}`)) ?
        JSON.parse(localStorage.getItem(`vote_count_${current_index}`)) : smile.vote_count;
    smile_btn.textContent = smile.smile;
    smile_votes.textContent = smile.vote_count;

    smiles_holder.appendChild(smile_block);
    smile_block.appendChild(smile_btn);
    smile_block.appendChild(smile_votes);

    smile_btn.addEventListener('click', function () {
        smiles[current_index].vote_count += 1;
        smile_votes.textContent = smile.vote_count;
        localStorage.setItem(`vote_count_${current_index}`,  JSON.stringify(smile.vote_count));
    });
});