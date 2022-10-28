import './style.css';
import photo from './img/img.jpg';

function Main() {
    return (
        <div className='wrapper'>
            <div className='avatar'>
                <img src={photo} alt='photo' />
            </div>
        </div>
    );
}

export default Main;