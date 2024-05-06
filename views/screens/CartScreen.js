import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import { PrimaryButton } from '../components/Button';

const CartScreen = ({ navigation }) => {
  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        <Image source={item.image} style={styles.foodImage} />
        <View style={styles.detailsContainer}>
          <Text style={styles.foodName}>{item.name}</Text>
          <Text style={styles.ingredients}>{item.ingredients}</Text>
          <Text style={styles.price}>Rs {item.price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.actionBtn}>
            <Icon name="remove" size={20} color={COLORS.white} />
          </TouchableOpacity>
          <Text style={styles.quantity}>3</Text>
          <TouchableOpacity style={styles.actionBtn}>
            <Icon name="add" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const totalHeight = foods.length * 120; // Assuming each item has a height of 120

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrow-back-ios" size={28} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cart</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={[styles.menuContainer, { height: totalHeight }]}>
            {foods.map((food, index) => (
              <CartCard key={index} item={food} />
            ))}
          </View>
          <View style={styles.footer}>
            <Text style={styles.total}>Total Price: Rs 7000</Text>
            <PrimaryButton title="CHECKOUT" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    paddingBottom: 20, // Add padding to account for the footer
  },
  menuContainer: {
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    margin: 20,
    padding: 10,
  },
  cartCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginVertical:12,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  foodName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  ingredients: {
    fontSize: 13,
    color: COLORS.grey,
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  actionBtn: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -20
  },
});

export default CartScreen;
