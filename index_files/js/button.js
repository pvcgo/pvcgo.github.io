class MenuButton
{
    constructor (link,text,imageSrc,imageWidth)
    {
        this.link = link;
        this.text = text;
        this.imageSrc = imageSrc;
        this.imageWidth = imageWidth;
    }

    toElement()
    {
        let aa = document.createElement('a');
        aa.href = this.link;
        let divv = document.createElement('div');
        divv.className = 'appButton';
        if (this.imageSrc == '')
        {

        }
        else
        {
            let img = document.createElement('img');
            img.src = 'index_files/img/' + this.imageSrc;
            if (this.imageWidth !== '')
            {
                img.style.width = this.imageWidth;
            }
            divv.appendChild(img);
        }
        divv.appendChild(document.createTextNode(this.text));
        aa.appendChild(divv);
        return aa;
    }
    
    
}