class Card {
  constructor(suit, value, rank){
    this.suit = suit
    this.value = value
    this.rank = rank
  }
}

class Player {
  constructor(name){
    this.name = name;
    this.hand = null;
    this.wins = 0;
    this.losses = 0;
  }
}

class Deck {
  constructor(){
    this.stack = []
    let suits = ['Spade','Diamond','Club','Heart'];
    let values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    suits.forEach(suit => {
      for(let i = 0; i < values.length; i++){
        if(values[i] === 'A') {
          let card = new Card(suit, values[i], 14)  
          this.stack.push(card)
        } else {
        let card = new Card(suit, values[i], i + 1)
        this.stack.push(card)
        }
      }
    })
    this.discard = [];
  }

  cardCount(){
    return this.stack.length
  }

  drawTwo(){
    let one = this.stack.pop(), two = this.stack.pop()
    this.discard.push(one, two)
    return `You drew a ${one.value} of ${one.suit}s and a ${two.value} of ${two.suit}s`
  }

  shuffle(){
    for(let i = this.stack.length - 1; i > 0; i--){
      let pos = Math.floor(Math.random() * i);
      let temp = this.stack[i]
      this.stack[i] = this.stack[pos]
      this.stack[pos] = temp
    }
    return 'Shuffled'
  }

  drawCards(num){
    let hand = []
    for(let i = 1; i <= num; i++) {
      hand.push(this.stack.pop())
    }
    return hand
  }
}

class War {
  constructor(player1, player2){
    this.deck = new Deck()
    this.p1 = new Player(player1)
    this.p2 = new Player(player2)
    this.contested = [];
  }

  dealInitial(){
    this.deck.shuffle()
    this.p1.hand = this.deck.drawCards(26)
    this.p2.hand = this.deck.drawCards(26)
  }

  play(){
    let winner, rounds = 0;

    while(!winner) {
      if(this.p1.hand.length === 0) {winner = this.p2}
      if(this.p2.hand.length === 0) {winner = this.p1}
      if(winner) {break}

      let p1Card = this.p1.hand.pop(), p2Card = this.p2.hand.pop()
      this.contested.push(p1Card, p2Card)

      if(p1Card.rank === p2Card.rank) {
        console.log('WAR!');
        for(let i = 1; i <= 3; i++) {
          this.contested.push(this.p1.hand.pop())
          this.contested.push(this.p2.hand.pop())
        }
        rounds++
      }

      else if(p1Card.rank > p2Card.rank) {
        console.log(`${this.p1.name} won with ${p1Card.value} against ${this.p2.name}'s ${p2Card.value} \n${this.p1.name} claimed ${this.contested.length} cards`);
        this.p1.hand.unshift(this.contested)
        this.contested=[];
        rounds++
      }

      else {
        console.log(`${this.p2.name} won with ${p2Card.value} against ${this.p1.name}'s ${p1Card.value} \n${this.p2.name} claimed ${this.contested.length} cards`);
        this.p2.hand.unshift(this.contested)
        this.contested = []
        rounds++
      }
    }
    console.log(`${winner.name} won in ${rounds} rounds\nWay to go ${winner.name}!`)
  }
}


let newGame = new War('Ashley', 'Kevin');
newGame.dealInitial()
newGame.play()
// console.log(newGame.p1.hand.length);
// console.log(newGame.p2.hand.length);

// const deck = new Deck()
// console.log(deck);