import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import Heading from '../../components/Heading'

export default function Slider() {

  const [slider, setSlider] = useState([])

  useEffect(() => {
    getSlider()
  }, [])

  const getSlider = () => {
    GlobalApi.getSlider().then(resp => {
      console.log("resp", resp.sliders)
      setSlider(resp?.sliders)
    })
  }
  return (
    <View>
      <Heading text={"Offers For You"}/>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }}>
            <Image source={{ uri: item?.image?.url }}
              style={styles.sliderImage}
            />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: 'cover',
    gap: 10
  }
});