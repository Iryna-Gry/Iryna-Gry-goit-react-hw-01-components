import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import { Profile, Statistics, FriendList, TransactionHistory} from "components";


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: "30px",
        margin: "10px 20px",
        // fontSize: 40,
        // color: '#010101'
      }}
    >
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />
      <div>
      <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
       
        <FriendList friends={friends} />
         </div>
      <TransactionHistory items={transactions} />
    </div>
  );
};


