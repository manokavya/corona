import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

export default class CountryCard extends React.Component {
  render() {
    const countryCard = this.props.data.map((item, key) => {
      const handleBookingCard = () => {
        this.props.navigation.navigate('Booking', {
          room_id: item.id,
        });
      };

      return (
        <Card key={item.country} style={styles.card}>
          <Card.Content>
            <View style={{flexDirection: 'row'}}>
              <Paragraph style={{fontWeight: 'bold', fontSize: 20}}>
                {item.country}
              </Paragraph>
            </View>
            <Paragraph style={{marginTop: 5}}>
              <Text>
                <FA5Icon name="allergies" size={12} color="#33cc33" />{' '}
                <Text>
                  <Text style={{fontWeight: 'bold'}}>{item.cases}</Text>{' '}
                  Total cases
                </Text>
              </Text>
            </Paragraph>
            <Paragraph>
              <Text>
                <FAIcon name="heartbeat" size={12} color="#1b60e0" />{' '}
                <Text>
                  <Text style={{fontWeight: 'bold'}}>{item.todayCases}</Text>{' '}
                  Affected today
                </Text>
              </Text>
            </Paragraph>
            <Paragraph>
              <Text>
                <FA5Icon name="sad-tear" size={12} color="#19c8d1" />{' '}
                <Text>
                  <Text style={{fontWeight: 'bold'}}>{item.deaths}</Text>{' '}
                  Total deaths
                </Text>
              </Text>
            </Paragraph>
            <Paragraph style={{marginBottom: 15}}>
              <Text>
                <FA5Icon name="heart-broken" size={12} color="#000000" />{' '}
                <Text>
                  <Text style={{fontWeight: 'bold'}}>{item.todayDeaths}</Text>{' '}
                  Deaths today
                </Text>
              </Text>
            </Paragraph>
          </Card.Content>
          <View style={styles.cardFooter}>
            <View style={{flexDirection: 'row'}}>
              <Paragraph style={{marginLeft: 10, fontWeight: 'bold'}}>
                <Text>
                  <FAIcon name="heart" size={12} color="#f2391d" />{' '}
                </Text>
                <Text style={{fontWeight: 'bold'}}>{item.recovered}</Text>{' '}
                Recovered
              </Paragraph>
            </View>
          </View>
        </Card>
      );
    });
    return <View>{countryCard}</View>;
  }
}

const styles = StyleSheet.create({
  cardFooter: {
    backgroundColor: '#5C6A7833',
    padding: 6,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderColor: '#00000033',
    borderWidth: 1,
  },
  card: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },
});
