const navButtonWidth = '120px';
const navButtonContainer = document.createElement('div');
navButtonContainer.className = 'navButtonContainer';

    const navTbl = document.createElement('table');
        navTbl.style.display = 'inline-table';
        const navTbl_tr = document.createElement('tr');
            const navTbl_tr_td1 = document.createElement('td');
            navTbl_tr_td1.style.width = navButtonWidth;
            const navTbl_tr_td2 = document.createElement('td');
            navTbl_tr_td2.style.width = '15px';
            const navTbl_tr_td3 = document.createElement('td');
            navTbl_tr_td3.style.width = navButtonWidth;
        navTbl_tr.appendChild(navTbl_tr_td1);
        navTbl_tr.appendChild(navTbl_tr_td2);
        navTbl_tr.appendChild(navTbl_tr_td3);
    navTbl.appendChild(navTbl_tr);

    const navButtonBack = document.createElement('div');
    navButtonBack.className = 'navButton';
    navButtonBack.style.right= '10px';
    navButtonBack.innerText = '<';
    navTbl_tr_td1.appendChild(navButtonBack);
    navButtonBack.onclick = function()
    {
        backPannel();
    }

    const navButtonNext = document.createElement('div');
    navButtonNext.className = 'navButton';
    navButtonNext.style.left = '10px';
    navButtonNext.innerText = '>';
    navTbl_tr_td3.appendChild(navButtonNext);
    navButtonNext.onclick = function()
    {
        nextPannel();
    }

navButtonContainer.appendChild(navTbl);
document.body.appendChild(navButtonContainer);
