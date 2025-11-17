let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e)
{
    touchStartX = e.changedTouches[0].clientX;
});

document.addEventListener('touchend', function(e)
{
    let dsPannel = document.querySelectorAll('.pannel');
    touchEndX = e.changedTouches[0].clientX;
    if (touchEndX < touchStartX - 50)
    {
        if (currentIndex == dsPannel.length - 1)
        {
            currentIndex = 0;
        }
        else
        {
            currentIndex++;
        }
        showDiv(currentIndex, 'next');
        setDot(currentIndex);
    }
    else if (touchEndX > touchStartX + 50)
    {
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
});

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

let dsDot = document.querySelectorAll('.pannelDot');
dsDot.forEach((dot, idx) => 
{
    dot.addEventListener('click', function() 
    {
        showDiv(idx, 'no');
        setDot(idx);
    });
});