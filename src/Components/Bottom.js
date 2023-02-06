import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import image01 from '../images/Image01.png';
import image02 from '../images/Image02.png';
import image03 from '../images/Image03.png';
import image04 from '../images/Image04.png';
import image05 from '../images/Image05.png';
const Bottom = () => {
    return (
        <div>
            <h2>Ash & pikachu Arrive in Pokemon Universe</h2>
            <div className="text1">
                <div className="text-wrapper">
                    <div className="text-wrapper1">
                        <LoremIpsum p={1} />
                        <img className="images" src={image03} />
                    </div>
                    <div className="text-wrapper1">
                        <LoremIpsum p={1} />
                        <img className="images" src={image04} />
                    </div>
                    <div className="text-wrapper1">
                        <LoremIpsum p={1} />
                        <img className="images" src={image02} />
                    </div>
                </div>
                <div className="text-wrapper">
                    <LoremIpsum p={1} />
                    <div className="text-wrapper1">

                        <img className="images" src={image05} />
                        <LoremIpsum p={1} />
                    </div>
                    <div className="text-wrapper1">

                        <img className="images" src={image01} />
                        <LoremIpsum p={1} />
                    </div>
                </div>

            </div>,
        </div>
    );

};
export default Bottom;