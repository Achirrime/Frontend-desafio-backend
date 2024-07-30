import Img from '../assets/menubaixo.jpg';
import Buttons from './buttons';
export const ImgCenter = () => {
    return (
      <div className="max-w-[600px] mx-auto my-8 rounded-xl overflow-hidden shadow-lg transition duration-300 transform hover:scale-110 cursor-pointer">
        <div className="relative">
          <img src={Img} alt="" className='w-full' />
          <div className="absolute inset-0 flex items-center justify-center bg-slate-500 bg-opacity-50 text-white p-4">
            <Buttons/>
          </div>
        </div>
      </div>
    );
  };
  