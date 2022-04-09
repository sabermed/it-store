import { View, Text, TouchableOpacity, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductCard = ({ navigation, productItem }) => {
  
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailsScreen')}
        style={{
          width: '49%',
          marginVertical: 14,
        }}>
        <View
          style={{
            width: '100%',
            height: 180,
            borderRadius: 8,
            backgroundColor: '#f2f2f2',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <Image
            source={{ uri: productItem.productImage }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
          <View
              style={{
                position: 'absolute',
                flexDirection: "row",
                width: "100%",
                top: 4,
                left: 0,
                justifyContent: 'space-between',
              }}>
              {productItem.isAvailable ? null : (
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  padding: 2,
                  backgroundColor: '#f01',
                  marginHorizontal: 4,
                  borderRadius: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'white',
                    fontWeight: '700',
                    letterSpacing: 0.7,
                  }}>
                  Out of stock
                </Text>
              </View>
            )}
            {productItem.isOff ? (
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  padding: 2,
                  marginHorizontal: 4,
                  backgroundColor: '#f59d00',
                  borderRadius: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
              }}>
                <Text style={{ fontSize: 10, fontWeight: "700", color: '#fff', }}>
                  -{productItem.offPercentage}%
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: 'black',
            fontWeight: '600',
            marginBottom: 2,
          }}>
          {productItem.productName}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          <Text style={{ fontSize: 12, fontWeight: "700", color: 'black',  }}>
            {productItem.productPrice} TND
          </Text>
        </View>
      </TouchableOpacity>
    );
};

export default ProductCard;