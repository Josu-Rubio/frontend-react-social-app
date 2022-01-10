import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src='/assets/gift.png' alt='' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className='rigthbarAd' src='/assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Friends Online</h4>
        <ul className='rightbarFriendsList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
