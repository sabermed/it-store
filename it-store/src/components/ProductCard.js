import { View, Text, Pressable, Image } from 'react-native'

const ProductCard = ({ navigation, productItem }) => {
  
    return (
      <Pressable
        onPress={() => navigation.navigate('DetailsScreen')}
        style={{
          width: "48.5%",
          backgroundColor: "#fff",
          marginVertical: 6,
          borderRadius: 8,
        }}>
        <View
          style={{
            width: '100%',
            height: 200,
            borderRadius: 8,
            backgroundColor: '#c9cacf',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{ uri: productItem.productImage }}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
          {productItem.isOff ? (
            <View
              style={{
                position: "absolute",
                top: 4,
                right: 2,
                padding: 4,
                marginHorizontal: 4,
                backgroundColor: '#f2f7f2',
                borderRadius: 3,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
              <Text style={{ fontSize: 14, fontWeight: "700", color: '#e3571a', }}>
                -{productItem.offPercentage}%
              </Text>
            </View>
          ) : null}
        </View>
        {productItem.isAvailable ? null : (
          <View style={{position: "relative"}}>
            <View
              style={{
                position: "absolute",
                top: -24,
                padding: 4,
                backgroundColor: 'red',
                borderTopRightRadius: 8,
                borderBottomLeftRadius: 8,
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 10,
                  color: 'white',
                  fontWeight: '700',
                  letterSpacing: 1,
                  textAlign: 'center',
                }}>
                Out of stock
              </Text>
            </View>
          </View>
        )}
        <Text
          numberOfLines={3}
          style={{
            fontSize: 12,
            color: 'black',
            fontWeight: '600',
            paddingHorizontal: 10,
            paddingVertical: 4,
          }}>
          {productItem.productName}
        </Text>
        
        <Text
          numberOfLines={1}
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: 'black',
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}>
          {productItem.productPrice} TND
        </Text>
      </Pressable>
    );
};

export default ProductCard;