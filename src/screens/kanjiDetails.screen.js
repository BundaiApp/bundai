import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Platform,
  Image
} from 'react-native'
import { useMutation } from '@apollo/client'
import { Icon } from 'react-native-elements'
//utils
import AuthContext from '../contexts/authContext'
//graphQL
import ADD_FLASHCARD from '../mutations/addFlashCard.mutation'

const windowWidth = Dimensions.get('window').width

export default function KanjiDetail({ navigation, route }) {
  const { wholeArr, itemIndex, isWord, isKana } = route.params
  //context
  const { auth } = useContext(AuthContext)
  //mutation
  const [addFlashCard] = useMutation(ADD_FLASHCARD)
  //scrollViewRef
  const scrollViewRef = useRef()

  const [currentX, setCurrentX] = useState(0)

  const Pill = ({ subject }) => (
    <View style={styles.pill}>
      <Text style={styles.subtitleText}>{subject}</Text>
    </View>
  )

  const KanjiBox = ({ kanji, meaning }) => (
    <View style={styles.block}>
      <Text style={styles.subtitleText}>{kanji}</Text>
      <Text style={styles.subtitleText}>{meaning}</Text>
    </View>
  )

  const KanjiBoxForUsedIn = ({ kanji, meanings, furigana }) => (
    <View style={styles.block}>
      <Text style={styles.subtitleText}>{kanji}</Text>
      <Text style={styles.subtitleTextSmall}>{furigana}</Text>
      <Text style={styles.subtitleTextSmall}>{meanings}</Text>
    </View>
  )

  async function addCard({ kanjiName, hiragana, on, meanings, quizAnswers }) {
    await addFlashCard({
      variables: {
        userId: auth.userId,
        kanjiName,
        hiragana: isKana ? '' : isWord ? hiragana : on[0],
        meanings,
        quizAnswers
      }
    })
  }

  const handleScrollEnd = async (event) => {
    const { nativeEvent } = event
    const contentOffsetX = nativeEvent.contentOffset?.x || nativeEvent.targetContentOffset?.x || 0
    const currentIndex = Math.floor(contentOffsetX / windowWidth)
    setCurrentX(currentIndex)
    // Do other operations based on currentIndex
    addCard(wholeArr[currentIndex + 1])
  }

  // Scroll to the left
  const scrollLeft = () => {
    const prevIndex = Math.max(currentX - 1, 0) // Ensure we don't scroll past the first item.
    const newX = prevIndex * windowWidth
    if (
      scrollViewRef.current &&
      scrollViewRef.current._listRef &&
      scrollViewRef.current._listRef.scrollToOffset
    ) {
      scrollViewRef.current._listRef.scrollToOffset({ offset: newX, animated: true })
      setCurrentX(prevIndex) // Update current index.
    }
  }

  // Scroll to the right
  const scrollRight = () => {
    const prevIndex = Math.max(currentX + 1, 0) // Ensure we don't scroll past the first item.
    const newX = prevIndex * windowWidth
    if (
      scrollViewRef.current &&
      scrollViewRef.current._listRef &&
      scrollViewRef.current._listRef.scrollToOffset
    ) {
      scrollViewRef.current._listRef.scrollToOffset({ offset: newX, animated: true })
      setCurrentX(prevIndex) // Update current index.
    }
  }

  const images = {
    person: require('../assets/person.png'),
    time: require('../assets/time.png'),
    work: require('../assets/work.png'),
    school: require('../assets/school.png'),
    place: require('../assets/place.png'),
    problem: require('../assets/problem.png'),
    hand: require('../assets/hand.png'),
    talk: require('../assets/talk.png'),
    car: require('../assets/car.png'),
    book: require('../assets/book.png'),
    money: require('../assets/money.png'),
    house: require('../assets/house.png'),
    knowledge: require('../assets/knowledge.png'),
    name: require('../assets/name.png'),
    thought: require('../assets/thought.png'),
    town: require('../assets/town.png'),
    food: require('../assets/food.png'),
    eye: require('../assets/eye.png'),
    ear: require('../assets/ear.png'),
    leg: require('../assets/leg.png'),
    letter: require('../assets/letter.png'),
    movie: require('../assets/movie.png'),
    dog: require('../assets/dog.png'),
    cat: require('../assets/cat.png'),
    fish: require('../assets/fish.png'),
    bird: require('../assets/bird.png'),
    voice: require('../assets/voice.png'),
    face: require('../assets/face.png'),
    family: require('../assets/family.png'),
    world: require('../assets/world.png'),
    morning: require('../assets/morning.png'),
    night: require('../assets/night.png'),
    purpose: require('../assets/purpose.png'),
    dream: require('../assets/dream.png'),
    study: require('../assets/study.png'),
    sky: require('../assets/sky.png'),
    wind: require('../assets/wind.png'),
    water: require('../assets/water.png'),
    fire: require('../assets/fire.png'),
    earth: require('../assets/earth.png'),
    tree: require('../assets/tree.png'),
    mountain: require('../assets/mountain.png'),
    river: require('../assets/river.png'),
    sea: require('../assets/sea.png'),
    sun: require('../assets/sun.png'),
    moon: require('../assets/moon.png'),
    star: require('../assets/star.png'),
    scenery: require('../assets/scenery.png'),
    flower: require('../assets/flower.png'),
    airport: require('../assets/airport.png'),
    trainstation: require('../assets/trainstation.png'),
    road: require('../assets/road.png'),
    train: require('../assets/train.png'),
    nature: require('../assets/nature.png'),
    animal: require('../assets/animal.png'),
    color: require('../assets/color.png'),
    black: require('../assets/black.png'),
    white: require('../assets/white.png'),
    red: require('../assets/red.png'),
    blue: require('../assets/blue.png'),
    yellow: require('../assets/yellow.png'),
    small: require('../assets/small.png'),
    big: require('../assets/big.png'),
    new: require('../assets/new.png'),
    old: require('../assets/old.png'),
    high: require('../assets/high.png'),
    low: require('../assets/low.png'),
    long: require('../assets/long.png'),
    short: require('../assets/short.png'),
    busy: require('../assets/busy.png'),
    quiet: require('../assets/quiet.png'),
    energetic: require('../assets/energetic.png'),
    sad: require('../assets/sad.png'),
    happy: require('../assets/happy.png'),
    unhappiness: require('../assets/unhappiness.png'),
    relief: require('../assets/relief.png'),
    illness: require('../assets/illness.png'),
    happiness: require('../assets/happiness.png'),
    sleepy: require('../assets/sleepy.png'),
    comfortable: require('../assets/comfortable.png'),
    boredom: require('../assets/boredom.png'),
    clock: require('../assets/clock.png'),
    mirror: require('../assets/mirror.png'),
    telephone: require('../assets/telephone.png'),
    mobilephone: require('../assets/mobilephone.png'),
    email: require('../assets/email.png'),
    joy: require('../assets/joy.png'),
    regret: require('../assets/regret.png'),
    memory: require('../assets/memory.png'),
    reason: require('../assets/reason.png'),
    scene: require('../assets/scene.png'),
    failure: require('../assets/failure.png'),
    success: require('../assets/success.png'),
    progress: require('../assets/progress.png'),
    change: require('../assets/change.png'),
    opportunity: require('../assets/opportunity.png'),
    emotion: require('../assets/emotion.png'),
    heart: require('../assets/heart.png')
  }

  function Page({ kanjiName, meanings, kun, on, hiragana, similars, usedIn }) {
    return (
      <ScrollView contentContainerStyle={styles.scrollviewBackDrop}>
        {isWord ? (
          <View style={styles.imageHolder}>
            <Image style={styles.hiraganaPic} source={images[meanings[0]]} resizeMode={'contain'} />
          </View>
        ) : null}

        <View style={styles.sliderHolder}>
          {Platform.OS != 'ios' && Platform.OS != 'android' ? (
            <TouchableOpacity onPress={scrollLeft}>
              <Icon name={'arrow-back-circle'} type={'ionicon'} size={26} color={'gray'} />
            </TouchableOpacity>
          ) : null}

          <Text style={styles.kanji}>{kanjiName}</Text>

          {Platform.OS != 'ios' && Platform.OS != 'android' ? (
            <TouchableOpacity onPress={scrollRight}>
              <Icon name={'arrow-forward-circle'} type={'ionicon'} size={26} color={'gray'} />
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.textHolder}>
          <Text style={styles.header}>Meanings</Text>
        </View>

        <View style={styles.pillHolder}>
          {typeof meanings != 'string' ? (
            meanings.map((item, index) => <Pill key={item} index={index} subject={item} />)
          ) : (
            <Pill subject={meanings} />
          )}
        </View>

        {isKana ? null : isWord ? (
          <>
            <View style={styles.textHolder}>
              <Text style={styles.header}>hiragana</Text>
            </View>
            <View style={styles.pillHolder}>
              <Pill subject={hiragana} />
            </View>
          </>
        ) : (
          <>
            <View style={styles.textHolder}>
              <Text style={styles.header}> Kunyomi Readings</Text>
            </View>
            <View style={styles.pillHolder}>
              {on.map((item, index) => (
                <Pill key={item} index={index} subject={item} />
              ))}
            </View>

            <View style={styles.textHolder}>
              <Text style={styles.header}>Onyomi Readings</Text>
            </View>
            <View style={styles.pillHolder}>
              {kun.map((item, index) => (
                <Pill key={item} index={index} subject={item} />
              ))}
            </View>

            <View style={styles.textHolder}>
              <Text style={styles.header}>Similar Kanjis {kanjiName} </Text>
            </View>
            <View style={styles.pillHolder}>
              {similars?.map((item, index) => (
                <KanjiBox
                  key={item.kanji}
                  index={index}
                  kanji={item.kanji}
                  meaning={item.meaning}
                />
              ))}
            </View>

            <View style={styles.textHolder}>
              <Text style={styles.header}>Words made with {kanjiName} </Text>
            </View>
            <View style={styles.pillHolder}>
              {usedIn?.map((item, index) => (
                <KanjiBoxForUsedIn
                  key={item.kanji}
                  index={index}
                  kanji={item.kanji}
                  furigana={item.furigana}
                  meanings={item.meanings}
                />
              ))}
            </View>
          </>
        )}
      </ScrollView>
    )
  }

  useEffect(() => {
    setCurrentX(itemIndex)
    addCard(wholeArr[itemIndex])
  }, [])

  return (
    <FlatList
      horizontal
      style={styles.container}
      pagingEnabled
      data={wholeArr}
      ref={scrollViewRef}
      initialNumToRender={3}
      initialScrollIndex={itemIndex}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => `${item.kanjiName}_${index}`}
      getItemLayout={(wholeArr, index) => ({
        length: windowWidth,
        offset: windowWidth * index,
        index
      })}
      onScrollEndDrag={(event) => handleScrollEnd(event)}
      renderItem={({ item }) => Page(item)}
      removeClippedSubviews={true}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory'
  },
  scrollviewBackDrop: {
    width: windowWidth
  },
  kanji: {
    fontWeight: '600',
    fontSize: 120,
    alignSelf: 'center'
  },
  headerAlt: {
    fontWeight: '400',
    fontSize: 30,
    alignSelf: 'flex-start',
    backgroundColor: 'wheat',
    paddingLeft: '5%'
  },
  header: {
    fontWeight: '400',
    fontSize: 30,
    alignSelf: 'flex-start',
    paddingLeft: '5%'
  },
  pillHolder: {
    paddingHorizontal: '5%',
    flexDirection: 'row',
    paddingVertical: '2%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  pill: {
    backgroundColor: 'thistle',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '1.5%',
    paddingHorizontal: '4%',
    marginRight: '2%',
    marginBottom: '2%'
  },
  subtitleText: {
    fontWeight: '400',
    fontSize: 22,
    fontFamily: 'menlo'
  },
  subtitleTextSmall: {
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'menlo'
  },
  block: {
    margin: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10
  },
  textHolder: {
    paddingVertical: '1%',
    backgroundColor: 'khaki'
  },
  sliderHolder: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  hiraganaPic: {
    height: 400,
    width: 300
  },
  imageHolder: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
