import { View, Text, Pressable, Image, Dimensions } from 'react-native'

const ProductCard = ({ navigation, productItem, isCategory }) => {
  const { width, height } = Dimensions.get("window");
  
  return (
    <Pressable
      key={productItem.id}
      onPress={() => navigation.navigate('ProductInfo', {productID: productItem.id})}
      style={{
        width: "49%",
        backgroundColor: "#fff",
        marginVertical: 4,
        borderRadius: 8,
      }}>
      <View
        style={{
          width: '100%',
          height: isCategory ? width / 2.5 : width / 1.8,
          borderRadius: 8,
          backgroundColor: '#f2f2f2',
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
              backgroundColor: '#f9eee2',
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'center',
          }}>
            <Text style={{ fontSize: 16, fontWeight: "700", color: '#e3571a', }}>
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