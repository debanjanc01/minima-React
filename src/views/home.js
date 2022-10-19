import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Minima</title>
        <meta property="og:title" content="Minima" />
      </Helmet>
      <div className="home-block-header"></div>
      <div className="main-header">
        <h1 className="main-header-text minima-color">MINIMA</h1>
        <span className="home-text001">A MINIMALIST CARD GAME</span>
      </div>
      <div className="home-block-dots">
        <svg viewBox="0 0 1024 1024" className="dots">
          <path d="M86 512q0-176 125-301t301-125 301 125 125 301-125 301-301 125-301-125-125-301z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="dots">
          <path d="M86 512q0-176 125-301t301-125 301 125 125 301-125 301-301 125-301-125-125-301z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="dots">
          <path d="M86 512q0-176 125-301t301-125 301 125 125 301-125 301-301 125-301-125-125-301z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="dots">
          <path d="M86 512q0-176 125-301t301-125 301 125 125 301-125 301-301 125-301-125-125-301z"></path>
        </svg>
      </div>
      <div className="home-rulebook-block rulebook">
        <div className="rulebook-content-box">
          <h1 className="rulebook-content-heading-left">Starting Setup</h1>
          <span className="rulebook-content-text">
            <span>
              The game starts with dividing the pack of cards into two equal
              parts(40 card each). Player 1 and Player 2 shuffle
            </span>
            <br></br>
            <span>
              their decks and put down 5 shields each from the top of the deck,
              to the shield zone on the Battlefield.
            </span>
            <br></br>
            <span>
              Player 1 and Player 2 now have to draw 4 more cards from the top
              their deck to their hands.
            </span>
          </span>
        </div>
        <div className="rulebook-content-box">
          <h1 className="rulebook-content-heading-right">The Game</h1>
          <span className="rulebook-content-text">
            <span>The game happens turn wise like every other card game.</span>
            <br></br>
            <span>
              It consists of numerous rounds, until one player defeats the
              other.
            </span>
            <br></br>
            <br></br>
            <span>Each round consists of 3 phases.</span>
            <br></br>
            <br></br>
            <span>
              Phase 1: Player 1 places at most of 1 Hero Card and 1 Spell Card
              on the Battlefield. ( A player can choose to play just 1 card
              too)
            </span>
            <br></br>
            <br></br>
            <span>Phase 2: Player 2 does the same.</span>
            <br></br>
            <br></br>
            <span>Phase 3: Battle.</span>
            <br></br>
            <br></br>
            <span>
              This sequence will change every round alternatively. So, in the
              second round 
            </span>
            <span>Player 2 places their cards first.</span>
          </span>
        </div>
        <div className="rulebook-content-box">
          <h1 className="rulebook-content-heading-left">
            Cards &amp; the Battlefield
          </h1>
          <span className="rulebook-content-text">
            <span>
              If you look at the cards closely, you might notice that there are 
            </span>
            <span>2 kinds of cards.</span>
            <br></br>
            <span>
               
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>  Hero Cards: with AP and HP values.</span>
            <br></br>
            <span>  Spell Cards: with no AP and HP values.</span>
            <br></br>
            <span>    ▪ AP = Attack Points</span>
            <br></br>
            <span>    ▪ HP = Health Points.</span>
            <br></br>
            <br></br>
            <span>
              Spell Cards act like modifiers for 1 round unless mentioned
            </span>
            <br></br>
            <span>otherwise.</span>
            <br></br>
            <br></br>
            <span>Cards have to placed either on the Attack Line or the </span>
            <span>Defence Line (depending on your choice)</span>
          </span>
          <div className="home-battlefield-image-block rulebook-content-box">
            <img
              alt="image"
              src="/playground_assets/img_0010-1300w.png"
              loading="lazy"
              className="rulebook-content-image"
            />
          </div>
        </div>
        <div className="rulebook-content-box">
          <h1 className="rulebook-content-heading-right">
            <span>Battle</span>
            <br></br>
          </h1>
          <span className="rulebook-content-text">
            <span>
              The main part of the game is Phase 3 of every round, which is
              where the fruition of your strategies take place.
            </span>
            <br></br>
            <br></br>
            <span>The Player who places the cards second attacks first.</span>
            <br></br>
            <br></br>
            <span>
              The whole point of the game is for a player to break all the
            </span>
            <br></br>
            <span>shields of their opponent.</span>
            <br></br>
            <br></br>
            <span>
              Remember that each shield is a card(Hero or Spell). When
            </span>
            <br></br>
            <span>the opponent breaks your shield, that shield card</span>
            <br></br>
            <span>
              comes to your hand and you can use the card immediately in the
              same round or not, depending on your strategy.
            </span>
          </span>
        </div>
        <div className="rulebook-content-box">
          <h1 className="rulebook-content-heading-left">
            <span>Breaking a Shield</span>
            <br></br>
          </h1>
          <span className="rulebook-content-text">
            <span>
              Depending on whoever attacks first, AP of the Attack Card(on 
            </span>
            <span>
              the Attack Line), should be higher than the HP of the Defence 
            </span>
            <span>
              Card on the Defence Line of the opponent.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>You might need </span>
            <span>
              more than 1 round to deplete the HP of a defender. Once you
              kill a defender, you get to break 1 shield of the opponent.
            </span>
            <br></br>
            <span>▪ Per round only 1 shield can be broken.</span>
            <br></br>
            <span>
              ▪ But don’t forget, breaking a shield will give your opponent an 
            </span>
            <span>
              extra card in their hand to play in the same round.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>If an Attack Card has 40 AP and 80 HP, and the Defence</span>
            <br></br>
            <span>
              card that is being attacked has 40 AP and 80 HP, then this
            </span>
            <br></br>
            <span>is how the calculation goes:</span>
            <br></br>
          </span>
          <div className="home-breaking-a-shield-image-block rulebook-content-box">
            <img
              alt="image"
              src="/playground_assets/img_2597-1300w.png"
              loading="lazy"
              className="rulebook-content-image"
            />
            <span className="home-text099 rulebook-content-text">
              <span>Defenders also might </span>
              <span>have some AP to deplete </span>
              <span>the Attacker’s HP.</span>
              <br></br>
              <span>▪ AP value does not </span>
              <span>change, unless a card</span>
              <br></br>
              <span>description says so.</span>
              <br></br>
              <span>▪ Here bloodlust gets +10 </span>
              <span>AP for the next round, </span>
              <span>based on the card </span>
              <span>description.</span>
            </span>
          </div>
          <span className="rulebook-content-text">
            <span>Only when the HP of a Defence Card is 0 can you</span>
            <br></br>
            <span>
              break a shield. So you might need another round to kill the
            </span>
            <br></br>
            <span>Defence Card and break a desired shield.</span>
            <br></br>
            <br></br>
            <span>A Defence Card might also have some AP to decrease the</span>
            <br></br>
            <span>Attack Card’s HP when it attacks.</span>
            <br></br>
            <br></br>
            <span>Only 2 Attack Cards are allowed to attack per round</span>
            <br></br>
            <span>(Exception Cards : a broken shield, Antigrav)</span>
            <br></br>
            <br></br>
            <span>
              Likewise your opponent tries to attack your Defence Line to
            </span>
            <br></br>
            <span>get to your shield after your attack ends.</span>
            <br></br>
            <br></br>
            <span>Used Spells and dead Heroes go into the graveyard.</span>
            <br></br>
            <br></br>
            <span>
              It’s your call on which hero you want to place in your Defence
              Line and which hero do you want to place in your 
            </span>
            <span>Attack Line.</span>
            <br></br>
            <br></br>
            <span>
              There are only 5 slots in the Attack Line and Defence Line, 
            </span>
            <span>
              just like the shields. So you can place only that many cards, 
            </span>
            <span>including Spell Cards.</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="home-block-footer"></div>
    </div>
  )
}

export default Home
