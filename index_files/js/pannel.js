let currentIndex = 0;

function nextPannel()
{
    let dsPannel = document.querySelectorAll('.pannel');
    if (currentIndex == dsPannel.length - 1)
    {
        currentIndex = 0;
    }
    else
    {
        currentIndex++;
    }
    showDiv(currentIndex);
    setDot(currentIndex);
}


function backPannel()
{
    let dsPannel = document.querySelectorAll('.pannel');
    if (currentIndex == 0)
    {
        currentIndex = dsPannel.length - 1;
    }
    else
    {
        currentIndex--;
    }
    showDiv(currentIndex, 'back');
    setDot(currentIndex);
}

function showDiv(index, huongDiChuyen = 'next')
{
    let dsPannel = document.querySelectorAll('.pannel');
    dsPannel.forEach((pannel, idx)=>
    {
        if (idx == index)
        {
            pannel.style.display = 'block';
            if (huongDiChuyen == 'back')
            {
                pannel.style.animation = 'diChuyenSangPhai 0.3s ease-out';
            }
            else if (huongDiChuyen == 'next')
            {
                pannel.style.animation = 'diChuyenSangTrai 0.3s ease-out';
            }                                        
        }
        else
        {
            pannel.style.display = 'none';
        }
    });
    currentIndex = index;
}


function setDot(index)
{
    let dsDot = document.querySelectorAll('.pannelDot');
    dsDot.forEach((dot, idx) =>
    {
        if (idx!== index)
        {
            dot.style.fill = 'green';
        }
        else
        {
            dot.style.fill = 'white';
        }
    });
}

var dsDots = document.querySelectorAll('.pannelDot');
console.log(dsDots.length);
dsDots.forEach((dot, idx) => 
{
    dot.addEventListener('click', function() 
    {
        showDiv(idx, 'no');
        setDot(idx);
    });
});