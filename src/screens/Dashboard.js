import * as React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../components/Header';
import CountryCard from '../components/CountryCard';
import SomethingWrong from '../components/SomethingWrong';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch('https://corona.lmao.ninja/countries')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({data: responseJson});
        this.setState({loading: false});
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
