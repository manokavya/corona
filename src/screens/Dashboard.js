import * as React from 'react';
import {AsyncStorage, ScrollView, View} from 'react-native';
import Header from '../components/Header';
import CountryCard from '../components/CountryCard';
import SomethingWrong from '../components/SomethingWrong';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    global.localData = [];
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('data')
      .then(data => {
        global.localData =  JSON.parse(data);
      })
      .then(() => {
        if (!global.localData) {
          fetch('https://corona.lmao.ninja/countries')
            .then(response => {
              return response.json();
            })
            .then(responseJson => {
              console.log(global.localData)
              AsyncStorage.setItem('data', JSON.stringify(responseJson));
              this.setState({data: responseJson});
              this.setState({loading: false});
            });
        } else {
          console.log('dgdgtjdrdrdr')
          AsyncStorage.getItem('data').then(data => {
            //console.log(data);
            this.setState({data: JSON.parse(data)});
            this.setState({loading: false});
          });
        }
      });
  }

  render() {
    return (
      <View>
        <Header />
        <SomethingWrong
          loading={this.state.loading}
          meetings={this.state.data}
        />
        <ScrollView>
          <CountryCard
            navigation={this.props.navigation}
            data={this.state.data}
          />
        </ScrollView>
      </View>
    );
  }
}
