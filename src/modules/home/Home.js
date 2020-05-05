import React from "react";
import styles from "./HomeStyles";
import { ScrollView, View } from "react-native";
import Card from "../../components/card/Card";
//import { connect } from 'react-redux';
// import { findWalks, findUserFriends } from './actions';
import UsersList from '../../components/usersList/UsersList';

const walks = [
  {
    id: 1,
    name: "Paseo 1"
  },
  {
    id: 2,
    name: "Paseo 2"
  },
  {
    id: 3,
    name: "Paseo 3"
  },
  {
    id: 4,
    name: "Paseo 4"
  },
  {
    id: 5,
    name: "Paseo 5"
  },
  {
    id: 6,
    name: "Paseo 6"
  }
];

const friends = [
    {
        "id" : 1,
        "name" : "Pedro",
        "image" : "https://img.icons8.com/plasticine/2x/user.png",
        "status" : "online"
    },
    {
        "id" : 2,
        "name" : "Pablo",
        "image" : "https://img.icons8.com/plasticine/2x/user.png",
        "status" : "online"
    },
    {
        "id" : 3,
        "name" : "Pablo C",
        "image" : "https://img.icons8.com/plasticine/2x/user.png",
        "status" : "offline"
    },
    {
        "id" : 4,
        "name" : "Fernando",
        "image" : "https://img.icons8.com/plasticine/2x/user.png",
        "status" : "offline"
    }
];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsVisible: false
    };
  }

  componentDidMount() {
    // Cargar la info del servidor
    //this.props.findWalks();
    //this.props.findUserFriends(this.props.user.login);
  }

  /* componentWillReceiveProps(nextProps) {
    if (this.props.walks.length !== nextProps.walks.length) {
      setTimeout(
        () =>
          this.setState({
            itemsVisible: true
          }),
        1000
      );
    }
  } */

  render() {
    return (
      <View style={styles.home}>
        <UsersList users={friends} onClickUser={user => window.location = ('/friend/' + user.id)} />
        <ScrollView style={styles.homeWalks}>
          {walks.map((item, i) => (
            <Card
              key={i}
              visible={this.state.itemsVisible}
              data={item}
              onClick={() => (window.location = "/walk/" + item.id)}
            />
          ))}
        </ScrollView>
        {/* <div className="walk_detail_control">
          <ActiveWalkDetail />
          </div> */}
        {/* <button className="button" onClick={() => (window.location = '/new-walk')}>Añadir paseo</button> */}
      </View>
    );
  }
}

/* export default connect(
  store => ({
    walks: store.home.walks,
    user: store.login.userInfo,
    friends: store.home.friends
  }),
  dispatch => ({
    findWalks: () => dispatch(findWalks()),
    findUserFriends: user => dispatch(findUserFriends(user))
  })
)(Home); */
export default Home;
