
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 border-b-2'>
            <h1 className="text-4xl font-bold ">Knowledge Cafes</h1>
            <img src={profile} alt="profile pic" />
        </div>
    );
};

export default Header;