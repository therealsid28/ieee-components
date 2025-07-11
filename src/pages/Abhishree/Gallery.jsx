import aImage from './pictures/a.jpg';
import bImage from './pictures/b.jpg';
import cImage from './pictures/c.jpg';
import dImage from './pictures/d.jpg';
import eImage from './pictures/e.jpg';
import fImage from './pictures/f.jpg';


export default function Gallery() {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            <img src={aImage} alt="A" className="w-full h-auto rounded" />
            <img src={bImage} alt="B" className="w-full h-auto rounded" />
            <img src={cImage} alt="C" className="w-full h-auto rounded" />
            <img src={dImage} alt="D" className="w-full h-auto rounded" />
            <img src={eImage} alt="E" className="w-full h-auto rounded" />
            <img src={fImage} alt="F" className="w-full h-auto rounded" />
        </div>
    );
}