
var isMediaQueryLG = false;
var typeOrder = 'grid';

const jsonInformation = [
    { id: 1, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 2, img: './assets/img/gallery/img-2.png', title: 'Brad Pitt', description: 'Description of Brad Pitt Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 3, img: './assets/img/gallery/img-3.png', title: 'Angeline Jolie', description: 'Description of Angeline Jolie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 4, img: './assets/img/gallery/img-4.png', title: 'Silvestre Stallone', description: 'Description of Silvestre Stallone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 5, img: './assets/img/gallery/img-5.png', title: 'Jhon Copper', description: 'Description of Jhon Copper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 6, img: './assets/img/gallery/img-6.png', title: 'Jhon Snow', description: 'Description of Jhon Snow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 7, img: './assets/img/gallery/img-7.png', title: 'Axel Rose', description: 'Description of Axel Rose Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 8, img: './assets/img/gallery/img-8.png', title: 'Leonardo Di Caprio', description: 'Description of Leonardo Di Caprio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 9, img: './assets/img/gallery/img-9.png', title: 'Andery Arshavin', description: 'Description of Andery Arshavin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 10, img: './assets/img/gallery/img-10.png', title: 'Sillicon Valley', description: 'Description of Sillicon Valley Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 11, img: './assets/img/gallery/img-1.png', title: 'Apple', description: 'Description of Apple Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 12, img: './assets/img/gallery/img-1.png', title: 'Jhon Petrucci', description: 'Description of Jhon Petrucci Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 13, img: './assets/img/gallery/img-1.png', title: 'Shakira', description: 'Description of Shakira Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 14, img: './assets/img/gallery/img-1.png', title: 'Tony Bennet', description: 'Tony Bennet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 15, img: './assets/img/gallery/img-1.png', title: 'The Beattles', description: 'The Beattles Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 16, img: './assets/img/gallery/img-1.png', title: 'Wayne Rooney', description: 'Description of Wayne Rooney Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 17, img: './assets/img/gallery/img-1.png', title: 'Jack Wilshere', description: 'Description of Jack Wilshere Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 18, img: './assets/img/gallery/img-1.png', title: 'Canada', description: 'Description of Canada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 19, img: './assets/img/gallery/img-1.png', title: 'United States', description: 'Description of United States Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 20, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 21, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 22, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 23, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 24, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 25, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 26, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 27, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 28, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 29, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ', isActive: false },
    { id: 30, img: './assets/img/gallery/img-1.png', title: 'Jhon Smith', description: 'Description of Jhon Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at varius velit, quis bibendum orci. Aliquam erat volutpat. Maecenas auctor lectus eget velit tempus, in ornare enim tempor. Cras sodales, est a cursus facilisis, quam velit posuere orci, nec suscipit ex enim quis velit. Nulla a pellentesque eros. ' , isActive: false }

]

/**
 * (*for) cicle implementation
 * @param element the root element from HTML part where you want to apply (*for) cicle. This root element cannot to use (*for). Just children are allowed to use it.
 * @returns void
 */
function htmlFor(element) {

    return replace(element, element);
}

/**
 * Recursive function for map all descendants and replace (*for) cicles with repetitions where items from array will be applied on HTML.
 * @param rootElement The root element
 * @param el The mapped root and its children
 */
function replace(rootElement, el) {
    el.childNodes.forEach((childNode) => {
        if (childNode instanceof HTMLElement) {
            const child = childNode;
            if (child.hasAttribute('*for')) {
                const operation = child.getAttribute('*for');
                const itemsCommand = /let (.*) of (.*)/.exec(operation);
                if (itemsCommand?.length === 3) {
                    const listName = itemsCommand[2];
                    const itemName = itemsCommand[1];

                    if (rootElement[listName] && Array.isArray(rootElement[listName])) {
                        for (let item of rootElement[listName]) {
                            const clone = child.cloneNode(true);
                            clone.removeAttribute('*for');
                            const htmlParts = clone.innerHTML.split('}}');
                            htmlParts.forEach((part, i, parts) => {
                                const position = part.indexOf('{{');

                                if (position >= 0) {
                                    const pathTovalue = part
                                        .substring(position + 2)
                                        .replace(/ /g, '');
                                    const prefix = part.substring(0, position);

                                    let finalValue = '';
                                    let replaced = false;

                                    if (pathTovalue.indexOf('.') >= 0) {
                                        const byPatternSplitted = pathTovalue.split('.');
                                        if (byPatternSplitted[0] === itemName) {
                                            replaced = true;
                                            for (const subpath of byPatternSplitted) {
                                                finalValue = item[subpath];
                                            }
                                        }
                                    } else {
                                        if (pathTovalue === itemName) {
                                            replaced = true;
                                            finalValue = item;
                                        }
                                    }
                                    parts[i] = prefix + finalValue;
                                }

                                return part;
                            });

                            clone.innerHTML = htmlParts.join('');

                            el.append(clone);
                        }
                    }
                }
                el.removeChild(child);
            }
            replace(rootElement, child);
        }
    });
}

// Using fetch
async function downloadImage(imageSrc, name) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = `${name}-img`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

function validar(e, id) {
    //e.currentTarget.style.visibility = 'hidden';
    console.log(id);
}

document.addEventListener('DOMContentLoaded', async () => {

    let aux = [];
    Array.prototype.push.apply(aux, jsonInformation);
    let row, col1, col2, col3;

    if(typeOrder=='grid'){
        
        if(window.matchMedia("(min-width: 0px)").matches && window.matchMedia("(max-width: 767.98px)").matches){
            row = jsonInformation.length;
            col1 = jsonInformation;
            col2 = [];    
            col3 = [];   
        }else if(window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 991.98px)").matches){
            row = parseInt(jsonInformation.length / 2);
            col1 = jsonInformation.splice(0, row);
            col2 = jsonInformation;    
            col3 = [];
        }else{
            row = parseInt(jsonInformation.length / 3);
            col1 = aux.splice(0, row);
            col2 = aux.splice(0, row);
            col3 = aux;    
        }
    
    }else{
        col1 = jsonInformation;
        col2=[];
        col3=[];
    }

    const rootElement1 = document.getElementById('columna-000021');
    rootElement1.galleryCol1 = col1;
    const rootElement2 = document.getElementById('col-2');
    rootElement2.galleryCol2 = col2;
    const rootElement3 = document.getElementById('col-3');
    rootElement3.galleryCol3 = col3;

    htmlFor(rootElement1);
    htmlFor(rootElement2);
    htmlFor(rootElement3);    

    var modalBox = document.querySelector('.modal-box'),
    modalBoxImg = modalBox.querySelector('.modal-box--image'),
    overlay  = document.querySelector('.overlay'),
    imageBox = document.querySelectorAll('.image-box'),
    modalImgBox = modalBoxImg.querySelector('img');

    for (let i = 0; i < imageBox.length; i++) {
        imageBox[i].onclick = function () {
            modalBox.classList.remove('invisible');
    
            var imgSrc = this.querySelector('img').src;
            
            modalImgBox.src = imgSrc;
        }
    }
    
    overlay.onclick = function () {
        modalBox.classList.add('invisible');
    }
    window.onkeydown = function (e) {
        if (e.keyCode === 27){
            modalBox.classList.add('invisible');
    
        }
    }

});

function navigate() {
    console.log("hola");
    document.getElementById('gallery').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function showOrder(type){

    typeOrder = type;

    const rootElement1 = document.getElementById('columna-000021');
    const rootElement2 = document.getElementById('col-2');
    const rootElement3 = document.getElementById('col-3');

    assingClassToGridContainer(rootElement1, type);
    assingClassToGridContainer(rootElement2, type);
    assingClassToGridContainer(rootElement3, type);
    assingClassToGridContainer(document.getElementById('content-grid'), type);

}

function assingClassToGridContainer(element, type){
    element.classList.remove(type=="list" ? 'grid' : "list");
    element.classList.add(type=="list" ? 'list' : "grid");
}


    /*
*/

