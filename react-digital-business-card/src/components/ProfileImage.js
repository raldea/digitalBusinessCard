import ImgProfile from '../assets/images/ricky-profile.png';


function ProfileImage() {
    return (
        <div className="profile-image">
            <img src={ImgProfile} alt="Profile Image" />
        </div>
    );
}

export default ProfileImage;