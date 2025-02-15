/* eslint-disable import/namespace */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Pressable, ScrollView } from 'react-native'
import * as api from '../../../services/ApiService'
import { useDispatch, useSelector } from 'react-redux'
import TextCard from './TextCard'
import Spinner from '../../../components/Spinner'
import { useFocusEffect } from '@react-navigation/native'

export function TextList({ route, navigation }) {
  const { category } = route.params
  const [isLoading, setIsLoading] = useState(true)
  const [shouldReload, setShouldReload] = useState(true)
  const selector = (state) => state.texts
  const { texts } = useSelector(selector)
  const dispatch = useDispatch()
  const fetchTexts = () => {
    if (category === 'All') {
      dispatch(api.getTexts('', 25, 0))
    } else {
      dispatch(api.getTexts(category, 50, 0))
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  useFocusEffect(
    React.useCallback(() => {
      if (shouldReload) {
        setIsLoading(true)
        fetchTexts()
      }
    }, [shouldReload])
  )

  const cards = texts.map((text) => (
    <Pressable
      key={text.textId}
      onPress={() => {
        setShouldReload(false)
        navigation.navigate('TextScreen', {
          textId: text.textId
        })
      }}>
      <TextCard text={text}></TextCard>
    </Pressable>
  ))

  if (isLoading) {
    return <Spinner />
  } else {
    return <ScrollView>{cards}</ScrollView>
  }
}

TextList.propTypes = {
  route: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired
}
